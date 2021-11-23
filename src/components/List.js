import React from "react";

const List = ({ tareas }) => {
  return (
    <ul className="lista-tareas">
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          return <li key={tarea.id}>{tarea.texto}</li>;
        })
      ) : (
        <div className="lista-tareas__mensaje">Add a Task!</div>
      )}
    </ul>
  );
};

export default List;
