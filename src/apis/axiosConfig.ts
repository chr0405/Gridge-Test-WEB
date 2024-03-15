import axios from 'axios';
import authService from './authService';

const AxiosInstance = axios.create({
  baseURL: "https://api-sns.gridge-test.com",
  withCredentials: true,

  headers: {
    // Authorization: `Bearer ${window.localStorage.getItem('jwt')}`,
  },
});

AxiosInstance.interceptors.response.use(

    (config) => {
        return config;
    },

    async (error) => {

        // 추후 삭제
        console.log('interceptors error', error.response);
        console.log(error.response.data.error);

        if(error.config.sent){
            return Promise.reject(error);
        } else if(error.response.data.error === 'INVALID_AUTH_TOKEN'){
            // 토큰 때문에 생긴 에러라면
            error.config.sent = true;

            const token = window.localStorage.getItem('jwt');
            if( token ){
                console.log('전송 중에 수정');
                const response = await authService(token);
                if (response.result.jwt) {
                    error.config.headers.Authorization = `Bearer ${response.result.jwt}`;
                    console.log('수정 완료');
                }
                return AxiosInstance(error.config);
            }
            return Promise.reject(error);
        }
        return Promise.reject(error);
    }
)

export default AxiosInstance;