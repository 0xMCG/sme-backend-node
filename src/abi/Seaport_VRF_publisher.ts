export const vrfPublisherAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "link",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "blockhashStore",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "linkEthFeed",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "internalBalance",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "externalBalance",
        "type": "uint256"
      }
    ],
    "name": "BalanceInvariantViolated",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "blockNum",
        "type": "uint256"
      }
    ],
    "name": "BlockhashNotInStore",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "have",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "want",
        "type": "uint32"
      }
    ],
    "name": "GasLimitTooBig",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "IncorrectCommitment",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InsufficientBalance",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "have",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "want",
        "type": "uint256"
      }
    ],
    "name": "InsufficientGasForConsumer",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidCalldata",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      },
      {
        "internalType": "address",
        "name": "consumer",
        "type": "address"
      }
    ],
    "name": "InvalidConsumer",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "int256",
        "name": "linkWei",
        "type": "int256"
      }
    ],
    "name": "InvalidLinkWeiPrice",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "have",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "min",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "max",
        "type": "uint16"
      }
    ],
    "name": "InvalidRequestConfirmations",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidSubscription",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "proposedOwner",
        "type": "address"
      }
    ],
    "name": "MustBeRequestedOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "MustBeSubOwner",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NoCorrespondingRequest",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "keyHash",
        "type": "bytes32"
      }
    ],
    "name": "NoSuchProvingKey",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint32",
        "name": "have",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "want",
        "type": "uint32"
      }
    ],
    "name": "NumWordsTooBig",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OnlyCallableFromLink",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "PaymentTooLarge",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "PendingRequestExists",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "keyHash",
        "type": "bytes32"
      }
    ],
    "name": "ProvingKeyAlreadyRegistered",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "Reentrant",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "TooManyConsumers",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "minimumRequestConfirmations",
        "type": "uint16"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "maxGasLimit",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "stalenessSeconds",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "gasAfterPaymentCalculation",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "fallbackWeiPerUnitLink",
        "type": "int256"
      },
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "fulfillmentFlatFeeLinkPPMTier1",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "fulfillmentFlatFeeLinkPPMTier2",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "fulfillmentFlatFeeLinkPPMTier3",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "fulfillmentFlatFeeLinkPPMTier4",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "fulfillmentFlatFeeLinkPPMTier5",
            "type": "uint32"
          },
          {
            "internalType": "uint24",
            "name": "reqsForTier2",
            "type": "uint24"
          },
          {
            "internalType": "uint24",
            "name": "reqsForTier3",
            "type": "uint24"
          },
          {
            "internalType": "uint24",
            "name": "reqsForTier4",
            "type": "uint24"
          },
          {
            "internalType": "uint24",
            "name": "reqsForTier5",
            "type": "uint24"
          }
        ],
        "indexed": false,
        "internalType": "struct VRFCoordinatorV2.FeeConfig",
        "name": "feeConfig",
        "type": "tuple"
      }
    ],
    "name": "ConfigSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "FundsRecovered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "keyHash",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "oracle",
        "type": "address"
      }
    ],
    "name": "ProvingKeyDeregistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "keyHash",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "oracle",
        "type": "address"
      }
    ],
    "name": "ProvingKeyRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "outputSeed",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint96",
        "name": "payment",
        "type": "uint96"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "name": "RandomWordsFulfilled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "keyHash",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "preSeed",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "minimumRequestConfirmations",
        "type": "uint16"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "callbackGasLimit",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "numWords",
        "type": "uint32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RandomWordsRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "SubscriptionCanceled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "consumer",
        "type": "address"
      }
    ],
    "name": "SubscriptionConsumerAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "consumer",
        "type": "address"
      }
    ],
    "name": "SubscriptionConsumerRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "SubscriptionCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "oldBalance",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "newBalance",
        "type": "uint256"
      }
    ],
    "name": "SubscriptionFunded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "SubscriptionOwnerTransferRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "SubscriptionOwnerTransferred",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "BLOCKHASH_STORE",
    "outputs": [
      {
        "internalType": "contract BlockhashStoreInterface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "LINK",
    "outputs": [
      {
        "internalType": "contract LinkTokenInterface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "LINK_ETH_FEED",
    "outputs": [
      {
        "internalType": "contract AggregatorV3Interface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MAX_CONSUMERS",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MAX_NUM_WORDS",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MAX_REQUEST_CONFIRMATIONS",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "acceptOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      }
    ],
    "name": "acceptSubscriptionOwnerTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      },
      {
        "internalType": "address",
        "name": "consumer",
        "type": "address"
      }
    ],
    "name": "addConsumer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "cancelSubscription",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "createSubscription",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[2]",
        "name": "publicProvingKey",
        "type": "uint256[2]"
      }
    ],
    "name": "deregisterProvingKey",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256[2]",
            "name": "pk",
            "type": "uint256[2]"
          },
          {
            "internalType": "uint256[2]",
            "name": "gamma",
            "type": "uint256[2]"
          },
          {
            "internalType": "uint256",
            "name": "c",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "s",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "seed",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "uWitness",
            "type": "address"
          },
          {
            "internalType": "uint256[2]",
            "name": "cGammaWitness",
            "type": "uint256[2]"
          },
          {
            "internalType": "uint256[2]",
            "name": "sHashWitness",
            "type": "uint256[2]"
          },
          {
            "internalType": "uint256",
            "name": "zInv",
            "type": "uint256"
          }
        ],
        "internalType": "struct VRF.Proof",
        "name": "proof",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "uint64",
            "name": "blockNum",
            "type": "uint64"
          },
          {
            "internalType": "uint64",
            "name": "subId",
            "type": "uint64"
          },
          {
            "internalType": "uint32",
            "name": "callbackGasLimit",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "numWords",
            "type": "uint32"
          },
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "internalType": "struct VRFCoordinatorV2.RequestCommitment",
        "name": "rc",
        "type": "tuple"
      }
    ],
    "name": "fulfillRandomWords",
    "outputs": [
      {
        "internalType": "uint96",
        "name": "",
        "type": "uint96"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "requestId",
        "type": "uint256"
      }
    ],
    "name": "getCommitment",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getConfig",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "minimumRequestConfirmations",
        "type": "uint16"
      },
      {
        "internalType": "uint32",
        "name": "maxGasLimit",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "stalenessSeconds",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "gasAfterPaymentCalculation",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCurrentSubId",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getFallbackWeiPerUnitLink",
    "outputs": [
      {
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getFeeConfig",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "fulfillmentFlatFeeLinkPPMTier1",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "fulfillmentFlatFeeLinkPPMTier2",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "fulfillmentFlatFeeLinkPPMTier3",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "fulfillmentFlatFeeLinkPPMTier4",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "fulfillmentFlatFeeLinkPPMTier5",
        "type": "uint32"
      },
      {
        "internalType": "uint24",
        "name": "reqsForTier2",
        "type": "uint24"
      },
      {
        "internalType": "uint24",
        "name": "reqsForTier3",
        "type": "uint24"
      },
      {
        "internalType": "uint24",
        "name": "reqsForTier4",
        "type": "uint24"
      },
      {
        "internalType": "uint24",
        "name": "reqsForTier5",
        "type": "uint24"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "reqCount",
        "type": "uint64"
      }
    ],
    "name": "getFeeTier",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRequestConfig",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      },
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      },
      {
        "internalType": "bytes32[]",
        "name": "",
        "type": "bytes32[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      }
    ],
    "name": "getSubscription",
    "outputs": [
      {
        "internalType": "uint96",
        "name": "balance",
        "type": "uint96"
      },
      {
        "internalType": "uint64",
        "name": "reqCount",
        "type": "uint64"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "consumers",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTotalBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[2]",
        "name": "publicKey",
        "type": "uint256[2]"
      }
    ],
    "name": "hashOfKey",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "onTokenTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint96",
        "name": "amount",
        "type": "uint96"
      }
    ],
    "name": "oracleWithdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      }
    ],
    "name": "ownerCancelSubscription",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      }
    ],
    "name": "pendingRequestExists",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "recoverFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "oracle",
        "type": "address"
      },
      {
        "internalType": "uint256[2]",
        "name": "publicProvingKey",
        "type": "uint256[2]"
      }
    ],
    "name": "registerProvingKey",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      },
      {
        "internalType": "address",
        "name": "consumer",
        "type": "address"
      }
    ],
    "name": "removeConsumer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "keyHash",
        "type": "bytes32"
      },
      {
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      },
      {
        "internalType": "uint16",
        "name": "requestConfirmations",
        "type": "uint16"
      },
      {
        "internalType": "uint32",
        "name": "callbackGasLimit",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "numWords",
        "type": "uint32"
      }
    ],
    "name": "requestRandomWords",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "subId",
        "type": "uint64"
      },
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "requestSubscriptionOwnerTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "minimumRequestConfirmations",
        "type": "uint16"
      },
      {
        "internalType": "uint32",
        "name": "maxGasLimit",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "stalenessSeconds",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "gasAfterPaymentCalculation",
        "type": "uint32"
      },
      {
        "internalType": "int256",
        "name": "fallbackWeiPerUnitLink",
        "type": "int256"
      },
      {
        "components": [
          {
            "internalType": "uint32",
            "name": "fulfillmentFlatFeeLinkPPMTier1",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "fulfillmentFlatFeeLinkPPMTier2",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "fulfillmentFlatFeeLinkPPMTier3",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "fulfillmentFlatFeeLinkPPMTier4",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "fulfillmentFlatFeeLinkPPMTier5",
            "type": "uint32"
          },
          {
            "internalType": "uint24",
            "name": "reqsForTier2",
            "type": "uint24"
          },
          {
            "internalType": "uint24",
            "name": "reqsForTier3",
            "type": "uint24"
          },
          {
            "internalType": "uint24",
            "name": "reqsForTier4",
            "type": "uint24"
          },
          {
            "internalType": "uint24",
            "name": "reqsForTier5",
            "type": "uint24"
          }
        ],
        "internalType": "struct VRFCoordinatorV2.FeeConfig",
        "name": "feeConfig",
        "type": "tuple"
      }
    ],
    "name": "setConfig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "typeAndVersion",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
];
