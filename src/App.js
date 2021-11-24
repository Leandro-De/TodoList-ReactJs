import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import FormTask from "./components/FormTask";
import List from "./components/List";

import "./App.css";

const App = () => {
  //Obtener los datos del localstorage cuando cargue la pagina
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];

  //Establecer el estado de las tareas.
  const [tareas, setTareas] = useState(tareasGuardadas);

  // guardando el estado en el localstorege
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // acceder a localstorage y comprovar si mostrarCompletadas es null
  let configMostrarCompletadas = "";
  if (localStorage.getItem("mostrarCompletadas") === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas =
      localStorage.getItem("mostrarCompletadas") === "true";
  }

  // Mostrar tareas completadas
  const [mostrarCompletadas, setMostrarCompletadas] = useState(
    configMostrarCompletadas
  );
  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

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
