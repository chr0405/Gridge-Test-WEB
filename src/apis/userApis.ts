import axiosConfig from './axiosConfig';

// import { useRecoilState } from "recoil";
// import { nameState } from "../recoil/login";
import axios from 'axios';

const user = {
    profile : async (name : string) => {
        try{
            const response = await axiosConfig.get(`/users/${name}/profile`);
            console.log(response)
            return response
        } catch (error){
            console.error('Error fetching profile:', error);
            console.log('user profile api 연결 실패');
            throw error;
        }
    },

    kakaoLogin : async (accessToken : string) => {
        try{
            console.log('kakaoLogin에서 토큰 검사 : ', accessToken);
            const response = await axios.post(`https://api-sns.gridge-test.com/auth/kakao/sign-in-by-token`, {
                accessToken
            });
            console.log('kakaoLogin api 연결 성공 : ', response);
            return response
        } catch (error){
            console.log('kakaoLogin api 연결  실패 : ', error);
            throw error;
        }
    },

    kakaoSignUp : async (accessToken : string, loginId : string, password :  string, realName : string, phone : string, birthDate : string) => {
        try{
            console.log('kakaoSignUp에서 토큰 검사 : ', accessToken);
            const response = await axiosConfig.post(`/auth/kakao/sign-up-by-token`, {
                accessToken,
                loginId,
                password,
                realName,
                phone,
                birthDate,
            });
            console.log('kakaoSignUp api 연결 성공 : ', response);
            return response;
        } catch (error){
            console.log('kakaoSignUp api 연결  실패 : ', error);
            throw error;
        }
    },
}

export default user;