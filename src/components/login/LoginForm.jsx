import { useNavigate } from "react-router-dom";

import { Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "./LoginForm.css";

import SnsItem from "./SnsItem";
import ComButton from "../common/ComButton";

const LoginForm = () => {
  const nav = useNavigate();
  return (
    <div className="LoginForm">
      <h4 className="login_title">테크멘토 로그인</h4>
      <form className="login_form">
        <Input
          className="login_email"
          size="large"
          placeholder="이메일을 입력해 주세요"
          prefix={<MailOutlined />}
        />
        <Input.Password
          className="login_password"
          size="large"
          placeholder="비밀번호를 입력해 주세요"
          prefix={<LockOutlined />}
        />
        <div className="button_wrapper">
          <ComButton text={"로그인하기"} block onClick={() => nav("/")} />
          <ComButton text={"이메일 회원가입"} type={"WHITE"} block />
          <a className="password_reset">비밀번호 재설정</a>
        </div>
      </form>

      <h4>SNS 계정으로 간편하게 시작하기</h4>
      <div className="snsItem_list">
        <SnsItem name={"google"} />
        <SnsItem name={"kakao"} />
        <SnsItem name={"git"} />
        <SnsItem name={"facebook"} />
        <SnsItem name={"naver"} />
      </div>
    </div>
  );
};

export default LoginForm;
