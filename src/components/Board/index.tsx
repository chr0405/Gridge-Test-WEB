import React, { useEffect, useState } from "react";
import * as S from './style';
import feedApis from '../../apis/feedApis';
import { useRecoilState } from "recoil";
import { scrollControlState } from "../../recoil/showBoard";

import feedLeft from '../../img/feedLeft.png';
import feedRight from '../../img/feedRight.png';
import profileImg from '../../img/profileTestImg.png';
import moreHorizontal from '../../img/more-horizontal.png';
import feedHeart from '../../img/feedHeart.png';
import feedMessage from '../../img/feedMessage.png';
import feedBookmark from '../../img/feedBookmark.png';
import Comments from '../comments';

// 포스트 값
interface BoardPostProps {
    contentList: any[];
    createdAt: string;
    feedCommentCount: number;
    feedLoginId: string;
    feedText: string;
    id: number;
    setShowBoard: (show: boolean) => void;
}

// 댓글 값
interface FeedComment {
    id: number;
    writeUserLoginId: string;
    commentText: string;
}

const Board: React.FC<BoardPostProps> = ({
    contentList,
    createdAt,
    feedCommentCount,
    feedLoginId,
    feedText,
    id,
    setShowBoard, // setShowBoard를 props로 받아옴
}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // 좋아요 수
    const [liked, setLiked] = useState(777);

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
    const [, setTotalCommentCount] = useState(feedCommentCount);
    const [page, setPage] = useState(1);
     // 다음 페이지가 존재하는지
    const [nextPage, setNextPage] = useState(true);

    const CommentsFunc = async () => {
        try{
            const response = await feedApis.comments(id, page);
            console.log('CommentsFunc 성공', response);
            console.log('현재 페이지', page);

            const commentList = response.result.commentList
            setComments(comments.concat(commentList));
            setPage(page + 1);
            setTotalCommentCount(response.result.totalCount);
            setNextPage(response.result.lastPage >= page);
        } catch(error){
            console.log('CommentsFunc 실패');
        }
    };
    
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop/*, scrollHeight, clientHeight */} = e.currentTarget;
        setScrollPosition(scrollTop);
    };

    useEffect(() => {
        // Example logic based on scrollPosition
        if (scrollPosition > 100 && nextPage) {
            CommentsFunc();
        }
    }, [scrollPosition]);

    useEffect(() => {
        likeCountFunc();
        CommentsFunc();
      }, []);

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

    const [comment, setComment] = useState('');
    const [canSubmit, setCanSubmit] = useState(false);
    const loginId = localStorage.getItem('loginId');
    
    const submitCommentFunc = async () => {
        console.log(id);
        console.log(comment);
        if(canSubmit){
            try{
                const response = await feedApis.writeComment(id, comment);
                console.log('submitCommentFunc 성공', response);
                setComment('');
                setCanSubmit(false);
                if(loginId){
                    setComments(
                        comments.concat({
                          id: response.result.feedCommentId,
                          writeUserLoginId : loginId,
                          commentText : comment,
                        })
                    );
                }
            } catch(error){
                console.log('submitCommentFunc 실패');
            }
        }
    }

  const [ , setScrollControl] = useRecoilState(scrollControlState);

  const [viewSetting, setViewSetting] = useState(false);

  const viewSettingFunc =  () => {
  }


    return(
        <S.BoardDiv onClick={() => {
            setShowBoard(false);
            setScrollControl(true);}}>
            <S.BoardContentDiv onClick={(event) => { 
                event.stopPropagation(); // 이벤트 전파 중단
                setShowBoard(true);
                }}>
                <S.BoardIndividualDiv>
                    <S.BoardFeedImg src={contentList[currentImageIndex].contentUrl}/>
                    <S.BoardDirectionDiv
                    style={{display : contentList.length > 1 ? 'flex' : 'none'}}>
                    <S.BoardLeftImg
                    src={feedLeft}
                    style={{display : currentImageIndex > 0? 'flex' : 'none'}}
                    onClick={() => {
                        setCurrentImageIndex((prev) => prev -1);
                    }}/>
                    <S.BoardRightImg
                    src={feedRight}
                    style={{display : (contentList.length - currentImageIndex) > 1? 'block' : 'none'}}
                    onClick={() => {
                        setCurrentImageIndex((prev) => prev +1);
                    }}/>
                    </S.BoardDirectionDiv>
                    <S.BoardImgChartToTalDiv>
                    {[...Array(contentList.length)].map((_, index) => (
                        <S.BoardImgChartDiv
                        style={{backgroundColor : index === currentImageIndex ? '#2F80ED' : '#E0E0E0'}}
                        key={index}
                        onClick={() => {
                        setCurrentImageIndex(index);
                        }}
                    ></S.BoardImgChartDiv>
                    ))}
                    </S.BoardImgChartToTalDiv>
                </S.BoardIndividualDiv>
                {/* 오른쪽 */}
                <S.BoardRightDiv>
                {/* 프사, 아이디, 더보기 버튼 */}
                <S.BoardRightFirstDiv>
                    <S.FirstImg src={profileImg}/>
                    <S.BoardIdH1>{feedLoginId}</S.BoardIdH1>
                    <S.FirstImg2 src={moreHorizontal}
                    onClick={viewSettingFunc}/>
                </S.BoardRightFirstDiv>
                {/* 프사, 아이디, 본문 */}
                <S.BoardRightSecondDiv onScroll={handleScroll}>
                    <S.BoardRightSecondProfileDiv>
                    <S.SecondImg src={profileImg}/>
                    <S.BoardIdH1>{feedLoginId}</S.BoardIdH1>
                    </S.BoardRightSecondProfileDiv>
                    <S.BoardRightSecondContentDiv>
                    <S.SecondP>{feedText}</S.SecondP>
                    </S.BoardRightSecondContentDiv>
                    <S.CommentDiv>
                        {comments.map((comment) => (
                        <Comments
                            key={comment.id}
                            id = {comment.id}
                            writeUserLoginId={comment.writeUserLoginId}
                            commentText={comment.commentText}
                        />
                        ))}
                    </S.CommentDiv>
                </S.BoardRightSecondDiv>
                {/* 아이콘, 좋아요 수, 날짜, 댓글*/}
                <S.BoardRightThirdDiv>
                    <S.IconDiv>
                        <S.HeartImg src={feedHeart}/>
                        <S.MessageImg src={feedMessage}/>
                        <S.BookmarkImg src={feedBookmark}/>
                    </S.IconDiv>
                    <S.Liked>좋아요 {liked}개</S.Liked>
                    <S.Time>{formatPostCreationTime()}</S.Time>
                    <S.WriteDiv>
                        <S.mailInput placeholder='댓글 달기...'
                        value={comment}
                        onChange={(e) => {
                            setComment(e.target.value);
                            setCanSubmit(e.target.value.length > 0);}}/>
                        <S.UploadDiv
                        onClick={submitCommentFunc}
                        style={{color : canSubmit? '#2E90FA' : '#B2DDFF'}}>게시</S.UploadDiv>
                    </S.WriteDiv>
                </S.BoardRightThirdDiv>
                </S.BoardRightDiv>
            </S.BoardContentDiv>
        </S.BoardDiv>
    );
};
  
  export default Board;