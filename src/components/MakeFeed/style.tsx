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

    position: fixed; 
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);

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

//////////////////

export const BackToPage1Img = styled.img`
    width: 24px;
    height: 24px;

    margin: 0px 206px 0px 0px;
`;

export const GoToNextDiv = styled.div`
    margin: 0px 0px 0px 195px;

    font-size: 18px;
    font-weight: 600;
    line-height: 28px;

    color: #2E90FA;
`;

////////////////////

export const WriteDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 1008px;
    height: 716px;

    position: fixed; 
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: white;

    border-radius: 10px;

    overflow: hidden;
`;

export const Page3HeadDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 1008px;
    height: 60px;

    font-size: 20px;
    font-weight: 600;
    line-height: 30px;

    color: #191919;

    border-bottom: 0.5px solid #B2B2B2;
`;

export const Page3HeadImg = styled.img`
    width: 24px;
    height: 24px;

    margin: 0px 382px 0px 0px;
`;

export const Page3HeadShareDiv = styled.div`
    margin: 0px 0px 0px 371px;

    font-size: 18px;
    font-weight: 600;
    line-height: 28px;

    color: #2E90FA;
`;

export const Page3BodyDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    width: 1008px;
    height: 656px;
`;

export const Page3PicturesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 656px;
    height: 656px;

    background-color: teal;
`;

export const Page3PicturesImg = styled.img`
    width: 656px;
    height: 656px;
    object-fit: cover;
    object-position: center;
`;

export const Page3PicturesDirectionDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    position: absolute;

    width: 626px;
    height: 30px;
`;

export const LeftImg = styled.img`
    width: 30px;
    height: 30px;
`;

export const RightImg = styled.img`
    width: 30px;
    height: 30px;

    position: absolute;
    left: 596px;
`;

export const ImgChartToTalDiv = styled.div`
    position: absolute;
    bottom: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 656px;
    height: 5px;
`;

export const ImgChartDiv = styled.div`
    width: 5px;
    height: 5px;

    border-radius: 5px;

    margin: 0px 1px;
`;

export const Page3TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 352px;
    height: 656px;
`;

export const Page3Text1Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 352px;
    height: 328px;
`;

export const Page3Text1ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    width: 352px;
    height: 70px;
`;

export const ProfileImg = styled.img`
    width: 35px;
    height: 35px;

    border-radius: 35px;

    margin-left: 20px;
`;

export const Page3Text1ContentH6 = styled.h6`
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;

    color: #191919;

    margin-left: 10px;
`;

export const Page3Text1Content2Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;

    width: 352px;
    height: 258px;
`;

export const Page3Text1Content2InputDiv = styled.div`
    width: 352px;
    height: 208px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
`;

export const Page3Text1Content2Textarea = styled.textarea`
    width: 332px;
    height: 206px;

    outline: none;
    border: none;

    font-size: 18px;
    font-weight: 500;
    line-height: 28px;

    color: #191919;

    resize: none;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Page3Text1Content2P = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;

    color: #B2B2B2;

    margin-right: 15px;
`;

export const Page3Text2Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 352px;
    height: 328px;
`;

export const Page3Text2ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 352px;
    height: 50px;

    border-top: 0.5px solid #B2B2B2;
    border-bottom: 0.5px solid #B2B2B2;
`;

export const Page3Text2ContentGrayH6 = styled.h6`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    color: #7F7F7F;

    margin-left: 10px;
`;

export const Page3Text2ContentBlackH6 = styled.h6`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    color: #191919;

    margin-left: 10px;
`;

export const ContentIcon = styled.img`
    width: 24px;
    height: 24px;
    
    margin-right: 10px;
`;

export const PopUpDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 448px;
    height: 223px;

    position: fixed; 
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: white;

    border-radius: 10px;

    overflow: hidden;
`;

export const PopUpH6 = styled.h6`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;

    color: #191919;

    margin: 40px 0px 0px 0px;
`;

export const PopUpP = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;

    color: #7F7F7F;

    margin: 5px 0px 30px 0px;
`;

export const PopUpSelectDiv1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;

    color: #F04438;
    border-top: 1px solid #CCCCCC;

    width: 448px;
    height: 50px;
`;

export const PopUpSelectDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;

    color: #000000;
    border-top: 1px solid #CCCCCC;

    width: 448px;
    height: 50px;
`;