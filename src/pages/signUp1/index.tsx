import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputWrap, LoginButton, LoginRoot, Wrap } from "./styles";
import { useRecoilState } from "recoil";
import { signUp1State, signUp2State/*, signUp3State*/ } from "../../recoil/signUpPageChange";
// import axios from 'axios';
import * as U from "../../utils/utility"

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
  // const [userIdExistTest, setUserIdExistTest] = useState(false);

  // API 연결 보류
  const onBlurUserId = /*async*/ () => {

    // 없앨 거
    console.log(userIdTestAllResult);

    // setUserIdExistTest(await idExistCheck());

    if(userIdTestResult /*&& userIdExistTest*/){
      setUserIdTestAllResult(true);
    }
    else{setUserIdTestAllResult(false);}
  }

  // const idExistCheck = async () => {
  //   try {
  //     const response = await axios.get(`https://api-sns.gridge-test.com/users?userId=${userId}`);
  //     console.log('연결 성공', response);
  //     return true;
  //   } catch (error) {
  //     console.error('오류 발생 : ', error);
  //     return false;
  //   }
  // }

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
  // const handleLogin = () => {
  //   navigate(`/login`);
  // }

  return (
    <LoginRoot>
      <Wrap>
        <div>
          친구들과 함께 여행 이야기를 공유하고 보세요.
        </div>
        <LoginButton>카카오 로그인</LoginButton>
        
        <div>
          or
        </div>

        <div>
          <p>문자</p>
          <InputWrap
          value={phoneNumder}
          onChange={(e) => setPhoneNumder(e.target.value)}
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onKeyUp={onKeyUpPhoneNumder}
          />
          {phoneNumder.length > 0 && (
          <div>
            {U.isValidPhoneNumber(phoneNumder) ? "체크" : "엑스"}
          </div>
          )}
        </div>
        
        <div>
          <p>사람</p>
          <InputWrap
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="성명"
          onKeyUp={onKeyUpUserName}
          />
          {userName.length ? "표시" : "" }
        </div>

        <div>
          <p>톱니바퀴</p>
          <InputWrap
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="사용자 이름"
          onKeyUp={onKeyUpUserId}
          onBlur={onBlurUserId}
          />
          {userId.length > 0 && (
          <div>
            {userIdTestAllResult ? "체크" : "엑스"}
          </div>
          )}
        </div>
        
        <div>
          <p>자물쇠</p>
          <InputWrap
          type = {hide ? 'password' : 'text'}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          placeholder="비밀번호"
          onKeyUp={onKeyUpPwd}
          />
          {pwd.length > 0 && (
          <div>
            {pwdTest.test(pwd) ? "체크" : "엑스"}
            <div
            onClick={() => onToggleHide()}
            style={{ 
              fontSize: "1.8rem",
              fontWeight: "600",
              marginBottom: "1rem" }}>
              {hide ? "비밀번호 표시" : "숨기기"}
            </div>
          </div>
          )}
        </div>

        <LoginButton
        onClick={signUpCheckFunc}>
          <div>
            {/* 가입 버튼 */}
            {pwd.length > 5 ? "체크" : "엑스"}
          </div>
        </LoginButton>
        <div>{warning}</div>
      </Wrap>
{/* 
      <Wrap>
       <div>계정이 있으신가요?</div>
       <div
       onClick={handleLogin}
       >로그인</div>
      </Wrap>
      <div
          style={{
            fontSize: "1.8rem",
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          앱을 다운로드 하세요.
        </div> */}
    </LoginRoot>
  );
};

export default SignUp;