import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
