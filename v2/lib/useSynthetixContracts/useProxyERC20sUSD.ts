import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ethers, providers } from 'ethers';
import { isSupportedNetworkId, NetworkNameById } from './common';
import { ContractContext } from '@snx-v2/ContractContext';

import type { ProxyERC20sUSD } from '@synthetixio/contracts/build/mainnet/deployment/ProxyERC20sUSD';
import type { ProxyERC20sUSD as ProxyERC20sUSDOvm } from '@synthetixio/contracts/build/mainnet-ovm/deployment/ProxyERC20sUSD';
import { SynthetixProvider } from '@synthetixio/providers';
import { SignerContext } from '@snx-v2/SignerContext';

const contracts = {
  mainnet: () => import('@synthetixio/contracts/build/mainnet/deployment/ProxyERC20sUSD'),
  'mainnet-ovm': () => import('@synthetixio/contracts/build/mainnet-ovm/deployment/ProxyERC20sUSD'),
  goerli: () => import('@synthetixio/contracts/build/goerli/deployment/ProxysUSD'),
  'goerli-ovm': () => import('@synthetixio/contracts/build/goerli-ovm/deployment/ProxysUSD'),
};

export const getProxyERC20sUSD = async ({
  networkId,
  signer,
  provider,
}: {
  networkId: number;
  signer: ethers.Signer | null;
  provider: SynthetixProvider;
}) => {
  const signerOrProvider = signer || provider;
  const supportedNetworkId = isSupportedNetworkId(networkId);
  if (!supportedNetworkId) {
    throw Error(`${networkId} is not supported`);
  }
  const networkName = NetworkNameById[networkId];
  const { address, abi } = await contracts[networkName]();
  const contract = new ethers.Contract(address, abi, signerOrProvider) as
    | ProxyERC20sUSDOvm
    | ProxyERC20sUSD;
  return contract;
};
export const useProxyERC20sUSD = () => {
  const { networkId, walletAddress } = useContext(ContractContext);
  const signer = useContext(SignerContext);

  return useQuery(
    // We add walletAddress as a query key to make sure the signer is up to date, we cant use signer directly since it cant be stringified
    [networkId, 'useProxyERC20sUSD', walletAddress],
    () => {
      if (!networkId) throw Error('Network id required');

      const provider = new providers.InfuraProvider(
        networkId,
        process.env.NEXT_PUBLIC_INFURA_PROJECT_ID
      );

      return getProxyERC20sUSD({ networkId, signer, provider });
    },
    { staleTime: Infinity, enabled: Boolean(networkId) }
  );
};
