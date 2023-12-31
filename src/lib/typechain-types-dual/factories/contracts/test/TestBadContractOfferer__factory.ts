/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestBadContractOfferer,
  TestBadContractOffererInterface,
} from "../../../contracts/test/TestBadContractOfferer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_seaport",
        type: "address",
      },
      {
        internalType: "contract ERC721Interface",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "IntentionalRevert",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct SpentItem[]",
        name: "b",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct SpentItem[]",
        name: "c",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "d",
        type: "bytes",
      },
    ],
    name: "generateOrder",
    outputs: [
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct SpentItem[]",
        name: "offer",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address",
          },
        ],
        internalType: "struct ReceivedItem[]",
        name: "consideration",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getSeaportMetadata",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "metadata",
            type: "bytes",
          },
        ],
        internalType: "struct Schema[]",
        name: "schemas",
        type: "tuple[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct SpentItem[]",
        name: "minimumReceived",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct SpentItem[]",
        name: "maximumSpent",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "previewOrder",
    outputs: [
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct SpentItem[]",
        name: "offer",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address",
          },
        ],
        internalType: "struct ReceivedItem[]",
        name: "consideration",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct SpentItem[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "enum ItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "address payable",
            name: "recipient",
            type: "address",
          },
        ],
        internalType: "struct ReceivedItem[]",
        name: "",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "ratifyOrder",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a0346100fc57610cf7906001600160401b03601f38849003908101601f19168301908282118483101761010157808491604096879485528339810103126100fc5781516001600160a01b03808216939091908482036100fc57602001519182168092036100fc57608052600080546001600160a01b0319168217815592813b156100f857839291604484928751968793849263a22cb46560e01b84526004840152600160248401525af180156100ee576100c9575b8351610bdf90816101188239608051815050f35b82116100da575081523880806100b5565b634e487b7160e01b81526041600452602490fd5b84513d84823e3d90fd5b8380fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001b575b361561001957600080fd5b005b6000803560e01c90816301ffc9a714610082575080632e778efc14610079578063582d42411461007057806398919765146100675763f4dd92ce0361000e57610062610649565b61000e565b50610062610587565b506100626104d6565b50610062610213565b3461010d5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010d576004357fffffffff000000000000000000000000000000000000000000000000000000008116809103610109577f1be900b1000000000000000000000000000000000000000000000000000000001460805260206080f35b5080fd5b80fd5b919082519283825260005b84811061015a5750507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006020809697860101520116010190565b60208183018101518483018201520161011b565b61018060409283835283830190610110565b906020908181840391015283519182815281810182808560051b8401019601946000925b8584106101b5575050505050505090565b909192939495968580610202837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0866001960301885286838d518051845201519181858201520190610110565b9901940194019295949391906101a4565b50346102c6576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010d57604080519161025283610834565b60018352805b6020908181101561028557835160209261027182610834565b848252606081830152828701015201610258565b50505061053961029483610a02565b515261029e610b62565b60206102a984610a02565b5101526102c26102b7610b99565b91519283928361016e565b0390f35b600080fd5b6004359073ffffffffffffffffffffffffffffffffffffffff821682036102c657565b6024359073ffffffffffffffffffffffffffffffffffffffff821682036102c657565b359073ffffffffffffffffffffffffffffffffffffffff821682036102c657565b9181601f840112156102c65782359167ffffffffffffffff83116102c6576020808501948460071b0101116102c657565b9181601f840112156102c65782359167ffffffffffffffff83116102c657602083818601950101116102c657565b90600682101561039e5752565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b906040908183019180845281518093526060938481019360208094019060005b81811061048057505050828185039101528180865194858152019501936000915b84831061041e5750505050505090565b9091929394958460a06001928951610437828251610391565b8084015173ffffffffffffffffffffffffffffffffffffffff9081168386015286820151878401528782015188840152608091820151169082015201970195949301919061040e565b909196939495866080600192878b5161049a838251610391565b8085015173ffffffffffffffffffffffffffffffffffffffff16838601528a8101518b84015201518882015296999601979695019291016103ed565b50346102c65760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102c65761050e6102cb565b506105176102ee565b5067ffffffffffffffff6044358181116102c657610539903690600401610332565b906064358381116102c657610552903690600401610332565b9290916084359485116102c657610570610577953690600401610363565b5050610a1c565b906102c2604051928392836103cd565b50346102c65760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102c6576105bf6102cb565b5067ffffffffffffffff6024358181116102c6576105e1903690600401610332565b906044358381116102c6576105fa903690600401610332565b9290916064359485116102c657610570610577953690600401610363565b9181601f840112156102c65782359167ffffffffffffffff83116102c6576020808501948460051b0101116102c657565b50346102c65760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126102c65767ffffffffffffffff6004358181116102c65761069a903690600401610332565b50506024358181116102c657366023820112156102c6578060040135908282116102c65760249060a03693020101116102c6576044358181116102c6576106e5903690600401610363565b50506064359081116102c6576106ff903690600401610618565b50506040517ff4dd92ce000000000000000000000000000000000000000000000000000000008152602090f35b507f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90156107655790565b61076d61072c565b90565b359060068210156102c657565b6020808252808201849052604091820193916000915b8383106107a257505050505090565b9091929394806107bc6001926107b789610770565b610391565b73ffffffffffffffffffffffffffffffffffffffff6107dc848901610311565b1681840152868401358482015260608088013590820152608090810196019493019190610793565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810190811067ffffffffffffffff82111761085057604052565b610858610804565b604052565b6080810190811067ffffffffffffffff82111761085057604052565b60a0810190811067ffffffffffffffff82111761085057604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761085057604052565b604051906108e382610879565b565b60209067ffffffffffffffff81116108ff575b60051b0190565b610907610804565b6108f8565b929192610918826108e5565b60409261092784519283610895565b819581835260208093019160071b8401938185116102c657915b84831061095057505050505050565b6080838303126102c6578360809187516109698161085d565b61097286610770565b815261097f838701610311565b83820152888601358982015260608087013590820152815201920191610941565b6040908151916109af83610834565b60018352829160005b6020808210156109fa578351602092916109d182610879565b6000825260008183015260008683015260006060830152600060808301528288010152016109b8565b505091925050565b602090805115610a10570190565b610a1861072c565b0190565b9093929193606094604093600185610a34858761075c565b013503610a8e57505090610a4991369161090c565b906064610a546109a0565b946000610a5f6108d6565b8181526020810182905293840152820152306080820152610a7f84610a02565b52610a8983610a02565b509190565b91600285610a9e8387959761075c565b013503610aa757005b600385610ab4838561075c565b013503610ae457600485517f67c07bc2000000000000000000000000000000000000000000000000000000008152fd5b610b4592610b5192610b0092875193849160208301938461077d565b0392610b327fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe094858101835282610895565b519020955193849160208301968761077d565b03908101835282610895565b519020906000526020526101006000f35b6040516020810181811067ffffffffffffffff821117610b8c575b60405260008152906000368137565b610b94610804565b610b7d565b60405190610ba682610834565b601682527f54657374426164436f6e74726163744f66666572657200000000000000000000602083015256fea164736f6c6343000811000a";

type TestBadContractOffererConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestBadContractOffererConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestBadContractOfferer__factory extends ContractFactory {
  constructor(...args: TestBadContractOffererConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _seaport: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestBadContractOfferer> {
    return super.deploy(
      _seaport,
      _token,
      overrides || {}
    ) as Promise<TestBadContractOfferer>;
  }
  override getDeployTransaction(
    _seaport: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_seaport, _token, overrides || {});
  }
  override attach(address: string): TestBadContractOfferer {
    return super.attach(address) as TestBadContractOfferer;
  }
  override connect(signer: Signer): TestBadContractOfferer__factory {
    return super.connect(signer) as TestBadContractOfferer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestBadContractOffererInterface {
    return new utils.Interface(_abi) as TestBadContractOffererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestBadContractOfferer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestBadContractOfferer;
  }
}
