import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from './styles';
import Header from '../../components/Header';

const Home = () => {
  
  const navigate = useNavigate();

  const logined = localStorage.getItem('logined');

  const isLoginedFunc = () => {
    if(!logined){
      navigate('/login');
    }
  }

  useEffect(() => {
    isLoginedFunc();
  }, []);

  return(
    <S.Root>
      <Header/>
    </S.Root>
  );

};

export default Home;
