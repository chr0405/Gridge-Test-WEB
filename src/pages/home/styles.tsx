import styled from "styled-components";

export const Root = styled.div`
    width: 1440px;
    background-color: #F6F6F6;
`;

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;

export const LeftContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 30px;
    margin-right: 52px;
`;

export const StoryDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

    background-color: white;

    width: 520px;
    height: 130px;

    border-radius: 10px;
    border: 1px solid #CCCCCC;
`;

export const StoryIndividualDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 90px;
    height: 90px;

    margin-left: 10px;
`;


export const StoryBeltDiv = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: linear-gradient(45deg, #9EEFF4, #1570EF);
    background-clip: padding-box; 

    position: absolute;
`;

export const StoryBackgroundDiv = styled.div`
    width: 85px;
    height: 85px;
    background: white;
    border-radius: 50%;

    position: absolute;
`;

export const StoryImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;

  position: absolute;
`;

/////////////////

export const RightContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 30px;
    margin-left: 52px;
`;

export const ProfileDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

    width: 416px;
    height: 130px;
`;

export const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 80px;
`;

export const ProfileTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-left: 22px;
`;

export const LoginIdH6 = styled.h6`
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;

    color: #191919;

    margin: 0px 0px;
`;

export const RealNameP = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    color: #7F7F7F;

    margin: 0px 0px;
`;

export const RecommendListDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 416px;
`;

export const RecommendIndividualDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 416px;
    height: 30px;

    margin: 5px 0px;
`;

export const RecommendMentH6 = styled.h6`
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;

    color: #7F7F7F;
`;

export const ShowMoreRecommendProfile = styled.p`
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;

    color: #191919;
`;

export const RecommendProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 30px;
`;

export const RecommendImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
`;

export const RecommendIdH6 = styled.h6`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;

    color: #333333;

    margin-left: 6px;
`;

export const Follow = styled.p`
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;

    color: #2E90FA;
`;

////////////////////

export const FeedDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 520px;

    margin-top: 15px;

    background-color: white;

    border-radius: 10px;
    border: 1px solid #CCCCCC;

    overflow: hidden;
`;

export const FeedIndividualDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FeedImg = styled.img`
    width: 520px;
    height: 520px;
`;

export const FeedProfileDiv = styled.div`
    position: absolute;
    margin-top: -450px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    width: 520px;
    height: 35px;
`;

export const FeedProfile = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 35px;

  margin-left: 10px;
`;

export const FeedIdH1 = styled.h1`
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;

    color: #FFFFFF;

    margin-left: 5px;
`;

export const FeedMoreImg = styled.img`
  width: 24px;
  height: 24px;

  margin-left: 370px;
`;

export const FeedDirectionDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: absolute;

    width: 520px;
    height: 30px;
`;

export const FeedLeftImg = styled.img`
    width: 30px;
    height: 30px;

    position: absolute;
    right: 475px;
`;

export const FeedRightImg = styled.img`
    width: 30px;
    height: 30px;

    position: absolute;
    left: 475px;
`;

export const IconDiv = styled.div`
    width: 520px;
    height: 24px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 20px;
`;

export const HeartAndMessageDiv = styled.div`
    width: 64px;
    height: 24px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    left: 123px;
`;

export const HeartIconImg = styled.img`
    width: 24px;
    height: 24px;
`;

export const MessageIconImg = styled.img`
    width: 24px;
    height: 24px;
`;

export const ImgChartTotalDiv = styled.div`
    position: absolute;
`;

export const ImgChartDiv = styled.div`
    width: 5px;
    height: 5px;

    border-radius: 5px;
`;

export const BookmarkIconImg = styled.img`
    width: 24px;
    height: 24px;

    position: absolute;
    left: 589px;
`;
