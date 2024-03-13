import axios from 'axios';
import authService from './authService';

const AxiosInstance = axios.create({
  baseURL: "https://api-sns.gridge-test.com",
  withCredentials: true,

  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('jwt')}`,
    // Authorization: `Bearer dfgfsdgsfgsfg`,
  },
});

AxiosInstance.interceptors.response.use(

    (config) => {
        return config;
    },

    async (error) => {

        console.log("interceptors error", error);
        console.log(error.response.data.error);

        if(error.config.sent){
            return Promise.reject(error);
        } else if(error.response.data.error === "INVALID_AUTH_TOKEN"){
            error.config.sent = true;
            console.log("전송 중에 수정");
            const newToken = await authService();

            if( newToken ){
                error.config.headers.Authorization = newToken;
            }
            return AxiosInstance(error.config);
        }

        return Promise.reject(error);
    }
)

export default AxiosInstance;