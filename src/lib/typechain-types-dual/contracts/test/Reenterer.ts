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
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ReentererInterface extends utils.Interface {
  functions: {
    "callData()": FunctionFragment;
    "execute(address,uint256,bytes)": FunctionFragment;
    "isPrepared()": FunctionFragment;
    "msgValue()": FunctionFragment;
    "prepare(address,uint256,bytes)": FunctionFragment;
    "target()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "callData"
      | "execute"
      | "isPrepared"
      | "msgValue"
      | "prepare"
      | "target"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "callData", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isPrepared",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "msgValue", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "prepare",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "target", values?: undefined): string;

  decodeFunctionResult(functionFragment: "callData", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPrepared", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "msgValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prepare", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;

  events: {
    "Reentered(bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Reentered"): EventFragment;
}

export interface ReenteredEventObject {
  returnData: string;
}
export type ReenteredEvent = TypedEvent<[string], ReenteredEventObject>;

export type ReenteredEventFilter = TypedEventFilter<ReenteredEvent>;

export interface Reenterer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ReentererInterface;

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
    callData(overrides?: CallOverrides): Promise<[string]>;

    execute(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isPrepared(overrides?: CallOverrides): Promise<[boolean]>;

    msgValue(overrides?: CallOverrides): Promise<[BigNumber]>;

    prepare(
      targetToUse: PromiseOrValue<string>,
      msgValueToUse: PromiseOrValue<BigNumberish>,
      callDataToUse: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    target(overrides?: CallOverrides): Promise<[string]>;
  };

  callData(overrides?: CallOverrides): Promise<string>;

  execute(
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isPrepared(overrides?: CallOverrides): Promise<boolean>;

  msgValue(overrides?: CallOverrides): Promise<BigNumber>;

  prepare(
    targetToUse: PromiseOrValue<string>,
    msgValueToUse: PromiseOrValue<BigNumberish>,
    callDataToUse: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  target(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    callData(overrides?: CallOverrides): Promise<string>;

    execute(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    isPrepared(overrides?: CallOverrides): Promise<boolean>;

    msgValue(overrides?: CallOverrides): Promise<BigNumber>;

    prepare(
      targetToUse: PromiseOrValue<string>,
      msgValueToUse: PromiseOrValue<BigNumberish>,
      callDataToUse: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    target(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Reentered(bytes)"(returnData?: null): ReenteredEventFilter;
    Reentered(returnData?: null): ReenteredEventFilter;
  };

  estimateGas: {
    callData(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isPrepared(overrides?: CallOverrides): Promise<BigNumber>;

    msgValue(overrides?: CallOverrides): Promise<BigNumber>;

    prepare(
      targetToUse: PromiseOrValue<string>,
      msgValueToUse: PromiseOrValue<BigNumberish>,
      callDataToUse: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    target(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    callData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isPrepared(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    msgValue(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prepare(
      targetToUse: PromiseOrValue<string>,
      msgValueToUse: PromiseOrValue<BigNumberish>,
      callDataToUse: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    target(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
