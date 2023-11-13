/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IVRFInterface,
  IVRFInterfaceInterface,
} from "../../../../../seaport-core/src/lib/Consideration.sol/IVRFInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "requestRandomWords",
    outputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IVRFInterface__factory {
  static readonly abi = _abi;
  static createInterface(): IVRFInterfaceInterface {
    return new utils.Interface(_abi) as IVRFInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVRFInterface {
    return new Contract(address, _abi, signerOrProvider) as IVRFInterface;
  }
}
