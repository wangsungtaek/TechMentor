import { Row, Col } from "antd";
import "./Login.css";
import bgImg from "../assets/img/loginImg.png";

import LoginHeader from "../components/login/Header";
import LoginForm from "../components/login/LoginForm";

const Login = () => {
  return (
    <div className="Login">
      <div className="login_header">
        <LoginHeader />
      </div>
      <div className="login_body">
        <Row>
          <Col xs={24} lg={12} className="left_area">
            <div className="description">
              반가워요, 테크 서포트를 지원하는 <br />
              테크멘토입니다.
            </div>
            <img className="login_img" src={bgImg} />
          </Col>
          <Col xs={24} lg={12} className="right_area">
            <LoginForm />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
