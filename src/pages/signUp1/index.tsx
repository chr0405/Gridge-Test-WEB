import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useRecoilState } from "recoil";
import { signUp1State, signUp2State/*, signUp3State*/ } from "../../recoil/signUpPageChange";
import axios from 'axios';
import styled from 'styled-components';

// import request from '../../apis/core/index';
import * as U from "../../utils/utility"
import iphone1 from '../../img/iphone 13 mini.png';
import iphone2 from '../../img/iphone 13 mini (1).png';
import logo from '../../img/mainlogo.png';
import kakao from '../../img/Frame 10725.png';
import mail from '../../img/mail.png';
import lock from '../../img/mail (1).png';
import settings from '../../img/settings.png';
import user from '../../img/user.png';
import PlayStore from '../../img/Mobile app store badge.png';
import AppStore from '../../img/Mobile app store badge (1).png';
import xImg from '../../img/x-circle.png';
import checkImg from '../../img/x-circle (1).png';

const SignUp = () => {
  const navigate = useNavigate();

  const [, setSignUp1] = useRecoilState(signUp1State);
  const [, setSignUp2] = useRecoilState(signUp2State);
  // const [signUp3, setSignUp3] = useRecoilState(signUp3State);

  const [phoneNumder, setPhoneNumder] = useState("");

  // 휴대폰 번호
  const onKeyUpPhoneNumder = (event: React.KeyboardEvent<HTMLElement>) => {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    // 20자 이하로 제한
    if (inputValue.length > 20) {
      inputElement.value = inputValue.slice(0, 20);
    }

    const key = event.key || event.keyCode;

    if (key === "Enter" || key === 13) {
      return; 
    }
  };

  // 성명
  const [userName, setUserName] = useState("");

  const onKeyUpUserName = (event: React.KeyboardEvent<HTMLElement>) => {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    // 20자 이하로 제한
    if (inputValue.length > 20) {
      inputElement.value = inputValue.slice(0, 20);
    }

    const key = event.key || event.keyCode;

    if (key === "Enter" || key === 13) {
      return; 
    }
  };

  // 아이디
  const [userId, setUserId] = useState("");
  const [userIdTestResult, setUserIdTestResult] = useState(false);

  const onKeyUpUserId = (event: React.KeyboardEvent<HTMLElement>) => {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    // 20자 이하로 제한
    if (inputValue.length > 20) {
      inputElement.value = inputValue.slice(0, 20);
    }

    const key = event.key || event.keyCode;

    if (key === "Enter" || key === 13) {
      return; 
    }

    const userIdTest = /^[a-z0-9_.]+$/;
    setUserIdTestResult(userIdTest.test(userId));
  };

  // 아이디 유효성 검사
  const [userIdTestAllResult, setUserIdTestAllResult] = useState(false);
  const [userIdExistTest, setUserIdExistTest] = useState(false);

  // API 연결 보류
  const onBlurUserId = async () => {

    // 없앨 거
    console.log(userIdTestAllResult);

    setUserIdExistTest(await idExistCheck());

    if(userIdTestResult && userIdExistTest){
      setUserIdTestAllResult(true);
    }
    else{setUserIdTestAllResult(false);}
  }

  const idExistCheck = async () => {
    try {
      const response = await axios.get(`https://api-sns.gridge-test.com/users?loginId=abcd1234`);
      console.log('연결 성공', response);
      return true;
    } catch (error) {
      console.error('오류 발생 : ', error);
      return false;
    }
  }

  // 비밀번호
  const [pwd, setPwd] = useState('');

  const onKeyUpPwd = (event: React.KeyboardEvent<HTMLElement>) => {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value;

    // 20자 이하로 제한
    if (inputValue.length > 20) {
      inputElement.value = inputValue.slice(0, 20);
    }

    const key = event.key || event.keyCode;

    if (key === "Enter" || key === 13) {
      return; 
    }
  };

  // 비밀번호 유효성 검사
  const pwdTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|;:,.<>?]).{8,}$/;

  // 비밀번호 표시
  const [hide, setHide] = useState(true);

  const onToggleHide = () => {
    setHide(prev => !prev);
  };

  // 가입 버튼
  // const [signUpCheckBtn, setSignUpCheckBtn] = useState(false);
  const [warning, setWarning] = useState('');

  const signUpCheckFunc = () => {
    if(! U.isValidPhoneNumber(phoneNumder)){
      setWarning("휴대폰 번호가 정확하지 않습니다. 국가번호를 포함하여 전체 전화번호를 입력해주세요.");
    } else if(! userIdTestAllResult){
      console.log(userIdTestAllResult);
      setWarning("사용자 이름에는 문자, 숫자, 밑줄 및 마침표만 사용할 수 있습니다");
    } /* else if(! userIdExistTest){
      setWarning("사용할 수 없는 사용자 이름입니다. 다른 이름을 사용하세요.");
      setSignUpCheckBtn(false);
    }*/ else if(!(pwdTest.test(pwd) && pwd.length > 5)){
      setWarning("");
    }
    else{
      setWarning("");
      // 다음 페이지로 이동하는 코드
      setSignUp1(false);
      setSignUp2(true);
      navigate(`/sign-up`);
    }
  }

  // 로그인 이동
  const handleLogin = () => {
    navigate(`/login`);
  }

  return (
    <S.LoginRoot>
      <S.BasicWrap>
        <S.Img src={iphone1}/>
        <S.Img2 src={iphone2}/>
      </S.BasicWrap>
      <S.MainDiv>
        <S.SignUpBox>
      
          <S.Logo src={logo}/>
          <S.LogoTextDiv>
            친구들과 함께 여행 이야기를 공유하고 보세요.
          </S.LogoTextDiv>

          <S.KaKaoLoginBtn>
            <S.KakaoImg src={kakao}/>
            <S.KakaoText>카카오 로그인</S.KakaoText>
          </S.KaKaoLoginBtn>
          
          <S.Or>
            or
          </S.Or>

          <S.InputDiv>
            <S.InputImg src={mail}/>
            <S.SignUpInput
            value={phoneNumder}
            onChange={(e) => setPhoneNumder(e.target.value)}
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onKeyUp={onKeyUpPhoneNumder}
            />
            {phoneNumder.length > 0 && (
            <div>
              {U.isValidPhoneNumber(phoneNumder) ? <S.CheckImg src={checkImg}/> : <S.CheckImg src={xImg}/>}
            </div>
            )}
          </S.InputDiv>
          
          <S.InputDiv>
            <S.InputImg src={user}/>
            <S.SignUpInput
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="성명"
            onKeyUp={onKeyUpUserName}
            />
            {userName.length ? <S.CheckImg2 src={checkImg}/> : "" }
          </S.InputDiv>

          <S.InputDiv>
            <S.InputImg src={settings}/>
            <S.SignUpInput
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="사용자 이름"
            onKeyUp={onKeyUpUserId}
            onBlur={onBlurUserId}
            />
            {userId.length > 0 && (
            <div>
              {userIdTestAllResult ? <S.CheckImg3 src={checkImg}/> : <S.CheckImg3 src={xImg}/>}
            </div>
            )}
          </S.InputDiv>
          
          <S.InputDiv>
            <S.InputImg src={lock}/>
            <S.SignUpInput
            type = {hide ? 'password' : 'text'}
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="비밀번호"
            onKeyUp={onKeyUpPwd}
            />
            {pwd.length > 0 && (
            <S.PwdDiv>
              {pwdTest.test(pwd) ? <S.CheckImg4 src={checkImg}/> : <S.CheckImg4 src={xImg}/>}
              <S.PasswordDisplay
              onClick={() => onToggleHide()}>
                {hide ? "비밀번호 표시" : "숨기기"}
              </S.PasswordDisplay>
            </S.PwdDiv>
            )}
          </S.InputDiv>

          <LoginBtn
          pwd={pwd}
          onClick={signUpCheckFunc}>
            가입
          </LoginBtn>
          <S.WarningText>{warning}</S.WarningText>
        </S.SignUpBox>
        
      <S.LoginBox>
        <S.HaveAnAccount>계정이 있으신가요?</S.HaveAnAccount>
        <S.GoToLogin
        onClick={handleLogin}
        >로그인</S.GoToLogin>
      </S.LoginBox>
      <S.AppDownloadBox>
        <S.AppDownloadText>
          앱을 다운로드 하세요.
        </S.AppDownloadText>
        <div>
          <S.PlayStoreImg src={PlayStore}/>
          <S.AppStoreImg src={AppStore}/>
        </div>
      </S.AppDownloadBox>
      </S.MainDiv>
    </S.LoginRoot>
  );
};

export default SignUp;

interface SignUpBtnProps {
  pwd: string;
}

const LoginBtn = styled.button<SignUpBtnProps>`
  width: 320px;
  height: 44px;

  border-radius: 30px;
  border-width: 0px;
  
  /* position: absolute;
  top: 337px; */

  margin-top: 20px;
  margin-bottom: 40px;
  
  font-weight: 600;
  font-size: 16px;
  color: white;
  line-height: 24px;
  text-align: center;
  
  background-color: ${props => props.pwd.length > 5 ? '#2E90FA' : '#B2DDFF'};
`;
