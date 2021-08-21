/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EchidnaL1NovaExecutionManager,
  EchidnaL1NovaExecutionManagerInterface,
} from "../EchidnaL1NovaExecutionManager";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "l1Calldata",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "exec_should_not_affect_currentExecHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "calldataByteGasEstimate",
            type: "uint32",
          },
          {
            internalType: "uint96",
            name: "missingGasEstimate",
            type: "uint96",
          },
          {
            internalType: "uint96",
            name: "strategyCallGasBuffer",
            type: "uint96",
          },
          {
            internalType: "uint32",
            name: "execCompletedMessageGasLimit",
            type: "uint32",
          },
        ],
        internalType: "struct L1_NovaExecutionManager.GasConfig",
        name: "newGasConfig",
        type: "tuple",
      },
    ],
    name: "should_always_be_able_to_update_gas_config",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFromRelayer_should_always_be_not_executable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161001d906100b4565b604051809103906000f080158015610039573d6000803e3d6000fd5b50600180546001600160a01b0319166001600160a01b039283161780825560405191921690610067906100c1565b6100729291906100ce565b604051809103906000f08015801561008e573d6000803e3d6000fd5b50600080546001600160a01b0319166001600160a01b03929092169190911790556100e8565b6104d380610cc583390190565b6124ed8061119883390190565b6001600160a01b0392831681529116602082015260400190565b610bce806100f76000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063294bb8a8146100465780633698ab9f1461005b578063f28470ea1461006e575b600080fd5b610059610054366004610789565b610081565b005b61005961006936600461072f565b6103de565b61005961007c366004610772565b610512565b6000546040517f59f7cdfd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909116906359f7cdfd906100e1908990899089908990899089906004016109c8565b600060405180830381600087803b1580156100fb57600080fd5b505af115801561010f573d6000803e3d6000fd5b5050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166371de9c106040518163ffffffff1660e01b815260040160206040518083038186803b15801561017957600080fd5b505afa15801561018d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b1919061075a565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663eb714e196040518163ffffffff1660e01b815260040160206040518083038186803b15801561021757600080fd5b505afa15801561022b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024f919061075a565b1461025657fe5b600054604080517f41cd04200000000000000000000000000000000000000000000000000000000081529051309273ffffffffffffffffffffffffffffffffffffffff16916341cd0420916004808301926020929190829003018186803b1580156102c057600080fd5b505afa1580156102d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f8919061070c565b73ffffffffffffffffffffffffffffffffffffffff161461031557fe5b600054604080517f86b28c3c000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff8089169316916386b28c3c916004808301926020929190829003018186803b15801561038157600080fd5b505afa158015610395573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b9919061070c565b73ffffffffffffffffffffffffffffffffffffffff16146103d657fe5b505050505050565b6000546040517f3996e60a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690633996e60a90610436908590859060040161092e565b600060405180830381600087803b15801561045057600080fd5b505af1925050508015610461575060015b61050c5761046d610a8e565b8061047857506104fd565b60008160405160200161048b9190610912565b6040516020818303038152906040528051906020012090507f12f23d7716dd1a944157e91db7e5466415b0ae89675083fdd628b7311c6298748114806104f057507f0da2cef0baa299da43eb01d5677caedf73b609d06e98f70950db32c90f012a3281145b6104f657fe5b5050610507565b3d6000803e3d6000fd5b61050e565bfe5b5050565b6000546040517f6f38b1f700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911690636f38b1f790610568908490600401610954565b600060405180830381600087803b15801561058257600080fd5b505af1158015610596573d6000803e3d6000fd5b5050505060008060008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663490a44326040518163ffffffff1660e01b815260040160806040518083038186803b15801561060657600080fd5b505afa15801561061a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063e9190610898565b9296509094509250905063ffffffff841661065c602087018761087c565b63ffffffff161461066957fe5b6bffffffffffffffffffffffff831661068860408701602088016108f6565b6bffffffffffffffffffffffff161461069d57fe5b6bffffffffffffffffffffffff82166106bc60608701604088016108f6565b6bffffffffffffffffffffffff16146106d157fe5b63ffffffff81166106e8608087016060880161087c565b63ffffffff16146106f557fe5b5050505050565b803561070781610b70565b919050565b60006020828403121561071d578081fd5b815161072881610b70565b9392505050565b60008060408385031215610741578081fd5b823561074c81610b70565b946020939093013593505050565b60006020828403121561076b578081fd5b5051919050565b600060808284031215610783578081fd5b50919050565b60008060008060008060c087890312156107a1578182fd5b863595506020808801356107b481610b70565b9550604088013567ffffffffffffffff808211156107d0578485fd5b818a0191508a601f8301126107e3578485fd5b8135818111156107ef57fe5b604051847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116820101818110848211171561082a57fe5b60405281815283820185018d1015610840578687fd5b8185850186830137908101909301859052509094505060608701359250610869608088016106fc565b915060a087013590509295509295509295565b60006020828403121561088d578081fd5b813561072881610b95565b600080600080608085870312156108ad578384fd5b84516108b881610b95565b60208601519094506108c981610ba7565b60408601519093506108da81610ba7565b60608601519092506108eb81610b95565b939692955090935050565b600060208284031215610907578081fd5b813561072881610ba7565b60008251610924818460208701610a58565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b60808101823561096381610b95565b63ffffffff908116835260208401359061097c82610ba7565b6bffffffffffffffffffffffff91821660208501526040850135916109a083610ba7565b9190911660408401526060840135906109b882610b95565b8082166060850152505092915050565b600087825273ffffffffffffffffffffffffffffffffffffffff808816602084015260c0604084015286518060c0850152610a0a8160e0860160208b01610a58565b60e07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250508560608401528085166080840152508260a0830152979650505050505050565b60005b83811015610a73578181015183820152602001610a5b565b83811115610a82576000848401525b50505050565b60e01c90565b600060443d1015610a9e57610b6d565b600481823e6308c379a0610ab28251610a88565b14610abc57610b6d565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3d016004823e80513d67ffffffffffffffff8160248401118184111715610b0a5750505050610b6d565b82840192508251915080821115610b245750505050610b6d565b503d83016020828401011115610b3c57505050610b6d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01681016020016040529150505b90565b73ffffffffffffffffffffffffffffffffffffffff81168114610b9257600080fd5b50565b63ffffffff81168114610b9257600080fd5b6bffffffffffffffffffffffff81168114610b9257600080fdfea164736f6c6343000706000a608060405234801561001057600080fd5b506104b3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633dbb202b146100465780636e296e4514610113578063e542f64014610144575b600080fd5b6101116004803603606081101561005c57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516919081019060408101602082013564010000000081111561009457600080fd5b8201836020820111156100a657600080fd5b803590602001918460018302840111640100000000831117156100c857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050903563ffffffff1691506101e79050565b005b61011b6101ec565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101116004803603606081101561015a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516919081019060408101602082013564010000000081111561019257600080fd5b8201836020820111156101a457600080fd5b803590602001918460018302840111640100000000831117156101c657600080fd5b91935091503573ffffffffffffffffffffffffffffffffffffffff16610208565b505050565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116919091178255604051829187169086908690808383808284376040519201945060009350909150508083038183865af19150503d80600081146102a5576040519150601f19603f3d011682016040523d82523d6000602084013e6102aa565b606091505b50600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690559092509050816102e28261038e565b90610385576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561034a578181015183820152602001610332565b50505050905090810190601f1680156103775780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505050505050565b60606044825110156103d4575060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c7900000060208201526104a1565b60048201805190926024019060208110156103ee57600080fd5b810190808051604051939291908464010000000082111561040e57600080fd5b90830190602082018581111561042357600080fd5b825164010000000081118282018810171561043d57600080fd5b82525081516020918201929091019080838360005b8381101561046a578181015183820152602001610452565b50505050905090810190601f1680156104975780820380516001836020036101000a031916815260200191505b5060405250505090505b91905056fea164736f6c6343000706000a610160604052600d60e081905262030d4061010052611388610120526216e360610140526002805463ffffffff1916909117600160201b600160801b03191666030d400000000017600160801b600160e01b03191661027160831b176001600160e01b031661b71b60e51b1790557ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef6006553480156200009e57600080fd5b50604051620024ed380380620024ed833981016040819052620000c19162000170565b600180546001600160a01b031916339081179091556040518291907f4ffd725fc4a22075e9ec71c59edf9c38cdeb588a91b24fc5b61388c5be41282b90600090a26001600160601b0319606091821b81166080529083901b1660a0526040516200012b9062000162565b604051809103906000f08015801562000148573d6000803e3d6000fd5b5060601b6001600160601b03191660c05250620001c79050565b61037e806200216f83390190565b6000806040838503121562000183578182fd5b82516200019081620001ae565b6020840151909250620001a381620001ae565b809150509250929050565b6001600160a01b0381168114620001c457600080fd5b50565b60805160601c60a05160601c60c05160601c611f5962000216600039806107ef5280610bb0528061140e5250806102af5280610fcc5250806105a15280610b2a5280610f905250611f596000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c806359f7cdfd116100cd5780638da5cb5b11610081578063bf7e214f11610066578063bf7e214f14610295578063eb714e191461029d578063f705441f146102a55761016c565b80638da5cb5b14610285578063b7daba361461028d5761016c565b806371de9c10116100b257806371de9c10146102625780637a9e5e4b1461026a57806386b28c3c1461027d5761016c565b806359f7cdfd1461023c5780636f38b1f71461024f5761016c565b8063380174e01161012457806341cd04201161010957806341cd042014610207578063490a44321461020f57806351211924146102275761016c565b8063380174e0146101df5780633996e60a146101f45761016c565b8063148db7b511610155578063148db7b5146101a457806316be836c146101b75780631e7660a0146101bf5761016c565b80630d1fdd341461017157806313af40351461018f575b600080fd5b6101796102ad565b604051610186919061199c565b60405180910390f35b6101a261019d3660046117d8565b6102d1565b005b6101a26101b236600461183f565b6103df565b61017961059f565b6101d26101cd3660046117d8565b6105c3565b6040516101869190611aa4565b6101e76105d8565b6040516101869190611ab8565b6101a26102023660046117f4565b610611565b6101796108ef565b61021761090b565b6040516101869493929190611d65565b61022f61096b565b6040516101869190611a68565b6101a261024a366004611875565b610a2a565b6101a261025d36600461185e565b611147565b61022f61121f565b6101a26102783660046117d8565b611243565b61017961134d565b610179611369565b6101a2611385565b6101796113ea565b61022f611406565b61017961140c565b7f000000000000000000000000000000000000000000000000000000000000000081565b6102ff336000357fffffffff0000000000000000000000000000000000000000000000000000000016611430565b61036a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691909117918290556040519116907f4ffd725fc4a22075e9ec71c59edf9c38cdeb588a91b24fc5b61388c5be41282b90600090a250565b61040d336000357fffffffff0000000000000000000000000000000000000000000000000000000016611430565b61047857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b3360009081526003602052604081205460ff16600281111561049657fe5b146104d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611ba7565b60405180910390fd5b60008160028111156104e457fe5b141561051c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611c83565b33600090815260036020526040902080548291907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600183600281111561056057fe5b02179055507f0d34da4cb8cb7b390f99942c84e2a40502ce8af0740de2790ab346d69b486b8e816040516105949190611aa4565b60405180910390a150565b7f000000000000000000000000000000000000000000000000000000000000000081565b60036020526000908152604090205460ff1681565b6040518060400160405280601681526020017f5f5f4e4f56415f5f484152445f5f5245564552545f5f0000000000000000000081525081565b61063f336000357fffffffff0000000000000000000000000000000000000000000000000000000016611430565b6106aa57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b60055473ffffffffffffffffffffffffffffffffffffffff1633146106fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611b02565b6006547ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef1415610757576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611b39565b60023360009081526003602052604090205460ff16600281111561077757fe5b146107ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611c15565b600480546040517f178c477500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081169363178c47759361082a9388938893921691339101611a30565b602060405180830381600087803b15801561084457600080fd5b505af1158015610858573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061087c919061181f565b6040518060400160405280601681526020017f5f5f4e4f56415f5f484152445f5f5245564552545f5f00000000000000000000815250906108ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd9190611ab8565b505050565b60045473ffffffffffffffffffffffffffffffffffffffff1681565b60025463ffffffff808216916bffffffffffffffffffffffff64010000000082048116927001000000000000000000000000000000008304909116917c010000000000000000000000000000000000000000000000000000000090041684565b604080518082018252601681527f5f5f4e4f56415f5f484152445f5f5245564552545f5f00000000000000000000602082015290516109ad9190602401611ab8565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f08c379a0000000000000000000000000000000000000000000000000000000001781529051902081565b60005a905081421115610a69576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611c4c565b610a97336000357fffffffff0000000000000000000000000000000000000000000000000000000016611430565b610acd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611b70565b6006547ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef14610b28576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611acb565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161415610bae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611cba565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff161415610c34576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611cba565b73ffffffffffffffffffffffffffffffffffffffff8716301415610c84576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611cba565b6000610ccb898989898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152503a92508b915061157f9050565b6006819055600480547fffffffffffffffffffffffff000000000000000000000000000000000000000090811633179091556005805473ffffffffffffffffffffffffffffffffffffffff8c169216821790559091506000908190610d895a60025490870390610d83906bffffffffffffffffffffffff64010000000082048116918391700100000000000000000000000000000000820416908290610d7c90369063ffffffff9081169061166316565b8f906116dd565b906116dd565b8a8a604051610d9992919061198c565b60006040518083038160008787f1925050503d8060008114610dd7576040519150601f19603f3d011682016040523d82523d6000602084013e610ddc565b606091505b50915091508180610eb25750604080518082018252601681527f5f5f4e4f56415f5f484152445f5f5245564552545f5f0000000000000000000060208201529051610e2a9190602401611ab8565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f08c379a000000000000000000000000000000000000000000000000000000000178152915190912082519183019190912014155b80610ef15750600273ffffffffffffffffffffffffffffffffffffffff8b1660009081526003602052604090205460ff166002811115610eee57fe5b14155b610f27576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cd90611bde565b7ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef6006556000610f8c5a60025490870390610f86906bffffffffffffffffffffffff640100000000820416908290369063ffffffff9081169061166316565b90611754565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633dbb202b7f0000000000000000000000000000000000000000000000000000000000000000639d21cd1560e01b878b88158760405160240161100b9493929190611a71565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00181529181526020820180517fffffffff000000000000000000000000000000000000000000000000000000009485167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff909116179052600254905160e086901b90931683526110ca93927c010000000000000000000000000000000000000000000000000000000090910463ffffffff16906004016119eb565b600060405180830381600087803b1580156110e457600080fd5b505af11580156110f8573d6000803e3d6000fd5b50505050837fd118217a540bf32db22ebd89e392054a9d0f5e30e6bfa753a87baa44ec0a60c633851584604051611131939291906119bd565b60405180910390a2505050505050505050505050565b611175336000357fffffffff0000000000000000000000000000000000000000000000000000000016611430565b6111e057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b8060026111ed8282611d9a565b9050507fa604db6220233356717be4698af73cbc2b0bae243eead45a30704c212433aee0816040516105949190611cf1565b7ffeedfacecafebeeffeedfacecafebeeffeedfacecafebeeffeedfacecafebeef81565b611271336000357fffffffff0000000000000000000000000000000000000000000000000000000016611430565b6112dc57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff838116919091178083556040519116917f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad91a250565b60055473ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b604080518082018252601681527f5f5f4e4f56415f5f484152445f5f5245564552545f5f00000000000000000000602082015290517f08c379a00000000000000000000000000000000000000000000000000000000081526104cd9190600401611ab8565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60065481565b7f000000000000000000000000000000000000000000000000000000000000000081565b600073ffffffffffffffffffffffffffffffffffffffff831630141561145857506001611579565b60015473ffffffffffffffffffffffffffffffffffffffff8481169116141561148357506001611579565b60005473ffffffffffffffffffffffffffffffffffffffff16806114ab576000915050611579565b604080517fb700961300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff86811660048301523060248301527fffffffff000000000000000000000000000000000000000000000000000000008616604483015291519183169163b700961391606480820192602092909190829003018186803b15801561154957600080fd5b505afa15801561155d573d6000803e3d6000fd5b505050506040513d602081101561157357600080fd5b50519150505b92915050565b60008585858585604051602001808681526020018573ffffffffffffffffffffffffffffffffffffffff1660601b815260140184805190602001908083835b602083106115fb57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016115be565b51815160209384036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018019909216911617905292019485525083810192909252506040805180840383018152928101905281519101209998505050505050505050565b60008261167257506000611579565b8282028284828161167f57fe5b04146116d6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611f2c6021913960400191505060405180910390fd5b9392505050565b60008282111561174e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000828201838110156116d657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b80356117d381611eda565b919050565b6000602082840312156117e9578081fd5b81356116d681611eda565b60008060408385031215611806578081fd5b823561181181611eda565b946020939093013593505050565b600060208284031215611830578081fd5b815180151581146116d6578182fd5b600060208284031215611850578081fd5b8135600381106116d6578182fd5b60006080828403121561186f578081fd5b50919050565b600080600080600080600060c0888a03121561188f578283fd5b8735965060208801356118a181611eda565b9550604088013567ffffffffffffffff808211156118bd578485fd5b818a0191508a601f8301126118d0578485fd5b8135818111156118de578586fd5b8b60208285010111156118ef578586fd5b6020830197508096505050506060880135925061190e608089016117c8565b915060a0880135905092959891949750929550565b60008151808452815b818110156119485760208185018101518683018201520161192c565b818111156119595782602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000828483379101908152919050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff9390931683529015156020830152604082015260600190565b600073ffffffffffffffffffffffffffffffffffffffff8516825260606020830152611a1a6060830185611923565b905063ffffffff83166040830152949350505050565b73ffffffffffffffffffffffffffffffffffffffff948516815260208101939093529083166040830152909116606082015260800190565b90815260200190565b93845273ffffffffffffffffffffffffffffffffffffffff92909216602084015215156040830152606082015260800190565b6020810160038310611ab257fe5b91905290565b6000602082526116d66020830184611923565b60208082526011908201527f414c52454144595f455845435554494e47000000000000000000000000000000604082015260600190565b60208082526014908201527f4e4f545f43555252454e545f5354524154454759000000000000000000000000604082015260600190565b60208082526013908201527f4e4f5f4143544956455f455845435554494f4e00000000000000000000000000604082015260600190565b6020808252600c908201527f554e415554484f52495a45440000000000000000000000000000000000000000604082015260600190565b60208082526012908201527f414c52454144595f524547495354455245440000000000000000000000000000604082015260600190565b6020808252600b908201527f484152445f524556455254000000000000000000000000000000000000000000604082015260600190565b60208082526016908201527f554e535550504f525445445f5249534b5f4c4556454c00000000000000000000604082015260600190565b6020808252600d908201527f504153545f444541444c494e4500000000000000000000000000000000000000604082015260600190565b60208082526012908201527f494e56414c49445f5249534b5f4c4556454c0000000000000000000000000000604082015260600190565b6020808252600f908201527f554e534146455f53545241544547590000000000000000000000000000000000604082015260600190565b608081018235611d0081611eff565b63ffffffff9081168352602084013590611d1982611f11565b6bffffffffffffffffffffffff9182166020850152604085013591611d3d83611f11565b919091166040840152606084013590611d5582611eff565b8082166060850152505092915050565b63ffffffff94851681526bffffffffffffffffffffffff93841660208201529190921660408201529116606082015260800190565b8135611da581611eff565b63ffffffff81167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000008354161790508082556020830135611de481611f11565b6fffffffffffffffffffffffff000000008160201b167fffffffffffffffffffffffffffffffff000000000000000000000000ffffffff8316179150508082556040830135611e3281611f11565b7bffffffffffffffffffffffff000000000000000000000000000000008160801b167fffffffff000000000000000000000000ffffffffffffffffffffffffffffffff8316179150508082556060830135611e8c81611eff565b7fffffffff000000000000000000000000000000000000000000000000000000008160e01b167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff831617835550505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611efc57600080fd5b50565b63ffffffff81168114611efc57600080fd5b6bffffffffffffffffffffffff81168114611efc57600080fdfe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a164736f6c6343000706000a60a06040523360601b60805234801561001757600080fd5b5060805160601c6103456100396000398060cd528061031652506103456000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063178c47751461003b5780634719c36114610098575b600080fd5b6100846004803603608081101561005157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013591604082013581169160600135166100c9565b604080519115158252519081900360200190f35b6100a0610314565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16331461016f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f554e415554484f52495a45440000000000000000000000000000000000000000604482015290519081900360640190fd5b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528481166044830152606480830188905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000178152925182516000948594938b169392918291908083835b6020831061024c57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161020f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146102ae576040519150601f19603f3d011682016040523d82523d6000602084013e6102b3565b606091505b5091509150816102c85760009250505061030c565b805115610305578051602014156102fa578080602001905160208110156102ee57600080fd5b5051925061030c915050565b60009250505061030c565b6001925050505b949350505050565b7f00000000000000000000000000000000000000000000000000000000000000008156fea164736f6c6343000706000a";

export class EchidnaL1NovaExecutionManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EchidnaL1NovaExecutionManager> {
    return super.deploy(
      overrides || {}
    ) as Promise<EchidnaL1NovaExecutionManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EchidnaL1NovaExecutionManager {
    return super.attach(address) as EchidnaL1NovaExecutionManager;
  }
  connect(signer: Signer): EchidnaL1NovaExecutionManager__factory {
    return super.connect(signer) as EchidnaL1NovaExecutionManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EchidnaL1NovaExecutionManagerInterface {
    return new utils.Interface(_abi) as EchidnaL1NovaExecutionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EchidnaL1NovaExecutionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EchidnaL1NovaExecutionManager;
  }
}
