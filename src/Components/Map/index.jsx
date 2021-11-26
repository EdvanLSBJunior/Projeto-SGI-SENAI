import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import SERVER from "../../utils/constants";
import "./style.css";

const Map = () => {
  const [companiesList, setCompaniesList] = useState([]);

  useEffect(() => {
    async function handleGetCompanies() {
      try {
        const response = await fetch(SERVER + "/empresas");
        const data = await response.json();

        setCompaniesList(data);
      } catch (error) {
        alert(
          "Houve um erro ao tentar listar as empresas. Entre em contato com suporte."
        );
      }
    }
    handleGetCompanies();
  }, []);

  return (
    <div className="map-container">
      <h1 className="tittle">Empresas cadastradas</h1>

      <MapContainer
        center={[-12.87232362230724, -38.52375213979855]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {companiesList.map((item, id) => (
          <Marker position={[item.latitude, item.longitude]} key={id}>
            <Popup>
              <p>Razão Social: {item.company}</p>
              <p>Nome Fantasia: {item.fantasyName}</p>
              <p>CNPJ: {item.cnpj}</p>
              <p>E-mail: {item.email}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
