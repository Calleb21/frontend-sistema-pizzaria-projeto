import React from "react";
import Header from "./components/HeandAndFooter/Header";
import Footer from "./components/HeandAndFooter/Footer";
import MainPage from "./components/Cardapio/MainPage";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainPage />
      <Footer />
      <div className="card"></div>
    </React.Fragment>
  );
}
export default App;
