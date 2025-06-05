import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/index.css";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
<Toaster
  position="top-right"
  toastOptions={{
    className: "custom-toast",
    success: {
      className: "custom-toast custom-toast-success",
    },
    error: {
      className: "custom-toast custom-toast-error",
    },
  }}
/>    <App />
  </StrictMode>
);
