import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Contract, ethers, Wallet } from "ethers";
import { vrfConsumerAbi } from '../abi/Seaport_VRF_consumer';
import { Seaport } from "@opensea/seaport-js";
import { Seaport as SMESeaport } from "./typechain-types-dual";
import { SeaportABIvSME } from "../abi/Seaport_vSME_dual";
import { vrfPublisherAbi } from "../abi/Seaport_VRF_publisher";
import { Provider } from "@ethersproject/providers";

@Injectable()
export class EtherProvider {
  private signer: Wallet;

  private readonly provider: Provider;

  private seaport: Seaport;

  private readonly vrfConsumerContract;

  private readonly vrfPublisherContract;

  private readonly smeSeaportAddress;

  private readonly vrfConsumerAddress;

  private readonly vrfConsumerFromBlock;

  private readonly vrfPublisherAddress;

  private readonly makerPrivateKey;

  private takerPrivateKey;

  private readonly conduitKey: string;

  private readonly conduitAddress: string;

  private readonly conduitMap;

  constructor(private readonly configService: ConfigService) {
    this.provider = new ethers.providers.JsonRpcProvider(
      this.configService.get('RPC_PROVIDER'),
    );
    // VRF config
    this.vrfConsumerAddress = this.configService.get('VRF_CONSUMER_ADDRESS', '0xC619D985a88e341B618C23a543B8Efe2c55D1b37');
    this.vrfPublisherAddress = this.configService.get('VRF_PUBLISH_ADDRESS', '0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625');

    // conduit config
    this.conduitKey = this.configService.get('CONDUIT_KEY', '0x28c73a60ccf8c66c14eba8935984e616df2926e3aaaaaaaaaaaaaaaaaaaaaa00') as string;
    this.conduitAddress = this.configService.get('CONDUIT_ADDRESS', '0x0681bc8f138ca32ed7725b91e8d11cfb6e10eb5f') as string;
    let conduitMap = {};
    conduitMap[this.conduitKey] = this.conduitAddress;
    this.conduitMap = conduitMap;

    // seaport config
    this.smeSeaportAddress = this.configService.get('SEAPORT_ADDRESS', '0xB692d86Eb7780E1B6D8A4DE32FE8B9eb4a962C8B');
    this.makerPrivateKey = this.configService.get('MAKER') as string;
    this.takerPrivateKey = this.configService.get('TAKER') as string;
    this.signer = new ethers.Wallet(this.makerPrivateKey, this.provider);
    this.seaport = new Seaport(this.signer, {
      overrides: { contractAddress: this.smeSeaportAddress },
      conduitKeyToConduit: this.conduitMap,
    });

    this.vrfConsumerFromBlock = this.configService.get('VRF_FROM_BLOCK', 3856444) as number;

    this.vrfConsumerContract = new ethers.Contract(
      this.vrfConsumerAddress,
      vrfConsumerAbi,
      this.provider,
    );

    this.vrfPublisherContract = new ethers.Contract(
      this.vrfPublisherAddress,
      vrfPublisherAbi,
      this.provider,
    );

  }

  getVrfFromBlock(): number {
    return this.vrfConsumerFromBlock;
  }

  getContract(): Contract {
    const smeContract = new Contract(
      this.smeSeaportAddress,
      SeaportABIvSME,
      this.signer,
    );
    return smeContract;
  }

  getSeaport(): Seaport {
    return this.seaport;
  }

  getProvider() {
    return this.provider;
  }

  getVrfConsumerContract(): Contract {
    return this.vrfConsumerContract;
  }

  getVrfPublisherContract(): Contract {
    return this.vrfPublisherContract;
  }

  getVrfPublisherContractAddress(): string {
    return this.vrfPublisherAddress;
  }
}
