import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store, { StoreContext } from "./store";
import "./index.css";
// import default style
import "rsuite/dist/rsuite.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
);
