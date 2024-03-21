import React, {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from './styles';
import Header from '../../components/Header';
import userApis from '../../apis/userApis';
import feedApis from '../../apis/feedApis';
import FeedPost from "../../components/Feed";
import { useRecoilState } from "recoil";
import { scrollControlState } from "../../recoil/showBoard";

import profileImg from '../../img/profileTestImg.png';
import storyProfile1 from '../../img/storyprofile1.png'
import storyProfile2 from '../../img/storyprofile2.png'
import storyProfile3 from '../../img/storyprofile3.png'
import storyProfile4 from '../../img/storyprofile4.png'

import recommend1 from '../../img/recommend1.png';
import recommend2 from '../../img/recommend2.png';
import recommend3 from '../../img/recommend3.png';
import recommend4 from '../../img/recommend4.png';

interface Post {
  contentList: [];
  createdAt: string;
  feedCommentCount: number;
  feedLoginId: string;
  feedText: string;
  id: number;
}

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

  useEffect(() => {
    isLoginedFunc();
    userInfoFunc();
  }, []);

  ////////////////////
  
  // 10개의 게시물을 담을 배열
  const [posts, setPosts] = useState<Post[]>([]);
  // 페이지
  // const [page, setPage] = useState(1);
  // 데이터를 가져오고 있는지
  const [fetching, setFetching] = useState(false);
  // 다음 페이지가 존재하는지
  const [nextPage, setNextPage] = useState(true);

  const [page, ] = useState(1);
  const [controlPage, setControlPage] = useState(0);

  const feedsLoadFunc = async () => {
    try {
      const response = await feedApis.feeds(page);
      const lastPage = response.result.lastPage;
      const nextPage = lastPage - controlPage;
      const response2 = await feedApis.feeds(nextPage);
      console.log('feedsLoadFunc로 불러온 값', response2);
      const reversedNewPosts = response2.result.feedList.reverse();
      setPosts(posts.concat(reversedNewPosts));
      setControlPage(prevControlPage => prevControlPage + 1);
      setNextPage(nextPage !== 0);
      setFetching(false);
    } catch(error) {
      console.error('피드 불러오기 오류: ', error);
    }
  };

  const [ scrollControl,  ] = useRecoilState(scrollControlState);
  

  useEffect(() => {
    // 처음 랜더링될 때 데이터 가져옴
    setFetching(true);

    // 스크롤 이벤트가 발생할 때마다 호출
    const scrollFunc = () => {
      // 콘텐츠가 수직으로 스크롤되는 픽셀 수
      // 전체 문서의 높이
      const { scrollTop, offsetHeight } = document.documentElement;
      // 2000 스크롤 이내로 스크롤했는지
      if (window.innerHeight + scrollTop >= offsetHeight - 2000) {
        setFetching(true);
      }
    };

    window.addEventListener("scroll", scrollFunc);
    return () => window.removeEventListener("scroll", scrollFunc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = scrollControl ? 'auto' : 'hidden';
  }, [scrollControl]);

  useEffect(() => {
    if (fetching && nextPage) {
      feedsLoadFunc();
    } else if (!nextPage) {
      setFetching(false);
    }
  }, [fetching]);

  ////////////////////

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
          {posts.map((post) => (
            <FeedPost
              key={post.id}
              contentList={post.contentList}
              createdAt={post.createdAt}
              feedCommentCount={post.feedCommentCount}
              feedLoginId={post.feedLoginId}
              feedText={post.feedText}
              id={post.id}
            />
          ))}
        
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