import React from "react";
import Task from "./Task";

const List = ({ tareas, setTareas }) => {
  //editar la tarea con el id al momento de pulsar el check
  const toggleCompletada = (id) => {
    setTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, completada: !tarea.completada };
        }
        return tarea;
      })
    );
  };

  return (
    <ul className="lista-tareas">
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          return (
            <Task
              key={tarea.id}
              tarea={tarea}
              toggleCompletada={toggleCompletada}
            />
          );
        })
      ) : (
        <div className="lista-tareas__mensaje">Add a Task!</div>
      )}
    </ul>
  );
};

export default List;
