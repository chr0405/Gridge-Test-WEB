import axios from 'axios';
import axiosConfig from './axiosConfig';

const authService = async () => {

    const jwt = localStorage.getItem('jwt');

    try {

        const response = await axios.post(
            `https://api-sns.gridge-test.com/auth/jwt`,
            {jwt}
        );

        console.log('토큰 재발급 성공');
        console.log(response.data.result.jwt);

        const newJwt = response.data.result.jwt;
        localStorage.setItem('jwt', newJwt);
        axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
        
        return `Bearer ${jwt}`

    } catch (error) {

        console.error('토큰 재발급 오류: ', error);
        
        return null;

    }

};  
export default authService