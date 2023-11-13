/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  LocalConduit,
  LocalConduitInterface,
} from "../../../../contracts/conduit/Conduit.sol/LocalConduit";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BadReturnValueFromERC20OnTransfer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
    ],
    name: "ChannelClosed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    name: "ChannelStatusAlreadySet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "identifiers",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "ERC1155BatchTransferGenericFailure",
    type: "error",
  },
  {
    inputs: [],
    name: "Invalid1155BatchTransferEncoding",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidController",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "InvalidERC721TransferAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidItemType",
    type: "error",
  },
  {
    inputs: [],
    name: "MissingItemAmount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "NoContract",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "identifier",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenTransferGenericFailure",
    type: "error",
  },
  {
    inputs: [],
    name: "UnusedItemParameters",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "open",
        type: "bool",
      },
    ],
    name: "ChannelUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ConduitItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ConduitTransfer[]",
        name: "transfers",
        type: "tuple[]",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct ConduitBatch1155Transfer[]",
        name: "batchTransfers",
        type: "tuple[]",
      },
    ],
    name: "executeBatch1155",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ConduitItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ConduitTransfer[]",
        name: "standardTransfers",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct ConduitBatch1155Transfer[]",
        name: "batchTransfers",
        type: "tuple[]",
      },
    ],
    name: "executeWithBatch1155",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    name: "updateChannel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a080604052346100235733608052610bd690816100298239608051816103c50152f35b600080fdfe60806040526004361015610013575b600080fd5b6000803560e01c9081634ce34aa21461006657508063899e104c1461005d5780638df25d92146100545763c4e8fcb51461004c57600080fd5b61000e610362565b5061000e61027f565b5061000e6101ab565b346101465760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101465760043567ffffffffffffffff8111610142576100b5903690600401610149565b9133815280602052604081205415610116575b8281106100fa576040517f4ce34aa2000000000000000000000000000000000000000000000000000000008152602090f35b8061011061010b6001938686610532565b6105c4565b016100c8565b807f93daadf2000000000000000000000000000000000000000000000000000000006024925233600452fd5b5080fd5b80fd5b9181601f8401121561000e5782359167ffffffffffffffff831161000e5760208085019460c0850201011161000e57565b9181601f8401121561000e5782359167ffffffffffffffff831161000e576020808501948460051b01011161000e57565b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5767ffffffffffffffff60043581811161000e576101fc903690600401610149565b9160243590811161000e5761021590369060040161017a565b919092600033815280602052604081205415610116575b8181106102685761023d8486610a1a565b6040517f899e104c000000000000000000000000000000000000000000000000000000008152602090f35b8061027961010b6001938587610532565b0161022c565b503461000e5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760043567ffffffffffffffff811161000e576102cf90369060040161017a565b33600052600060205260406000205415610316576102ec91610a1a565b60206040517f8df25d92000000000000000000000000000000000000000000000000000000008152f35b7f93daadf2000000000000000000000000000000000000000000000000000000006000523360045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81160361000e57565b503461000e5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261000e5760043561039e81610344565b6024359081151580830361000e5773ffffffffffffffffffffffffffffffffffffffff90817f00000000000000000000000000000000000000000000000000000000000000001633036105085761041f6104188473ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b5460ff1690565b1515146104b657816104a6846104767fae63067d43ac07563b7eb8db6595635fc77f1578a2a5ea06ba91b63e2afa37e29573ffffffffffffffffffffffffffffffffffffffff166000526000602052604060002090565b9060ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0083541691151516179055565b60405193151584521691602090a2005b506040517f924e341e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9190911660048201529015156024820152604490fd5b60046040517f6d5769be000000000000000000000000000000000000000000000000000000008152fd5b91908110156105425760c0020190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6004111561057b57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b35600481101561000e5790565b356105c181610344565b90565b60016105cf826105aa565b6105d881610571565b0361061357806105ed602061061193016105b7565b906105fa604082016105b7565b60a0610608606084016105b7565b9201359261071d565b565b600261061e826105aa565b61062781610571565b036106a15760a08101356001810361066e57508061064a602061061193016105b7565b90610657604082016105b7565b6080610665606084016105b7565b92013592610841565b6040517f69f958270000000000000000000000000000000000000000000000000000000081526004810191909152602490fd5b60036106ac826105aa565b6106b581610571565b036106f357806106ca602061061193016105b7565b6106d6604083016105b7565b6106e2606084016105b7565b90608060a085013594013592610920565b60046040517f7932f1fc000000000000000000000000000000000000000000000000000000008152fd5b9092604051926000947f23b872dd00000000000000000000000000000000000000000000000000000000865280600452816024528260445260208660648180885af1803d15601f3d1160018a51141617163d1515811615610787575b505050505050604052606052565b80863b151516610779579087959691156107ac5786635f15d67287526020526024601cfd5b9591929395156107d1575063988919238594526020526040526060526080526084601cfd5b3d6107f4575b5063f486bc87845260205260405260605260805260a05260a4601cfd5b601f3d0160051c9060051c908060030291808211610828575b505060205a91011061081f57856107d7565b833d81803e3d90fd5b8080600392028380020360091c9203020101868061080d565b929091833b1561090e57604051926000947f23b872dd000000000000000000000000000000000000000000000000000000008652816004528260245283604452858060648180855af11561089b5750505050604052606052565b85853d6108c2575b5063f486bc879052602052604052606052608052600160a05260a4601cfd5b601f3d0160051c9060051c9080600302918082116108f5575b505060205a9101106108ed57856108a3565b3d81803e3d90fd5b8080600392028380020360091c920302010186806108db565b83635f15d6726000526020526024601cfd5b9392919091843b15610a0857604051936080519160a0519360c051956000987ff242432a000000000000000000000000000000000000000000000000000000008a528160045282602452836044528460645260a06084528960a452898060c48180855af11561099f57505050505060805260a05260c052604052606052565b89893d6109c4575b5063f486bc87905260205260405260605260805260a05260a4601cfd5b601f3d0160051c9060051c9080600302918082116109ef575b505060205a9101106108ed57866109a7565b8080600392028380020360091c920302010187806109dd565b84635f15d6726000526020526024601cfd5b90816020907f2eb2c2d600000000000000000000000000000000000000000000000000000000825260005b838110610a585750505050506080604052565b8435820194853590813b15610b8f5760a09182880192833560059181831b948b60c08097608094818301868501351490606085013514169201013584141615610b655789019a890160243760061b9360e0850160a452610104850194600086526040019060c437600080858982865af115610ad95750505050600101610a45565b869394503d610b1a575b507fafc445e20000000000000000000000000000000000000000000000000000000060005260045260645260849081510190526000fd5b84601f3d01821c911c90600381810292808311610b4e575b505050835a910110610b445784610ae3565b3d6000803e3d6000fd5b8080028380020360091c9203020101858080610b32565b7feba2084c0000000000000000000000000000000000000000000000000000000060005260046000fd5b5083635f15d672600052526024601cfdfea2646970667358221220a07f11001fdaea036d781765a46ec19f54a7d6047b45ad831530b34cdd134e0c64736f6c634300080e0033";

type LocalConduitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LocalConduitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LocalConduit__factory extends ContractFactory {
  constructor(...args: LocalConduitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LocalConduit> {
    return super.deploy(overrides || {}) as Promise<LocalConduit>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LocalConduit {
    return super.attach(address) as LocalConduit;
  }
  override connect(signer: Signer): LocalConduit__factory {
    return super.connect(signer) as LocalConduit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LocalConduitInterface {
    return new utils.Interface(_abi) as LocalConduitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LocalConduit {
    return new Contract(address, _abi, signerOrProvider) as LocalConduit;
  }
}
