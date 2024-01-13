import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyRouter from "./router/MyRouter";
import { CollectionProvider } from "./context/CollectionProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CollectionProvider>
      <MyRouter />
    </CollectionProvider>
  </React.StrictMode>
);
