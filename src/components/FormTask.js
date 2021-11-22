import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const FormTask = () => {
  return (
    <form action="" className="formulario-tareas">
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Add a task"
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
