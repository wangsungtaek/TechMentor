import { useLocation, useNavigate } from "react-router-dom";

import "./MainHeader.css";
import logo_dark from "../../assets/img/logo_dark.png";

const MainHeader = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();

  const isLogin = false;

  const isActive = (path) => (pathname === path ? "ACTIVE" : "");

  return (
    <>
      <div className="nav_spacing"></div>
      <header className="MainHeader">
        <div className="header_wrapper">
          <div className="left_area">
            <img src={logo_dark} alt="로고이미지" />
            <h1>TechMentor</h1>
            <ul className="main_header_nav">
              <li className={isActive("/")}>
                <div onClick={() => nav("/")}>홈</div>
              </li>
              <li className={isActive("/lbd")}>
                <div onClick={() => nav("/lbd")}>LBD API</div>
              </li>
              <li className={isActive("/dosiSdk")}>
                <div onClick={() => nav("/dosiSdk")}>DOSI SDK</div>
              </li>
              <li className={isActive("/dosiSdk")}>
                <div onClick={() => nav("/dosiSdk")}>정산 지원</div>
              </li>
              <li className={isActive("/dosiSdk")}>
                <div onClick={() => nav("/dosiSdk")}>운영 지원</div>
              </li>
            </ul>
          </div>
          <div className="right_area">
            <ul>
              {isLogin ? (
                <li className="myInfo_btn">
                  <div>내정보</div>
                </li>
              ) : (
                <li className="login_btn">
                  <div onClick={() => nav("/login")}>로그인</div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
