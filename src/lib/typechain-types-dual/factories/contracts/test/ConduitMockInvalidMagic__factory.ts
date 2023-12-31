/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ConduitMockInvalidMagic,
  ConduitMockInvalidMagicInterface,
} from "../../../contracts/test/ConduitMockInvalidMagic";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
    ],
    name: "ChannelClosed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    name: "ChannelStatusAlreadySet",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidController",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidItemType",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "open",
        type: "bool",
      },
    ],
    name: "ChannelUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ConduitItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
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
        internalType: "struct ConduitTransfer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    name: "execute",
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
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct ConduitBatch1155Transfer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    name: "executeBatch1155",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
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
            internalType: "enum ConduitItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
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
        internalType: "struct ConduitTransfer[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct ConduitBatch1155Transfer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    name: "executeWithBatch1155",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    name: "updateChannel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608080604052346100165761026c908161001c8239f35b600080fdfe60808060405260048036101561001457600080fd5b600091823560e01c9081634ce34aa21461017d57508063899e104c1461010e5780638df25d92146100af5763c4e8fcb51461004e57600080fd5b346100ab5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ab573573ffffffffffffffffffffffffffffffffffffffff8116036100a857602435801515036100a85780f35b80fd5b5080fd5b50346100ab5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ab57803567ffffffffffffffff811161010a57602092916101009136910161022e565b5050604051908152f35b8280fd5b50346100ab5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ab5767ffffffffffffffff81358181116101795761015d90369084016101f8565b505060243590811161010a57602092916101009136910161022e565b8380fd5b905082346100a85760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100a85782359067ffffffffffffffff82116100a857506020926101d1913691016101f8565b50507fabcd0000000000000000000000000000000000000000000000000000000000008152f35b9181601f840112156102295782359167ffffffffffffffff83116102295760208085019460c0850201011161022957565b600080fd5b9181601f840112156102295782359167ffffffffffffffff8311610229576020808501948460051b0101116102295756fea164736f6c6343000811000a";

type ConduitMockInvalidMagicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConduitMockInvalidMagicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConduitMockInvalidMagic__factory extends ContractFactory {
  constructor(...args: ConduitMockInvalidMagicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConduitMockInvalidMagic> {
    return super.deploy(overrides || {}) as Promise<ConduitMockInvalidMagic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ConduitMockInvalidMagic {
    return super.attach(address) as ConduitMockInvalidMagic;
  }
  override connect(signer: Signer): ConduitMockInvalidMagic__factory {
    return super.connect(signer) as ConduitMockInvalidMagic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConduitMockInvalidMagicInterface {
    return new utils.Interface(_abi) as ConduitMockInvalidMagicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConduitMockInvalidMagic {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConduitMockInvalidMagic;
  }
}
