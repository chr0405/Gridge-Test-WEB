import axiosConfig from './axiosConfig';

// import { useRecoilState } from "recoil";
// import { nameState } from "../recoil/login";

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
}

export default user;