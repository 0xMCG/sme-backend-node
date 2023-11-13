/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestERC1271,
  TestERC1271Interface,
} from "../../../contracts/test/TestERC1271";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "digest",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a03461007157601f6103b238819003918201601f19168301916001600160401b038311848410176100765780849260209460405283398101031261007157516001600160a01b038116810361007157608052604051610325908161008d82396080518181816101e101526102b20152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040526004361015610013575b600080fd5b6000803560e01c9081631626ba7e1461003e5750638da5cb5b1461003657600080fd5b61000e610195565b346101625760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101625767ffffffffffffffff60243581811161015e573660238201121561015e57806004013590828211610151575b604051927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f81601f860116011684019084821090821117610144575b604052818352366024838301011161014057926020826101099493602461013c97018386013783010152600435610212565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681529081906020820190565b0390f35b8380fd5b61014c610165565b6100d7565b610159610165565b610099565b8280fd5b80fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b503461000e5760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e57602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b506040513d6000823e3d90fd5b6020820151906060604084015193015192600093841a927f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821161030957601b8414158061030d575b610309576040805193845260ff94909416602080850191909152938301526060820152828052829060809060015afa156102fc575b73ffffffffffffffffffffffffffffffffffffffff8082511690811561015e577f0000000000000000000000000000000000000000000000000000000000000000160361016257507f1626ba7e0000000000000000000000000000000000000000000000000000000090565b610304610205565b610290565b8480fd5b50601c84141561025b56fea164736f6c6343000811000a";

type TestERC1271ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC1271ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC1271__factory extends ContractFactory {
  constructor(...args: TestERC1271ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestERC1271> {
    return super.deploy(owner_, overrides || {}) as Promise<TestERC1271>;
  }
  override getDeployTransaction(
    owner_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner_, overrides || {});
  }
  override attach(address: string): TestERC1271 {
    return super.attach(address) as TestERC1271;
  }
  override connect(signer: Signer): TestERC1271__factory {
    return super.connect(signer) as TestERC1271__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC1271Interface {
    return new utils.Interface(_abi) as TestERC1271Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC1271 {
    return new Contract(address, _abi, signerOrProvider) as TestERC1271;
  }
}
