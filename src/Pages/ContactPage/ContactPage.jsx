import React, { useState, useEffect } from "react";
import { locations } from "../../Data/locationData";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./contactPage.scss";

const createIcon = (color) =>
  L.divIcon({
    className: "custom-marker",
    html: `<div style="background-color:${color}; width:16px; height:16px; border-radius:50%"></div>`,
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
    map.fitBounds(bounds, { padding: [50, 50] });
  }, []);
  return null;
};

const ContactPage = () => {
  const [activeLocation, setActiveLocation] = useState(null);

  const bounds = L.latLngBounds(locations.map((loc) => loc.position));

  return (
    <div className="contact-page">
      <div className="location-buttons">
        {locations.map((loc) => (
          <button key={loc.id} onClick={() => setActiveLocation(loc.position)}>
            {loc.name}
          </button>
        ))}
      </div>

      <MapContainer
        style={{ height: "600px", width: "100%" }}
        center={[40.1811, 44.5136]}
        zoom={14}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap"
        />
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={loc.position}
            icon={createIcon(loc.color)}
          >
            <Popup>{loc.description}</Popup>
          </Marker>
        ))}
        <FitMapToBounds bounds={bounds} />
        {activeLocation && <FlyToLocation position={activeLocation} />}
      </MapContainer>
    </div>
  );
};

export default ContactPage;
