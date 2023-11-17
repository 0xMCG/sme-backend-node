/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export type OfferItemStruct = {
  itemType: PromiseOrValue<BigNumberish>;
  token: PromiseOrValue<string>;
  identifierOrCriteria: PromiseOrValue<BigNumberish>;
  startAmount: PromiseOrValue<BigNumberish>;
  endAmount: PromiseOrValue<BigNumberish>;
};

export type OfferItemStructOutput = [
  number,
  string,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  itemType: number;
  token: string;
  identifierOrCriteria: BigNumber;
  startAmount: BigNumber;
  endAmount: BigNumber;
};

export type ConsiderationItemStruct = {
  itemType: PromiseOrValue<BigNumberish>;
  token: PromiseOrValue<string>;
  identifierOrCriteria: PromiseOrValue<BigNumberish>;
  startAmount: PromiseOrValue<BigNumberish>;
  endAmount: PromiseOrValue<BigNumberish>;
  recipient: PromiseOrValue<string>;
};

export type ConsiderationItemStructOutput = [
  number,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  string
] & {
  itemType: number;
  token: string;
  identifierOrCriteria: BigNumber;
  startAmount: BigNumber;
  endAmount: BigNumber;
  recipient: string;
};

export type OrderComponentsStruct = {
  offerer: PromiseOrValue<string>;
  zone: PromiseOrValue<string>;
  offer: OfferItemStruct[];
  consideration: ConsiderationItemStruct[];
  orderType: PromiseOrValue<BigNumberish>;
  startTime: PromiseOrValue<BigNumberish>;
  endTime: PromiseOrValue<BigNumberish>;
  zoneHash: PromiseOrValue<BytesLike>;
  salt: PromiseOrValue<BigNumberish>;
  conduitKey: PromiseOrValue<BytesLike>;
  counter: PromiseOrValue<BigNumberish>;
};

export type OrderComponentsStructOutput = [
  string,
  string,
  OfferItemStructOutput[],
  ConsiderationItemStructOutput[],
  number,
  BigNumber,
  BigNumber,
  string,
  BigNumber,
  string,
  BigNumber
] & {
  offerer: string;
  zone: string;
  offer: OfferItemStructOutput[];
  consideration: ConsiderationItemStructOutput[];
  orderType: number;
  startTime: BigNumber;
  endTime: BigNumber;
  zoneHash: string;
  salt: BigNumber;
  conduitKey: string;
  counter: BigNumber;
};

export type OrderParametersStruct = {
  offerer: PromiseOrValue<string>;
  zone: PromiseOrValue<string>;
  offer: OfferItemStruct[];
  consideration: ConsiderationItemStruct[];
  orderType: PromiseOrValue<BigNumberish>;
  startTime: PromiseOrValue<BigNumberish>;
  endTime: PromiseOrValue<BigNumberish>;
  zoneHash: PromiseOrValue<BytesLike>;
  salt: PromiseOrValue<BigNumberish>;
  conduitKey: PromiseOrValue<BytesLike>;
  totalOriginalConsiderationItems: PromiseOrValue<BigNumberish>;
};

export type OrderParametersStructOutput = [
  string,
  string,
  OfferItemStructOutput[],
  ConsiderationItemStructOutput[],
  number,
  BigNumber,
  BigNumber,
  string,
  BigNumber,
  string,
  BigNumber
] & {
  offerer: string;
  zone: string;
  offer: OfferItemStructOutput[];
  consideration: ConsiderationItemStructOutput[];
  orderType: number;
  startTime: BigNumber;
  endTime: BigNumber;
  zoneHash: string;
  salt: BigNumber;
  conduitKey: string;
  totalOriginalConsiderationItems: BigNumber;
};

export type AdvancedOrderStruct = {
  parameters: OrderParametersStruct;
  numerator: PromiseOrValue<BigNumberish>;
  denominator: PromiseOrValue<BigNumberish>;
  signature: PromiseOrValue<BytesLike>;
  extraData: PromiseOrValue<BytesLike>;
};

export type AdvancedOrderStructOutput = [
  OrderParametersStructOutput,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  parameters: OrderParametersStructOutput;
  numerator: BigNumber;
  denominator: BigNumber;
  signature: string;
  extraData: string;
};

export type FulfillmentComponentStruct = {
  orderIndex: PromiseOrValue<BigNumberish>;
  itemIndex: PromiseOrValue<BigNumberish>;
};

