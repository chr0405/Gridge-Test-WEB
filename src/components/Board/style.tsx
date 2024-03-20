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

    position: absolute;
    margin-left: 329px;
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

export const TotalSettingDiv = styled.div`
    width: 1072px;
    height: 698px;

    position: fixed; 
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);

    background: #00000066;

    border-radius: 10px;

    overflow: hidden;
`;

export const settingDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 448px;
    height: 450px;

    position: fixed; 
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: white;

    border-radius: 10px;

    overflow: hidden;
`;

export const settingSelectRedDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 448px;
    height: 50px;

    font-size: 14px;
    font-weight: 600;
    line-height: 20px;

    color: #F04438;
`;

export const settingSelectDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 448px;
    height: 50px;
    
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;

    color: #191919;

    border-top: 1px solid #CCCCCC;
`;

export const EditDiv = styled.div`
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

export const EditHeadDiv = styled.div`
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

export const EditHeadBackDiv = styled.div`
    margin: 0px 400px 0px 0px;

    font-size: 18px;
    font-weight: 500;
    line-height: 28px;

    color: #7F7F7F;
`;

export const EditHeadShareDiv = styled.div`
    margin: 0px 0px 0px 400px;

    font-size: 18px;
    font-weight: 600;
    line-height: 28px;

    color: #2E90FA;
`;

export const EditBodyDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    width: 1008px;
    height: 656px;
`;

export const EditPicturesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 656px;
    height: 656px;

    background-color: teal;
`;

export const EditPicturesImg = styled.img`
    width: 656px;
    height: 656px;
    object-fit: cover;
    object-position: center;
`;

export const EditPicturesDirectionDiv = styled.div`
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

export const EditTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 352px;
    height: 656px;
`;

export const EditText1Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 352px;
    height: 328px;
`;

export const EditText1ContentDiv = styled.div`
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

export const EditText1ContentH6 = styled.h6`
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;

    color: #191919;

    margin-left: 10px;
`;

export const EditText1Content2Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;

    width: 352px;
    height: 258px;
`;

export const EditText1Content2InputDiv = styled.div`
    width: 352px;
    height: 208px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
`;

export const EditText1Content2Textarea = styled.textarea`
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

export const EditText1Content2P = styled.p`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;

    color: #B2B2B2;

    margin-right: 15px;
`;

export const EditText2Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 352px;
    height: 328px;
`;

export const EditText2ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 352px;
    height: 50px;

    border-top: 0.5px solid #B2B2B2;
    border-bottom: 0.5px solid #B2B2B2;
`;

export const EditText2ContentGrayH6 = styled.h6`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    color: #7F7F7F;

    margin-left: 10px;
`;

export const EditText2ContentBlackH6 = styled.h6`
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

export const TotalCancle = styled.div`
    position: fixed; 
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%);

    background: #00000066;

    border-radius: 10px;

    overflow: hidden;
`;


export const CancleDiv = styled.div`
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

export const CancleH6 = styled.h6`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;

    color: #191919;

    margin: 40px 0px 0px 0px;
`;

export const CancleP = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;

    color: #7F7F7F;

    margin: 5px 0px 30px 0px;
`;

export const CancleSelectDiv1 = styled.div`
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

export const CancleSelectDiv2 = styled.div`
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