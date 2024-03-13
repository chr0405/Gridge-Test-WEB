import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { useRecoilState } from "recoil";
import { signUp1State, signUp2State/*, signUp3State*/ } from "../../recoil/signUpPageChange";
import styled from 'styled-components';

import iphone1 from '../../img/iphone 13 mini.png';
import iphone2 from '../../img/iphone 13 mini (1).png';
import cake from '../../img/Cake_Isometric 1.png';
import showSelector from '../../img/chevron-down.png';
import checkImg from '../../img/check.png';
import PlayStore from '../../img/Mobile app store badge.png';
import AppStore from '../../img/Mobile app store badge (1).png';

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
    const [checkBornMonth, setCheckBornMonth] = useState(false);

    // 일 추출
    const getCurrentDate = (): number => {
        const currentDate = new Date();
        return currentDate.getDate();
    };

    const [userBornDate, setUserBornDate] = useState(getCurrentDate());
    const [checkBornDate, setCheckBornDate] = useState(false);

    // 연도 추출
    const getCurrentYear = (): number => {
        const currentDate = new Date();
        return currentDate.getFullYear();
    };

    const [userBornYear, setUserBornYear] = useState(getCurrentYear());
    const [checkBornYear, setCheckBornYear] = useState(false);

    const [passSignUp, setPassSignUp] = useState(false);
    

    // 가입할 수 있는 나이인지 체크
    const checkBornYearFunc = () => {
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

    const [commandText, setCommandText] = useState('');
    
    const commamdTextFunc = () => {
        if(!checkBornMonth && !checkBornDate && !checkBornYear){
            setCommandText('태어난 날짜를 입력해야합니다');
        }
        else{
            setCommandText('');
        }
    }

    useEffect(() => {
        commamdTextFunc();
    }, [checkBornMonth, checkBornDate, checkBornYear])

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
            <S.BasicWrap>
                <S.Img src={iphone1}/>
                <S.Img2 src={iphone2}/>
            </S.BasicWrap>
            <S.MainDiv>
                <S.SignUpBox>
                    <S.BirthdayImgAndText>
                        <S.CakeImg src={cake}/>
                        <S.BirthdayAddText>생일추가</S.BirthdayAddText>
                        <S.NoIncludeProfileText>공개 프로필에 포함되지 않습니다.</S.NoIncludeProfileText>
                        <S.ReasonText>왜 생일 정보를 입력해야 하나요?</S.ReasonText>
                    </S.BirthdayImgAndText>
                    <S.BirthdayCheckBox>
                        <S.BirthdaySelectorBox className={`${activeSelector === 'month' ? 'active' : ''}`}
                             onClick={() => toggleSelector('month')}>
                            <S.SelectedDiv>{userBornMonth}</S.SelectedDiv>
                            <S.SelectorImg src={showSelector}/>
                            <S.SelectorDiv style={{ display: activeSelector === 'month' ? 'block' : 'none' }}>
                                {monthList.map((monthItem, index) => (
                                    <CheckedLi
                                    checkBornMonth={checkBornMonth}
                                    userBornMonth={userBornMonth}
                                    index={index}
                                    key={index}
                                    onClick={() => {
                                        setUserBornMonth(monthItem)
                                        setCheckBornMonth(true)
                                    }}>
                                        <S.AnSelectorDiv>{monthItem}</S.AnSelectorDiv>
                                        <CheckedImg
                                        checkBornMonth={checkBornMonth}
                                        userBornMonth={userBornMonth}
                                        index={index}
                                        src={checkImg}/>
                                    </CheckedLi>
                                ))}
                            </S.SelectorDiv>
                        </S.BirthdaySelectorBox>
                        <S.BirthdaySelectorBox className={`${activeSelector === 'day' ? 'active' : ''}`}
                             onClick={() => toggleSelector('day')}>
                            <S.SelectedDiv>{userBornDate}</S.SelectedDiv>
                            <S.SelectorImg src={showSelector}/>
                            <S.SelectorDiv style={{ display: activeSelector === 'day' ? 'block' : 'none' }}>
                                {dayList.map((dayItem, index) => (
                                    <CheckedLi2
                                    checkBornDate={checkBornDate}
                                    userBornDate={userBornDate}
                                    index={index}
                                    key={index}
                                    onClick={() => {
                                        setUserBornDate(dayItem)
                                        setCheckBornDate(true)
                                        }}>
                                        <S.SelectedDiv>{dayItem}</S.SelectedDiv>
                                        <CheckedImg2
                                        checkBornDate={checkBornDate}
                                        userBornDate={userBornDate}
                                        index={index}
                                        src={checkImg}/>
                                    </CheckedLi2>
                                ))}
                            </S.SelectorDiv>
                        </S.BirthdaySelectorBox>
                        <S.BirthdaySelectorBox className={`${activeSelector === 'year' ? 'active' : ''}`}
                             onClick={() => toggleSelector('year')}>
                            <S.SelectedDiv>{userBornYear}</S.SelectedDiv>
                            <S.SelectorImg src={showSelector}/>
                            <S.SelectorDiv style={{ display: activeSelector === 'year' ? 'block' : 'none' }}>
                                {yearList.map((yearItem, index) => (
                                    <CheckedLi3
                                    checkBornYear={checkBornYear}
                                    userBornYear={userBornYear}
                                    index={index}
                                    key={index}
                                    onClick={() => {
                                        setUserBornYear(yearItem)
                                        setCheckBornYear(true)
                                        checkBornYearFunc()
                                        }}>
                                        <S.SelectedDiv>{yearItem}</S.SelectedDiv>
                                        <CheckedImg3
                                        checkBornYear={checkBornYear}
                                        userBornYear={userBornYear}
                                        index={index}
                                        src={checkImg}/>
                                    </CheckedLi3>
                                ))}
                            </S.SelectorDiv>
                        </S.BirthdaySelectorBox>
                    </S.BirthdayCheckBox>
                    <S.commandTextH5>{commandText}</S.commandTextH5>
                    <SignUpBtn
                    passSignUp={passSignUp}
                    onClick={signUpCheckFunc}>
                        가입
                    </SignUpBtn>
                    <S.BackToSignUp1 onClick={backToSignUp1}>돌아가기</S.BackToSignUp1>
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
    );
};

