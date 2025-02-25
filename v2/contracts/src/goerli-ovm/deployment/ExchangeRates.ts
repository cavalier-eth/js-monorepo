// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'ExchangeRates';
export const address = '0x061B75475035c20ef2e35E1002Beb90C3c1f24cC';
export const source = 'ExchangeRates';
export const abi = [
  'constructor(address _owner, address _resolver)',
  'event AggregatorAdded(bytes32 currencyKey, address aggregator)',
  'event AggregatorRemoved(bytes32 currencyKey, address aggregator)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function acceptOwnership()',
  'function addAggregator(bytes32 currencyKey, address aggregatorAddress)',
  'function aggregatorKeys(uint256) view returns (bytes32)',
  'function aggregatorWarningFlags() view returns (address)',
  'function aggregators(bytes32) view returns (address)',
  'function anyRateIsInvalid(bytes32[] currencyKeys) view returns (bool)',
  'function anyRateIsInvalidAtRound(bytes32[] currencyKeys, uint256[] roundIds) view returns (bool)',
  'function currenciesUsingAggregator(address aggregator) view returns (bytes32[] currencies)',
  'function currencyKeyDecimals(bytes32) view returns (uint8)',
  'function effectiveAtomicValueAndRates(bytes32, uint256, bytes32) view returns (uint256 value, uint256 systemValue, uint256 systemSourceRate, uint256 systemDestinationRate)',
  'function effectiveAtomicValueAndRates(tuple(bytes32 currencyKey, address dexPriceAggregator, address atomicEquivalentForDexPricing, uint256 atomicExchangeFeeRate, uint256 atomicTwapWindow, uint256 atomicMaxVolumePerBlock, uint256 atomicVolatilityConsiderationWindow, uint256 atomicVolatilityUpdateThreshold, uint256 exchangeFeeRate, uint256 exchangeMaxDynamicFee, uint256 exchangeDynamicFeeRounds, uint256 exchangeDynamicFeeThreshold, uint256 exchangeDynamicFeeWeightDecay), uint256, tuple(bytes32 currencyKey, address dexPriceAggregator, address atomicEquivalentForDexPricing, uint256 atomicExchangeFeeRate, uint256 atomicTwapWindow, uint256 atomicMaxVolumePerBlock, uint256 atomicVolatilityConsiderationWindow, uint256 atomicVolatilityUpdateThreshold, uint256 exchangeFeeRate, uint256 exchangeMaxDynamicFee, uint256 exchangeDynamicFeeRounds, uint256 exchangeDynamicFeeThreshold, uint256 exchangeDynamicFeeWeightDecay), tuple(bytes32 currencyKey, address dexPriceAggregator, address atomicEquivalentForDexPricing, uint256 atomicExchangeFeeRate, uint256 atomicTwapWindow, uint256 atomicMaxVolumePerBlock, uint256 atomicVolatilityConsiderationWindow, uint256 atomicVolatilityUpdateThreshold, uint256 exchangeFeeRate, uint256 exchangeMaxDynamicFee, uint256 exchangeDynamicFeeRounds, uint256 exchangeDynamicFeeThreshold, uint256 exchangeDynamicFeeWeightDecay)) view returns (uint256 value, uint256 systemValue, uint256 systemSourceRate, uint256 systemDestinationRate)',
  'function effectiveValue(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view returns (uint256 value)',
  'function effectiveValueAndRates(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view returns (uint256 value, uint256 sourceRate, uint256 destinationRate)',
  'function effectiveValueAndRatesAtRound(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, uint256 roundIdForSrc, uint256 roundIdForDest) view returns (uint256 value, uint256 sourceRate, uint256 destinationRate)',
  'function getCurrentRoundId(bytes32 currencyKey) view returns (uint256)',
  'function getLastRoundIdBeforeElapsedSecs(bytes32 currencyKey, uint256 startingRoundId, uint256 startingTimestamp, uint256 timediff) view returns (uint256)',
  'function isResolverCached() view returns (bool)',
  'function lastRateUpdateTimes(bytes32 currencyKey) view returns (uint256)',
  'function lastRateUpdateTimesForCurrencies(bytes32[] currencyKeys) view returns (uint256[])',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function rateAndInvalid(bytes32 currencyKey) view returns (uint256 rate, bool isInvalid)',
  'function rateAndTimestampAtRound(bytes32 currencyKey, uint256 roundId) view returns (uint256 rate, uint256 time)',
  'function rateAndUpdatedTime(bytes32 currencyKey) view returns (uint256 rate, uint256 time)',
  'function rateForCurrency(bytes32 currencyKey) view returns (uint256)',
  'function rateIsFlagged(bytes32 currencyKey) view returns (bool)',
  'function rateIsInvalid(bytes32 currencyKey) view returns (bool)',
  'function rateIsStale(bytes32 currencyKey) view returns (bool)',
  'function rateStalePeriod() view returns (uint256)',
  'function rateWithSafetyChecks(bytes32 currencyKey) returns (uint256 rate, bool broken, bool staleOrInvalid)',
  'function ratesAndInvalidForCurrencies(bytes32[] currencyKeys) view returns (uint256[] rates, bool anyRateInvalid)',
  'function ratesAndUpdatedTimeForCurrencyLastNRounds(bytes32 currencyKey, uint256 numRounds, uint256 roundId) view returns (uint256[] rates, uint256[] times)',
  'function ratesForCurrencies(bytes32[] currencyKeys) view returns (uint256[])',
  'function rebuildCache()',
  'function removeAggregator(bytes32 currencyKey)',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function synthTooVolatileForAtomicExchange(bytes32) view returns (bool)',
  'function synthTooVolatileForAtomicExchange(tuple(bytes32 currencyKey, address dexPriceAggregator, address atomicEquivalentForDexPricing, uint256 atomicExchangeFeeRate, uint256 atomicTwapWindow, uint256 atomicMaxVolumePerBlock, uint256 atomicVolatilityConsiderationWindow, uint256 atomicVolatilityUpdateThreshold, uint256 exchangeFeeRate, uint256 exchangeMaxDynamicFee, uint256 exchangeDynamicFeeRounds, uint256 exchangeDynamicFeeThreshold, uint256 exchangeDynamicFeeWeightDecay)) view returns (bool)',
];
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
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common';

