import { getAddress, getClient, getSigningClient } from "../lib/client";

const sender = "orai1yzsegvns6vmvf5q29uv26p3th4fd2kzmsq3h6m";
const funds = [];

export const getContractAddr = () => {
  const contractAddr =
    "orai1094ellehzmlsqf6uax7lhlayggd6wf8vu2ejtlzfgk7e8d4pjgssglxvsf";

  if (!contractAddr) {
    throw Error("Contract address not found");
  }

  return contractAddr;
};

export const getTokenInfo = async (token_id: string) => {
  const client = await getClient();
  return await client.queryContractSmart(getContractAddr(), {
    token_info: {
      token_id,
    },
  });
};

export const getAllTokensId = async () => {
  const client = await getClient();
  return await client.queryContractSmart(getContractAddr(), {
    all_tokens: {},
  });
};

export const commit = async ({ token_id, prompt, eueno_url }) => {
  const client = await getSigningClient();
  return await client.execute(
    await getAddress(),
    getContractAddr(),
    {
      commit: {
        token_id,
        prompt,
        eueno_url,
      },
    },
    "auto"
  );
};

export const approveCommit = async ({token_id, commit_id}) => {
  const client = await getSigningClient();
  return await client.execute(
    await getAddress(),
    getContractAddr(),
    {
      approveCommit: {
        token_id,
        commit_id
      },
    },
    "auto"
  );
};

// export const deployAndInitContract = async () => {
//   const client = await getSigningClient();
//   const arrayBuffer = await fetch("/cosmwasm_poc.wasm").then((res) =>
//     res.arrayBuffer()
//   );
//   const wasmCode = new Uint8Array(arrayBuffer);
//   const { codeId } = await client.upload(sender, wasmCode, "auto");
//   console.log(codeId);

//   const { contractAddress } = await client.instantiate(
//     sender,
//     codeId,
//     { count: 0 },
//     "Counter",
//     "auto"
//   );
//   console.log(contractAddress);
// };
