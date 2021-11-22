import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header__titulo">Todo List</h1>
        <button className="header__boton">
          Don't show completed{" "}
          <FontAwesomeIcon icon={faEyeSlash} className="header__icono-boton" />
        </button>
      </header>
    </div>
  );
};

export default Header;
