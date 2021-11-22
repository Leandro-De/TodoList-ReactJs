import React from "react";
import Header from "./components/Header";
import FormTask from "./components/FormTask";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="contenedor">
        <Header />
        <FormTask />
      </div>
    </>
  );
};

export default App;
