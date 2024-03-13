import axios, { AxiosInstance } from "axios";
import { JWT_KEY } from "../../config/constant";
import * as jsonwebtoken from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";

export const request: AxiosInstance = axios.create({
  baseURL: "https://api-sns.gridge-test.com",
  timeout: 2500,
  withCredentials: true,

  headers: {
    accept: "application/json",
    Authorization: `Bearer ${window.localStorage.getItem(JWT_KEY)}`,
  },
});

request.interceptors.request.use(
  async (config) => {
    const jwt = window.localStorage.getItem(JWT_KEY) ?? "";
    const decodedJwt: JwtPayload = jsonwebtoken.decode(jwt) as JwtPayload;
    const currentTime = new Date().getTime() / 1000;

    if (decodedJwt.exp ?? 0 < currentTime) {
      // 서버에 토큰 재발급 요청 코드 작성 필요
      console.log("서버에 토큰 재발급 요청");
      try {
        const response = await axios.post(
          `https://api-sns.gridge-test.com/auth/jwt`,
          { jwt: jwt }
        );
        const newAccessToken = response.data.result.jwt;
        if (config.headers) {
          config.headers.Authorization = `Bearer ${newAccessToken}`;
        } else {
          config.headers = {
            Authorization: `Bearer ${newAccessToken}`
          };
        }
        console.log("토큰 재발급 완료");
      } catch (error) {
        console.error('토큰 재발급 오류: ', error);
      }
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
