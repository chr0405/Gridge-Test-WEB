import React, { useRef, useState } from "react";
import * as S from './style';
import { useRecoilState } from "recoil";
import { scrollControlState } from "../../recoil/showBoard";
import PictureImage from "../../img/PictureImage.png";
import BackToPage1Icon from "../../img/BackToPage1Icon.png";
import feedLeft from '../../img/feedLeft.png';
import feedRight from '../../img/feedRight.png';
import pinImg from '../../img/map-pin.png';
import checkImg from '../../img/chevron-down.png';
import profileImg from '../../img/profileTestImg.png';

import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../apis/Firebase';
import feedApis from '../../apis/feedApis';

interface MakeFeedProps {
    setShowMakeFeed: (show: boolean) => void;
}

const MakeFeed: React.FC<MakeFeedProps> = ({
    setShowMakeFeed,
}) => {
    const [, setScrollControl] = useRecoilState(scrollControlState);
    const fileInputRef = useRef<HTMLInputElement>(null); // input 요소에 대한 참조 생성

    const handleCloseMakeFeed = () => {
        setShowMakeFeed(false);
        setScrollControl(true); // 스크롤을 활성화
    };

    const handleFileButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // 파일 입력 요소 클릭
        }
    };

    const [fileTypePictures, setFileTypePictures] = useState<File[]>([]);
    const [stringTypePictures, setStringTypePictures] = useState<string[]>([]);
    const [page1, setPage1] = useState(true);
    const [page2, setPage2] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            // 선택된 파일의 수가 5개를 초과하는지 확인
            if (files.length > 5) {
                alert("최대 5개의 사진을 선택할 수 있습니다.");
                // 선택된 파일을 지웁니다.
                event.target.value = "";
                return;
            }

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                // 여기서 파일을 처리하거나 업로드
                if (file.size > 5 * 1024 * 1024) {
                    alert("최대 5MB까지 선택할 수 있습니다.");
                    event.target.value = "";
                    return;
                }
                const url = URL.createObjectURL(file);
                setStringTypePictures((prev) => [...prev, url]);
            }

            // 선택된 파일을 처리하거나 업로드
            const newFiles: File[] = [];
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                console.log("선택된 파일:", i, file);
                newFiles.push(file);
            }
            setFileTypePictures((prev) => [...prev, ...newFiles]);

            setPage1(false);
            setPage2(true);
        }
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const userId = localStorage.getItem('loginId');
    const [textContent, setTextContent] = useState('');
    const [popUp, setPopUp] = useState(false);

    const id = localStorage.getItem('id');

    const UploadFunc = async () => {
        const FirebaseImgsArray = [];
        for (const fileTypePicture of fileTypePictures) {
          const editedFileName = `${userId}/${id}/${userId}_${Date.now()}.${fileTypePicture.name.split('.').pop()}`;

          // Firebase
          const FirebaseFile = await uploadBytes(ref(storage, editedFileName), fileTypePicture);
          const FirebaseUrl = await getDownloadURL(FirebaseFile.ref);
          FirebaseImgsArray.push(FirebaseUrl);
          console.log('Firebase 끝');
        }
        try {
          const response = feedApis.writeFeed(textContent, FirebaseImgsArray);
          console.log(response);
          console.log('UploadFunc 함수 성공');
          window.location.reload();
        } catch {
          console.log('UploadFunc 함수 실패');
          alert('다시 시도해주세요');
        }
    };

    return (
        <>
        <S.MakeFeedDiv onClick={handleCloseMakeFeed}>
            {(page1 && !page2) &&
            <S.MakeFeedContentDiv onClick={(event) => { 
                event.stopPropagation(); // 이벤트 전파 중단
            }}>
            <S.MakeFeedHeadDiv>새 게시물 만들기</S.MakeFeedHeadDiv>
            <S.MakeFeedPictureDiv>
                <S.MakeFeedImg src={PictureImage}/>
                <S.MakeFeedH6>사진과 동영상을 여기에 끌어다 놓으세요</S.MakeFeedH6>
                {/* 파일 선택 버튼 */}
                <S.MakeFeedBtn onClick={handleFileButtonClick}>컴퓨터에서 선택</S.MakeFeedBtn>
                {/* 실제로는 숨겨진 input 요소를 사용하여 파일 선택창을 엶. */}
                <input type="file" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileChange} multiple/>
            </S.MakeFeedPictureDiv>
            </S.MakeFeedContentDiv>}
            {(!page1 && page2) &&
            <S.MakeFeedContentDiv onClick={(event) => { 
                event.stopPropagation(); // 이벤트 전파 중단
            }}>
                <S.MakeFeedHeadDiv>
                    <S.BackToPage1Img
                    src={BackToPage1Icon}
                    onClick={() => {
                        setPage1(true);
                        setPage2(false);
                    }}/>
                    새 게시물 만들기
                    <S.GoToNextDiv
                    onClick={() => {
                        setPage1(false);
                        setPage2(false);
                    }}>다음</S.GoToNextDiv>
                </S.MakeFeedHeadDiv>
                <S.MakeFeedPictureDiv>
                    <img
                    style={{
                        width: '656px',
                        height: '656px',
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }} src={stringTypePictures[0]}/>
                </S.MakeFeedPictureDiv>
            </S.MakeFeedContentDiv>
            }
        {(!page1 && !page2 && !popUp) &&
            <S.WriteDiv onClick={(event) => { 
                event.stopPropagation(); // 이벤트 전파 중단
            }}>
                <S.Page3HeadDiv>
                    <S.Page3HeadImg 
                    src={BackToPage1Icon}
                    onClick={() => {
                        setPopUp(true);
                    }}/>
                    새 게시물 만들기
                    <S.Page3HeadShareDiv
                    onClick={UploadFunc}>
                    공유</S.Page3HeadShareDiv>
                </S.Page3HeadDiv>
                <S.Page3BodyDiv>
                    <S.Page3PicturesDiv>
                        <S.Page3PicturesImg src={stringTypePictures[currentImageIndex]}/>
                        <S.Page3PicturesDirectionDiv
                        style={{display : stringTypePictures.length > 1 ? 'flex' : 'none'}}>
                        <S.LeftImg
                        src={feedLeft}
                        style={{display : currentImageIndex > 0? 'flex' : 'none'}}
                        onClick={() => {
                            setCurrentImageIndex((prev) => prev -1);
                        }}/>
                        <S.RightImg
                        src={feedRight}
                        style={{display : (stringTypePictures.length - currentImageIndex) > 1? 'block' : 'none'}}
                        onClick={() => {
                            setCurrentImageIndex((prev) => prev +1);
                        }}/>
                        </S.Page3PicturesDirectionDiv>
                        <S.ImgChartToTalDiv>
                        {[...Array(stringTypePictures.length)].map((_, index) => (
                            <S.ImgChartDiv
                            style={{backgroundColor : index === currentImageIndex ? '#2F80ED' : '#E0E0E0'}}
                            key={index}
                            onClick={() => {
                            setCurrentImageIndex(index);
                            }}
                        ></S.ImgChartDiv>
                        ))}
                        </S.ImgChartToTalDiv>
                    </S.Page3PicturesDiv>
                    <S.Page3TextDiv>
                        <S.Page3Text1Div>
                            <S.Page3Text1ContentDiv>
                                <S.ProfileImg src={profileImg}/>
                                <S.Page3Text1ContentH6>{userId}</S.Page3Text1ContentH6>
                            </S.Page3Text1ContentDiv>
                            <S.Page3Text1Content2Div>
                                <S.Page3Text1Content2InputDiv>
                                    <S.Page3Text1Content2Textarea
                                    maxLength={1000}
                                    value={textContent}
                                    onChange={(event) => {setTextContent(event.target.value)}}/>
                                </S.Page3Text1Content2InputDiv>
                                <S.Page3Text1Content2P> {textContent.length} / 2,200</S.Page3Text1Content2P>
                            </S.Page3Text1Content2Div>
                        </S.Page3Text1Div>
                        <S.Page3Text2Div>
                            <S.Page3Text2ContentDiv>
                                <S.Page3Text2ContentGrayH6>위치 추가</S.Page3Text2ContentGrayH6>
                                <S.ContentIcon src={pinImg}/>
                            </S.Page3Text2ContentDiv>
                            <S.Page3Text2ContentDiv>
                                <S.Page3Text2ContentBlackH6>접근성</S.Page3Text2ContentBlackH6>
                                <S.ContentIcon src={checkImg}/>
                            </S.Page3Text2ContentDiv>
                            <S.Page3Text2ContentDiv>
                                <S.Page3Text2ContentBlackH6>고급 설정</S.Page3Text2ContentBlackH6>
                                <S.ContentIcon src={checkImg}/>
                            </S.Page3Text2ContentDiv>
                        </S.Page3Text2Div>
                    </S.Page3TextDiv>
                </S.Page3BodyDiv>
            </S.WriteDiv>
        }
        {(popUp) &&
            <S.PopUpDiv onClick={(event) => { 
                event.stopPropagation(); // 이벤트 전파 중단
            }}>
                <S.PopUpH6>게시물을 삭제하시겠어요?</S.PopUpH6>
                <S.PopUpP>지금 나가면 수정 내용이 저장되지 않습니다.</S.PopUpP>
                <S.PopUpSelectDiv1
                    onClick={handleCloseMakeFeed}>
                    삭제</S.PopUpSelectDiv1>
                <S.PopUpSelectDiv2
                    onClick={() => {
                        setPage1(false);
                        setPage2(false);
                        setPopUp(false);
                    }}>취소</S.PopUpSelectDiv2>
            </S.PopUpDiv>
        }
        </S.MakeFeedDiv>
        </>
    );
}

export default MakeFeed;