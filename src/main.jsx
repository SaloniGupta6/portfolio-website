import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <Provider store={store}>

      <ThemeProvider>
        <AuthProvider>
          <LanguageProvider>

            <BrowserRouter>
              <App />
            </BrowserRouter>

          </LanguageProvider>
        </AuthProvider>
      </ThemeProvider>

    </Provider>

  </React.StrictMode>
);
