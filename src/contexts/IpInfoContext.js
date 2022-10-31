import { createContext, useState, useEffect } from "react";

const IpInfoContext = createContext();

export const IpInfoProvider = ({ children }) => {
  const [userIpAdress, setUserIpAdress] = useState("");
  const [inputIpAddress, setInputIpAddress] = useState("");
  const [lastIpInfos, setLastIpInfos] = useState({
    ipAddress: "",
    isp: "",
    timezone: "",
    city: "",
    state: "",
    postalCode: "",
    lat: "",
    lng: "",
  });

  const getIpInfos = (ip) => {
    return fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_6ObQJI78VcANHQvjU9XIOpbVh3Dxk&ipAddress=${ip}`
    )
      .then((res) => res.json())
      .then((res) => ({
        ipAddress: res.ip,
        isp: res.isp,
        timezone: res.location.timezone,
        city: res.location.city,
        state: res.location.region,
        postalCode: res.location.postalCode,
        lat: res.location.lat,
        lng: res.location.lng,
      }));
  };

  const getInputIpInfos = async (e) => {
    e.preventDefault();
    setLastIpInfos(await getIpInfos(inputIpAddress));
  };

  useEffect(() => {
    fetch("https://geolocation-db.com/json/")
      .then((res) => res.json())
      .then((res) => res.IPv4)
      .then((ip) => {
        setUserIpAdress(ip);
        return getIpInfos(ip);
      })
      .then((ipInfos) => {
        setLastIpInfos(ipInfos);
      });
  }, []);

  return (
    <IpInfoContext.Provider
      value={{
        inputIpAddress,
        lastIpInfos,
        setInputIpAddress,
        setLastIpInfos,
        getInputIpInfos,
      }}
    >
      {children}
    </IpInfoContext.Provider>
  );
};

export default IpInfoContext;
