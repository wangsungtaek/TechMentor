import { useNavigate } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import "./Header.css";

const Header = () => {
  const nav = useNavigate();
  return (
    <div className="Header" onClick={() => nav("/login")}>
      <img className="logo_img" src={logo} />
      <div className="logo_name">Tech Metor</div>
    </div>
  );
};

export default Header;
