import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import { useContext, useEffect } from "react";
import IpInfoContext from "../contexts/IpInfoContext";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: require("../assets/icon-location.png"),
  iconSize: [24, 30],
  iconAnchor: [12, 45],
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
        zoomControl={false}
        zoom={10}
        style={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=ziBhOxg5suVjetGaHOne"
        />
        <ZoomControl position="bottomright" />
        <Marker position={[lastIpInfos.lat, lastIpInfos.lng]} icon={markerIcon}>
          <Popup>Location of the ip address "{lastIpInfos.ipAddress}"</Popup>
        </Marker>
        <SetViewOnStateChange />
      </MapContainer>
    </div>
  );
}

export default Map;
