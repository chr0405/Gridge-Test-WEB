import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useRecoilState } from "recoil";
import { signUp1State, signUp2State/*, signUp3State*/ } from "../../recoil/signUpPageChange";

const SignUp2 = () => {
    const navigate = useNavigate();

    const [, setSignUp1] = useRecoilState(signUp1State);
    const [, setSignUp2] = useRecoilState(signUp2State);

    // 월 추출
    const getCurrentMonth = (): number => {
        const currentDate = new Date();
        return currentDate.getMonth() + 1;
    };

    const [userBornMonth, setUserBornMonth] = useState(getCurrentMonth());

    // 일 추출
    const getCurrentDate = (): number => {
        const currentDate = new Date();
        return currentDate.getDate();
    };

    const [userBornDate, setUserBornDate] = useState(getCurrentDate());

    // 연도 추출
    const getCurrentYear = (): number => {
        const currentDate = new Date();
        return currentDate.getFullYear();
    };

    const [userBornYear, setUserBornYear] = useState(getCurrentYear());
    const [passSignUp, setPassSignUp] = useState(false);

    // 가입할 수 있는 나이인지 체크
    const checkBornYear = () => {
        if(userBornYear < 2016){
            setPassSignUp(false);
        } else {
            setPassSignUp(true);
        }
    };

    const signUpCheckFunc = () => {
        console.log(passSignUp);
        console.log(userBornYear);

        if(passSignUp){
            setSignUp1(false);
            setSignUp2(false);
            navigate(`/sign-up`);
        }
    }

    const monthList = [];
    for (let month = 1; month <= 12; month++) {
        monthList.push(month);
    }

    const dayList = [];
    for (let day = 1; day <= 31; day++) {
        dayList.push(day);
    }

    const yearList = [];
    for (let year = 1919; year <= 2021; year++) {
        yearList.push(year);
    }

    const [activeSelector, setActiveSelector] = useState('');

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (activeSelector && !target.closest(`.${activeSelector}-selector`)) {
                setActiveSelector('');
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, [activeSelector]);

    const toggleSelector = (selector: string) => {
        setActiveSelector(prevSelector => prevSelector === selector ? '' : selector);
    };

    // 돌아가기
    const backToSignUp1 = () => {
        setSignUp1(true);
        setSignUp2(false);
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
                    <p>생일추가</p>
                    <p>공개 프로필에 포함되지 않습니다.</p>
                    <p>왜 생일 정보를 입력해야 하나요?</p>
                </div>
                <S.SelectBirthdayDiv>
                    <S.Li className={`${activeSelector === 'month' ? 'active' : ''}`}>
                        <div onClick={() => toggleSelector('month')}>{userBornMonth}월</div>
                        <div style={{ display: activeSelector === 'month' ? 'block' : 'none' }}>
                            {monthList.map((monthItem, index) => (
                                <S.Li
                                key={index}
                                onClick={() => setUserBornMonth(monthItem)}>
                                    <S.Div>{monthItem}월</S.Div>
                                </S.Li>
                            ))}
                        </div>
                    </S.Li>
                    <S.Li className={`${activeSelector === 'day' ? 'active' : ''}`}>
                        <div onClick={() => toggleSelector('day')}>{userBornDate}일</div>
                        <div style={{ display: activeSelector === 'day' ? 'block' : 'none' }}>
                            {dayList.map((dayItem, index) => (
                                <S.Li
                                key={index}
                                onClick={() => setUserBornDate(dayItem)}>
                                    <S.Div>{dayItem}일</S.Div>
                                </S.Li>
                            ))}
                        </div>
                    </S.Li>
                    <S.Li className={`${activeSelector === 'year' ? 'active' : ''}`}>
                        <div onClick={() => toggleSelector('year')}>{userBornYear}년</div>
                        <div style={{ display: activeSelector === 'year' ? 'block' : 'none' }}>
                            {yearList.map((yearItem, index) => (
                                <S.Li
                                key={index}
                                onClick={() => {
                                    setUserBornYear(yearItem)
                                    checkBornYear()
                                    }}>
                                    <S.Div>{yearItem}년</S.Div>
                                </S.Li>
                            ))}
                        </div>
                    </S.Li>
                </S.SelectBirthdayDiv>
                <div
                onClick={signUpCheckFunc}>
                    <S.LoginButton>{passSignUp? "가입 가능" : "가입 안됨"}</S.LoginButton>
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
    );
};

export default SignUp2;