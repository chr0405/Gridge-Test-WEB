import axios from 'axios';
import axiosConfig from './axiosConfig';

const authService = async (jwt : string) => {

    try {

        const response = await axios.post(
            `https://api-sns.gridge-test.com/auth/jwt`,
            {jwt}
        );

        if(response && response.status === 200){
            console.log('토큰 재발급 성공');
            console.log(response.data.result.jwt);

            const newJwt = response.data.result.jwt;
            axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${newJwt}`;
            localStorage.setItem('jwt', newJwt);
        }        
        return response.data

    } catch (error) {

        console.error('토큰 재발급 오류: ', error);
        
        return null;

    }

};  
export default authService