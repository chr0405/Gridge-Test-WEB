import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useRecoilState } from "recoil";
import { signUp1State, signUp2State/*, signUp3State*/ } from "../../recoil/signUpPageChange";
import { loginIdInfoState, passwordInfoState, realNameInfoState, phoneInfoState, birthDateInfoState} from "../../recoil/signUpInfo";
import axios from 'axios';
import styled from 'styled-components';

import iphone1 from '../../img/iphone 13 mini.png';
import iphone2 from '../../img/iphone 13 mini (1).png';
import CheckBoxUncheckedImg from '../../img/Checkbox (1).png';
import CheckBoxCheckedImg from '../../img/Checkbox.png';
import PlayStore from '../../img/Mobile app store badge.png';
import AppStore from '../../img/Mobile app store badge (1).png';

const SignUp3 = () => {
    const navigate = useNavigate();

    const [, setSignUp1] = useRecoilState(signUp1State);
    const [, setSignUp2] = useRecoilState(signUp2State);

    // 체크 박스
    const [checkAll, setCheckAll] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);

    useEffect(() => {
        checkAllFunc();
        console.log();
    }, [check1, check2, check3]);

    // 세 개 다 체크하면 자동으로 모두 동의도 체크
    const checkAllFunc = () => {
        if(check1 && check2 && check3){
            setCheckAll(true);
        } else {
            setCheckAll(false);
        }
    }

    // 돌아가기
    const backToSignUp1 = () => {
        setSignUp1(false);
        setSignUp2(true);
        navigate(`/sign-up`);
    }

    const [phone, ] = useRecoilState(phoneInfoState);
    const [realName, ] = useRecoilState(realNameInfoState);
    const [loginId, ] = useRecoilState(loginIdInfoState);
    const [password, ] = useRecoilState(passwordInfoState);
    const [birthDate, ] = useRecoilState(birthDateInfoState);

    const [/*statusNumber*/, setStatusNumber] = useState(0);

    const sendUserInfoFunc = async () => {
        // 추후 삭제
        console.log('sendUserInfoFunc');
        console.log(phone);
        console.log(realName);
        console.log(loginId);
        console.log(password);
        console.log(birthDate);
    
        try {
          const response = await axios.post(`https://api-sns.gridge-test.com/auth/sign-up`, {
            loginId,
            password,
            realName,
            phone,
            birthDate
          });
          // 추후 삭제
          console.log(response.status);
          setStatusNumber(response.status);
          return response.status
        } catch (error) {
          // 추후 삭제
          console.error('오류 발생 : ', error);
          return 400
        }
      }

    // 로그인

    const NextFunc = () => {
        let responseNumber = sendUserInfoFunc();
        if(typeof responseNumber === 'number' && responseNumber === 201){
            setSignUp1(true);
            setSignUp2(false);
            navigate(`/login`);
        } else if(typeof responseNumber === 'number' && responseNumber === 400){
            alert('아이디가 중복되었거나 조건에 맞지 않습니다. 다시 시도해주세요.');
        } else{
            alert('로그인 해주세요.');
            setSignUp1(true);
            setSignUp2(false);
            navigate(`/login`);
        }
    }

    const backToLogin = () => {
        setSignUp1(true);
        setSignUp2(false);
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
                        <S.TermsAndConditionsOfUse>이용 약관에 동의</S.TermsAndConditionsOfUse>
                        <S.Instruction>Tnovel은 회원님의 개인 정보를 안전하게 보호합니다.
                            새 계정을 만드려면 모든 약관에 동의하세요.
                        </S.Instruction>
                    <S.CheckBoxList>
                        <S.CheckBox>
                            <S.CheckBoxAcceptAllDiv>
                                <S.CheckBoxAccept>이용약관 3개에 모두 동의</S.CheckBoxAccept>
                            </S.CheckBoxAcceptAllDiv>
                            <S.CheckImg
                                src={checkAll ? CheckBoxCheckedImg : CheckBoxUncheckedImg}
                                onClick={() => {
                                    setCheckAll((prev) => !prev);
                                }}
                            />
                        </S.CheckBox>

                        <S.CheckBox1And2>
                            <S.CheckBox2Line>
                                <S.CheckBoxAcceptRest>이용약관 (필수)</S.CheckBoxAcceptRest>
                                <S.CheckBoxAcceptDetail>더 알아보기</S.CheckBoxAcceptDetail>
                            </S.CheckBox2Line>
                            <S.CheckImg
                            src={checkAll || check1 ? CheckBoxCheckedImg : CheckBoxUncheckedImg}
                            onClick={()=>setCheck1((prev) => !prev)}/>
                        </S.CheckBox1And2>

                        <S.CheckBox1And2>
                            <S.CheckBox2Line>
                                <S.CheckBoxAcceptRest>데이터 정책 (필수)</S.CheckBoxAcceptRest>
                                <S.CheckBoxAcceptDetail>더 알아보기</S.CheckBoxAcceptDetail>
                            </S.CheckBox2Line>
                            <S.CheckImg
                            src={checkAll || check2 ? CheckBoxCheckedImg : CheckBoxUncheckedImg}
                            onClick={()=>setCheck2((prev) => !prev)}/>
                        </S.CheckBox1And2>
                        <S.CheckBox3>
                            <S.CheckBox2Line>
                                <S.CheckBoxAcceptRest>위치 기반 기능 (필수)</S.CheckBoxAcceptRest>
                                <S.CheckBoxAcceptDetail>더 알아보기</S.CheckBoxAcceptDetail>
                            </S.CheckBox2Line>
                            <S.CheckImg
                            src={checkAll || check3 ? CheckBoxCheckedImg : CheckBoxUncheckedImg}
                            onClick={()=>setCheck3((prev) => !prev)}/>
                        </S.CheckBox3>
                    </S.CheckBoxList>

                    <NextBtn
                    checkAll={checkAll}
                    onClick={()=>{
                        if(checkAll)
                            NextFunc();
                    }}>
                        다음
                    </NextBtn>
                    <S.BackToSignUp2 onClick={backToSignUp1}>
                        돌아가기
                    </S.BackToSignUp2>

                </S.SignUpBox>
                <S.LoginBox>
                    <S.HaveAnAccount>계정이 있으신가요?</S.HaveAnAccount>
                    <S.GoToLogin onClick={backToLogin}>로그인</S.GoToLogin>
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
    )
}

export default SignUp3

interface NextBtnProps {
    checkAll: boolean;
  }
  
  const NextBtn = styled.button<NextBtnProps>`
    width: 320px;
    height: 44px;
  
    border-radius: 30px;
    border-width: 0px;
      
    font-weight: 600;
    font-size: 16px;
    color: white;
    line-height: 24px;
    text-align: center;
    
    background-color: ${props => props.checkAll ? '#2E90FA' : '#B2DDFF'};
  `;
  