import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faEdit,
  faSquare,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Task = ({ tarea, toggleCompletada, editarTarea, borrarTarea }) => {
  //State para editar una tarea
  const [editartarea, SetEditarTarea] = useState(false);

  //State para el form de editar
  const [nuevaTarea, setNuevaTarea] = useState(tarea.texto);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Editar tarea
    editarTarea(tarea.id, nuevaTarea);

    SetEditarTarea(false);
  };

  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon
        icon={tarea.completada ? faCheckSquare : faSquare}
        className="lista-tareas__icono lista-tareas__icono-check"
        onClick={() => toggleCompletada(tarea.id)}
      />
      <div className="lista-tareas__texto">
        {/* Condicional para actualizar */}
        {editartarea ? (
          <form className="formulario-editar-tarea" onSubmit={handleSubmit}>
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={nuevaTarea}
              onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button type="submit" className="formulario-editar-tarea__btn">
              Update
            </button>
          </form>
        ) : (
          tarea.texto
        )}
      </div>

      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => SetEditarTarea(!editartarea)}
        />

        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => borrarTarea(tarea.id)}
        />
      </div>
    </li>
  );
};

export default Task;
