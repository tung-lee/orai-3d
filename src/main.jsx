import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyRouter from "./router/MyRouter";
import { CollectionProvider } from "./context/CollectionProvider";
import { AddressProvider } from "./context/AddressProvider";
import { TokenProvider } from "./context/TokenProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AddressProvider>
    <CollectionProvider>
      <TokenProvider>
        <MyRouter />
      </TokenProvider>
    </CollectionProvider>
  </AddressProvider>
);
