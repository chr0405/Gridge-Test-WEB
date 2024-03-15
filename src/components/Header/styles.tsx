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
`;

export const Logo = styled.img`

  width: 140px;
  height: 50px;


  position: absolute;
  top: 14px;
  left: 184px;
`;

export const searchDiv = styled.div`

  position: absolute;
  top: 17px;
  left: 632px;

  display: flex;
  align-items: center;
`;

export const searchImg = styled.img`
  width: 20px;
  height: 20px;
  
  position: absolute;
  left : 15px;
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

  position: absolute;
  top: 22px;
  left: 1045px;

  width: 210;
  height: 35px;

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