import Canvas from "./canvas";

import Customizer from "./pages/Customizer";
import { getAddress, getClient, getSigningClient } from "./lib/client";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { MetaMaskButton } from "@metamask/sdk-react-ui";

// const signWallet = async () => {
//   await getSigningClient();
//   const address = await getAddress();
//   return address;
// };

function ModelDetail() {
  const [account, setAccount] = useState(null);
  const [address, setAddress] = useState(null);
  const [models, setModels] = useState([]);
  // const { sdk, connected, connecting, provider, chainId } = useSDK();

  async function getAccount() {
    const accounts = await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log("Please connect to MetaMask.");
        } else {
          console.error(err);
        }
      });
    const account = accounts[0];
    return account;
  }

  function connectMetaMaskWallet() {
    if (account) {
      window.ethereum
        .request({
          method: "wallet_revokePermissions",
          params: [
            {
              eth_accounts: {},
            },
          ],
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
      setAccount();
    } else {
      getAccount()
        .then((account) => {
          setAccount(account);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    console.log(account);
  }, [account]);

  // signWallet()
  //   .then((address) => {
  //     setAddress(address);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return (
    <>
      <main className="app transition-all ease-in">
        <MetaMaskButton theme={"light"} color="white"></MetaMaskButton>
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={connectMetaMaskWallet}
        >
          {account ? "Disconnect" : "Connect"}
        </button> */}
        <Home />
        <Canvas />
        <Customizer />
      </main>
    </>
  );
}

export default ModelDetail;
