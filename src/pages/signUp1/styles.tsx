import styled from "styled-components";
import { supportDeviceSize } from "../../components/styles";

export const LoginRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 1024px;
  background-color: white;

  /* @media all and (max-width: ${supportDeviceSize}px) {
    width: 100vw;
    height: 100vh;
  } */
`;

export const BasicWrap = styled.div`
  width: 520px;
  height: 780px;

  position: absolute;
  top: 96px;
  left: 216px;

`;

export const Img = styled.img`
  width: 363px;
  height: 728px;

  position: absolute;
`;

export const Img2 = styled.img`
  width: 363px;
  height: 728px;

  position: absolute;
  top: 52px;
  left: 157px;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 96px;
  left: 808px;
`;

export const SignUpBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 416px;
  /* height: 559px; */

  border: 1px solid #CCCCCC;
  background-color: white;

  margin-bottom: 10px;
`;

export const Logo = styled.img`

  width: 217px;
  height: 80px;

  /* position: absolute;
  top: 70px; */

  margin-top: 70px;
`;

export const LogoTextDiv = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #7F7F7F;

  margin-top: 10px;
`;


export const KaKaoLoginBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 320px;
  height: 44px;

  border-radius: 30px;
  border-width: 0px;

  /* position: absolute;
  top: 425px; */

  margin-top: 30px;

  background-color: #F8D706;

  text-align: center;
`;

export const KakaoImg = styled.img`
  width: 22px;
  height: 22px;
`;

export const KakaoText = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2F1B1A;

  cursor: default;
`;

export const Or = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  /* position: absolute;
  top: 391px; */

  margin-top: 10px;

  color: #7F7F7F;
`;

export const InputDiv = styled.div`
  margin-top: 10px;

  display: flex;
  align-items: center;
`;

export const InputImg = styled.img`
  width: 20px;
  height: 20px;
  
  position: absolute;
  left : 65px;
`;

export const SignUpInput = styled.input`
  width: 320px;
  height: 50px;

  border-radius: 30px;
  border: 1px solid gray;
  padding: 10px, 14px, 10px, 14px;
  gap: 8px;

  text-indent: 45px;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const CheckImg = styled.img`
  width: 24px;
  height: 24px;
  
  position: absolute;
  top: 317px;
  left: 327px;
`;

export const CheckImg2 = styled.img`
  width: 24px;
  height: 24px;
  
  position: absolute;
  top: 380px;
  left: 327px;
`;

export const CheckImg3 = styled.img`
  width: 24px;
  height: 24px;
  
  position: absolute;
  top: 442px;
  left: 327px;
`;

export const PwdDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;

  width: 140px;
  height: 24px;
  
  position: absolute;
  top: 508px;
  left: 217px;
`;

export const CheckImg4 = styled.img`
  width: 24px;
  height: 24px;

  position: relative;
  top: 1px;

  margin-right: 2px;
`;

export const PasswordDisplay = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  text-align: right;

  color: #191919;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 24px;

  margin-left: 2px;
`;

export const WarningText = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 19.09px;
  text-align: center;
  padding: 0px 40px;

  position: relative;
  top: -35px;

  color: #F04438;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 416px;
  height: 86px;

  border: 1px solid #CCCCCC;
  background-color: white;

  margin-bottom: 10px;
`;

export const HaveAnAccount = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  
  margin-right: 2px;

  top: 499px;
  
  color: #7F7F7F;
`;

export const GoToLogin = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  
  margin-left: 2px;

  top: 499px;
  
  color: #2E90FA;
  cursor: default;
`;

export const AppDownloadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 416px;
`;

export const AppDownloadText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  
  color: #7F7F7F;
`;

export const PlayStoreImg = styled.img`
  width: 135px;
  height: 40px;

  margin-right: 4px;
`;

export const AppStoreImg = styled.img`
  width: 120px;
  height: 40px;

  margin-left: 4px;
`;