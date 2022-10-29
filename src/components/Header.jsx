import IpSearchBar from "./IpSearchBar";
import IpInfos from "./IpInfos";

function Header() {
  return (
    <header>
      <h1>IP Address Tracker</h1>
      <IpSearchBar />
      <IpInfos />
    </header>
  );
}

export default Header;
