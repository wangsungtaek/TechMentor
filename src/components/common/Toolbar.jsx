import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MenuOutlined, UserOutlined } from "@ant-design/icons";

import "./Toolbar.css";

const Toolbar = ({ onClickMenu }) => {
  const [isLogin, setIsLogin] = useState(false);
  const nav = useNavigate();

  return (
    <div className="Toolbar">
      {/* 로고 */}
      <div className="logo_wrapper">
        <MenuOutlined className="menu_btn" onClick={onClickMenu} />
        <h1 className="logo" onClick={() => nav("/")}>
          테크멘토
        </h1>
      </div>

      {/* 로그인 정보 */}
      <div className="login_info_wrapper">
        {isLogin ? (
          <UserOutlined className="info_img" />
        ) : (
          <div className="login_btn" onClick={() => nav("/login")}>
            로그인
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
