import "./MainHeader.css";
import logo_dark from "../../assets/img/logo_dark.png";

const MainHeader = () => {
  return (
    <header className="MainHeader">
      <div className="left_area">
        <img src={logo_dark} alt="로고이미지" />
        <h1>TechMentor</h1>
        <ul>
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a href="/lbd">LBD API</a>
          </li>
          <li>
            <a href="/dosiSdk">DOSI SDK</a>
          </li>
          <li>
            <a href="/dosiSdk">정산 지원</a>
          </li>
          <li>
            <a href="/dosiSdk">운영 지원</a>
          </li>
        </ul>
      </div>
      <div className="right_area">
        <ul>
          <li className="login_btn">
            <a href="/login">로그인</a>
          </li>
          <li className="myInfo_btn">
            <div>내정보</div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainHeader;
