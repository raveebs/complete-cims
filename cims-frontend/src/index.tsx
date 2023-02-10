import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

const appMountPoint = ReactDOM.createRoot(
  document.getElementById("appMountPoint") as HTMLElement
);

appMountPoint.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
