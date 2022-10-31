import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useContext, useEffect } from "react";
import IpInfoContext from "../contexts/IpInfoContext";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: require("../assets/icon-location.png"),
  iconSize: [24, 30],
  iconAnchor: [12, 33],
});

function Map() {
  const { lastIpInfos } = useContext(IpInfoContext);

  function SetViewOnStateChange() {
    const map = useMap();
    useEffect(() => {
      map.setView([lastIpInfos.lat, lastIpInfos.lng]);
    }, [lastIpInfos.lat]);
    return null;
  }

  return (
    <div id="map">
      <MapContainer
        center={[lastIpInfos.lat, lastIpInfos.lng]}
        zoom={10}
        style={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
        s
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lastIpInfos.lat, lastIpInfos.lng]} icon={markerIcon}>
          <Popup>Location of the ip address "{lastIpInfos.ipAddress}"</Popup>
        </Marker>
        <SetViewOnStateChange />
      </MapContainer>
    </div>
  );
}

export default Map;
