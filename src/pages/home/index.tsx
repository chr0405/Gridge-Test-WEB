import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate();

  const logined = localStorage.getItem('logined');

  const isLoginedFunc = () => {
    if(logined === 'false' || !logined){
        navigate('/login');
    }
  }

  useEffect(() => {
    isLoginedFunc();
  }, []);
  
  return (
    <>
    </>
  );
};

export default Home;
