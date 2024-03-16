import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import packageJson from "../../../package.json";
import * as S from "./styles";
import logo from '../../img/mainlogo.png';
import search from '../../img/search.png';

import home from '../../img/Icon.png';
import send from '../../img/send.png';
import plusSquare from '../../img/plus-square.png';
import heart from '../../img/heart.png';
import profileTestImg from '../../img/profileTestImg.png';

import profileIcon from '../../img/profileIcon (1).png'
import bookMarkIcon from '../../img/bookMarkIcon (2).png'
import settingIcon from '../../img/settingIcon.png'
import reportIcon from '../../img/reportIcon (3).png'

import { resetKakaoAuthorizationCodeState } from "../../recoil/kakaoLogin";
import { resetUserState } from "../../recoil/login";
import { resetSignUpInfoState } from "../../recoil/signUpInfo";
import { resetSignUpPageState } from "../../recoil/signUpPageChange";

const AppHeader = () => {
  const navigate = useNavigate();

  // const dispatch = useDispatch()
  // const sidebarShow = useSelector((state) => state.sidebarShow)
  const [visible, setVisible] = useState(false)

  const logOut = () => {
    window.localStorage.clear();
    resetKakaoAuthorizationCodeState();
    resetUserState();
    resetSignUpInfoState();
    resetSignUpPageState();
    navigate('/login');
  }

  return (
    <S.Header>

      <S.VisibleDiv style={{display : visible? 'block' : 'none'}}>
        <S.VisibleContentDiv>
          <S.IconsImg src={profileIcon}/>
          <S.IconsP>프로필</S.IconsP>
        </S.VisibleContentDiv>
        <S.VisibleContentDiv>
          <S.IconsImg src={bookMarkIcon}/>
          <S.IconsP>저장됨</S.IconsP>
        </S.VisibleContentDiv>
        <S.VisibleContentDiv>
          <S.IconsImg src={settingIcon}/>
          <S.IconsP>설정</S.IconsP>
        </S.VisibleContentDiv>
        <S.VisibleContentDiv>
          <S.IconsImg src={reportIcon}/>
          <S.IconsP>문제 신고</S.IconsP>
        </S.VisibleContentDiv>
        <S.VisibleContentDiv onClick={logOut}>
          <S.IconsImg src={settingIcon}/>
          <S.IconsP>로그아웃</S.IconsP>
        </S.VisibleContentDiv>
      </S.VisibleDiv>
      
      <S.Logo src={logo}
        onClick={() => {
          navigate('/');
      }}/>

      <S.searchDiv>
        <S.searchImg src={search}/>
        <S.searchInput/>
      </S.searchDiv>

      <S.iconDiv>
       <S.homeImg src={home}
        onClick={() => {
          navigate('/');
        }}/>
       <S.sendImg src={send}/>
       <S.plusImg src={plusSquare}/>
       <S.heartImg src={heart}/>
       <S.profileImg src={profileTestImg}
        onClick={() => {
          setVisible((pre) => !pre);
        }}/>
      </S.iconDiv>

    </S.Header>
  );
};

export default AppHeader;
