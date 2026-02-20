import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"
import { AuthProvider } from "./context/AuthContext"
import { LanguageProvider } from "./context/LanguageContext";
import { store } from "./store";
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
        <LanguageProvider>
          <App />
          </LanguageProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
)
