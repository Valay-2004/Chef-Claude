import logo from "../images/logo_icon.png";

export default function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Chef-Claude-Icon" />
        <p>Chef Claude</p>
      </header>
    </>
  );
}
