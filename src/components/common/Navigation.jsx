import { useLocation, useNavigate } from "react-router-dom";
import {
  ReconciliationOutlined,
  ApiOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "./Navigation.css";

const Navigation = ({ isCollapsed }) => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);

  const isActive = (path) => (pathname === path ? "ACTIVE" : "");

  return (
    <div className={`Navigation ${isCollapsed ? "Navigation_collapsed" : ""}`}>
      {/* Nav */}
      <nav className={`nav ${isCollapsed ? "nav_collapsed" : ""}`}>
        <ul>
          <li
            className={`${isCollapsed ? "manu_collapsed" : ""}${isActive(
              "/tech-status"
            )}`}
            onClick={() => nav("/tech-status")}
          >
            <span className="icon">
              <ReconciliationOutlined />
            </span>
            <span className="label">기술 지원 현황</span>
          </li>

          <li
            className={`${isCollapsed ? "manu_collapsed" : ""}${isActive(
              "/lbd"
            )}`}
            onClick={() => nav("/lbd")}
          >
            <span className="icon">
              <ApiOutlined />
            </span>
            <span className="label">LBD API</span>
          </li>

          <li
            className={`${isCollapsed ? "manu_collapsed" : ""}${isActive(
              "/dosi-sdk"
            )}`}
            onClick={() => nav("/dosi-sdk")}
          >
            <span className="icon">
              <ApiOutlined />
            </span>
            <span className="label">DOSI SDK</span>
          </li>

          <li
            className={`${isCollapsed ? "manu_collapsed" : ""}${isActive(
              "/ops-helper"
            )}`}
            onClick={() => nav("/ops-helper")}
          >
            <span className="icon">
              <AppstoreOutlined />
            </span>
            <span className="label">운영 지원</span>
          </li>

          <li
            className={`${isCollapsed ? "manu_collapsed" : ""}${isActive(
              "/settle-helper"
            )}`}
            onClick={() => nav("/settle-helper")}
          >
            <span className="icon">
              <AppstoreOutlined />
            </span>
            <span className="label">정산 지원</span>
          </li>

          <li
            className={`${isCollapsed ? "manu_collapsed" : ""}${isActive(
              "/config"
            )}`}
            onClick={() => nav("/config")}
          >
            <span className="icon">
              <SettingOutlined />
            </span>
            <span className="label">설정</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
