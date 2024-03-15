import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import packageJson from "../../../package.json";
import * as S from "./styles";
import logo from '../../img/mainlogo.png';
import search from '../../img/search.png';

import home from '../../img/Icon.png';
import send from '../../img/send.png';
import plusSquare from '../../img/plus-square.png';
import heart from '../../img/heart.png';
import profileTestImg from '../../img/profileTestImg.png';


const AppHeader = () => {
  // const navigate = useNavigate();

  // const dispatch = useDispatch()
  // const sidebarShow = useSelector((state) => state.sidebarShow)
  // const [visible, setVisible] = useState(false)

  return (
    <S.Header>
      
      <S.Logo src={logo}/>

      <S.searchDiv>
        <S.searchImg src={search}/>
        <S.searchInput/>
      </S.searchDiv>

      <S.iconDiv>
       <S.homeImg src={home}/>
       <S.sendImg src={send}/>
       <S.plusImg src={plusSquare}/>
       <S.heartImg src={heart}/>
       <S.profileImg src={profileTestImg}/>
      </S.iconDiv>

    </S.Header>
  );
};

export default AppHeader;
