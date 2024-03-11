import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useRecoilState } from "recoil";
import { signUp1State, signUp2State/*, signUp3State*/ } from "../../recoil/signUpPageChange";

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

    // 로그인
    const backToLogin = () => {
        setSignUp1(true);
        setSignUp2(false);
        navigate(`/login`);
    }

    return (
        <S.LoginRoot>
            <S.Wrap>
                <div>
                    <h3>이용 약관에 동의</h3>
                    <h4>Tnovel은 회원님의 개인 정보를 안전하게 보호합니다.
                        새 계정을 만드려면 모든 약관에 동의하세요.
                    </h4>
                </div>
            </S.Wrap>
            <div>
                <div>
                    <h5>이용약관 3개에 모두 동의</h5>
                    <input
                    type='checkbox'
                    checked={checkAll? true : false}
                    onClick={()=> {
                        setCheckAll((prev) => !prev)
                    }}/>
                </div>
                <hr/>
                <div>
                    <div>
                        <p>이용약관 (필수)</p>
                        <p>더 알아보기</p>
                    </div>
                    <input
                    type='checkbox'
                    checked={checkAll || check1 ? true : false}
                    onClick={()=>setCheck1((prev) => !prev)}/>
                </div>
                <div>
                    <div>
                        <p>데이터 정책 (필수)</p>
                        <p>더 알아보기</p>
                    </div>
                    <input
                    type='checkbox'
                    checked={checkAll || check2 ? true : false}
                    onClick={()=>setCheck2((prev) => !prev)}/>
                </div>
                <div>
                    <div>
                        <p>위치 기반 기능 (필수)</p>
                        <p>더 알아보기</p>
                    </div>
                    <input
                    type='checkbox'
                    checked={checkAll || check3 ? true : false}
                    onClick={()=>setCheck3((prev) => !prev)}/>
                </div>
            </div>
            <S.Wrap>
                <div>
                    <S.LoginButton
                    onClick={()=>{
                        if(checkAll)
                            backToLogin();
                    }}
                    >{checkAll? "다음" : "다음 안됨"}</S.LoginButton>
                    <p onClick={backToSignUp1}>돌아가기</p>
                </div>
            </S.Wrap>
            <S.Wrap>
                <div>계정이 있으신가요?</div>
                <div onClick={backToLogin}>로그인</div>
            </S.Wrap>
            <div>
                앱을 다운로드 하세요.
            </div>
        </S.LoginRoot>
    )
}

export default SignUp3