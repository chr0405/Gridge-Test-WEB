// redirect 되는 화면

import React from "react";
import { useRecoilState } from "recoil";
import { authorizationCodeState } from "../../recoil/kakaoLogin";

const KakaoLoggin = () => {
    const [, setAuthorizationCode] = useRecoilState(authorizationCodeState);

    // 인가 코드
    let code = new URL(window.location.href).searchParams.get("code");

    React.useEffect( () => {
        if(typeof code === 'string'){
            setAuthorizationCode(code);
        }
    }, []);

    return (
        <>
            <div>
                test
            </div>
        </>
    );
};

export default KakaoLoggin;