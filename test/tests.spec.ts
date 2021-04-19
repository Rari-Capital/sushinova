import chai from "chai";
import chaiAsPromised from "chai-as-promised";

import { getContractFactory } from "@eth-optimism/contracts";

import { Watcher } from "@eth-optimism/core-utils";
import { L2NovaRegistry__factory, L2NovaRegistry, IERC20 } from "../typechain";
import {
  createFactory,
  createOVMFactory,
  createTestWallet,
  wait,
  waitForL1ToL2Tx,
} from "../utils/testUtils";
import { ethers } from "hardhat";
import { L1NovaExecutionManager } from "../typechain/L1NovaExecutionManager";
import { L1NovaExecutionManager__factory } from "../typechain/factories/L1NovaExecutionManager__factory";

chai.use(chaiAsPromised);
chai.should();

function computeExecHash({
  nonce,
  strategy,
  calldata,
  gasPrice,
}: {
  nonce: number;
  strategy: string;
  calldata: string;
  gasPrice: number;
}) {
  return ethers.utils.solidityKeccak256(
    ["uint72", "address", "bytes", "uint256"],
    [nonce, strategy, calldata, gasPrice]
  );
}

describe("Nova", function () {
  const l1Wallet = createTestWallet("http://localhost:9545");
  const l2Wallet = createTestWallet("http://localhost:8545");

  // OVM contracts:
  // TODO: Use typechain defs once they're added to `@eth-optimism/contracts`
  const OVM_L1ETHGateway = getContractFactory("OVM_L1ETHGateway")
    .connect(l1Wallet)
    .attach("0x998abeb3e57409262ae5b751f60747921b33613e");

  const OVM_ETH = getContractFactory("OVM_ETH")
    .connect(l2Wallet)
    .attach("0x4200000000000000000000000000000000000006") as IERC20;

  // Cross layer watcher:
  const watcher = new Watcher({
    l1: {
      provider: l1Wallet.provider,
      messengerAddress: "0x59b670e9fA9D0A427751Af201D676719a970857b",
    },
    l2: {
      provider: l2Wallet.provider,
      messengerAddress: "0x4200000000000000000000000000000000000007",
    },
  });

  // Nova specific contracts:
  let l1_NovaExecutionManager: L1NovaExecutionManager;
  let l2_NovaRegistry: L2NovaRegistry;

  before(async () => {
    // Deposit ETH to our L2 wallet:
    await waitForL1ToL2Tx(
      OVM_L1ETHGateway.connect(l1Wallet).depositTo(l2Wallet.address, {
        value: ethers.utils.parseEther("5"),
      }),
      watcher
    );

    // Deploy execution manager on L1.
    l1_NovaExecutionManager = await createFactory<L1NovaExecutionManager__factory>(
      "L1_NovaExecutionManager"
    )
      .connect(l1Wallet)
      .deploy(watcher.l1.messengerAddress);

    // Deploy registry on L2.
    l2_NovaRegistry = await createOVMFactory<L2NovaRegistry__factory>(
      "L2_NovaRegistry"
    )
      .connect(l2Wallet)
      .deploy(
        l1_NovaExecutionManager.address,
        "0x4200000000000000000000000000000000000006",
        "0x4200000000000000000000000000000000000007"
      );

    // Tell the execution manager about the registry's address on L2.
    await wait(l1_NovaExecutionManager.init(l2_NovaRegistry.address));
  });

  describe("L2_NovaRegistry", async function () {
    describe("requestExec", async function () {
      it("should allow a valid request", async function () {
        // Approve 100 wei as gas for the first request.
        await wait(OVM_ETH.approve(l2_NovaRegistry.address, 100));

        // This will not revert because we have approved just enough wei.
        await l2_NovaRegistry
          .connect(l2Wallet)
          .requestExec(
            "0x0000000000000000000000000000000000000000",
            "0x00",
            10,
            10,
            [],
            []
          )
          .should.emit(l2_NovaRegistry, "Request")
          .withArgs(
            computeExecHash({
              nonce: 1,
              strategy: "0x0000000000000000000000000000000000000000",
              calldata: "0x00",
              gasPrice: 10,
            }),
            "0x0000000000000000000000000000000000000000"
          );

        // Ensure the registry transferred in the ETH.
        await OVM_ETH.balanceOf(
          l2_NovaRegistry.address
        ).should.eventually.equal(100);
      });

      it("should revert if not enough wei is approved to pay for gas", async function () {
        // This should revert as the 100 wei was already taken by the previous request.
        await l2_NovaRegistry
          .connect(l2Wallet)
          .requestExec(
            "0x0000000000000000000000000000000000000000",
            "0x00",
            10,
            10,
            [],
            []
          ).should.be.reverted;
      });
    });
  });

  describe("L1_NovaExecutionManager", async function () {
    it("execCompletedMessageBytesLength should be correct", async function () {
      const execCompletedMessageBytesLength = (
        await l1_NovaExecutionManager.execCompletedMessageBytesLength()
      ).toNumber();

      // Encode a call to execCompleted
      const bytes = l2_NovaRegistry.interface.encodeFunctionData(
        "execCompleted",
        [
          ethers.utils.keccak256("0x00"),
          "0x0000000000000000000000000000000000000000",
          "0x0000000000000000000000000000000000000000",
          0,
          false,
        ]
      );

      // Length of the encoded data in a bytes array.
      const bytesLength = (bytes.length - 2) / 2;

      // The `execCompletedMessageBytesLength` variable should equal the proper bytesLength we just computed.
      execCompletedMessageBytesLength.should.equal(bytesLength);
    });

    describe("exec", async function () {
      it("should properly execute a valid requeset", async function () {});
    });
  });
});
