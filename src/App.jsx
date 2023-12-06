import Canvas from "./canvas";
import { useSDK } from '@metamask/sdk-react';

import Customizer from "./pages/Customizer";
// import { getAddress, getClient, getSigningClient } from "./lib/client";
import Home from "./pages/Home";
import { useState } from "react";

// const signWallet = async() => {
//   await getSigningClient();
//   await getAddress();
// }

function App() {
  async function getAccount() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });
    const account = accounts[0];
    console.log(account)
  }
  
  // getAccount().then(() => {
  //   console.log("Connected");
  // })

  // signWallet().then(() => {
  //   console.log("Wallet signed");
  // })

  return (
    <>
      <main className="app transition-all ease-in">
        <Home />
        <Canvas />
        <Customizer />
      </main>
    </>
  );
}

export default App;
