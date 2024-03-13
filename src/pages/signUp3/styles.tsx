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

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 96px;
  left: 808px;
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

export const TermsAndConditionsOfUse = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #191919;

  margin-top: 60px;
`;

export const Instruction = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;

  margin-top: 15px;
  padding: 0px 40px;

  color: #7F7F7F;
`;

export const CheckBoxList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 20px;
`;

export const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 6px;

  width: 356px;
  height: 50px;

  border-bottom: 1px solid #7F7F7F;
`;

export const CheckBoxAcceptAllDiv = styled.div`
  width: 323px;
  /* height: 24px; */
`;

export const CheckBoxAccept = styled.h5`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #101828;
`;

export const CheckImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const CheckBox1And2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 6px;

  width: 356px;
  height: 50px;
`;

export const CheckBox2Line = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  width: 323px;
  height: 48px;
`;

export const CheckBoxAcceptRest = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #101828;
`;

export const CheckBoxAcceptDetail = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #2E90FA;
`;

export const CheckBox3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 35px;

  width: 356px;
  height: 50px;
`;

export const BackToSignUp2 = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  color: #2E90FA;

  margin-top: 10px;
  margin-bottom: 40px;
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