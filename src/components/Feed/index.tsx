import feedMore from '../../img/feedMore.png';
import feedLeft from '../../img/feedLeft.png';
import feedRight from '../../img/feedRight.png';
import feedHeart from '../../img/feedHeart.png';
import feedMessage from '../../img/feedMessage.png';
import feedBookmark from '../../img/feedBookmark.png';
import profileImg from '../../img/profileTestImg.png';

import * as S from './style';
import React, { useEffect, useState } from "react";
import feedApis from '../../apis/feedApis';
import Comments from '../comments';

// 포스트 값
interface FeedPostProps {
    contentList: any[];
    createdAt: string;
    feedCommentCount: number;
    feedLoginId: string;
    feedText: string;
    id: number;
}

// 댓글 값
interface FeedComment {
  id: number;
  writeUserLoginId: string;
  commentText: string;
}

const FeedPost: React.FC<FeedPostProps> = ({
    contentList,
    createdAt,
    feedCommentCount,
    feedLoginId,
    feedText,
    id,
}) => {

    // 현재 가르키고 있는 페이지
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // 좋아요 수
    const [liked, setLiked] = useState(777);
    // 더보기
    const [showMore, setShowMore] = useState(false);

    // 좋아요 수
    const likeCountFunc = async () => {
      try{
          const response = await feedApis.liked(id);
          console.log('likeCountFunc 성공', response);
          const likedCount = response.result.totalCount
          setLiked(likedCount);
      } catch(error){
          console.log('likeCountFunc 실패');
      }
    };

    // 댓글
    const [comments, setComments] = useState<FeedComment[]>([]);
    const [showComments, setShowComments] = useState(false);
    const [totalCommentCount, setTotalCommentCount] = useState(feedCommentCount);

    const CommentsFunc = async () => {
      try{
          const response = await feedApis.comments(id, 1);
          console.log('CommentsFunc 성공', response);
          const commentList = response.result.commentList
          setComments(commentList);
          setShowComments(response.result.totalCount <= 2);
          setTotalCommentCount(response.result.totalCount);
      } catch(error){
          console.log('CommentsFunc 실패');
      }
    };

    useEffect(() => {
      likeCountFunc();
      CommentsFunc();
    }, []);

    const toggleShowMore = () => {
      setShowMore(!showMore);
    };

    const combinedText = feedLoginId + ' ' + feedText;
    const truncatedText = feedText.slice(0, 100 - (feedLoginId.length + 1));

    const formatPostCreationTime = () : string => {
      const now = new Date();
      const createdDate = new Date(createdAt);
      const timeDiff = now.getTime() - createdDate.getTime();
      const minutes = Math.floor(timeDiff / (1000 * 60));
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
      if (minutes < 60) {
          return `${minutes}분`;
      } else if (hours < 24) {
          return `${hours}시간`;
      } else if (days < 30) {
          return `${days}일`;
      } else {
          const monthIndex = createdDate.getMonth();
          const day = createdDate.getDate();
          return `${monthIndex + 1}월 ${day}일`;
      }
  };

    return(
        <>
            {/* 게시물 */}
          <S.FeedDiv>
                <div>
                  {/* 사진 부분 */}
                  <S.FeedIndividualDiv>
                    <S.FeedImg src={contentList[currentImageIndex].contentUrl}/>
                    <S.FeedProfileDiv>
                      <S.FeedProfile src={profileImg}/>
                      <S.FeedIdH1>{feedLoginId}</S.FeedIdH1>
                      <S.FeedMoreImg src={feedMore}/>
                    </S.FeedProfileDiv>
                    <S.FeedDirectionDiv
                    style={{display : contentList.length > 1 ? 'flex' : 'none'}}>
                      <S.FeedLeftImg
                      src={feedLeft}
                      style={{display : currentImageIndex > 0? 'flex' : 'none'}}
                      onClick={() => {
                        setCurrentImageIndex((prev) => prev -1);
                      }}/>
                      <S.FeedRightImg
                      src={feedRight}
                      style={{display : (contentList.length - currentImageIndex) > 1? 'block' : 'none'}}
                      onClick={() => {
                        setCurrentImageIndex((prev) => prev +1);
                      }}/>
                    </S.FeedDirectionDiv>
                  </S.FeedIndividualDiv>
                  {/* 그 외 글 부분 */}
                  <S.IconDiv>
                      <S.HeartAndMessageDiv>
                        <S.HeartIconImg src={feedHeart}/>
                        <S.MessageIconImg src={feedMessage}/>
                      </S.HeartAndMessageDiv>
                      <S.ImgChartTotalDiv
                      style={{display : contentList.length > 1 ? 'flex' : 'none'}}>
                        {[...Array(contentList.length)].map((_, index) => (
                          <S.ImgChartDiv
                          style={{backgroundColor : index === currentImageIndex ? '#2F80ED' : '#E0E0E0'}}
                          key={index}
                          onClick={() => {
                            setCurrentImageIndex(index);
                          }}
                        ></S.ImgChartDiv>
                        ))}
                      </S.ImgChartTotalDiv>
                      <S.BookmarkIconImg src={feedBookmark}/>
                  </S.IconDiv>
                  <S.LikedAndContents>
                    <S.Liked>좋아요 {liked}개</S.Liked>
                    <S.ContentsDiv>
                      <S.Contents>
                        <S.ContentsId>{feedLoginId} </S.ContentsId>
                        {showMore ? feedText : truncatedText}
                        {combinedText.length > 100 && (
                            <S.MoreContents onClick={toggleShowMore}>
                                {showMore ? ' 접기' : ' 더보기'}
                            </S.MoreContents>
                        )}
                      </S.Contents>
                    </S.ContentsDiv>
                  </S.LikedAndContents>
                  {/* 댓글 부분 */}
                  <S.CommentsAndTimeDiv>
                    {showComments ? (
                        <div>
                          {comments.map((comment) => (
                            <Comments
                              key={comment.id}
                              id = {comment.id}
                              writeUserLoginId={comment.writeUserLoginId}
                              commentText={comment.commentText}
                            />
                          ))}
                        </div>
                    ) : (
                      <S.NotShowDiv>
                        <S.NotShowContents>
                          댓글 {totalCommentCount}개 모두 보기
                        </S.NotShowContents>
                        <S.PostTime>{formatPostCreationTime()}</S.PostTime>
                      </S.NotShowDiv>
                    )}
                  </S.CommentsAndTimeDiv>
                  <S.WriteDiv>
                    <S.CommentWriter src={profileImg}/>
                    <S.mailInput placeholder='댓글 달기...'/>
                    <S.UploadDiv>게시</S.UploadDiv>
                  </S.WriteDiv>
                </div>
          </S.FeedDiv>
        </>
    );
};
  
  export default FeedPost;