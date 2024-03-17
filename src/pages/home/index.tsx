import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from './styles';
import Header from '../../components/Header';
import userApis from '../../apis/userApis';
import feedApis from "../../apis/feedApis";

import profileImg from '../../img/profileTestImg.png';
import storyProfile1 from '../../img/storyprofile1.png'
import storyProfile2 from '../../img/storyprofile2.png'
import storyProfile3 from '../../img/storyprofile3.png'
import storyProfile4 from '../../img/storyprofile4.png'

import recommend1 from '../../img/recommend1.png';
import recommend2 from '../../img/recommend2.png';
import recommend3 from '../../img/recommend3.png';
import recommend4 from '../../img/recommend4.png';

import feedMore from '../../img/feedMore.png';
import feedLeft from '../../img/feedLeft.png';
import feedRight from '../../img/feedRight.png';
import feedHeart from '../../img/feedHeart.png';
import feedMessage from '../../img/feedMessage.png';
import feedBookmark from '../../img/feedBookmark.png';

const Home = () => {
  
  const navigate = useNavigate();

  const logined = localStorage.getItem('logined');

  const isLoginedFunc = () => {
    if(!logined){
      navigate('/login');
    }
  }

  const [loginId, setLoginId] = useState(''); 
  const [realName, setRealName] = useState(''); 

  const userInfoFunc = async () => {
    try{
        const loginIdSend = localStorage.getItem('loginId');
        if(typeof loginIdSend === 'string'){
            const response = await userApis.profile(loginIdSend);
            console.log('userInfoFunc 성공 : ', response);
            if(response){
                setLoginId(response.data.result.loginId);
                setRealName(response.data.result.realName);
            }
        }
    } catch(error){
        console.log('userInfoFunc 실패');
    }
  };

  const size = 10;
  const page = 1

  // 10개의 피드를 받아 올 배열
  const [testFeed, setTestFeed] = useState<any[]>([]);
  
  // 한 피드의 전체 사진 개수
  const [imgTotalNumbers, setImgTotalNumbers] = useState<number[]>([]);

  // 한 피드의 전체 url
  const [imgTotalUrls, setImgTotalUrls] = useState<string[][]>([]);
  
  // 한 피드의 현재 사진 페이지
  const [selectedImgNumbers, setSelectedImgNumbers] = useState<number[]>([]);

  const feedLoadFunc = async () => {
    try {
      const response = await feedApis.feeds(size, page);
      console.log('feedLoadFunc 성공');

      console.log(response.data.result.feedList);
      setTestFeed(response.data.result.feedList);
      console.log('test feed [1]', testFeed[1]);
      console.log('test feed [0]', testFeed[0]);

      console.log('시발 기강 잡아라...');

      // 각 피드 별로 전체 페이지 개수 잘 들어갔는지
      const totalNumbers: number[] = response.data.result.feedList.map((feed: any) => feed.contentList.length);
      console.log('totalNumbers', totalNumbers);
      // setImgTotalNumbers((prevNumbers) => [...prevNumbers, ...totalNumbers]);
      setImgTotalNumbers(totalNumbers);
      console.log('imgTotalNumbers', imgTotalNumbers);

      // url 저장
      const totalUrls: string[][] = response.data.result.feedList.map((feed: any) => feed.contentList.map((content: any) => content.contentUrl));
      console.log('totalUrls', totalUrls);
      setImgTotalUrls(totalUrls);
      console.log('imgTotalUrls', imgTotalUrls);

      const zerosArray: number[] = Array(response.data.result.feedList.length).fill(0);
      // setSelectedImgNumbers((prevZeros) => [...prevZeros, ...zerosArray]);
      setSelectedImgNumbers(zerosArray);
      console.log('selectedImgNumbers', selectedImgNumbers);
    } catch (error) {
      console.log('feedLoadFunc 실패');
    }
  }

  useEffect(() => {
    isLoginedFunc();
    userInfoFunc();
    feedLoadFunc();
  }, []);

  return(
    <S.Root>
      <Header/>

      <S.ContentDiv>

        {/* 왼쪽 */}
        <S.LeftContentDiv>
          {/* 스토리 */}
          <S.StoryDiv>
            <S.StoryIndividualDiv>
              <S.StoryBeltDiv></S.StoryBeltDiv>
              <S.StoryBackgroundDiv></S.StoryBackgroundDiv>
              <S.StoryImg src={storyProfile1}/>
            </S.StoryIndividualDiv>
            <S.StoryIndividualDiv>
              <S.StoryBeltDiv></S.StoryBeltDiv>
              <S.StoryBackgroundDiv></S.StoryBackgroundDiv>
              <S.StoryImg src={storyProfile2}/>
            </S.StoryIndividualDiv>
            <S.StoryIndividualDiv>
              <S.StoryBeltDiv></S.StoryBeltDiv>
              <S.StoryBackgroundDiv></S.StoryBackgroundDiv>
              <S.StoryImg src={storyProfile3}/>
            </S.StoryIndividualDiv>
            <S.StoryIndividualDiv>
              <S.StoryBeltDiv></S.StoryBeltDiv>
              <S.StoryBackgroundDiv></S.StoryBackgroundDiv>
              <S.StoryImg src={storyProfile4}/>
            </S.StoryIndividualDiv>
          </S.StoryDiv>
          {/* 게시물 */}
          <S.FeedDiv>
            {
              testFeed.length > 0 ?
              (
                <div>
                  {/* 사진 부분 */}
                  <S.FeedIndividualDiv>
                    <S.FeedImg src={testFeed[1].contentList[selectedImgNumbers[1]].contentUrl}/>
                    <S.FeedProfileDiv>
                      <S.FeedProfile src={profileImg}/>
                      <S.FeedIdH1>{testFeed[1].feedLoginId}</S.FeedIdH1>
                      <S.FeedMoreImg src={feedMore}/>
                    </S.FeedProfileDiv>
                    <S.FeedDirectionDiv
                    style={{display : imgTotalNumbers[1] > 1 ? 'flex' : 'none'}}>
                      <S.FeedLeftImg
                      src={feedLeft}
                      style={{display : selectedImgNumbers[1] > 0? 'flex' : 'none'}}
                      onClick={() => {
                        setSelectedImgNumbers((prev) => {
                          const updatedArray = [...prev];
                          updatedArray[1] = prev[1] - 1;
                          return updatedArray;
                        });
                      }}/>
                      <S.FeedRightImg
                      src={feedRight}
                      style={{display : (imgTotalNumbers[1] - selectedImgNumbers[1]) > 1? 'block' : 'none'}}
                      onClick={() => {
                        setSelectedImgNumbers((prev) => {
                          const updatedArray = [...prev];
                          updatedArray[1] = prev[1] + 1;
                          return updatedArray;
                        });
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
                      style={{display : imgTotalNumbers[1] > 1 ? 'flex' : 'none'}}>
                        {[...Array(imgTotalNumbers[1])].map((_, index) => (
                          <S.ImgChartDiv
                          style={{backgroundColor : index === selectedImgNumbers[1] ? '#2F80ED' : '#E0E0E0'}}
                          key={index}
                          onClick={() => {
                            setSelectedImgNumbers((prev) => {
                              const newNumbers = [...prev];
                              newNumbers[1] = index;
                              return newNumbers;
                            });
                          }}
                        ></S.ImgChartDiv>
                        ))}
                      </S.ImgChartTotalDiv>
                      <S.BookmarkIconImg src={feedBookmark}/>
                  </S.IconDiv>
                  <div>
                    <h6>좋아요</h6>
                    <div>
                      <h6>{testFeed[1].feedLoginId}</h6>
                      <div>
                          {testFeed[1].feedText}
                      </div>
                    </div>
                  </div>
                  {/* 댓글 부분 */}
                  <div></div>
                </div>
              ) :
              ''
            }
          </S.FeedDiv>
          
        </S.LeftContentDiv>

        {/* 오른쪽 */}
        <S.RightContentDiv>
          {/* 프로필 */}
          <S.ProfileDiv>
            <S.ProfileImg src={profileImg}/>
            <S.ProfileTextDiv>
              <S.LoginIdH6>{loginId}</S.LoginIdH6>
              <S.RealNameP>{realName}</S.RealNameP>
            </S.ProfileTextDiv>
          </S.ProfileDiv>
          {/* 회원님을 위한 추천 */}
          <S.RecommendListDiv>
            <S.RecommendIndividualDiv>
              <S.RecommendMentH6>회원님을 위한 추천</S.RecommendMentH6>
              <S.ShowMoreRecommendProfile>모두 보기</S.ShowMoreRecommendProfile>
            </S.RecommendIndividualDiv>
            <S.RecommendIndividualDiv>
              <S.RecommendProfile>
                <S.RecommendImg src={recommend1}/>
                <S.RecommendIdH6>kendalljenner</S.RecommendIdH6>
              </S.RecommendProfile>
              <S.Follow>팔로우</S.Follow>
            </S.RecommendIndividualDiv>
            <S.RecommendIndividualDiv>
              <S.RecommendProfile>
                <S.RecommendImg src={recommend2}/>
                <S.RecommendIdH6>dewisandra</S.RecommendIdH6>
              </S.RecommendProfile>
              <S.Follow>팔로우</S.Follow>
            </S.RecommendIndividualDiv>
            <S.RecommendIndividualDiv>
              <S.RecommendProfile>
                <S.RecommendImg src={recommend3}/>
                <S.RecommendIdH6>tiit_smail</S.RecommendIdH6>
              </S.RecommendProfile>
              <S.Follow>팔로우</S.Follow>
            </S.RecommendIndividualDiv>
            <S.RecommendIndividualDiv>
              <S.RecommendProfile>
                <S.RecommendImg src={recommend4}/>
                <S.RecommendIdH6>window123</S.RecommendIdH6>
              </S.RecommendProfile>
              <S.Follow>팔로우</S.Follow>
            </S.RecommendIndividualDiv>
          </S.RecommendListDiv>
        </S.RightContentDiv>

      </S.ContentDiv>
    </S.Root>
  );

};

export default Home;
