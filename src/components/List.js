import React from "react";
import Task from "./Task";

const List = ({ tareas }) => {
  return (
    <ul className="lista-tareas">
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          return <Task key={tarea.id} tarea={tarea} />;
        })
      ) : (
        <div className="lista-tareas__mensaje">Add a Task!</div>
      )}
    </ul>
  );
};

export default List;
