import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const FormTask = ({ tareas, setTareas }) => {
  //State para tomar el valor del input
  const [inputTarea, setInputTarea] = useState("");

  //funcion para obtener el cambio en el input
  const handleInput = (e) => {
    setInputTarea(e.target.value);
  };

  //Funcion para agregar tarea
  const handleSubmit = (e) => {
    e.preventDefault();

    setTareas([
      ...tareas,
      {
        id: uuidv4(),
        texto: "Nuevo",
        completada: false,
      },
    ]);
  };

  return (
    <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Add a task"
        value={inputTarea}
        onChange={handleInput}
      />
      <button type="submit" className="formulario-tareas__boton">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="formulario-tareas__icono-btn"
        />
      </button>
    </form>
  );
};

export default FormTask;
