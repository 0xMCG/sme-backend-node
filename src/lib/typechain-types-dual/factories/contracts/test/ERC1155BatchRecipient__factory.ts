/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC1155BatchRecipient,
  ERC1155BatchRecipientInterface,
} from "../../../contracts/test/ERC1155BatchRecipient";

const _abi = [
  {
    inputs: [],
    name: "UnexpectedBatchData",
    type: "error",
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
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
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
];

const _bytecode =
  "0x608080604052346100165761020c908161001c8239f35b600080fdfe6080806040526004908136101561001557600080fd5b6000803560e01c63bc197c811461002b57600080fd5b346101c25760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101c25773ffffffffffffffffffffffffffffffffffffffff8335818116036101c557602435908116036101c25767ffffffffffffffff604435818111610192576100a490369086016101c9565b5050606435818111610192576100bd90369086016101c9565b50506084358181116101925736602382011215610192578085013591808311610196577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f86011601168501908582109082111761019657604052818452366024838301011161019257908060246020930183860137830101525161016a5760206040517fbc197c81000000000000000000000000000000000000000000000000000000008152f35b6040517fef402e38000000000000000000000000000000000000000000000000000000008152fd5b8280fd5b6024846041887f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b80fd5b5080fd5b9181601f840112156101fa5782359167ffffffffffffffff83116101fa576020808501948460051b0101116101fa57565b600080fdfea164736f6c6343000811000a";

type ERC1155BatchRecipientConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155BatchRecipientConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155BatchRecipient__factory extends ContractFactory {
  constructor(...args: ERC1155BatchRecipientConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155BatchRecipient> {
    return super.deploy(overrides || {}) as Promise<ERC1155BatchRecipient>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC1155BatchRecipient {
    return super.attach(address) as ERC1155BatchRecipient;
  }
  override connect(signer: Signer): ERC1155BatchRecipient__factory {
    return super.connect(signer) as ERC1155BatchRecipient__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155BatchRecipientInterface {
    return new utils.Interface(_abi) as ERC1155BatchRecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155BatchRecipient {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155BatchRecipient;
  }
}
