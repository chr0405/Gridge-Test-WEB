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

export const BirthdayImgAndText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 416px;

  margin-top: 60px;
`;

export const CakeImg = styled.img`
  width: 238px;
  height: 170px;
`;

export const BirthdayAddText = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #191919;
`;

export const NoIncludeProfileText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  
  color: #7F7F7F;

  margin-top: 15px;
`;

export const ReasonText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  
  color: #2E90FA;

  margin-top: 5px;
`;


////////////////////

export const BirthdayCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 416px;

  margin-top: 30px;
`;

export const BirthdaySelectorBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 101px;
  height: 44px;

  border: 1px solid gray;
  border-radius: 5px;

  margin: 0 5px;
`;

export const SelectedDiv = styled.div`
  justify-content: left;

  width: 45px;
  height: 24px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #7F7F7F;
`;

export const SelectorImg = styled.img`
  width: 20px;
  height: 20px;

  margin-left: 10px;
`;

export const SelectorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 98px;
  height: 533px;

  border-radius: 5px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.5);

  position: absolute;
  background-color: white;

  /* Hide scrollbar */
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  scrollbar-color: transparent transparent; /* Firefox */
  
  &::-webkit-scrollbar {
    width: 0; /* Chrome, Safari, Edge */
  }
`;

export const AnSelectorDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  width: 42px;
  height: 24px;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  position: absolute;
  left: 15px;
`;

////////////////////

export const commandTextH5 = styled.h5`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;

  color: #7F7F7F;

  margin-top: 10px;
`;

export const BackToSignUp1 = styled.p`
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

////////////////////


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