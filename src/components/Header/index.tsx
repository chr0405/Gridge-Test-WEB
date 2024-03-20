import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MakeFeed from "../MakeFeed";
import { useRecoilState } from "recoil";
import { scrollControlState } from "../../recoil/showBoard";

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
import porfileIconGray from '../../img/ProfileIconGray.png'
import bookMarkIcon from '../../img/bookMarkIcon (2).png'
import settingIcon from '../../img/settingIcon.png'
import reportIcon from '../../img/reportIcon (3).png'

// import { resetKakaoAuthorizationCodeState } from "../../recoil/kakaoLogin";
// import { resetUserState } from "../../recoil/login";
// import { resetSignUpInfoState } from "../../recoil/signUpInfo";
// import { resetSignUpPageState } from "../../recoil/signUpPageChange";

const AppHeader = () => {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);
  const [showMakeFeed, setShowMakeFeed] = useState(false); // 상태 관리

  const logOut = () => {
    window.localStorage.clear();
    // resetKakaoAuthorizationCodeState();
    // resetUserState();
    // resetSignUpInfoState();
    // resetSignUpPageState();
    navigate('/login');
  }

  const [ , setScrollControl] = useRecoilState(scrollControlState);

  return (
    <>
      {showMakeFeed && 
        <MakeFeed
          setShowMakeFeed={setShowMakeFeed}
        />
      }
      {visible &&
      <S.VisibleTotalDiv>
        <S.VisibleDiv style={{display : 'block'}}>
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
      </S.VisibleTotalDiv>
      }
      <S.Header>
        
        <S.Logo src={logo}
          onClick={() => {
            navigate('/');
        }}/>

        <S.searchDiv>
          <S.searchImg src={search}/>
          <S.searchInput placeholder="검색"/>
        </S.searchDiv>

        <S.iconDiv>
        <S.homeImg src={home}
          onClick={() => {
            navigate('/');
          }}/>
        <S.sendImg src={send}/>
        <S.plusImg src={plusSquare}
        onClick={() => {
          setShowMakeFeed(true);
          setScrollControl(false);
        }}/>
        <S.heartImg src={heart}/>
        <S.profileImg src={profileTestImg}
          onClick={() => {
            setVisible((pre) => !pre);
          }}/>
        </S.iconDiv>

        <S.FooterDiv>
          <S.FooterDiv2>
            <S.homeImg src={home}
            onClick={() => {
              navigate('/');
            }}/>
            <S.sendImg src={send}/>
            <S.plusImg
              src={plusSquare}
              onClick={() => {
                setShowMakeFeed(true);
                console.log('클릭했어요', showMakeFeed);
              }}/>
            <S.heartImg src={heart}/>
            <S.IconsImg src={porfileIconGray}/>
          </S.FooterDiv2>
        </S.FooterDiv>
      </S.Header>
    </>
  );
};

export default AppHeader;
