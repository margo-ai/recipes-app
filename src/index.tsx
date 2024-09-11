import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";

import { App } from "./app/App";

import { Provider } from "react-redux";
import store from "./app/store";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ConfigProvider theme={{ hashed: false }}>
      <App />
    </ConfigProvider>
  </Provider>,
);
