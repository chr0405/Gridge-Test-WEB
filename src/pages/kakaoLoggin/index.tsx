// redirect 되는 화면

import React from "react";
import { useRecoilState } from "recoil";
import { authorizationCodeState } from "../../recoil/kakaoLogin";
// import { useNavigate } from "react-router-dom";
import axios from 'axios';

const KakaoLoggin = () => {
    const [authorizationCode, setAuthorizationCode] = useRecoilState(authorizationCodeState);
    // const navigate = useNavigate();

    // 인가 코드
    let code = new URL(window.location.href).searchParams.get("code");

    const KakaoLoginFunc = async () => {
        try{
            const response = await axios.get(`https://api-sns.gridge-test.com/auth/kakao/sign-in-by-code?code=${code}`);
                console.log(response);
            } catch (error) {
                console.error('오류 발생 : ', error);
            }
    }

    React.useEffect( () => {
        
        if(typeof code === 'string'){
            setAuthorizationCode(code);
            console.log(authorizationCode);
            KakaoLoginFunc();
        }

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