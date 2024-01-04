import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import List3DModel from "./components/List3DModel";
import Form from "./pages/Form";

const router = createBrowserRouter([
  {
    path: "/:id",
    element: <App />,
  },
  {
    path: "/models",
    element: <List3DModel />,
  },
  {
    path: "/models/add",
    element: <Form />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
