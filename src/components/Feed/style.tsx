import styled from "styled-components";

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

  position: absolute;
  margin-left: 480px;
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

    position: relative;
    left: 0px;

    margin-right: 430px;
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

    margin: 0px 1px;
`;

export const BookmarkIconImg = styled.img`
    width: 24px;
    height: 24px;

    position: relative;
    left: 0px;
    margin-left: -20px;
`;

export const LikedAndContents = styled.div`
    width: 520px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    margin-top: 15px;
`;

export const Liked = styled.h6`
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;

    color: #191919;

    margin: 0px 0px 0px 10px;
`;

export const ContentsDiv = styled.div`
    width: 520px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Contents = styled.p`
    width: 500px;

    margin-top: 5px;
    margin-bottom: 0px;

    font-size: 14px;
    font-weight: 500;
    line-height: 20px;

    color: #191919;
`;

export const ContentsId = styled.strong`
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;

    color: #191919;
`;

export const MoreContents = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;

    color: #999999;
`;

export const CommentsAndTimeDiv = styled.div`
    width: 520px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

// 댓글 하나 혹은 두 개가 보이는 경우

export const CommentsDiv = styled.div`
    width: 520px;

    margin: 0px 0px 0px 10px;

    display: flex;
    flex-direction: column;
    align-items:  flex-start;
    justify-content: center;
`;

// 댓글 모두 보기가 보이는 경우

export const NotShowDiv = styled.div`
   width: 500px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const NotShowContents = styled.h6`
    margin-top: 5px;
    margin-bottom: 0px;

    font-size: 14px;
    font-weight: 500;
    line-height: 20px;

    color: #999999;
`;

export const PostTime = styled.p`
    margin-top: 10px;
    margin-bottom: 0px;

    font-size: 12px;
    font-weight: 500;
    line-height: 18px;

    color: #B2B2B2;
`;

////////////////

export const WriteDiv = styled.div`
    width: 520px;
    height: 60px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    margin-top: 20px;
`;

export const mailInput = styled.input`
    width: 520px;
    height: 60px;

    border-top: 1px solid #B2B2B2;
    border-left: none;
    border-right: none;
    border-bottom: none;

    text-indent: 45px;

    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    color: #B2B2B2;

    outline: none;
`;

export const CommentWriter = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 30px;

    position: absolute;
    margin-left: 10px;
`;

export const UploadDiv = styled.div`
    position: absolute;
    margin-left: 474px;

    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
`;