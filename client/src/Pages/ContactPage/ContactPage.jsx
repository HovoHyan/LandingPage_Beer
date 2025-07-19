import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./contactPage.scss";

const PRODUCT_COLORS = {
  "WEIZEN": "#fbb44c",
  "PILSNER": "#425f76",
  "AMERICAN WHEAT ALE": "#a9a161",
  "DUNKEL": "#471917",
  "CHERRY": "#9e1e20",
  "ARMENIAN BARLEY WINE": "#dba94f",
};

const createIcon = (color) =>
  L.divIcon({
    className: "custom-marker",
    html: `<div style="background-color:${color}; width:16px; height:16px; border-radius:50%; border: 1px solid white;"></div>`,
  });

const FlyToLocation = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 16, { duration: 1.5 });
    }
  }, [position]);
  return null;
};

const FitMapToBounds = ({ bounds }) => {
  const map = useMap();
  useEffect(() => {
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [bounds]);
  return null;
};

const ContactPage = () => {
  const [activeLocation, setActiveLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [locations, setLocations] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation([latitude, longitude]);
      },
      () => {
        setUserLocation([40.1811, 44.5136]);
      }
    );

    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((loc) => ({
          ...loc,
          position: [loc.latitude, loc.longitude],
        }));
        setLocations(mapped);
      });
  }, []);

  const filteredLocations = selectedType
    ? locations.filter((loc) =>
        loc.products.some((p) => p.type === selectedType)
      )
    : locations;

  const bounds = L.latLngBounds(filteredLocations.map((loc) => loc.position));

  return (
    <div className="contact-page">
      <div className="sidebar">
        <h3>Վայրեր</h3>
        <div className="location-list">
          {filteredLocations.map((loc) => (
            <button key={loc.id} onClick={() => setActiveLocation(loc.position)}>
              <strong>{loc.name}</strong>
              <br />
              <small>{loc.region}</small>
            </button>
          ))}
        </div>

        <div className="product-filter">
          <h4>Ընտրել արտադրանք</h4>
          <div className="filter-buttons">
            {Object.keys(PRODUCT_COLORS).map((type) => (
              <button
                key={type}
                className={selectedType === type ? "active" : ""}
                style={{
                  backgroundColor:
                    selectedType === type ? PRODUCT_COLORS[type] : "#f0f0f0",
                  color: selectedType === type ? "#fff" : "#000",
                }}
                onClick={() =>
                  setSelectedType(selectedType === type ? null : type)
                }
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="map-container">
        <MapContainer
          style={{ height: "100%", width: "100%" }}
          center={userLocation || [40.1811, 44.5136]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {filteredLocations.map((loc) => {
            const matchingProduct = selectedType
              ? loc.products.find((p) => p.type === selectedType)
              : null;

            const color = matchingProduct
              ? PRODUCT_COLORS[matchingProduct.type]
              : "#333";

            return (
              <Marker
                key={loc.id}
                position={loc.position}
                icon={createIcon(color)}
                eventHandlers={{
                  click: () => setActiveLocation(loc.position),
                }}
              >
                <Popup>
                  <strong>{loc.name}</strong>
                  <br />
                  {loc.region}
                  <br />
                  {loc.products.map((p, i) => (
                    <div key={i}>
                      {p.type} - {p.form}
                    </div>
                  ))}
                </Popup>
              </Marker>
            );
          })}

          <FitMapToBounds bounds={bounds} />
          {activeLocation && <FlyToLocation position={activeLocation} />}
        </MapContainer>
      </div>
    </div>
  );
};

export default ContactPage;
