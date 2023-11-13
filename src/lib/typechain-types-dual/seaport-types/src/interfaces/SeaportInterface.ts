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

export type CriteriaResolverStruct = {
  orderIndex: PromiseOrValue<BigNumberish>;
  side: PromiseOrValue<BigNumberish>;
  index: PromiseOrValue<BigNumberish>;
  identifier: PromiseOrValue<BigNumberish>;
  criteriaProof: PromiseOrValue<BytesLike>[];
};

export type CriteriaResolverStructOutput = [
  BigNumber,
  number,
  BigNumber,
  BigNumber,
  string[]
] & {
  orderIndex: BigNumber;
  side: number;
  index: BigNumber;
  identifier: BigNumber;
  criteriaProof: string[];
};

export type FulfillmentComponentStruct = {
  orderIndex: PromiseOrValue<BigNumberish>;
  itemIndex: PromiseOrValue<BigNumberish>;
};

export type FulfillmentComponentStructOutput = [BigNumber, BigNumber] & {
  orderIndex: BigNumber;
  itemIndex: BigNumber;
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

export type AdditionalRecipientStruct = {
  amount: PromiseOrValue<BigNumberish>;
  recipient: PromiseOrValue<string>;
};

export type AdditionalRecipientStructOutput = [BigNumber, string] & {
  amount: BigNumber;
  recipient: string;
};

export type BasicOrderParametersStruct = {
  considerationToken: PromiseOrValue<string>;
  considerationIdentifier: PromiseOrValue<BigNumberish>;
  considerationAmount: PromiseOrValue<BigNumberish>;
  offerer: PromiseOrValue<string>;
  zone: PromiseOrValue<string>;
  offerToken: PromiseOrValue<string>;
  offerIdentifier: PromiseOrValue<BigNumberish>;
  offerAmount: PromiseOrValue<BigNumberish>;
  basicOrderType: PromiseOrValue<BigNumberish>;
  startTime: PromiseOrValue<BigNumberish>;
  endTime: PromiseOrValue<BigNumberish>;
  zoneHash: PromiseOrValue<BytesLike>;
  salt: PromiseOrValue<BigNumberish>;
  offererConduitKey: PromiseOrValue<BytesLike>;
  fulfillerConduitKey: PromiseOrValue<BytesLike>;
  totalOriginalAdditionalRecipients: PromiseOrValue<BigNumberish>;
  additionalRecipients: AdditionalRecipientStruct[];
  signature: PromiseOrValue<BytesLike>;
};

export type BasicOrderParametersStructOutput = [
  string,
  BigNumber,
  BigNumber,
  string,
  string,
  string,
  BigNumber,
  BigNumber,
  number,
  BigNumber,
  BigNumber,
  string,
  BigNumber,
  string,
  string,
  BigNumber,
  AdditionalRecipientStructOutput[],
  string
] & {
  considerationToken: string;
  considerationIdentifier: BigNumber;
  considerationAmount: BigNumber;
  offerer: string;
  zone: string;
  offerToken: string;
  offerIdentifier: BigNumber;
  offerAmount: BigNumber;
  basicOrderType: number;
  startTime: BigNumber;
  endTime: BigNumber;
  zoneHash: string;
  salt: BigNumber;
  offererConduitKey: string;
  fulfillerConduitKey: string;
  totalOriginalAdditionalRecipients: BigNumber;
  additionalRecipients: AdditionalRecipientStructOutput[];
  signature: string;
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

export interface SeaportInterfaceInterface extends utils.Interface {
  functions: {
    "cancel((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256)[])": FunctionFragment;
    "fulfillAdvancedOrder(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes),(uint256,uint8,uint256,uint256,bytes32[])[],bytes32,address)": FunctionFragment;
    "fulfillAvailableAdvancedOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes)[],(uint256,uint8,uint256,uint256,bytes32[])[],tuple[][],tuple[][],bytes32,address,uint256)": FunctionFragment;
    "fulfillAvailableOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[],tuple[][],tuple[][],bytes32,uint256)": FunctionFragment;
    "fulfillBasicOrder((address,uint256,uint256,address,address,address,uint256,uint256,uint8,uint256,uint256,bytes32,uint256,bytes32,bytes32,uint256,(uint256,address)[],bytes))": FunctionFragment;
    "fulfillBasicOrder_efficient_6GL6yc((address,uint256,uint256,address,address,address,uint256,uint256,uint8,uint256,uint256,bytes32,uint256,bytes32,bytes32,uint256,(uint256,address)[],bytes))": FunctionFragment;
    "fulfillOrder(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes),bytes32)": FunctionFragment;
    "getContractOffererNonce(address)": FunctionFragment;
    "getCounter(address)": FunctionFragment;
    "getOrderHash((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256))": FunctionFragment;
    "getOrderStatus(bytes32)": FunctionFragment;
    "incrementCounter()": FunctionFragment;
    "information()": FunctionFragment;
    "matchAdvancedOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes)[],(uint256,uint8,uint256,uint256,bytes32[])[],((uint256,uint256)[],(uint256,uint256)[])[],address)": FunctionFragment;
    "matchOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[],((uint256,uint256)[],(uint256,uint256)[])[])": FunctionFragment;
    "name()": FunctionFragment;
    "validate(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancel"
      | "fulfillAdvancedOrder"
      | "fulfillAvailableAdvancedOrders"
      | "fulfillAvailableOrders"
      | "fulfillBasicOrder"
      | "fulfillBasicOrder_efficient_6GL6yc"
      | "fulfillOrder"
      | "getContractOffererNonce"
      | "getCounter"
      | "getOrderHash"
      | "getOrderStatus"
      | "incrementCounter"
      | "information"
      | "matchAdvancedOrders"
      | "matchOrders"
      | "name"
      | "validate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancel",
    values: [OrderComponentsStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillAdvancedOrder",
    values: [
      AdvancedOrderStruct,
      CriteriaResolverStruct[],
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillAvailableAdvancedOrders",
    values: [
      AdvancedOrderStruct[],
      CriteriaResolverStruct[],
      FulfillmentComponentStruct[][],
      FulfillmentComponentStruct[][],
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillAvailableOrders",
    values: [
      OrderStruct[],
      FulfillmentComponentStruct[][],
      FulfillmentComponentStruct[][],
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillBasicOrder",
    values: [BasicOrderParametersStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillBasicOrder_efficient_6GL6yc",
    values: [BasicOrderParametersStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillOrder",
    values: [OrderStruct, PromiseOrValue<BytesLike>]
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
    functionFragment: "matchAdvancedOrders",
    values: [
      AdvancedOrderStruct[],
      CriteriaResolverStruct[],
      FulfillmentStruct[],
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "matchOrders",
    values: [OrderStruct[], FulfillmentStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "validate",
    values: [OrderStruct[]]
  ): string;

  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fulfillAdvancedOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fulfillAvailableAdvancedOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fulfillAvailableOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fulfillBasicOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fulfillBasicOrder_efficient_6GL6yc",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fulfillOrder",
    data: BytesLike
  ): Result;
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
    functionFragment: "matchAdvancedOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "matchOrders",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;

  events: {};
}

export interface SeaportInterface extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SeaportInterfaceInterface;

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

    fulfillAdvancedOrder(
      advancedOrder: AdvancedOrderStruct,
      criteriaResolvers: CriteriaResolverStruct[],
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
      recipient: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fulfillAvailableAdvancedOrders(
      advancedOrders: AdvancedOrderStruct[],
      criteriaResolvers: CriteriaResolverStruct[],
      offerFulfillments: FulfillmentComponentStruct[][],
      considerationFulfillments: FulfillmentComponentStruct[][],
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
      recipient: PromiseOrValue<string>,
      maximumFulfilled: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fulfillAvailableOrders(
      orders: OrderStruct[],
      offerFulfillments: FulfillmentComponentStruct[][],
      considerationFulfillments: FulfillmentComponentStruct[][],
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
      maximumFulfilled: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fulfillBasicOrder(
      parameters: BasicOrderParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fulfillBasicOrder_efficient_6GL6yc(
      parameters: BasicOrderParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fulfillOrder(
      order: OrderStruct,
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
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

    matchAdvancedOrders(
      orders: AdvancedOrderStruct[],
      criteriaResolvers: CriteriaResolverStruct[],
      fulfillments: FulfillmentStruct[],
      recipient: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    matchOrders(
      orders: OrderStruct[],
      fulfillments: FulfillmentStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(
      overrides?: CallOverrides
    ): Promise<[string] & { contractName: string }>;

    validate(
      orders: OrderStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  cancel(
    orders: OrderComponentsStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fulfillAdvancedOrder(
    advancedOrder: AdvancedOrderStruct,
    criteriaResolvers: CriteriaResolverStruct[],
    fulfillerConduitKey: PromiseOrValue<BytesLike>,
    recipient: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fulfillAvailableAdvancedOrders(
    advancedOrders: AdvancedOrderStruct[],
    criteriaResolvers: CriteriaResolverStruct[],
    offerFulfillments: FulfillmentComponentStruct[][],
    considerationFulfillments: FulfillmentComponentStruct[][],
    fulfillerConduitKey: PromiseOrValue<BytesLike>,
    recipient: PromiseOrValue<string>,
    maximumFulfilled: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fulfillAvailableOrders(
    orders: OrderStruct[],
    offerFulfillments: FulfillmentComponentStruct[][],
    considerationFulfillments: FulfillmentComponentStruct[][],
    fulfillerConduitKey: PromiseOrValue<BytesLike>,
    maximumFulfilled: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fulfillBasicOrder(
    parameters: BasicOrderParametersStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fulfillBasicOrder_efficient_6GL6yc(
    parameters: BasicOrderParametersStruct,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fulfillOrder(
    order: OrderStruct,
    fulfillerConduitKey: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
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

  matchAdvancedOrders(
    orders: AdvancedOrderStruct[],
    criteriaResolvers: CriteriaResolverStruct[],
    fulfillments: FulfillmentStruct[],
    recipient: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  matchOrders(
    orders: OrderStruct[],
    fulfillments: FulfillmentStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  validate(
    orders: OrderStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancel(
      orders: OrderComponentsStruct[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    fulfillAdvancedOrder(
      advancedOrder: AdvancedOrderStruct,
      criteriaResolvers: CriteriaResolverStruct[],
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    fulfillAvailableAdvancedOrders(
      advancedOrders: AdvancedOrderStruct[],
      criteriaResolvers: CriteriaResolverStruct[],
      offerFulfillments: FulfillmentComponentStruct[][],
      considerationFulfillments: FulfillmentComponentStruct[][],
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
      recipient: PromiseOrValue<string>,
      maximumFulfilled: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [boolean[], ExecutionStructOutput[]] & {
        availableOrders: boolean[];
        executions: ExecutionStructOutput[];
      }
    >;

    fulfillAvailableOrders(
      orders: OrderStruct[],
      offerFulfillments: FulfillmentComponentStruct[][],
      considerationFulfillments: FulfillmentComponentStruct[][],
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
      maximumFulfilled: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [boolean[], ExecutionStructOutput[]] & {
        availableOrders: boolean[];
        executions: ExecutionStructOutput[];
      }
    >;

    fulfillBasicOrder(
      parameters: BasicOrderParametersStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;

    fulfillBasicOrder_efficient_6GL6yc(
      parameters: BasicOrderParametersStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;

    fulfillOrder(
      order: OrderStruct,
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
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

    matchAdvancedOrders(
      orders: AdvancedOrderStruct[],
      criteriaResolvers: CriteriaResolverStruct[],
      fulfillments: FulfillmentStruct[],
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<ExecutionStructOutput[]>;

    matchOrders(
      orders: OrderStruct[],
      fulfillments: FulfillmentStruct[],
      overrides?: CallOverrides
    ): Promise<ExecutionStructOutput[]>;

    name(overrides?: CallOverrides): Promise<string>;

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

    fulfillAdvancedOrder(
      advancedOrder: AdvancedOrderStruct,
      criteriaResolvers: CriteriaResolverStruct[],
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
      recipient: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fulfillAvailableAdvancedOrders(
      advancedOrders: AdvancedOrderStruct[],
      criteriaResolvers: CriteriaResolverStruct[],
      offerFulfillments: FulfillmentComponentStruct[][],
      considerationFulfillments: FulfillmentComponentStruct[][],
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
      recipient: PromiseOrValue<string>,
      maximumFulfilled: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fulfillAvailableOrders(
      orders: OrderStruct[],
      offerFulfillments: FulfillmentComponentStruct[][],
      considerationFulfillments: FulfillmentComponentStruct[][],
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
      maximumFulfilled: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fulfillBasicOrder(
      parameters: BasicOrderParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fulfillBasicOrder_efficient_6GL6yc(
      parameters: BasicOrderParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fulfillOrder(
      order: OrderStruct,
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
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

    matchAdvancedOrders(
      orders: AdvancedOrderStruct[],
      criteriaResolvers: CriteriaResolverStruct[],
      fulfillments: FulfillmentStruct[],
      recipient: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    matchOrders(
      orders: OrderStruct[],
      fulfillments: FulfillmentStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

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

    fulfillAdvancedOrder(
      advancedOrder: AdvancedOrderStruct,
      criteriaResolvers: CriteriaResolverStruct[],
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
      recipient: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fulfillAvailableAdvancedOrders(
      advancedOrders: AdvancedOrderStruct[],
      criteriaResolvers: CriteriaResolverStruct[],
      offerFulfillments: FulfillmentComponentStruct[][],
      considerationFulfillments: FulfillmentComponentStruct[][],
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
      recipient: PromiseOrValue<string>,
      maximumFulfilled: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fulfillAvailableOrders(
      orders: OrderStruct[],
      offerFulfillments: FulfillmentComponentStruct[][],
      considerationFulfillments: FulfillmentComponentStruct[][],
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
      maximumFulfilled: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fulfillBasicOrder(
      parameters: BasicOrderParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fulfillBasicOrder_efficient_6GL6yc(
      parameters: BasicOrderParametersStruct,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fulfillOrder(
      order: OrderStruct,
      fulfillerConduitKey: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
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

    matchAdvancedOrders(
      orders: AdvancedOrderStruct[],
      criteriaResolvers: CriteriaResolverStruct[],
      fulfillments: FulfillmentStruct[],
      recipient: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    matchOrders(
      orders: OrderStruct[],
      fulfillments: FulfillmentStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    validate(
      orders: OrderStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