export type FulfillmentComponentStructOutput = [BigNumber, BigNumber] & {
  orderIndex: BigNumber;
  itemIndex: BigNumber;
};

export type FulfillmentStruct = {
  offerComponents: FulfillmentComponentStruct[];
  considerationComponents: FulfillmentComponentStruct[];
};

export type FulfillmentStructOutput = [
  FulfillmentComponentStructOutput[],
  FulfillmentComponentStructOutput[]
] & {
  offerComponents: FulfillmentComponentStructOutput[];
  considerationComponents: FulfillmentComponentStructOutput[];
};

export type OrderProbilityStruct = {
  orderHash: PromiseOrValue<BytesLike>;
  numerator: PromiseOrValue<BigNumberish>;
  denominator: PromiseOrValue<BigNumberish>;
};

export type OrderProbilityStructOutput = [string, BigNumber, BigNumber] & {
  orderHash: string;
  numerator: BigNumber;
  denominator: BigNumber;
};

export type ReceivedItemStruct = {
  itemType: PromiseOrValue<BigNumberish>;
  token: PromiseOrValue<string>;
  identifier: PromiseOrValue<BigNumberish>;
  amount: PromiseOrValue<BigNumberish>;
  recipient: PromiseOrValue<string>;
};

export type ReceivedItemStructOutput = [
  number,
  string,
  BigNumber,
  BigNumber,
  string
] & {
  itemType: number;
  token: string;
  identifier: BigNumber;
  amount: BigNumber;
  recipient: string;
};

export type ExecutionStruct = {
  item: ReceivedItemStruct;
  offerer: PromiseOrValue<string>;
  conduitKey: PromiseOrValue<BytesLike>;
};

export type ExecutionStructOutput = [
  ReceivedItemStructOutput,
  string,
  string
] & { item: ReceivedItemStructOutput; offerer: string; conduitKey: string };

export type OrderStruct = {
  parameters: OrderParametersStruct;
  signature: PromiseOrValue<BytesLike>;
};

export type OrderStructOutput = [OrderParametersStructOutput, string] & {
  parameters: OrderParametersStructOutput;
  signature: string;
};

