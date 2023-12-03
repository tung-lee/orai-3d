import useSWR from "swr";
import { getAddress, getClient, getSigningClient } from "../lib/client";
import { getContractAddr } from "../lib/state";

const sender = "orai1yzsegvns6vmvf5q29uv26p3th4fd2kzmsq3h6m";
const funds = [];

export const getCount = async () => {
  const client = await getClient();
  return await client.queryContractSmart(getContractAddr(), { token_info: {} });
};

export const increase = async () => {
  const client = await getSigningClient();
  return await client.execute(
    await getAddress(),
    getContractAddr(),
    {
      transfer: {
        recipient: "orai1mun6zs5m9tp2e54m8nvvhvc2xg2dg7u5vd2jp3",
        amount: "1000000",
      },
    },
    "auto"
  );
};

export const useCount = () => {
  const { data, error, mutate } = useSWR("/counter/count", getCount);
  console.log(data);
  return {
    count: data?.decimals,
    error,
    increase: () => mutate(increase),
  };
};

export const deployContract = async () => {
  const client = await getSigningClient();
  const arrayBuffer = await fetch("/cosmwasm_poc.wasm").then((res) => res.arrayBuffer());
  const wasmCode = new Uint8Array(
    arrayBuffer
  );
  const { codeId } = await client.upload(sender, wasmCode, "auto");

  const { contractAddress } = await client.instantiate(
    sender,
    codeId,
    { count: 0 },
    "Counter",
    "auto"
  );
  console.log(contractAddress)
  console.log(codeId)
};
