import React from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import { IpInfoProvider } from "./contexts/IpInfoContext";

function App() {
  return (
    <IpInfoProvider>
      <Header />
      <Map />
    </IpInfoProvider>
  );
}

export default App;
