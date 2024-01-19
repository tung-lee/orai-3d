export const getRpcEndpoint = () => {
  if (!import.meta.env.VITE_RPC_ENDPOINT) {
    throw Error("`VITE_RPC_ENDPOINT` env variable not found, please set");
  }

  return import.meta.env.VITE_RPC_ENDPOINT;
};

export const getChainId = () => {
  if (!import.meta.env.VITE_CHAIN_ID) {
    throw Error("`VITE_CHAIN_ID` env variable not found, please set");
  }

  return import.meta.env.VITE_CHAIN_ID;
};
