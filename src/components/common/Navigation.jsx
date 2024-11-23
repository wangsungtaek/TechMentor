import { useState } from "react";
import {
  ReconciliationOutlined,
  ApiOutlined,
  MenuOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

import "./Navigation.css";

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`Navigation ${isCollapsed ? "Navigation_collapsed" : ""}`}>
      {/* Header */}
      <header className="nav_header">
        <div className="menu_btn" onClick={toggleMenu}>
          <MenuOutlined />
        </div>
        <h1 className="logo">테크멘토</h1>
      </header>

      {/* Nav */}
      <nav className={`nav ${isCollapsed ? "nav_collapsed" : ""}`}>
        <ul>
          <li className={`${isCollapsed ? "manu_collapsed" : ""}`}>
            <span className="icon">
              <ReconciliationOutlined />
            </span>
            <span className="label">기술 지원 현황</span>
          </li>
          <li className={`${isCollapsed ? "manu_collapsed" : ""}`}>
            <span className="icon">
              <ApiOutlined />
            </span>
            <span className="label">LBD API</span>
          </li>
          <li className={`${isCollapsed ? "manu_collapsed" : ""}`}>
            <span className="icon">
              <ApiOutlined />
            </span>
            <span className="label">DOSI SDK</span>
          </li>
          <li className={`${isCollapsed ? "manu_collapsed" : ""}`}>
            <span className="icon">
              <AppstoreOutlined />
            </span>
            <span className="label">운영 지원</span>
          </li>
          <li className={`${isCollapsed ? "manu_collapsed" : ""}`}>
            <span className="icon">
              <AppstoreOutlined />
            </span>
            <span className="label">정산 지원</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
