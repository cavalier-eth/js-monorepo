import { Signer } from '@ethersproject/abstract-signer';
import { Provider } from '@ethersproject/providers';
import { SynthetixJS, NetworkId } from '@synthetixio/contracts-interface';

export interface SubgraphEndpoints {
	exchanges: string;
	exchanger: string;
	issuance: string;
	subgraph: string;
}

export interface QueryContext {
	networkId: NetworkId | null;
	provider: Provider | null;
	signer: Signer | null;
	snxjs: SynthetixJS | null;
	subgraphEndpoints: SubgraphEndpoints;
}
