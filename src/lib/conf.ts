export const getRpcEndpoint = () => {
  // if (!import.meta.env.NEXT_PUBLIC_RPC_ENDPOINT) {
  //   throw Error(
  //     "`NEXT_PUBLIC_RPC_ENDPOINT` env variable not found, please set"
  //   );
  // }

  // return import.meta.env.NEXT_PUBLIC_RPC_ENDPOINT;
  return "testnet"
};

export const getChainId = () => {
  // if (!import.meta.env.NEXT_PUBLIC_CHAIN_ID) {
  //   throw Error("`NEXT_PUBLIC_CHAIN_ID` env variable not found, please set");
  // }

  // return import.meta.env.NEXT_PUBLIC_CHAIN_ID;
  return "Oraichain-testnet"
};
