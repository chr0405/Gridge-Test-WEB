import React from 'react'
import * as S from './style';
import profileImg from '../../img/profileTestImg.png';

interface FeedCommentProps {
    id: number;
    writeUserLoginId: string;
    commentText: string;
}

const Comments: React.FC<FeedCommentProps> = ({
    id,
    writeUserLoginId,
    commentText,
}) => {

    console.log(id);
    return(
        <>
            <S.TotalDiv>
                <S.CommentWriter src={profileImg}/>
                <div>
                    <div>
                        <S.Comment>
                        <S.CommentStrong>{writeUserLoginId} </S.CommentStrong>
                        {commentText}
                      </S.Comment>
                    </div>
                    <S.CommentTimeDiv>
                        30분 전
                    </S.CommentTimeDiv>
                </div>
            </S.TotalDiv>
        </>
    )
}

export default Comments;