import React from "react";
import "./App.css";
import Footer from "./pages/Footer";
import Action from "./pages/Action";
import Navbar from "./pages/Navbar";
import Button from "./pages/Button";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Action/>
      <Button />
      <Footer />
    </div>
  );
};

export default App;
