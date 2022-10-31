import React from "react";
import { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import IpInfoContext from "../contexts/IpInfoContext";

function IpSearchBar() {
  const { setInputIpAddress, getInputIpInfos } = useContext(IpInfoContext);

  return (
    <form className="ip-search-bar" onSubmit={getInputIpInfos}>
      <input
        type="text"
        placeholder="Search for any IP address or domain"
        onChange={(e) => setInputIpAddress(e.target.value)}
      />
      <button type="submite">
        <IoIosArrowForward className="arrow-icon" />
      </button>
    </form>
  );
}

export default IpSearchBar;
