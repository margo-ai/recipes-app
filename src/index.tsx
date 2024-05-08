import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";

import { App } from "./App";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider theme={{ hashed: false }}>
    <App />
  </ConfigProvider>,
);
