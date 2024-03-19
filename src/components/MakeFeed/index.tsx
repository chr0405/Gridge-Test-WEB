import React from "react";
import * as S from './style';
import { useRecoilState } from "recoil";
import { scrollControlState } from "../../recoil/showBoard";
import PictureImage from "../../img/PictureImage.png";

interface MakeFeedProps {
    setShowMakeFeed: (show: boolean) => void;
}

const MakeFeed: React.FC<MakeFeedProps> = ({
    setShowMakeFeed,
}) => {
    const [, setScrollControl] = useRecoilState(scrollControlState);

    const handleCloseMakeFeed = () => {
        setShowMakeFeed(false);
        setScrollControl(true); // 스크롤을 활성화
    };

    return (
        <S.MakeFeedDiv onClick={handleCloseMakeFeed}>
            <S.MakeFeedContentDiv onClick={(event) => { 
                event.stopPropagation(); // 이벤트 전파 중단
            }}>
                <S.MakeFeedHeadDiv>새 게시물 만들기</S.MakeFeedHeadDiv>
                <S.MakeFeedPictureDiv>
                    <S.MakeFeedImg src={PictureImage}/>
                    <S.MakeFeedH6>사진과 동영상을 여기에 끌어다 놓으세요</S.MakeFeedH6>
                    <S.MakeFeedBtn>컴퓨터에서 선택</S.MakeFeedBtn>
                </S.MakeFeedPictureDiv>
            </S.MakeFeedContentDiv>
        </S.MakeFeedDiv>
    );
}

export default MakeFeed;