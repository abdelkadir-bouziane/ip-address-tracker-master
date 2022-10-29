import { useState } from "react";

function IpInfos() {
  const [ipAdress, setIpAdress] = useState("192.212.174.101");
  const [location, setLocation] = useState("Brooklyn, NY 10001");
  const [timezone, setTimezone] = useState("UTC -05:00");
  const [isp, setIsp] = useState("SpaceX Starlink");

  return (
    <article className="ip-adress-infos">
      <div>
        <h3>IP Address</h3>
        <p>{ipAdress}</p>
      </div>
      <div>
        <h3>Location</h3>
        <p>{location}</p>
      </div>
      <div>
        <h3>Timezone</h3>
        <p>{timezone}</p>
      </div>
      <div>
        <h3>ISP</h3>
        <p>{isp}</p>
      </div>
    </article>
  );
}

export default IpInfos;
