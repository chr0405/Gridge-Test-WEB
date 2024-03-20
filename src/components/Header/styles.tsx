import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 80px;
  background-color: white;

  border-bottom: 1px solid gray;

  @media (max-width: 1000px) {
    max-width: 100%;
  }
`;

export const Logo = styled.img`

  width: 140px;
  height: 50px;

  @media (max-width: 1000px) {
    margin-right: 44px;
  }

  margin-right: 308px;
`;

export const searchDiv = styled.div`
  width: 312px;
  height: 44px;

  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    margin-left: 44px;
  }
`;

export const searchImg = styled.img`
  width: 20px;
  height: 20px;

  position: absolute;
  margin-left: 15px;
`;

export const searchInput = styled.input`
  width: 312px;
  height: 44px;

  border-radius: 5px;
  border: 1px solid gray;
  gap: 6px;

  text-indent: 45px;

  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const iconDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 210;
  height: 35px;

  @media (max-width: 1000px) {
    display: none;
  }

  margin-left: 101px;
`;

export const homeImg = styled.img`
  width: 24px;
  height: 24px;
  
  margin-right: 20px;
`;

export const sendImg = styled.img`
  width: 24px;
  height: 24px;
  
  margin-right: 20px;
`;

export const plusImg = styled.img`
  width: 24px;
  height: 24px;
  
  margin-right: 20px;
`;

export const heartImg = styled.img`
  width: 24px;
  height: 24px;
  
  margin-right: 20px;
  
`;

export const profileImg = styled.img`
  width: 35px;
  height: 35px;

  border-radius: 35px;
`;

export const VisibleDiv = styled.div`
  display: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 280px;
  height: 312px;

  position: absolute;
  top: 72px;
  left: 895px;

  background-color: white;
  border-radius: 8px;
  border: 1px solid #EAECF0;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.14);
`;

export const VisibleContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  width: 240px;
  height: 48px;

  position: relative;

  border-radius: 8px;

  margin: 12px 30px;
  gap: 16px;

`;

export const IconsImg = styled.img`
  width: 24px;
  height: 24px;
`;

export const IconsP = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  color: black;
`;

//////////////

export const FooterDiv = styled.div`
  display: none;

  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 60px;

  z-index: 1;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: white;

  }
`;

export const FooterDiv2 = styled.div`

  width: 80vw;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

  }
`;