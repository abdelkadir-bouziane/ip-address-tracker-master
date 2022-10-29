import { IoIosArrowForward } from "react-icons/io";

function IpSearchBar() {
  return (
    <div className="ip-search-bar">
      <input type="text" placeholder="Search for any IP address or domain" />
      <button>
        <IoIosArrowForward className="arrow-icon"/>
      </button>
    </div>
  );
}

export default IpSearchBar;
