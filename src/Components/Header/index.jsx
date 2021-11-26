import React from "react";
import { useHistory } from "react-router";
import "./style.css";

const Header = () => {
  const history = useHistory();
  return (
    <div>
      <nav className="navbar">
        <h1 onClick={() => history.push("/map")} className="logo">
          SGI
        </h1>
        <ul className="links">
          <li onClick={() => history.push("/map")}>Mapa</li>
          <li onClick={() => history.push("/companies")}>Empresas</li>
          <li onClick={() => history.push("/products")}>Produtos</li>
          <li onClick={() => history.push("/stored")}>Estoque</li>
          <li onClick={() => history.push("/")}>Logout</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
