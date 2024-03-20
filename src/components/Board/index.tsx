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
import pinImg from '../../img/map-pin.png';
import checkImg from '../../img/chevron-down.png';

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

    // 보드
    const [viewBoard, setViewBoard] = useState(true);
    // 설정창
    const [viewSetting, setViewSetting] = useState(false);
    // 정보수정창
    const [viewEdit, setViewEdit] = useState(false);
    // 정보수정 취소할 거냐고 묻는 창
    const [viewEditCancle, setViewEditCancle] = useState(false);
    // 게시글 삭제할 거냐고 묻는 창
    const [viewBoardCancle, setViewBoardCancle] = useState(false);

    // 본문 내용
    const [textContent, setTextContent] = useState('');

    // setting창 여는 조건
    const viewSettingFunc =  () => {
        if(feedLoginId === loginId){
            setViewSetting(true);
            setTextContent(feedText);
        }
    }

    // 정보수정창 여는 조건
    const viewEditFunc =  () => {
        setViewBoard(false);
        setViewSetting(false);
        setViewEdit(true);
    }

    // edit창 사진 index
    const [editImageIndex, setEditImageIndex] = useState(0);

    const updateFeedFunc = async () => {
        try{
            const response = await feedApis.updateFeed(id, textContent);
            console.log('updateFeedFunc 성공', response.data);
            setViewEdit(false);
            window.location.reload();
        } catch(error){
            console.log('updateFeedFunc 실패');
        }
    };

    const deleteFeedFunc = async () => {
        try{
            const response = await feedApis.deleteFeed(id);
            console.log('deleteFeedFunc 성공', response.data);
            setViewBoardCancle(false);
            setViewBoard(false);
            window.location.reload();
        } catch(error){
            console.log('deleteFeedFunc 실패');
        }
    };

    const handleDeleteDiv =  () => {
        if(viewEditCancle){
            setTextContent('');
            setViewBoard(true);
            setViewSetting(true);
            setViewEdit(false);
            setViewEditCancle(false);
        } else{
            deleteFeedFunc();
        }
    }

    const handleCencleDiv =  () => {
        if(viewEditCancle){
            setViewEditCancle(false);
        } else{
            setViewBoardCancle(false);
            setViewSetting(true);
        }
    }

    return(
        <S.BoardDiv onClick={() => {
            setShowBoard(false);
            setScrollControl(true);}}>
            {(viewBoard) &&
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
            }
            {(viewSetting) &&
                <S.TotalSettingDiv onClick={(event) => { 
                    event.stopPropagation(); // 이벤트 전파 중단
                    setShowBoard(true);
                    setViewSetting(false);
                    }}>
                    <S.settingDiv onClick={(event) =>
                    event.stopPropagation()}>
                        <S.settingSelectRedDiv onClick={() => {
                            setViewSetting(false);
                            setViewBoardCancle(true);
                        }}>삭제</S.settingSelectRedDiv>
                        <S.settingSelectDiv
                        onClick={viewEditFunc}>수정</S.settingSelectDiv>
                        <S.settingSelectDiv>좋아요 수 숨기기</S.settingSelectDiv>
                        <S.settingSelectDiv>댓글 기능 해제</S.settingSelectDiv>
                        <S.settingSelectDiv>게시물로 이동</S.settingSelectDiv>
                        <S.settingSelectDiv>공유 대상...</S.settingSelectDiv>
                        <S.settingSelectDiv>링크복사</S.settingSelectDiv>
                        <S.settingSelectDiv>퍼가기</S.settingSelectDiv>
                        <S.settingSelectDiv
                        onClick={() => {
                            setViewSetting(false);
                        }}>취소</S.settingSelectDiv>
                    </S.settingDiv>
                </S.TotalSettingDiv>
            }
            {(viewEdit) &&
            <S.EditDiv onClick={(event) => { 
                event.stopPropagation(); // 이벤트 전파 중단
                setShowBoard(true);
            }}>
                <S.EditHeadDiv>
                    {/* 헤더 */}
                    <S.EditHeadBackDiv
                    onClick={() => {
                        setViewEditCancle(true);
                    }}>취소</S.EditHeadBackDiv>
                    정보 수정
                    <S.EditHeadShareDiv
                    onClick={updateFeedFunc}>
                    공유</S.EditHeadShareDiv>
                </S.EditHeadDiv>
                {/* 사진 부분 */}
                <S.EditBodyDiv>
                    <S.EditPicturesDiv>
                        <S.EditPicturesImg src={contentList[editImageIndex].contentUrl}/>
                        <S.EditPicturesDirectionDiv
                        style={{display : contentList.length > 1 ? 'flex' : 'none'}}>
                        <S.LeftImg
                        src={feedLeft}
                        style={{display : editImageIndex > 0? 'flex' : 'none'}}
                        onClick={() => {
                            setEditImageIndex((prev) => prev -1);
                        }}/>
                        <S.RightImg
                        src={feedRight}
                        style={{display : (contentList.length - editImageIndex) > 1? 'block' : 'none'}}
                        onClick={() => {
                            setEditImageIndex((prev) => prev +1);
                        }}/>
                        </S.EditPicturesDirectionDiv>
                        <S.ImgChartToTalDiv>
                        {[...Array(contentList.length)].map((_, index) => (
                            <S.ImgChartDiv
                            style={{backgroundColor : index === editImageIndex ? '#2F80ED' : '#E0E0E0'}}
                            key={index}
                            onClick={() => {
                            setEditImageIndex(index);
                            }}
                        ></S.ImgChartDiv>
                        ))}
                        </S.ImgChartToTalDiv>
                    </S.EditPicturesDiv>
                    <S.EditTextDiv>
                        <S.EditText1Div>
                            <S.EditText1ContentDiv>
                                <S.ProfileImg src={profileImg}/>
                                <S.EditText1ContentH6>{feedLoginId}</S.EditText1ContentH6>
                            </S.EditText1ContentDiv>
                            <S.EditText1Content2Div>
                                <S.EditText1Content2InputDiv>
                                    <S.EditText1Content2Textarea
                                    maxLength={1000}
                                    value={textContent}
                                    onChange={(event) => {setTextContent(event.target.value)}}/>
                                </S.EditText1Content2InputDiv>
                                <S.EditText1Content2P> {textContent.length} / 2,200</S.EditText1Content2P>
                            </S.EditText1Content2Div>
                        </S.EditText1Div>
                        <S.EditText2Div>
                            <S.EditText2ContentDiv>
                                <S.EditText2ContentGrayH6>위치 추가</S.EditText2ContentGrayH6>
                                <S.ContentIcon src={pinImg}/>
                            </S.EditText2ContentDiv>
                            <S.EditText2ContentDiv>
                                <S.EditText2ContentBlackH6>접근성</S.EditText2ContentBlackH6>
                                <S.ContentIcon src={checkImg}/>
                            </S.EditText2ContentDiv>
                        </S.EditText2Div>
                    </S.EditTextDiv>
                </S.EditBodyDiv>
            </S.EditDiv>
            }
            {(viewEditCancle || viewBoardCancle) &&
            <S.TotalCancle onClick={(event) => { 
                event.stopPropagation(); // 이벤트 전파 중단
                setShowBoard(true);
                setViewEditCancle(false);
                setViewBoardCancle(false);
            }} style={{width: viewEditCancle? '1008px' : '1072px',
                    height: viewEditCancle? '716px' : '698px'}}>
                <S.CancleDiv>
                    <S.CancleH6>게시물을 삭제하시겠어요?</S.CancleH6>
                    <S.CancleP>{viewEditCancle? '지금 나가면 수정 내용이 저장되지 않습니다.' : '이 게시물을 삭제하시겠어요?'}</S.CancleP>
                    <S.CancleSelectDiv1
                        onClick={handleDeleteDiv}>삭제</S.CancleSelectDiv1>
                    <S.CancleSelectDiv2
                        onClick={handleCencleDiv}>취소</S.CancleSelectDiv2>
                </S.CancleDiv>
            </S.TotalCancle>
            }
        </S.BoardDiv>
    );
};
  
  export default Board;