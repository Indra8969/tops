import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { storedata } from "./store.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={storedata}>
      <App />
    </Provider>
  </StrictMode>
);