export declare namespace IDirectIntegrationManager {
  export type ParameterIntegrationSettingsStruct = {
    currencyKey: PromiseOrValue<BytesLike>;
    dexPriceAggregator: PromiseOrValue<string>;
    atomicEquivalentForDexPricing: PromiseOrValue<string>;
    atomicExchangeFeeRate: PromiseOrValue<BigNumberish>;
    atomicTwapWindow: PromiseOrValue<BigNumberish>;
    atomicMaxVolumePerBlock: PromiseOrValue<BigNumberish>;
    atomicVolatilityConsiderationWindow: PromiseOrValue<BigNumberish>;
    atomicVolatilityUpdateThreshold: PromiseOrValue<BigNumberish>;
    exchangeFeeRate: PromiseOrValue<BigNumberish>;
    exchangeMaxDynamicFee: PromiseOrValue<BigNumberish>;
    exchangeDynamicFeeRounds: PromiseOrValue<BigNumberish>;
    exchangeDynamicFeeThreshold: PromiseOrValue<BigNumberish>;
    exchangeDynamicFeeWeightDecay: PromiseOrValue<BigNumberish>;
  };

  export type ParameterIntegrationSettingsStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    currencyKey: string;
    dexPriceAggregator: string;
    atomicEquivalentForDexPricing: string;
    atomicExchangeFeeRate: BigNumber;
    atomicTwapWindow: BigNumber;
    atomicMaxVolumePerBlock: BigNumber;
    atomicVolatilityConsiderationWindow: BigNumber;
    atomicVolatilityUpdateThreshold: BigNumber;
    exchangeFeeRate: BigNumber;
    exchangeMaxDynamicFee: BigNumber;
    exchangeDynamicFeeRounds: BigNumber;
    exchangeDynamicFeeThreshold: BigNumber;
    exchangeDynamicFeeWeightDecay: BigNumber;
  };
}

