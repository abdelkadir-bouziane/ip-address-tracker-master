import { createContext, useState, useEffect } from "react";
import axios from "axios";

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
    return axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_WtpadgGHbefnLezVhsJOvhRzRnr0u&ipAddress=${ip}`
      )
      .then((res) => ({
        ipAddress: res.data.ip,
        isp: res.data.isp,
        timezone: res.data.location.timezone,
        city: res.data.location.city,
        state: res.data.location.region,
        postalCode: res.data.location.postalCode,
        lat: res.data.location.lat,
        lng: res.data.location.lng,
      }));
  };

  const getInputIpInfos = async (e) => {
    e.preventDefault();
    setLastIpInfos(await getIpInfos(inputIpAddress));
  };

  useEffect(() => {
    axios
      .get("https://geolocation-db.com/json/")
      .then((res) => res.data.IPv4)
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
