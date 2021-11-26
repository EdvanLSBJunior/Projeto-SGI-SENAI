import React from "react";
import { useEffect, useState } from "react";
import SERVER from "../../utils/constants";
import "./style.css";

/*const StoredProducts = () => {
  const [storedProducts, setStoredProducts] = useState([]);

  useEffect(() => {
    async function handleGetStored() {
      const response = await fetch(SERVER + "/produtos");
      const result = await response.json();
      setStoredProducts(result);
    }

    handleGetStored();
  }, []);

  return (
    <div className="storage-container">
      <div>
        <h1 className="title">Estoque de produtos</h1>
      </div>

      <div className="stored-list">
        {storedProducts.map((stored) => (
          <div class="card">
            <div class="card__cover">
              <img
                className="stored-img"
                src={stored.image_url}
                alt={stored.product_name}
              />
            </div>
            <div className="card__content">
              <span>{stored.product_name}</span>
              <span>{"R$" + stored.unit_cost}</span>
              <span>{"Sobre: " + stored.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoredProducts;*/

const StoredProducts = () => {
  const [storedProducts, setStoredProducts] = useState([]);

  useEffect(() => {
    async function handleGetStored() {
      const response = await fetch(SERVER + "/produtos");
      const result = await response.json();
      console.log(result);
      setStoredProducts(result);
    }

    handleGetStored();
  }, []);

  return (
    <div className="storage-container">
      <div>
        <h1 className="title">Estoque de produtos</h1>
      </div>

      <div className="stored-list">
        {storedProducts.map((stored) => (
          <div className="container-items">
            <img
              className="stored-img"
              src={stored.image_url}
              alt={stored.product_name}
            />
            <span className="item-text">{stored.product_name}</span>
            <span className="item-text">{"R$" + stored.unit_cost}</span>
            <span className="item-text">{"Sobre: " + stored.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoredProducts;
