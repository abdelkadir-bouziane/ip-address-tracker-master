import React from "react";
import { useContext } from "react";
import IpInfoContext from "../contexts/IpInfoContext";

function IpInfos() {
  const { lastIpInfos } = useContext(IpInfoContext);

  return (
    <article className="ip-adress-infos">
      <div>
        <h3>IP Address</h3>
        <p>{lastIpInfos.ipAddress}</p>
      </div>
      <div>
        <h3>Location</h3>
        <p>{`${lastIpInfos.city}, ${lastIpInfos.state} ${lastIpInfos.postalCode}`}</p>
      </div>
      <div>
        <h3>Timezone</h3>
        <p>{`UTC ${lastIpInfos.timezone}`}</p>
      </div>
      <div>
        <h3>ISP</h3>
        <p>{lastIpInfos.isp}</p>
      </div>
    </article>
  );
}

export default IpInfos;
