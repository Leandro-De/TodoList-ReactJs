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

  // Mostrar tareas completadas
  const [mostrarCompletadas, setMostrarCompletadas] = useState(false);

  return (
    <>
      <div className="contenedor">
        <Header
          mostrarCompletadas={mostrarCompletadas}
          setMostrarCompletadas={setMostrarCompletadas}
        />
        <FormTask tareas={tareas} setTareas={setTareas} />
        <List
          tareas={tareas}
          setTareas={setTareas}
          mostrarCompletadas={mostrarCompletadas}
        />
      </div>
    </>
  );
};

export default App;
