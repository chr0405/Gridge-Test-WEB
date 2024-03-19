import styled from "styled-components";

export const MakeFeedDiv = styled.div`
    position: fixed;
    
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    background-color: #00000066;

    justify-content: center;
    align-items: center;

    z-index: 1;
`;

export const MakeFeedContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 656px;
    height: 716px;

    position: absolute;
    top: 5%;
    left: 33%;

    background-color: white;
    border-radius: 10px;
    overflow: hidden;
`;

export const MakeFeedHeadDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 656px;
    height: 60px;

    font-size: 20px;
    font-weight: 600;
    line-height: 30px;

    color: #191919;

    border-bottom: 0.5px solid #B2B2B2;
`;

export const MakeFeedPictureDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 656px;
    height: 656px;

    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
`;

export const MakeFeedImg = styled.img`
    width: 95px;
    height: 95px;

    margin: 0px 0px;
`;

export const MakeFeedH6 = styled.h6`
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;

    color: #7F7F7F;

    margin: 20px 0px 0px 0px;
`;

export const MakeFeedBtn = styled.button`
    font-size: 15px;
    font-weight: 600;
    line-height: 24px;
    color: #FFFFFF;

    width: 130px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: #2E90FA;

    margin: 30px 0px 0px 0px;
`;