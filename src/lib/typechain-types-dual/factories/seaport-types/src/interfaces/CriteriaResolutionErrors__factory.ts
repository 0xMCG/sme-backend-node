/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  CriteriaResolutionErrors,
  CriteriaResolutionErrorsInterface,
} from "../../../../seaport-types/src/interfaces/CriteriaResolutionErrors";

const _abi = [
  {
    inputs: [],
    name: "ConsiderationCriteriaResolverOutOfRange",
    type: "error",
  },
  {
    inputs: [],
    name: "CriteriaNotEnabledForItem",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidProof",
    type: "error",
  },
  {
    inputs: [],
    name: "OfferCriteriaResolverOutOfRange",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum Side",
        name: "side",
        type: "uint8",
      },
    ],
    name: "OrderCriteriaResolverOutOfRange",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "considerationIndex",
        type: "uint256",
      },
    ],
    name: "UnresolvedConsiderationCriteria",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orderIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "offerIndex",
        type: "uint256",
      },
    ],
    name: "UnresolvedOfferCriteria",
    type: "error",
  },
] as const;

export class CriteriaResolutionErrors__factory {
  static readonly abi = _abi;
  static createInterface(): CriteriaResolutionErrorsInterface {
    return new utils.Interface(_abi) as CriteriaResolutionErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CriteriaResolutionErrors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CriteriaResolutionErrors;
  }
}
