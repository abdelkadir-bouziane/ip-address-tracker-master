import IpSearchbar from "./IpSearchbar";
import IpInfos from "./IpInfos";

function Header() {
  return (
    <header>
      <h1>IP Address Tracker</h1>
      <IpSearchbar />
      <IpInfos />
    </header>
  );
}

export default Header;
