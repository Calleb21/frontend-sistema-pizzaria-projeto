import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/Autenticacao/AuthContext";

const root = document.getElementById("root");

if (root) {
  const rootElement = createRoot(root);

  rootElement.render(
    <BrowserRouter>
      <AuthProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthProvider>
    </BrowserRouter>
  );
} else {
  console.error("Element with id 'root' not found in the document.");
}
