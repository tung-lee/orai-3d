// import { SimulateCosmWasmClient } from '@oraichain/cw-simulate';

// const sender = 'orai1yzsegvns6vmvf5q29uv26p3th4fd2kzmsq3h6m';
// const funds = [];

// const client = new SimulateCosmWasmClient({
//   chainId: 'Oraichain-testnet',
//   bech32Prefix: 'orai',
//   metering: true,
// });

// import the wasm bytecode
// const { codeId, contractAddress } = client.deploy(sender, '/home/asus/Workspace/Oraichain101/cosmwasm-poc/artifacts/cosmwasm_poc.wasm', {
//   count: 0,
// });

// console.log('codeId:', codeId);
// console.log('contractAddress:', contractAddress);

// execute the contract
// result = await client.app.wasm.executeContract(sender, funds, contractAddress, {
//   increment: {},
// });
// console.log('executeContract:', result.constructor.name, JSON.stringify(result, null, 2));

// query the contract
// result = await client.app.wasm.query(contractAddress, { get_count: {} });
// console.log('query:', result.constructor.name, JSON.stringify(result, null, 2));

// use with codegen
// const contractClient = new ContractClient(client, sender, contractAddress);
// const res = await contractClient.executeMethod({});

// use with IBC mocks
// const cosmosChain = new CWSimulateApp({
//   chainId: 'cosmoshub-4',
//   bech32Prefix: 'cosmos'
// });

// create channel between oraichain and cosmos
// client.app.ibc.relay(channel, 'wasm.' + contractAddress, 'channel-0', 'transfer', cosmosChain);

// send IBC packet
// await cosmosChain.ibc.sendChannelOpen({
//   open_init: {
//     channel: {
//       counterparty_endpoint: {
//         port_id: oraiPort,
//         channel_id: channel
//       },
//       endpoint: {
//         port_id: cosmosPort,
//         channel_id: channel
//       },
//       order: IbcOrder.Unordered,
//       version: 'ics20-1',
//       connection_id: 'connection-0'
//     }
//   }
// });

// await cosmosChain.ibc.sendChannelConnect({
//   open_ack: {
//     channel: {
//       counterparty_endpoint: {
//         port_id: oraiPort,
//         channel_id: channel
//       },
//       endpoint: {
//         port_id: cosmosPort,
//         channel_id: channel
//       },
//       order: IbcOrder.Unordered,
//       version: 'ics20-1',
//       connection_id: 'connection-0'
//     },
//     counterparty_version: 'ics20-1'
//   }
// });

// write hook
// cosmosChain.ibc.addMiddleWare((msg, app) => {
//   const data = msg.data.packet as IbcPacket;
//   if (Number(data.timeout.timestamp) < cosmosChain.time) {
//     throw new GenericError('timeout at ' + data.timeout.timestamp);
//   }
// });

// load fork state from mainnet
// import { DownloadState } from "@oraichain/cw-simulate";
// const downloadState = new DownloadState("https://lcd.orai.io", path.resolve(__dirname, "data"));
// await downloadState.loadState(client, senderAddress, contractAddress, "label");
