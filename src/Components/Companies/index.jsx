import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import SERVER from "../../utils/constants";
import "./style.css";

const Companies = () => {
  const history = useHistory();

  const [company, setCompany] = useState("");
  const [fantasyName, setFantasyName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");

  const [cep, setCep] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [numberAddress, setNumberAddress] = useState("");
  const [districtAddress, setDistrictAddress] = useState("");
  const [cityAddress, setCityAddress] = useState("");
  const [stateAddress, setStateAddress] = useState("");
  const [complementAddress, setComplementAddress] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (!company) {
        toast.error("Razão social é obrigatória", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      } else if (!fantasyName) {
        toast.error("Nome fantasia é obrigatório", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      } else if (!cnpj) {
        toast.error("CNPJ é obrigatório", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      } else if (!email) {
        toast.error("E-mail é obrigatório", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      } else if (!cep) {
        toast.error("CEP é obrigatório", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      } else if (!streetAddress) {
        toast.error("Endereço é obrigatório", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      } else if (!numberAddress) {
        toast.error("Número é obrigatório", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      } else if (!districtAddress) {
        toast.error("districtAddress é obrigatório", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      } else if (!cityAddress) {
        toast.error("cityAddress é obrigatório", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      } else if (!latitude) {
        toast.error("Latitude é obrigatória", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      } else if (!longitude) {
        toast.error("setLongitude é obrigatória", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        return;
      }

      await fetch(SERVER + "/empresas", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          company: company,
          fantasyName: fantasyName,
          cnpj: cnpj,
          email: email,
          cep: cep,
          streetAddress: streetAddress,
          numberAddress: numberAddress,
          districtAddress: districtAddress,
          cityAddress: cityAddress,
          stateAddress: stateAddress,
          complementAddress: complementAddress,
          latitude: latitude,
          longitude: longitude,
        }),
      });

      toast.success("Empresa cadastrada com sucesso", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });

      history.push("/map");
    } catch (error) {
      toast.error(
        "Houve um problema no cadastro de novo produto. Estamos tentando resolver!",
        {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        }
      );
      history.push("/map");
    }
  };

  return (
    <>
      <div>
        <h1 className="title">Nova empresa</h1>
      </div>
      <form className="form-sgi" onSubmit={handleSubmit}>
        <div className="form-sgi-wrapper">
          <div className="form-grupo">
            <label>Razão Social*</label>
            <input
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            ></input>
          </div>
          <div className="form-grupo">
            <label>Nome Fantasia*</label>
            <input
              type="text"
              value={fantasyName}
              onChange={(event) => setFantasyName(event.target.value)}
            ></input>
          </div>
          <div className="form-grupo">
            <label>CNPJ*</label>
            <input
              type="text"
              value={cnpj}
              onChange={(event) => setCnpj(event.target.value)}
            ></input>
          </div>
          <div className="form-grupo">
            <label>E-mail*</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></input>
          </div>
          <div className="form-grupo">
            <label>CEP*</label>
            <input
              type="text"
              value={cep}
              onChange={(event) => setCep(event.target.value)}
            ></input>
          </div>
          <div className="form-grupo">
            <label>Endereço*</label>
            <input
              type="text"
              value={streetAddress}
              onChange={(event) => setStreetAddress(event.target.value)}
            ></input>
          </div>
          <div className="form-grupo">
            <label>Número*</label>
            <input
              type="number"
              value={numberAddress}
              onChange={(event) => setNumberAddress(event.target.value)}
            ></input>
          </div>
          <div className="form-grupo">
            <label>Bairro*</label>
            <input
              type="text"
              value={districtAddress}
              onChange={(event) => setDistrictAddress(event.target.value)}
            ></input>
          </div>
          <div className="form-grupo">
            <label>Cidade*</label>
            <input
              type="text"
              value={cityAddress}
              onChange={(event) => setCityAddress(event.target.value)}
            ></input>
          </div>
          <div className="form-grupo">
            <label>Estado*</label>
            <input
              type="text"
              value={stateAddress}
              onChange={(event) => setStateAddress(event.target.value)}
            ></input>
          </div>
          <div className="form-grupo">
            <label>Complemento</label>
            <input
              type="text"
              value={complementAddress}
              onChange={(event) => setComplementAddress(event.target.value)}
            ></input>
          </div>
          <div className="form-grupo">
            <label>Latitude*</label>
            <input
              className="position-input"
              type="text"
              value={latitude}
              onChange={(event) => setLatitude(event.target.value)}
            ></input>
          </div>
          <div className="form-grupo">
            <label>Longitude*</label>
            <input
              className="position-input"
              type="text"
              value={longitude}
              onChange={(event) => setLongitude(event.target.value)}
            ></input>
          </div>
        </div>
        <div className="actionButtons">
          <button
            className="btn-cancel"
            onClick={() => history.push("/map")}
            type="button"
          >
            Cancelar
          </button>
          <button className="btn-save" type="submit">
            Salvar
          </button>
        </div>
      </form>
    </>
  );
};

export default Companies;
