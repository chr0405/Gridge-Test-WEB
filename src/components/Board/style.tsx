import styled from "styled-components";

export const BoardDiv = styled.div`
    position: fixed;
    
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    background: #00000066;

    justify-content: center;
    align-items: center;

    z-index: 1;
`;

export const BoardContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 1072px;
    height: 698px;

    position: fixed; 
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: white;

    border-radius: 10px;

    overflow: hidden;
`;

export const BoardIndividualDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const BoardFeedImg = styled.img`
    width: 698px;
    height: 698px;
`;

export const BoardDirectionDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: absolute;

    width: 678px;
    height: 30px;
`;

export const BoardLeftImg = styled.img`
    width: 30px;
    height: 30px;

    position: absolute;
    left: 0px;
`;

export const BoardRightImg = styled.img`
    width: 30px;
    height: 30px;

    position: absolute;
    left: 648px;
`;

export const BoardImgChartToTalDiv = styled.div`
    position: absolute;
    bottom: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 678px;
    height: 5px;
`;

export const BoardImgChartDiv = styled.div`
    width: 5px;
    height: 5px;

    border-radius: 50px;

    margin: 0px 1px;
`;

export const BoardRightDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 374px;
    height: 698px;
`;

export const BoardRightFirstDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    width: 374px;
    height: 65px;

    border-bottom: 1px solid #B2B2B2;
`;

export const FirstImg = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 35px;

    margin-left: 15px;
`;

export const BoardIdH1 = styled.h1`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;

    color: #191919;

    margin-left: 10px;
`;

export const FirstImg2 = styled.img`
    width: 24px;
    height: 24px;

    margin-left: 189px;
`;

export const BoardRightSecondDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 374px;
    height: 471px;

    border-bottom: 1px solid #B2B2B2;

    /* Hide scrollbar */
    overflow: scroll;
    scrollbar-width: none; /* Firefox */
    scrollbar-color: transparent transparent; /* Firefox */
`;

export const BoardRightSecondProfileDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    margin-top: 15px;

    width: 374px;
`;

export const SecondImg = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 35px;

    margin-left: 15px;
`;

export const BoardRightSecondContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    margin-top: 0px;

    width: 374px;
`;

export const CommentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    margin: 30px 0px 0px 15px;

    width: 359px;
`;

export const SecondP = styled.p`
    width: 314px;

    font-size: 14px;
    font-weight: 500;
    line-height: 20px;

    color: #191919;
    margin: 0px 0px 0px 60px;
`;

export const BoardRightThirdDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    width: 374px;
`;

export const IconDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    width: 374px;
    height: 24px;

    margin-top: 15px;
`;

export const HeartImg = styled.img`
  width: 24px;
  height: 24px;

  margin-left: 15px;
`;

export const MessageImg = styled.img`
  width: 24px;
  height: 24px;

  margin-left: 15px;
`;

export const BookmarkImg = styled.img`
  width: 24px;
  height: 24px;

  margin-left: 257px;
`;

export const Liked = styled.h6`
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;

    color: #191919;

    margin: 10px 0px 0px 15px;
`;

export const Time = styled.p`
    margin: 5px 0px 0px 15px;

    font-size: 12px;
    font-weight: 500;
    line-height: 18px;

    color: #B2B2B2;
`;

export const WriteDiv = styled.div`
    width: 374px;
    height: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    margin-top: 20px;
`;

export const mailInput = styled.input`
    width: 374px;
    height: 50px;

    border-top: 1px solid #B2B2B2;
    border-left: none;
    border-right: none;
    border-bottom: none;

    text-indent: 15px;

    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    color: #7F7F7F;

    outline: none;
`;

export const UploadDiv = styled.div`
    position: absolute;
    margin-left: 0px;

    font-size: 14px;
    font-weight: 700;
    line-height: 20px;

    margin-left: 330px;
`;