export default SignUp2;
  
interface SignUpBtnProps {
    passSignUp: boolean;
}

const SignUpBtn = styled.button<SignUpBtnProps>`
    width: 320px;
    height: 44px;

    border-radius: 30px;
    border-width: 0px;
        
    font-weight: 600;
    font-size: 16px;
    color: white;
    line-height: 24px;
    text-align: center;

    margin-top: 30px;

    background-color: ${props => props.passSignUp ? '#2E90FA' : '#B2DDFF'};
`;

////////////////////
  
interface checkLiAndImgProps {
    checkBornMonth: boolean;
    userBornMonth: number;
    index: number
}
  
const CheckedImg = styled.img<checkLiAndImgProps>`
    width: 20px;
    height: 20px;

    position: absolute;
    right: 15px;

    display: ${props => props.checkBornMonth && (props.userBornMonth === (props.index + 1)) ? 'inline' : 'none'};
`;
  
const CheckedLi = styled.li<checkLiAndImgProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 98px;
    height: 44px;

    background-color:  ${props => props.checkBornMonth && (props.userBornMonth === (props.index + 1)) ? '#F6F6F6' : 'white'};
`;

////////////////////
  
interface checkLiAndImgProps2 {
    checkBornDate: boolean;
    userBornDate: number;
    index: number
}
  
const CheckedImg2 = styled.img<checkLiAndImgProps2>`
    width: 20px;
    height: 20px;

    position: absolute;
    right: 15px;

    display: ${props => props.checkBornDate && (props.userBornDate === (props.index + 1)) ? 'inline' : 'none'};
`;
  
const CheckedLi2 = styled.li<checkLiAndImgProps2>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 98px;
    height: 44px;

    background-color:  ${props => props.checkBornDate && (props.userBornDate === (props.index + 1)) ? '#F6F6F6' : 'white'};
`;

/////////////////////

interface checkLiAndImgProps3 {
    checkBornYear: boolean;
    userBornYear: number;
    index: number
}

const CheckedImg3 = styled.img<checkLiAndImgProps3>`
    width: 20px;
    height: 20px;

    position: absolute;
    right: 15px;

    display: ${props => props.checkBornYear && (props.userBornYear === (props.index + 1919)) ? 'inline' : 'none'};
`;
  
const CheckedLi3 = styled.li<checkLiAndImgProps3>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 98px;
    height: 44px;

    background-color:  ${props => props.checkBornYear && (props.userBornYear === (props.index + 1919)) ? '#F6F6F6' : 'white'};
`;