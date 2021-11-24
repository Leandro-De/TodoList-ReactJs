import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Header = ({ mostrarCompletadas, setMostrarCompletadas }) => {
  const toogleCompletadas = () => {
    setMostrarCompletadas(!mostrarCompletadas);
  };

  return (
    <div>
      <header className="header">
        <h1 className="header__titulo">Todo List</h1>
        {mostrarCompletadas ? (
          <button className="header__boton" onClick={() => toogleCompletadas()}>
            Don't show completed{" "}
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="header__icono-boton"
            />
          </button>
        ) : (
          <button className="header__boton" onClick={() => toogleCompletadas()}>
            Show completed{" "}
            <FontAwesomeIcon icon={faEye} className="header__icono-boton" />
          </button>
        )}
      </header>
    </div>
  );
};

export default Header;