export interface ConsiderationInterfaceInterface extends utils.Interface {
  functions: {
    "cancel((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256)[])": FunctionFragment;
    "getContractOffererNonce(address)": FunctionFragment;
    "getCounter(address)": FunctionFragment;
    "getOrderHash((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256))": FunctionFragment;
    "getOrderStatus(bytes32)": FunctionFragment;
    "incrementCounter()": FunctionFragment;
    "information()": FunctionFragment;
    "matchOrdersWithRandom(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes)[],((uint256,uint256)[],(uint256,uint256)[])[],uint256,(bytes32,uint256,uint256)[])": FunctionFragment;
    "name()": FunctionFragment;
    "prepare(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes)[],uint256[],address[],uint32)": FunctionFragment;
    "validate(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancel"
      | "getContractOffererNonce"
      | "getCounter"
      | "getOrderHash"
      | "getOrderStatus"
      | "incrementCounter"
      | "information"
      | "matchOrdersWithRandom"
      | "name"
      | "prepare"
      | "validate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancel",
    values: [OrderComponentsStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getContractOffererNonce",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCounter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderHash",
    values: [OrderComponentsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderStatus",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "incrementCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "information",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "matchOrdersWithRandom",
    values: [
      AdvancedOrderStruct[],
      FulfillmentStruct[],
      PromiseOrValue<BigNumberish>,
      OrderProbilityStruct[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "prepare",
    values: [
      AdvancedOrderStruct[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "validate",
    values: [OrderStruct[]]
  ): string;

  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getContractOffererNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCounter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getOrderHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrderStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "incrementCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "information",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "matchOrdersWithRandom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prepare", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;

  events: {};
}

export interface ConsiderationInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ConsiderationInterfaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cancel(
      orders: OrderComponentsStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getContractOffererNonce(
      contractOfferer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    getCounter(
      offerer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { counter: BigNumber }>;

    getOrderHash(
      order: OrderComponentsStruct,
      overrides?: CallOverrides
    ): Promise<[string] & { orderHash: string }>;

    getOrderStatus(
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [boolean, boolean, BigNumber, BigNumber] & {
        isValidated: boolean;
        isCancelled: boolean;
        totalFilled: BigNumber;
        totalSize: BigNumber;
      }
    >;

    incrementCounter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    information(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        version: string;
        domainSeparator: string;
        conduitController: string;
      }
    >;

    matchOrdersWithRandom(
      arg0: AdvancedOrderStruct[],
      arg1: FulfillmentStruct[],
      requestId: PromiseOrValue<BigNumberish>,
      orderProbility: OrderProbilityStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(
      overrides?: CallOverrides
    ): Promise<[string] & { contractName: string }>;

    prepare(
      orders: AdvancedOrderStruct[],
      premiumOrdersIndex: PromiseOrValue<BigNumberish>[],
      recipients: PromiseOrValue<string>[],
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validate(
      orders: OrderStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  cancel(
    orders: OrderComponentsStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getContractOffererNonce(
    contractOfferer: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCounter(
    offerer: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOrderHash(
    order: OrderComponentsStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  getOrderStatus(
    orderHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [boolean, boolean, BigNumber, BigNumber] & {
      isValidated: boolean;
      isCancelled: boolean;
      totalFilled: BigNumber;
      totalSize: BigNumber;
    }
  >;

  incrementCounter(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  information(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      version: string;
      domainSeparator: string;
      conduitController: string;
    }
  >;

  matchOrdersWithRandom(
    arg0: AdvancedOrderStruct[],
    arg1: FulfillmentStruct[],
    requestId: PromiseOrValue<BigNumberish>,
    orderProbility: OrderProbilityStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  prepare(
    orders: AdvancedOrderStruct[],
    premiumOrdersIndex: PromiseOrValue<BigNumberish>[],
    recipients: PromiseOrValue<string>[],
    numWords: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validate(
    orders: OrderStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancel(
      orders: OrderComponentsStruct[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    getContractOffererNonce(
      contractOfferer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCounter(
      offerer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderHash(
      order: OrderComponentsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    getOrderStatus(
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [boolean, boolean, BigNumber, BigNumber] & {
        isValidated: boolean;
        isCancelled: boolean;
        totalFilled: BigNumber;
        totalSize: BigNumber;
      }
    >;

    incrementCounter(overrides?: CallOverrides): Promise<BigNumber>;

    information(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        version: string;
        domainSeparator: string;
        conduitController: string;
      }
    >;

    matchOrdersWithRandom(
      arg0: AdvancedOrderStruct[],
      arg1: FulfillmentStruct[],
      requestId: PromiseOrValue<BigNumberish>,
      orderProbility: OrderProbilityStruct[],
      overrides?: CallOverrides
    ): Promise<ExecutionStructOutput[]>;

    name(overrides?: CallOverrides): Promise<string>;

    prepare(
      orders: AdvancedOrderStruct[],
      premiumOrdersIndex: PromiseOrValue<BigNumberish>[],
      recipients: PromiseOrValue<string>[],
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validate(
      orders: OrderStruct[],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    cancel(
      orders: OrderComponentsStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getContractOffererNonce(
      contractOfferer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCounter(
      offerer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderHash(
      order: OrderComponentsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderStatus(
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    incrementCounter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    information(overrides?: CallOverrides): Promise<BigNumber>;

    matchOrdersWithRandom(
      arg0: AdvancedOrderStruct[],
      arg1: FulfillmentStruct[],
      requestId: PromiseOrValue<BigNumberish>,
      orderProbility: OrderProbilityStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    prepare(
      orders: AdvancedOrderStruct[],
      premiumOrdersIndex: PromiseOrValue<BigNumberish>[],
      recipients: PromiseOrValue<string>[],
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validate(
      orders: OrderStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancel(
      orders: OrderComponentsStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getContractOffererNonce(
      contractOfferer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCounter(
      offerer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrderHash(
      order: OrderComponentsStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrderStatus(
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    incrementCounter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    information(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    matchOrdersWithRandom(
      arg0: AdvancedOrderStruct[],
      arg1: FulfillmentStruct[],
      requestId: PromiseOrValue<BigNumberish>,
      orderProbility: OrderProbilityStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prepare(
      orders: AdvancedOrderStruct[],
      premiumOrdersIndex: PromiseOrValue<BigNumberish>[],
      recipients: PromiseOrValue<string>[],
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validate(
      orders: OrderStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}