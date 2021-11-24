import React from "react";
import Task from "./Task";

const List = ({ tareas, setTareas, mostrarCompletadas }) => {
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

  //Funcion para editar tarea
  const editarTarea = (id, nuevoTexto) => {
    setTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, texto: nuevoTexto };
        }
        return tarea;
      })
    );
  };

  //Borrar tarea

  const borrarTarea = (id) => {
    setTareas(
      tareas.filter((tarea) => {
        if (tarea.id !== id) {
          return tarea;
        }
        return;
      })
    );
  };

  return (
    <ul className="lista-tareas">
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          if (mostrarCompletadas) {
            return (
              <Task
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              />
            );
            // si la tarea no esta completada, la devolvemos
          } else if (!tarea.completada) {
            return (
              <Task
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              />
            );
          }
          // si la tarea ya esta completada no la devolvemos
          return;
        })
      ) : (
        <div className="lista-tareas__mensaje">Add a Task!</div>
      )}
    </ul>
  );
};

export default List;
