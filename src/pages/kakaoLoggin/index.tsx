// redirect 되는 화면

import React, { useState } from "react";
// import { useRecoilState } from "recoil";
// import { authorizationCodeState } from "../../recoil/kakaoLogin";
import { useNavigate } from "react-router-dom";
import { REST_API_KEY/*, REDIRECT_URI */} from '../../kakaoCode';
import axios from 'axios';
import userApis from "../../apis/userApis";

declare global {
    interface Window {
      Kakao: any;
    }
  }
  

const KakaoLoggin = () => {

    const navigate = useNavigate();
    const [accessToken, setAccessToken] = useState('');

    // 인가 코드

    const KakaoLoginFunc = async () => {

        
    // 인가 코드
    const code = new URL(window.location.href).searchParams.get("code");
        if (typeof code === 'string'){
            console.log(code);
            axios.post("https://kauth.kakao.com/oauth/token", 
            `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=http://localhost:3000/login/kakao&code=${code}`, 
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
                }
            })
            .then(response => {
                console.log('카카오 로그인 토큰 받아오기 성공 : ', response);
                const newToken = response.data.access_token;
                setAccessToken(newToken);
            })
            .catch(error => {
                console.error('카카오 로그인 토큰 받아오기 실패 : ', error);
            });
        }
    }

    const [notFoundError, setNotFoundError] = useState(0);

    const SendToServerFunc = async () => {
        try{
            const response = await userApis.kakaoLogin(accessToken);
            console.log('userInfoFunc 성공 : ', response);
            localStorage.setItem('jwt', response.data.result.jwt);
            localStorage.setItem('loginId', response.data.result.loginId);
            localStorage.setItem('logined', 'true');
            localStorage.setItem('id', response.data.result.id);
            navigate('/');
        } catch(error){
            if (error && typeof error === 'object' && 'response' in error && error.response && typeof error.response === 'object') {
                const responseError = error.response as { status?: number };
                if (responseError.status) {
                    console.error('userInfoFunc 실패1. Error code:', responseError.status);
                    setNotFoundError(responseError.status);
                } else {
                    console.error('userInfoFunc 실패2. Error:', error);
                }
            } else {
                console.error('userInfoFunc 실패3. Error:', error);
            }
        }
    };

    const SignUpKakaoFunc = async () => {
        // try{
        //     const response = await userApis.kakaoLogin(accessToken);
        //     console.log('userInfoFunc 성공 : ', response);
        // } catch(error){
        //     if (error && typeof error === 'object' && 'response' in error && error.response && typeof error.response === 'object') {
        //         const responseError = error.response as { status?: number };
        //         if (responseError.status) {
        //             console.error('userInfoFunc 실패1. Error code:', responseError.status);
        //             setNotFoundError(responseError.status);
        //         } else {
        //             console.error('userInfoFunc 실패2. Error:', error);
        //         }
        //     } else {
        //         console.error('userInfoFunc 실패3. Error:', error);
        //     }
        // }
    };

    React.useEffect( () => {
        SignUpKakaoFunc();
    }, [notFoundError]);

    React.useEffect( () => {
        SendToServerFunc();
    }, [accessToken]);


    React.useEffect( () => {
        KakaoLoginFunc();
    }, []);

    return (
        <>
            {/* API 연결이 되지 않아 중단 */}
            <div>
                카카오톡 로그인 중
            </div>
        </>
    );

};

export default KakaoLoggin;