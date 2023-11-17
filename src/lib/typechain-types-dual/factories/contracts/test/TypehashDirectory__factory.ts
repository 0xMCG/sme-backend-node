/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TypehashDirectory,
  TypehashDirectoryInterface,
} from "../../../contracts/test/TypehashDirectory";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x60406080815234610081576100156103a0604052565b6018806080526103003660a03761002a6101fe565b61003261027d565b9280519160005b84811061004c5760fe608052610301609ff35b8061005860019261011f565b6003028352610067878461016e565b60208151910120610077826101d5565b5284845201610039565b600080fd5b50634e487b7160e01b600052604160045260246000fd5b60a081019081106001600160401b038211176100b857604052565b6100c0610086565b604052565b60c081019081106001600160401b038211176100b857604052565b61010081019081106001600160401b038211176100b857604052565b601f909101601f19168101906001600160401b038211908210176100b857604052565b906001820180921161012d57565b634e487b7160e01b600052601160045260246000fd5b9081519160005b83811061015b575050016000815290565b806020809284010151818501520161014a565b6101d3906101c56101b2949360066040519687947f42756c6b4f72646572284f72646572436f6d706f6e656e74730000000000000060208701526039860190610143565b6520747265652960d01b81520190610143565b03601f1981018452836100fc565b565b6080518110156101e85760051b60a00190565b634e487b7160e01b600052603260045260246000fd5b604051608081016001600160401b0381118282101761024b575b6040526048815260208101606036823760688201905b81811061023a57505090565b625b325d60e81b815260030161022e565b610253610086565b610218565b6101c561027794936102776101d3946040519788956020870190610143565b90610143565b6104e56040805161028d8161009d565b606a81527f4f666665724974656d2875696e7438206974656d547970652c6164647265737360208201527f20746f6b656e2c75696e74323536206964656e7469666965724f724372697465828201527f7269612c75696e74323536207374617274416d6f756e742c75696e7432353620606082015269656e64416d6f756e742960b01b60808201528151610320816100c5565b608481527f436f6e73696465726174696f6e4974656d2875696e7438206974656d5479706560208201527f2c6164647265737320746f6b656e2c75696e74323536206964656e7469666965838201527f724f7243726974657269612c75696e74323536207374617274416d6f756e742c60608201527f75696e7432353620656e64416d6f756e742c6164647265737320726563697069608082015263656e742960e01b60a08201527f61646472657373207a6f6e652c4f666665724974656d5b5d206f666665722c438351936103f5856100e0565b60d485527f4f72646572436f6d706f6e656e74732861646472657373206f6666657265722c60208601528401527f6f6e73696465726174696f6e4974656d5b5d20636f6e73696465726174696f6e60608401527f2c75696e7438206f72646572547970652c75696e74323536207374617274546960808401527f6d652c75696e7432353620656e6454696d652c62797465733332207a6f6e654860a08401527f6173682c75696e743235362073616c742c6279746573333220636f6e6475697460c08401527f4b65792c75696e7432353620636f756e7465722900000000000000000000000060e0840152610258565b9056fe";

type TypehashDirectoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TypehashDirectoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TypehashDirectory__factory extends ContractFactory {
  constructor(...args: TypehashDirectoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TypehashDirectory> {
    return super.deploy(overrides || {}) as Promise<TypehashDirectory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TypehashDirectory {
    return super.attach(address) as TypehashDirectory;
  }
  override connect(signer: Signer): TypehashDirectory__factory {
    return super.connect(signer) as TypehashDirectory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TypehashDirectoryInterface {
    return new utils.Interface(_abi) as TypehashDirectoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TypehashDirectory {
    return new Contract(address, _abi, signerOrProvider) as TypehashDirectory;
  }
}