import { createContext, useContext, useEffect, useState } from "react";
import { getAddress, getSigningClient } from "../lib/client";

const AddressContext = createContext();

const signWallet = async () => {
  await getSigningClient();
  const address = await getAddress();
  return address;
};

function AddressProvider({ children }) {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    signWallet()
      .then((address) => {
        setAddress(address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
}

function useAddress() {
  const context = useContext(AddressContext);
  return context;
}

export { AddressProvider, useAddress };
