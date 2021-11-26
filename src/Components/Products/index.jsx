import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "./style.css";
import SERVER from "../../utils/constants";

const Products = () => {
  const history = useHistory();

  const [imageUrl, setImageUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [unitCost, setUnitCost] = useState("");
  const [description, setDescription] = useState("");

  const [providers, setProviders] = useState([]);
  const [provider, setProvider] = useState("");

  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (!imageUrl) {
        toast.error("Url é obrigatória", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      } else if (!productName) {
        toast.error("Nome do produto é obrigatório", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      } else if (!unitCost) {
        toast.error("Custo unitário é obrigatório", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      } else if (!description) {
        toast.error("Descrição é obrigatória", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      } else if (!providers) {
        toast.error("Fornecedor é obrigatório", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      } else if (!groups) {
        toast.error("Grupo é obrigatório", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      }

      await fetch(`${SERVER}/produtos`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          image_url: imageUrl,
          product_name: productName,
          unit_cost: unitCost,
          description: description,
          provider: provider,
          group: group,
        }),
      });

      toast.success("Produto cadastrado com sucesso", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });

      history.push("/stored");
    } catch (error) {
      toast.error(
        "Houve um problema no cadastro de novo produto. Estamos tentando resolver!",
        {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        }
      );
      history.push("/stored");
    }
  };

  useEffect(() => {
    async function getProvider() {
      const result = await fetch(`${SERVER}/fornecedores`);
      const data = await result.json();
      setProviders(data);
    }

    getProvider();

    async function getGroup() {
      const result = await fetch(`${SERVER}/categorias`);
      const data = await result.json();
      setGroups(data);
    }

    getGroup();
  }, []);

  return (
    <>
      <div className="form-header">
        <h1>Novo produto</h1>
      </div>
      <form className="form-sgi" onSubmit={handleSubmit}>
        <div className="img-container">
          {imageUrl && (
            <div>
              <img
                src={imageUrl}
                style={{ width: "12em", height: "8em" }}
                alt="Imagem do produto"
              />
            </div>
          )}
        </div>

        <div>
          <div className="form-grupo">
            <label>URL da imagem*</label>
            <input
              type="url"
              pattern="https://.*"
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
            ></input>
          </div>

          <div className="form-grupo">
            <label> Nome*</label>
            <input
              className="name-input"
              type="text"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
            ></input>
          </div>
          <div className="form-grupo">
            <label> Custo unitário*</label>
            <input
              className="unit-cost"
              type="number"
              value={unitCost}
              onChange={(event) => setUnitCost(event.target.value)}
            ></input>
          </div>

          <div className="form-grupo">
            <label> Descrição*</label>
            <textarea
              className="product-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>
        </div>

        <div>
          <label> Fornecedor*</label>
          <select
            className="product-selection"
            value={provider}
            onChange={(event) => setProvider(event.target.value)}
          >
            <option value="" disabled>
              Selecione um fornecedor
            </option>
            {providers.map((provider, id) => (
              <option value={provider} key={id}>
                {provider}
              </option>
            ))}
          </select>

          <label className="selection"> Grupo*</label>
          <select
            className="product-selection"
            value={group}
            onChange={(event) => setGroup(event.target.value)}
          >
            <option value="" disabled>
              Selecione um grupo
            </option>
            {groups.map((group, id) => (
              <option value={group} key={id}>
                {group}
              </option>
            ))}
          </select>

          <div className="actionButtons">
            <button
              className="btn-cancel"
              onClick={() => history.push("/stored")}
            >
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Products;
