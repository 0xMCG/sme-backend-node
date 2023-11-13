/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  Signer,
  utils,
} from "ethers";
import type { EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export type SpentItemStruct = {
  itemType: PromiseOrValue<BigNumberish>;
  token: PromiseOrValue<string>;
  identifier: PromiseOrValue<BigNumberish>;
  amount: PromiseOrValue<BigNumberish>;
};

export type SpentItemStructOutput = [number, string, BigNumber, BigNumber] & {
  itemType: number;
  token: string;
  identifier: BigNumber;
  amount: BigNumber;
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

export interface ExecutorInterface extends utils.Interface {
  functions: {};

  events: {
    "CounterIncremented(uint256,address)": EventFragment;
    "OrderCancelled(bytes32,address,address)": EventFragment;
    "OrderFulfilled(bytes32,address,address,address,tuple[],tuple[])": EventFragment;
    "OrderValidated(bytes32,tuple)": EventFragment;
    "OrdersMatched(bytes32[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CounterIncremented"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderValidated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrdersMatched"): EventFragment;
}

export interface CounterIncrementedEventObject {
  newCounter: BigNumber;
  offerer: string;
}
export type CounterIncrementedEvent = TypedEvent<
  [BigNumber, string],
  CounterIncrementedEventObject
>;

export type CounterIncrementedEventFilter =
  TypedEventFilter<CounterIncrementedEvent>;

export interface OrderCancelledEventObject {
  orderHash: string;
  offerer: string;
  zone: string;
}
export type OrderCancelledEvent = TypedEvent<
  [string, string, string],
  OrderCancelledEventObject
>;

export type OrderCancelledEventFilter = TypedEventFilter<OrderCancelledEvent>;

export interface OrderFulfilledEventObject {
  orderHash: string;
  offerer: string;
  zone: string;
  recipient: string;
  offer: SpentItemStructOutput[];
  consideration: ReceivedItemStructOutput[];
}
export type OrderFulfilledEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    SpentItemStructOutput[],
    ReceivedItemStructOutput[]
  ],
  OrderFulfilledEventObject
>;

export type OrderFulfilledEventFilter = TypedEventFilter<OrderFulfilledEvent>;

export interface OrderValidatedEventObject {
  orderHash: string;
  orderParameters: OrderParametersStructOutput;
}
export type OrderValidatedEvent = TypedEvent<
  [string, OrderParametersStructOutput],
  OrderValidatedEventObject
>;

export type OrderValidatedEventFilter = TypedEventFilter<OrderValidatedEvent>;

export interface OrdersMatchedEventObject {
  orderHashes: string[];
}
export type OrdersMatchedEvent = TypedEvent<
  [string[]],
  OrdersMatchedEventObject
>;

export type OrdersMatchedEventFilter = TypedEventFilter<OrdersMatchedEvent>;

export interface Executor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExecutorInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "CounterIncremented(uint256,address)"(
      newCounter?: null,
      offerer?: PromiseOrValue<string> | null
    ): CounterIncrementedEventFilter;
    CounterIncremented(
      newCounter?: null,
      offerer?: PromiseOrValue<string> | null
    ): CounterIncrementedEventFilter;

    "OrderCancelled(bytes32,address,address)"(
      orderHash?: null,
      offerer?: PromiseOrValue<string> | null,
      zone?: PromiseOrValue<string> | null
    ): OrderCancelledEventFilter;
    OrderCancelled(
      orderHash?: null,
      offerer?: PromiseOrValue<string> | null,
      zone?: PromiseOrValue<string> | null
    ): OrderCancelledEventFilter;

    "OrderFulfilled(bytes32,address,address,address,tuple[],tuple[])"(
      orderHash?: null,
      offerer?: PromiseOrValue<string> | null,
      zone?: PromiseOrValue<string> | null,
      recipient?: null,
      offer?: null,
      consideration?: null
    ): OrderFulfilledEventFilter;
    OrderFulfilled(
      orderHash?: null,
      offerer?: PromiseOrValue<string> | null,
      zone?: PromiseOrValue<string> | null,
      recipient?: null,
      offer?: null,
      consideration?: null
    ): OrderFulfilledEventFilter;

    "OrderValidated(bytes32,tuple)"(
      orderHash?: null,
      orderParameters?: null
    ): OrderValidatedEventFilter;
    OrderValidated(
      orderHash?: null,
      orderParameters?: null
    ): OrderValidatedEventFilter;

    "OrdersMatched(bytes32[])"(orderHashes?: null): OrdersMatchedEventFilter;
    OrdersMatched(orderHashes?: null): OrdersMatchedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}
