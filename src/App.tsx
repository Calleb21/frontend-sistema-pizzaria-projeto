import React from "react";
import Header from "./components/HeandAndFooter/Header";
import Footer from "./components/HeandAndFooter/Footer";
import MainPage from "./components/Cardapio/MainPage";
import CheckoutComponent from "./components/Cardapio/CheckoutComponent";
import "./App.css";
import { AuthProvider } from "./components/Autenticacao/AuthContext";

function App() {
  return (
    <AuthProvider> 
      <React.Fragment>
        <Header />
        <MainPage />
        <CheckoutComponent /> 
        <Footer />
        <div className="card"></div>
      </React.Fragment>
    </AuthProvider>
  );
}

export default App;
