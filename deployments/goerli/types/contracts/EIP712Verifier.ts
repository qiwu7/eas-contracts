/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
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

export interface EIP712VerifierInterface extends utils.Interface {
  functions: {
    "VERSION()": FunctionFragment;
    "attest(address,bytes32,uint32,bytes32,bytes,address,uint8,bytes32,bytes32)": FunctionFragment;
    "getAttestTypeHash()": FunctionFragment;
    "getDomainSeparator()": FunctionFragment;
    "getNonce(address)": FunctionFragment;
    "getRevokeTypeHash()": FunctionFragment;
    "revoke(bytes32,address,uint8,bytes32,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "VERSION"
      | "attest"
      | "getAttestTypeHash"
      | "getDomainSeparator"
      | "getNonce"
      | "getRevokeTypeHash"
      | "revoke"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "attest",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAttestTypeHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDomainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNonce",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRevokeTypeHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revoke",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "attest", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAttestTypeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDomainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRevokeTypeHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;

  events: {};
}

export interface EIP712Verifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EIP712VerifierInterface;

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
    VERSION(overrides?: CallOverrides): Promise<[string]>;

    attest(
      recipient: PromiseOrValue<string>,
      schema: PromiseOrValue<BytesLike>,
      expirationTime: PromiseOrValue<BigNumberish>,
      refUUID: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      attester: PromiseOrValue<string>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAttestTypeHash(overrides?: CallOverrides): Promise<[string]>;

    getDomainSeparator(overrides?: CallOverrides): Promise<[string]>;

    getNonce(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getRevokeTypeHash(overrides?: CallOverrides): Promise<[string]>;

    revoke(
      uuid: PromiseOrValue<BytesLike>,
      attester: PromiseOrValue<string>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  VERSION(overrides?: CallOverrides): Promise<string>;

  attest(
    recipient: PromiseOrValue<string>,
    schema: PromiseOrValue<BytesLike>,
    expirationTime: PromiseOrValue<BigNumberish>,
    refUUID: PromiseOrValue<BytesLike>,
    data: PromiseOrValue<BytesLike>,
    attester: PromiseOrValue<string>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAttestTypeHash(overrides?: CallOverrides): Promise<string>;

  getDomainSeparator(overrides?: CallOverrides): Promise<string>;

  getNonce(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getRevokeTypeHash(overrides?: CallOverrides): Promise<string>;

  revoke(
    uuid: PromiseOrValue<BytesLike>,
    attester: PromiseOrValue<string>,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    VERSION(overrides?: CallOverrides): Promise<string>;

    attest(
      recipient: PromiseOrValue<string>,
      schema: PromiseOrValue<BytesLike>,
      expirationTime: PromiseOrValue<BigNumberish>,
      refUUID: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      attester: PromiseOrValue<string>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAttestTypeHash(overrides?: CallOverrides): Promise<string>;

    getDomainSeparator(overrides?: CallOverrides): Promise<string>;

    getNonce(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRevokeTypeHash(overrides?: CallOverrides): Promise<string>;

    revoke(
      uuid: PromiseOrValue<BytesLike>,
      attester: PromiseOrValue<string>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    attest(
      recipient: PromiseOrValue<string>,
      schema: PromiseOrValue<BytesLike>,
      expirationTime: PromiseOrValue<BigNumberish>,
      refUUID: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      attester: PromiseOrValue<string>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAttestTypeHash(overrides?: CallOverrides): Promise<BigNumber>;

    getDomainSeparator(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRevokeTypeHash(overrides?: CallOverrides): Promise<BigNumber>;

    revoke(
      uuid: PromiseOrValue<BytesLike>,
      attester: PromiseOrValue<string>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    attest(
      recipient: PromiseOrValue<string>,
      schema: PromiseOrValue<BytesLike>,
      expirationTime: PromiseOrValue<BigNumberish>,
      refUUID: PromiseOrValue<BytesLike>,
      data: PromiseOrValue<BytesLike>,
      attester: PromiseOrValue<string>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAttestTypeHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDomainSeparator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNonce(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRevokeTypeHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    revoke(
      uuid: PromiseOrValue<BytesLike>,
      attester: PromiseOrValue<string>,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}