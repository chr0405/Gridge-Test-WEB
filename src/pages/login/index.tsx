import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { InputWrap, LoginButton, LoginRoot, Wrap } from "./styles";
import { useRecoilState } from "recoil";
import { jwtState, nameState } from "../../recoil/login";
import axios from 'axios';
import { REST_API_KEY, REDIRECT_URI } from '../../kakaoCode';

const Login = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useRecoilState(nameState);
  const [, setJwt] = useRecoilState(jwtState);

  // 아이디
  const onKeyUpId = (event: React.KeyboardEvent<HTMLElement>) => {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    // 20자 이하로 제한
    if (inputValue.length > 20) {
      inputElement.value = inputValue.slice(0, 20);
    }

    const key = event.key || event.keyCode;

    // 아이디 input으로 enter key를 누를 경우
    // 13은 enter key의 key code
    if (key === "Enter" || key === 13) {
      return; 
    }

  };

  // 비밀번호
  const [pwd, setPwd] = useState("");

  const onKeyUpPassword = (event: React.KeyboardEvent<HTMLElement>) => {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    // 20자 이하로 제한
    if (inputValue.length > 20) {
      inputElement.value = inputValue.slice(0, 20);
    }

    const key = event.key || event.keyCode;

    // 아이디 input으로 enter key를 누를 경우
    // 13은 enter key의 key code
    if (key === "Enter" || key === 13) {
      return; 
    }

  };

  // 비밀번호 표시
  const [hide, setHide] = useState(true);

  const onToggleHide = () => {
    setHide(prev => !prev);
  };

  // 로그인 버튼 활성화 여부
  const isLoginButtonEnabled = name.length >= 1 && pwd.length >= 6;

  // 로그인 버튼 클릭
  const handleLogin = async () => {

    const loginId = name;
    const password = pwd;    

    // 추후 삭제
    console.log("loginId : ", loginId);
    console.log("password : ", password);

    try {
      const response = await axios.post(
        `https://api-sns.gridge-test.com/auth/sign-in`,
        { loginId, password }
      );
      console.log("연결 성공", response);
      setJwt("success login");
    } catch (error) {
      console.error('오류 발생 : ', error);
    }
  };

  // const idExistCheck = async() => {
  //   const loginId = name;
  //   try{
  //     const response = await axios.get(`https://api-sns.gridge-test.com/users?userId=${loginId}`);
  //     console.log('연결 성공', response);
  //   } catch (error) {
  //     console.error('오류 발생 : ', error);
  //   }
  // }

  const handleKakaoLogin = async () => {
    
    const kakaoLoginlink = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = kakaoLoginlink;
  };

  // 가입하기 이동
  const handleSignUp = () => {
    navigate(`/sign-up`);
  }

  return (
    <LoginRoot>
      <Wrap>

        <InputWrap
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onKeyUp={onKeyUpId}
        />

        <div>
          <InputWrap
          type = {hide ? 'password' : 'text'}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          placeholder="비밀번호"
          onKeyUp={onKeyUpPassword}
          />
        {pwd.length > 0 && (
          <div
          onClick={() => onToggleHide()}
          style={{ 
            fontSize: "1.8rem",
            fontWeight: "600",
            marginBottom: "1rem" }}>
            {hide ? "비밀번호 표시" : "숨기기"}
          </div>
        )}
        </div>

        <LoginButton
        onClick={isLoginButtonEnabled? handleLogin : undefined}>
          로그인
        </LoginButton>
        <div
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          or
        </div>
        <LoginButton
        onClick={handleKakaoLogin}>카카오 로그인</LoginButton>
        <div
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          비밀번호를 잊으셨나요?
        </div>
      </Wrap>
      <Wrap>
        <div
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          계정이 없으신가요?
        </div>
        <div
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
          onClick={handleSignUp}
        >
          가입하기
        </div>
      </Wrap>
      <div
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          앱을 다운로드 하세요.
        </div>
    </LoginRoot>
  );
};

export default Login;