export interface ExchangeRatesInterface extends utils.Interface {
  functions: {
    'CONTRACT_NAME()': FunctionFragment;
    'acceptOwnership()': FunctionFragment;
    'addAggregator(bytes32,address)': FunctionFragment;
    'aggregatorKeys(uint256)': FunctionFragment;
    'aggregatorWarningFlags()': FunctionFragment;
    'aggregators(bytes32)': FunctionFragment;
    'anyRateIsInvalid(bytes32[])': FunctionFragment;
    'anyRateIsInvalidAtRound(bytes32[],uint256[])': FunctionFragment;
    'currenciesUsingAggregator(address)': FunctionFragment;
    'currencyKeyDecimals(bytes32)': FunctionFragment;
    'effectiveAtomicValueAndRates(bytes32,uint256,bytes32)': FunctionFragment;
    'effectiveAtomicValueAndRates((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))': FunctionFragment;
    'effectiveValue(bytes32,uint256,bytes32)': FunctionFragment;
    'effectiveValueAndRates(bytes32,uint256,bytes32)': FunctionFragment;
    'effectiveValueAndRatesAtRound(bytes32,uint256,bytes32,uint256,uint256)': FunctionFragment;
    'getCurrentRoundId(bytes32)': FunctionFragment;
    'getLastRoundIdBeforeElapsedSecs(bytes32,uint256,uint256,uint256)': FunctionFragment;
    'isResolverCached()': FunctionFragment;
    'lastRateUpdateTimes(bytes32)': FunctionFragment;
    'lastRateUpdateTimesForCurrencies(bytes32[])': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'rateAndInvalid(bytes32)': FunctionFragment;
    'rateAndTimestampAtRound(bytes32,uint256)': FunctionFragment;
    'rateAndUpdatedTime(bytes32)': FunctionFragment;
    'rateForCurrency(bytes32)': FunctionFragment;
    'rateIsFlagged(bytes32)': FunctionFragment;
    'rateIsInvalid(bytes32)': FunctionFragment;
    'rateIsStale(bytes32)': FunctionFragment;
    'rateStalePeriod()': FunctionFragment;
    'rateWithSafetyChecks(bytes32)': FunctionFragment;
    'ratesAndInvalidForCurrencies(bytes32[])': FunctionFragment;
    'ratesAndUpdatedTimeForCurrencyLastNRounds(bytes32,uint256,uint256)': FunctionFragment;
    'ratesForCurrencies(bytes32[])': FunctionFragment;
    'rebuildCache()': FunctionFragment;
    'removeAggregator(bytes32)': FunctionFragment;
    'resolver()': FunctionFragment;
    'resolverAddressesRequired()': FunctionFragment;
    'synthTooVolatileForAtomicExchange(bytes32)': FunctionFragment;
    'synthTooVolatileForAtomicExchange((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'CONTRACT_NAME'
      | 'acceptOwnership'
      | 'addAggregator'
      | 'aggregatorKeys'
      | 'aggregatorWarningFlags'
      | 'aggregators'
      | 'anyRateIsInvalid'
      | 'anyRateIsInvalidAtRound'
      | 'currenciesUsingAggregator'
      | 'currencyKeyDecimals'
      | 'effectiveAtomicValueAndRates(bytes32,uint256,bytes32)'
      | 'effectiveAtomicValueAndRates((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))'
      | 'effectiveValue'
      | 'effectiveValueAndRates'
      | 'effectiveValueAndRatesAtRound'
      | 'getCurrentRoundId'
      | 'getLastRoundIdBeforeElapsedSecs'
      | 'isResolverCached'
      | 'lastRateUpdateTimes'
      | 'lastRateUpdateTimesForCurrencies'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'rateAndInvalid'
      | 'rateAndTimestampAtRound'
      | 'rateAndUpdatedTime'
      | 'rateForCurrency'
      | 'rateIsFlagged'
      | 'rateIsInvalid'
      | 'rateIsStale'
      | 'rateStalePeriod'
      | 'rateWithSafetyChecks'
      | 'ratesAndInvalidForCurrencies'
      | 'ratesAndUpdatedTimeForCurrencyLastNRounds'
      | 'ratesForCurrencies'
      | 'rebuildCache'
      | 'removeAggregator'
      | 'resolver'
      | 'resolverAddressesRequired'
      | 'synthTooVolatileForAtomicExchange(bytes32)'
      | 'synthTooVolatileForAtomicExchange((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'CONTRACT_NAME', values?: undefined): string;
  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'addAggregator',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'aggregatorKeys',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'aggregatorWarningFlags', values?: undefined): string;
  encodeFunctionData(functionFragment: 'aggregators', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(
    functionFragment: 'anyRateIsInvalid',
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'anyRateIsInvalidAtRound',
    values: [PromiseOrValue<BytesLike>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'currenciesUsingAggregator',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'currencyKeyDecimals',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'effectiveAtomicValueAndRates(bytes32,uint256,bytes32)',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'effectiveAtomicValueAndRates((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))',
    values: [
      IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      PromiseOrValue<BigNumberish>,
      IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      IDirectIntegrationManager.ParameterIntegrationSettingsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'effectiveValue',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'effectiveValueAndRates',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'effectiveValueAndRatesAtRound',
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'getCurrentRoundId',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getLastRoundIdBeforeElapsedSecs',
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: 'isResolverCached', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'lastRateUpdateTimes',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'lastRateUpdateTimesForCurrencies',
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'rateAndInvalid',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'rateAndTimestampAtRound',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'rateAndUpdatedTime',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'rateForCurrency',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'rateIsFlagged',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'rateIsInvalid',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'rateIsStale', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: 'rateStalePeriod', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'rateWithSafetyChecks',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'ratesAndInvalidForCurrencies',
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'ratesAndUpdatedTimeForCurrencyLastNRounds',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'ratesForCurrencies',
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(functionFragment: 'rebuildCache', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'removeAggregator',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'resolver', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolverAddressesRequired', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'synthTooVolatileForAtomicExchange(bytes32)',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'synthTooVolatileForAtomicExchange((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))',
    values: [IDirectIntegrationManager.ParameterIntegrationSettingsStruct]
  ): string;

  decodeFunctionResult(functionFragment: 'CONTRACT_NAME', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addAggregator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'aggregatorKeys', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'aggregatorWarningFlags', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'aggregators', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'anyRateIsInvalid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'anyRateIsInvalidAtRound', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'currenciesUsingAggregator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'currencyKeyDecimals', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'effectiveAtomicValueAndRates(bytes32,uint256,bytes32)',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'effectiveAtomicValueAndRates((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'effectiveValue', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'effectiveValueAndRates', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'effectiveValueAndRatesAtRound', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getCurrentRoundId', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getLastRoundIdBeforeElapsedSecs',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'isResolverCached', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lastRateUpdateTimes', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'lastRateUpdateTimesForCurrencies',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rateAndInvalid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rateAndTimestampAtRound', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rateAndUpdatedTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rateForCurrency', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rateIsFlagged', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rateIsInvalid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rateIsStale', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rateStalePeriod', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rateWithSafetyChecks', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ratesAndInvalidForCurrencies', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'ratesAndUpdatedTimeForCurrencyLastNRounds',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'ratesForCurrencies', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rebuildCache', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeAggregator', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolver', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolverAddressesRequired', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'synthTooVolatileForAtomicExchange(bytes32)',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'synthTooVolatileForAtomicExchange((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))',
    data: BytesLike
  ): Result;

  events: {
    'AggregatorAdded(bytes32,address)': EventFragment;
    'AggregatorRemoved(bytes32,address)': EventFragment;
    'CacheUpdated(bytes32,address)': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AggregatorAdded'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AggregatorRemoved'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CacheUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
}

export interface AggregatorAddedEventObject {
  currencyKey: string;
  aggregator: string;
}
export type AggregatorAddedEvent = TypedEvent<[string, string], AggregatorAddedEventObject>;

export type AggregatorAddedEventFilter = TypedEventFilter<AggregatorAddedEvent>;

export interface AggregatorRemovedEventObject {
  currencyKey: string;
  aggregator: string;
}
export type AggregatorRemovedEvent = TypedEvent<[string, string], AggregatorRemovedEventObject>;

export type AggregatorRemovedEventFilter = TypedEventFilter<AggregatorRemovedEvent>;

export interface CacheUpdatedEventObject {
  name: string;
  destination: string;
}
export type CacheUpdatedEvent = TypedEvent<[string, string], CacheUpdatedEventObject>;

export type CacheUpdatedEventFilter = TypedEventFilter<CacheUpdatedEvent>;

export interface OwnerChangedEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<[string, string], OwnerChangedEventObject>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface OwnerNominatedEventObject {
  newOwner: string;
}
export type OwnerNominatedEvent = TypedEvent<[string], OwnerNominatedEventObject>;

export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;

export interface ExchangeRates extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExchangeRatesInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<[string]>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addAggregator(
      currencyKey: PromiseOrValue<BytesLike>,
      aggregatorAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    aggregatorKeys(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    aggregatorWarningFlags(overrides?: CallOverrides): Promise<[string]>;

    aggregators(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;

    anyRateIsInvalid(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    anyRateIsInvalidAtRound(
      currencyKeys: PromiseOrValue<BytesLike>[],
      roundIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    currenciesUsingAggregator(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string[]] & { currencies: string[] }>;

    currencyKeyDecimals(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    'effectiveAtomicValueAndRates(bytes32,uint256,bytes32)'(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        value: BigNumber;
        systemValue: BigNumber;
        systemSourceRate: BigNumber;
        systemDestinationRate: BigNumber;
      }
    >;

    'effectiveAtomicValueAndRates((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))'(
      arg0: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      arg3: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        value: BigNumber;
        systemValue: BigNumber;
        systemSourceRate: BigNumber;
        systemDestinationRate: BigNumber;
      }
    >;

    effectiveValue(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { value: BigNumber }>;

    effectiveValueAndRates(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        value: BigNumber;
        sourceRate: BigNumber;
        destinationRate: BigNumber;
      }
    >;

    effectiveValueAndRatesAtRound(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      roundIdForSrc: PromiseOrValue<BigNumberish>,
      roundIdForDest: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        value: BigNumber;
        sourceRate: BigNumber;
        destinationRate: BigNumber;
      }
    >;

    getCurrentRoundId(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getLastRoundIdBeforeElapsedSecs(
      currencyKey: PromiseOrValue<BytesLike>,
      startingRoundId: PromiseOrValue<BigNumberish>,
      startingTimestamp: PromiseOrValue<BigNumberish>,
      timediff: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isResolverCached(overrides?: CallOverrides): Promise<[boolean]>;

    lastRateUpdateTimes(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lastRateUpdateTimesForCurrencies(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    rateAndInvalid(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { rate: BigNumber; isInvalid: boolean }>;

    rateAndTimestampAtRound(
      currencyKey: PromiseOrValue<BytesLike>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { rate: BigNumber; time: BigNumber }>;

    rateAndUpdatedTime(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { rate: BigNumber; time: BigNumber }>;

    rateForCurrency(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rateIsFlagged(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    rateIsInvalid(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    rateIsStale(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    rateStalePeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    rateWithSafetyChecks(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ratesAndInvalidForCurrencies(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[], boolean] & { rates: BigNumber[]; anyRateInvalid: boolean }>;

    ratesAndUpdatedTimeForCurrencyLastNRounds(
      currencyKey: PromiseOrValue<BytesLike>,
      numRounds: PromiseOrValue<BigNumberish>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[]] & { rates: BigNumber[]; times: BigNumber[] }>;

    ratesForCurrencies(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeAggregator(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    resolver(overrides?: CallOverrides): Promise<[string]>;

    resolverAddressesRequired(
      overrides?: CallOverrides
    ): Promise<[string[]] & { addresses: string[] }>;

    'synthTooVolatileForAtomicExchange(bytes32)'(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    'synthTooVolatileForAtomicExchange((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))'(
      arg0: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addAggregator(
    currencyKey: PromiseOrValue<BytesLike>,
    aggregatorAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  aggregatorKeys(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

  aggregatorWarningFlags(overrides?: CallOverrides): Promise<string>;

  aggregators(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

  anyRateIsInvalid(
    currencyKeys: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  anyRateIsInvalidAtRound(
    currencyKeys: PromiseOrValue<BytesLike>[],
    roundIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  currenciesUsingAggregator(
    aggregator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  currencyKeyDecimals(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<number>;

  'effectiveAtomicValueAndRates(bytes32,uint256,bytes32)'(
    arg0: PromiseOrValue<BytesLike>,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      value: BigNumber;
      systemValue: BigNumber;
      systemSourceRate: BigNumber;
      systemDestinationRate: BigNumber;
    }
  >;

  'effectiveAtomicValueAndRates((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))'(
    arg0: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
    arg3: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      value: BigNumber;
      systemValue: BigNumber;
      systemSourceRate: BigNumber;
      systemDestinationRate: BigNumber;
    }
  >;

  effectiveValue(
    sourceCurrencyKey: PromiseOrValue<BytesLike>,
    sourceAmount: PromiseOrValue<BigNumberish>,
    destinationCurrencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  effectiveValueAndRates(
    sourceCurrencyKey: PromiseOrValue<BytesLike>,
    sourceAmount: PromiseOrValue<BigNumberish>,
    destinationCurrencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      value: BigNumber;
      sourceRate: BigNumber;
      destinationRate: BigNumber;
    }
  >;

  effectiveValueAndRatesAtRound(
    sourceCurrencyKey: PromiseOrValue<BytesLike>,
    sourceAmount: PromiseOrValue<BigNumberish>,
    destinationCurrencyKey: PromiseOrValue<BytesLike>,
    roundIdForSrc: PromiseOrValue<BigNumberish>,
    roundIdForDest: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      value: BigNumber;
      sourceRate: BigNumber;
      destinationRate: BigNumber;
    }
  >;

  getCurrentRoundId(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getLastRoundIdBeforeElapsedSecs(
    currencyKey: PromiseOrValue<BytesLike>,
    startingRoundId: PromiseOrValue<BigNumberish>,
    startingTimestamp: PromiseOrValue<BigNumberish>,
    timediff: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isResolverCached(overrides?: CallOverrides): Promise<boolean>;

  lastRateUpdateTimes(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lastRateUpdateTimesForCurrencies(
    currencyKeys: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  rateAndInvalid(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { rate: BigNumber; isInvalid: boolean }>;

  rateAndTimestampAtRound(
    currencyKey: PromiseOrValue<BytesLike>,
    roundId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { rate: BigNumber; time: BigNumber }>;

  rateAndUpdatedTime(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { rate: BigNumber; time: BigNumber }>;

  rateForCurrency(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rateIsFlagged(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  rateIsInvalid(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  rateIsStale(currencyKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;

  rateStalePeriod(overrides?: CallOverrides): Promise<BigNumber>;

  rateWithSafetyChecks(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ratesAndInvalidForCurrencies(
    currencyKeys: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<[BigNumber[], boolean] & { rates: BigNumber[]; anyRateInvalid: boolean }>;

  ratesAndUpdatedTimeForCurrencyLastNRounds(
    currencyKey: PromiseOrValue<BytesLike>,
    numRounds: PromiseOrValue<BigNumberish>,
    roundId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[BigNumber[], BigNumber[]] & { rates: BigNumber[]; times: BigNumber[] }>;

  ratesForCurrencies(
    currencyKeys: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  rebuildCache(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeAggregator(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  resolver(overrides?: CallOverrides): Promise<string>;

  resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

  'synthTooVolatileForAtomicExchange(bytes32)'(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  'synthTooVolatileForAtomicExchange((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))'(
    arg0: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    addAggregator(
      currencyKey: PromiseOrValue<BytesLike>,
      aggregatorAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    aggregatorKeys(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;

    aggregatorWarningFlags(overrides?: CallOverrides): Promise<string>;

    aggregators(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;

    anyRateIsInvalid(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    anyRateIsInvalidAtRound(
      currencyKeys: PromiseOrValue<BytesLike>[],
      roundIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    currenciesUsingAggregator(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    currencyKeyDecimals(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<number>;

    'effectiveAtomicValueAndRates(bytes32,uint256,bytes32)'(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        value: BigNumber;
        systemValue: BigNumber;
        systemSourceRate: BigNumber;
        systemDestinationRate: BigNumber;
      }
    >;

    'effectiveAtomicValueAndRates((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))'(
      arg0: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      arg3: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        value: BigNumber;
        systemValue: BigNumber;
        systemSourceRate: BigNumber;
        systemDestinationRate: BigNumber;
      }
    >;

    effectiveValue(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    effectiveValueAndRates(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        value: BigNumber;
        sourceRate: BigNumber;
        destinationRate: BigNumber;
      }
    >;

    effectiveValueAndRatesAtRound(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      roundIdForSrc: PromiseOrValue<BigNumberish>,
      roundIdForDest: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        value: BigNumber;
        sourceRate: BigNumber;
        destinationRate: BigNumber;
      }
    >;

    getCurrentRoundId(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLastRoundIdBeforeElapsedSecs(
      currencyKey: PromiseOrValue<BytesLike>,
      startingRoundId: PromiseOrValue<BigNumberish>,
      startingTimestamp: PromiseOrValue<BigNumberish>,
      timediff: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isResolverCached(overrides?: CallOverrides): Promise<boolean>;

    lastRateUpdateTimes(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastRateUpdateTimesForCurrencies(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    rateAndInvalid(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { rate: BigNumber; isInvalid: boolean }>;

    rateAndTimestampAtRound(
      currencyKey: PromiseOrValue<BytesLike>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { rate: BigNumber; time: BigNumber }>;

    rateAndUpdatedTime(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { rate: BigNumber; time: BigNumber }>;

    rateForCurrency(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rateIsFlagged(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    rateIsInvalid(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    rateIsStale(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    rateStalePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    rateWithSafetyChecks(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, boolean] & { rate: BigNumber; broken: boolean; staleOrInvalid: boolean }
    >;

    ratesAndInvalidForCurrencies(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[], boolean] & { rates: BigNumber[]; anyRateInvalid: boolean }>;

    ratesAndUpdatedTimeForCurrencyLastNRounds(
      currencyKey: PromiseOrValue<BytesLike>,
      numRounds: PromiseOrValue<BigNumberish>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[], BigNumber[]] & { rates: BigNumber[]; times: BigNumber[] }>;

    ratesForCurrencies(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    rebuildCache(overrides?: CallOverrides): Promise<void>;

    removeAggregator(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    resolver(overrides?: CallOverrides): Promise<string>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

    'synthTooVolatileForAtomicExchange(bytes32)'(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    'synthTooVolatileForAtomicExchange((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))'(
      arg0: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    'AggregatorAdded(bytes32,address)'(
      currencyKey?: null,
      aggregator?: null
    ): AggregatorAddedEventFilter;
    AggregatorAdded(currencyKey?: null, aggregator?: null): AggregatorAddedEventFilter;

    'AggregatorRemoved(bytes32,address)'(
      currencyKey?: null,
      aggregator?: null
    ): AggregatorRemovedEventFilter;
    AggregatorRemoved(currencyKey?: null, aggregator?: null): AggregatorRemovedEventFilter;

    'CacheUpdated(bytes32,address)'(name?: null, destination?: null): CacheUpdatedEventFilter;
    CacheUpdated(name?: null, destination?: null): CacheUpdatedEventFilter;

    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
  };

  estimateGas: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    addAggregator(
      currencyKey: PromiseOrValue<BytesLike>,
      aggregatorAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    aggregatorKeys(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    aggregatorWarningFlags(overrides?: CallOverrides): Promise<BigNumber>;

    aggregators(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;

    anyRateIsInvalid(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    anyRateIsInvalidAtRound(
      currencyKeys: PromiseOrValue<BytesLike>[],
      roundIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currenciesUsingAggregator(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currencyKeyDecimals(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'effectiveAtomicValueAndRates(bytes32,uint256,bytes32)'(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'effectiveAtomicValueAndRates((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))'(
      arg0: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      arg3: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    effectiveValue(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    effectiveValueAndRates(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    effectiveValueAndRatesAtRound(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      roundIdForSrc: PromiseOrValue<BigNumberish>,
      roundIdForDest: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCurrentRoundId(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLastRoundIdBeforeElapsedSecs(
      currencyKey: PromiseOrValue<BytesLike>,
      startingRoundId: PromiseOrValue<BigNumberish>,
      startingTimestamp: PromiseOrValue<BigNumberish>,
      timediff: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isResolverCached(overrides?: CallOverrides): Promise<BigNumber>;

    lastRateUpdateTimes(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastRateUpdateTimesForCurrencies(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    rateAndInvalid(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rateAndTimestampAtRound(
      currencyKey: PromiseOrValue<BytesLike>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rateAndUpdatedTime(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rateForCurrency(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rateIsFlagged(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rateIsInvalid(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rateIsStale(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rateStalePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    rateWithSafetyChecks(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ratesAndInvalidForCurrencies(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ratesAndUpdatedTimeForCurrencyLastNRounds(
      currencyKey: PromiseOrValue<BytesLike>,
      numRounds: PromiseOrValue<BigNumberish>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ratesForCurrencies(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rebuildCache(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    removeAggregator(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    resolver(overrides?: CallOverrides): Promise<BigNumber>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<BigNumber>;

    'synthTooVolatileForAtomicExchange(bytes32)'(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    'synthTooVolatileForAtomicExchange((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))'(
      arg0: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addAggregator(
      currencyKey: PromiseOrValue<BytesLike>,
      aggregatorAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    aggregatorKeys(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    aggregatorWarningFlags(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    aggregators(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    anyRateIsInvalid(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    anyRateIsInvalidAtRound(
      currencyKeys: PromiseOrValue<BytesLike>[],
      roundIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currenciesUsingAggregator(
      aggregator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currencyKeyDecimals(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'effectiveAtomicValueAndRates(bytes32,uint256,bytes32)'(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'effectiveAtomicValueAndRates((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),uint256,(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))'(
      arg0: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      arg3: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    effectiveValue(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    effectiveValueAndRates(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    effectiveValueAndRatesAtRound(
      sourceCurrencyKey: PromiseOrValue<BytesLike>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destinationCurrencyKey: PromiseOrValue<BytesLike>,
      roundIdForSrc: PromiseOrValue<BigNumberish>,
      roundIdForDest: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentRoundId(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLastRoundIdBeforeElapsedSecs(
      currencyKey: PromiseOrValue<BytesLike>,
      startingRoundId: PromiseOrValue<BigNumberish>,
      startingTimestamp: PromiseOrValue<BigNumberish>,
      timediff: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isResolverCached(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastRateUpdateTimes(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastRateUpdateTimesForCurrencies(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rateAndInvalid(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rateAndTimestampAtRound(
      currencyKey: PromiseOrValue<BytesLike>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rateAndUpdatedTime(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rateForCurrency(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rateIsFlagged(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rateIsInvalid(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rateIsStale(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rateStalePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rateWithSafetyChecks(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ratesAndInvalidForCurrencies(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ratesAndUpdatedTimeForCurrencyLastNRounds(
      currencyKey: PromiseOrValue<BytesLike>,
      numRounds: PromiseOrValue<BigNumberish>,
      roundId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ratesForCurrencies(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeAggregator(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    resolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'synthTooVolatileForAtomicExchange(bytes32)'(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    'synthTooVolatileForAtomicExchange((bytes32,address,address,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256))'(
      arg0: IDirectIntegrationManager.ParameterIntegrationSettingsStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
