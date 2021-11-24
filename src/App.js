import React, { useState } from "react";
import Header from "./components/Header";
import FormTask from "./components/FormTask";
import List from "./components/List";

import "./App.css";

const App = () => {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      texto: "Crear",
      completada: false,
    },
    {
      id: 2,
      texto: "Borrar",
      completada: false,
    },
  ]);

  console.log(tareas);

  return (
    <>
      <div className="contenedor">
        <Header />
        <FormTask tareas={tareas} setTareas={setTareas} />
        <List tareas={tareas} setTareas={setTareas} />
      </div>
    </>
  );
};

export default App;
