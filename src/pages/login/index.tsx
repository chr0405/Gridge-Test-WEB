import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useRecoilState } from "recoil";
import { jwtState, nameState } from "../../recoil/login";
import axios from 'axios';
// import { REST_API_KEY, REDIRECT_URI } from '../../kakaoCode';
import userApis from '../../apis/userApis';
import styled from 'styled-components';

import iphone1 from '../../img/iphone 13 mini.png';
import iphone2 from '../../img/iphone 13 mini (1).png';
import logo from '../../img/mainlogo.png';
import mail from '../../img/mail.png';
import lock from '../../img/mail (1).png';
import kakao from '../../img/Frame 10725.png';
import PlayStore from '../../img/Mobile app store badge.png';
import AppStore from '../../img/Mobile app store badge (1).png';

const Login = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useRecoilState(nameState);
  const [jwt, setJwt] = useRecoilState(jwtState);

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

  const [warningText, setWarningText] = useState('');

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
      // 추후 삭제
      console.log("연결 성공", response);
      console.log('jwt 넣을게요');
      setJwt(response.data.result.jwt);
      console.log(jwt);
      localStorage.setItem('jwt', jwt);
    } catch (error) {
      // 추후 삭제
      console.log('오류 발생 : ', error);
      if (axios.isAxiosError(error)) {
        // 추후 삭제
        console.log('response : ', error.response?.data);
        const errorResponse = error.response?.data.statusCode;
        if (errorResponse) {
          if(errorResponse === 404){
            idExistCheck();
          }
        }
      }
    }
  };

  const idExistCheck = async() => {
    const loginId : string = name;
    // 추후 삭제
    console.log('idExistCheck func');
    console.log(loginId);
    try{
      const response = await axios.get(`https://api-sns.gridge-test.com/users?loginId=${loginId}`);
      // 추후 삭제
      const isExist = response.data.result.isExist;
      console.log(isExist);
      if(isExist){
        setWarningText('잘못된 비밀번호입니다. 다시 확인하세요.');
      } else {
        setWarningText('입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.');
      }
    } catch (error) {
      // 추후 삭제
      console.error('오류 발생 : ', error);
    }
  }

  const handleKakaoLogin = async () => {
    
    // const kakaoLoginlink = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    // window.location.href = kakaoLoginlink;

    // 임시로 토큰 사용 api 연결 test
    // 추후 삭제
    try{
      const response = await userApis.profile(name);
      console.log('잘 받았어요 : ', response);
    } catch(error){
      console.log('잘 못 받았어요');
    }
  };

  // 가입하기 이동
  const handleSignUp = () => {
    navigate(`/sign-up`);
  }

  return (
    <S.LoginRoot>
      <S.BasicWrap>
        <S.Img src={iphone1}/>
        <S.Img2 src={iphone2}/>
      </S.BasicWrap>
      <S.MainDiv>
        <S.LoginBox>

          <S.Logo src={logo}/>

          <S.IdDiv>
            <S.mailImg src={mail}/>
            <S.mailInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onKeyUp={onKeyUpId}
            />
          </S.IdDiv>
          
          <S.PasswordDiv>
            <S.lockImg src={lock}/>
            <S.PasswordInput
            type = {hide ? 'password' : 'text'}
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="비밀번호"
            onKeyUp={onKeyUpPassword}
            />
            {pwd.length > 0 && (
              <PasswordDisplay
              hide={hide}
              onClick={() => onToggleHide()}>
                {hide ? "비밀번호 표시" : "숨기기"}
              </PasswordDisplay>
            )}
          </S.PasswordDiv>
          <LoginBtn
          isLoginButtonEnabled={isLoginButtonEnabled}
          onClick={isLoginButtonEnabled ? handleLogin : undefined}
          >
          로그인
          </LoginBtn>
          <S.Or>
            or
          </S.Or>
          <S.KaKaoLoginBtn
          onClick={handleKakaoLogin}>
            <S.KakaoImg src={kakao}/>
            <S.KakaoText>카카오 로그인</S.KakaoText>
          </S.KaKaoLoginBtn>
          <S.WarningText>
            {warningText}
          </S.WarningText>
          <S.ForgottenPwd>
            비밀번호를 잊으셨나요?
          </S.ForgottenPwd>
        </S.LoginBox>

        <S.SignUpBox>
          <S.HaveAnAccount>
            계정이 없으신가요?
          </S.HaveAnAccount>
          <S.GoToSignUp
          onClick={handleSignUp}>
            가입하기
          </S.GoToSignUp>
        </S.SignUpBox>
        <S.AppDownloadBox>
          <S.AppDownloadText>앱을 다운로드 하세요.</S.AppDownloadText>
          <div>
            <S.PlayStoreImg src={PlayStore}/>
            <S.AppStoreImg src={AppStore}/>
          </div>
        </S.AppDownloadBox>
      </S.MainDiv>
    </S.LoginRoot>
  );
};

export default Login;

interface LoginBtnProps {
  isLoginButtonEnabled: boolean;
}

const LoginBtn = styled.button<LoginBtnProps>`
  width: 320px;
  height: 44px;

  border-radius: 30px;
  border-width: 0px;
  
  /* position: absolute;
  top: 337px; */

  margin-top: 20px;
  
  font-weight: 600;
  font-size: 16px;
  color: white;
  line-height: 24px;
  text-align: center;
  
  background-color: ${props => props.isLoginButtonEnabled ? '#2E90FA' : '#B2DDFF'};
`;

interface PasswordDisplayProps {
  hide: boolean;
}

const PasswordDisplay = styled.div<PasswordDisplayProps>`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  position: absolute;
  left: ${props => props.hide? '250px' : '300px'};

  text-align: right;

  color: #191919;
`;