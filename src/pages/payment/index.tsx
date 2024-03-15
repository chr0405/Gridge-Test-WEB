import React, { useState } from 'react';
import Header from '../../components/Header';
import * as S from './styles'

import logo from '../../img/mainlogo.png';

import profileImg from '../../img/profileTestImg.png';
import iphone1 from '../../img/iphone 13 mini.png';
import iphone2 from '../../img/iphone 13 mini (1).png';

import PlayStore from '../../img/Mobile app store badge.png';
import AppStore from '../../img/Mobile app store badge (1).png';

import { RequestPayParams, RequestPayResponse } from "./portone";

const Payment = () => {

    const onClickSubscriptionBtn = () => {

        if (!window.IMP) return;
        /* 1. 가맹점 식별하기 */
        const { IMP } = window;
        IMP.init("imp53320060"); // 가맹점 식별코드

        /* 2. 결제 데이터 정의하기 */
        const data: RequestPayParams = {
            pg: "kakaopay", // PG사 : https://developers.portone.io/docs/ko/tip/pg-2 참고
            pay_method: "card", // 결제수단
            merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
            amount: 9900, // 결제금액
            name: "인스타그램 계정 월 정기 결제", // 주문명
            // buyer_name: "홍길동", // 구매자 이름
            // buyer_tel: "01012341234", // 구매자 전화번호
            // buyer_email: "example@example.com", // 구매자 이메일
            // buyer_addr: "신사동 661-16", // 구매자 주소
            // buyer_postcode: "06018", // 구매자 우편번호
        };

        /* 4. 결제 창 호출하기 */
        IMP.request_pay(data, callback);
    }

    // 결제 중 중단
    const [payStop, setPayStop] = useState(false);
    // 구독하고 있음
    const [paying, setPaying] = useState(false);
    // 구독 취소 팝업 띄우기
    const [payCanclePopUp, setPayCanclePopUp] = useState(false);
    
    /* 3. 콜백 함수 정의하기 */
    function callback(response: RequestPayResponse) {
        const { success, error_msg } = response;

        if (success) {
            console.log("결제 성공");
            setPaying(true);
        } else {
            console.log(`결제 실패: ${error_msg}`);
            setPayStop(true);
        }
    }

    return(
        <S.Root>
            <Header/>

            {/* 팝업 */}
            <S.PopUpTotalDiv
                style={{display : payStop ? 'block' : 'none'}}>
                <S.PopUpDiv>
                    <S.StateTextH6>결제 처리가 진행되지 않았습니다.</S.StateTextH6>
                    <S.TryTextP>결제를 다시 시도해주세요.</S.TryTextP>
                    <S.HR/>
                    <S.OkDiv
                        onClick={() => {
                        setPayStop(false);
                    }}>확인</S.OkDiv>
                </S.PopUpDiv>
            </S.PopUpTotalDiv>

            {/* 팝업 */}
            <S.PopUpTotalDiv
                style={{display : payCanclePopUp ? 'block' : 'none'}}>
                <S.PopUpDiv>
                    <S.StateTextH6>앗! 정말 구독을 취소하실 건가요?</S.StateTextH6>
                    <S.TryTextP>확인 버튼을 누르면, 구독이 종료됩니다.</S.TryTextP>
                    <S.CancleOkDiv
                        onClick={() => {
                        setPaying(false);
                        setPayCanclePopUp(false);
                    }}>확인</S.CancleOkDiv>
                    <S.NotCancleDiv
                        onClick={() => {
                        setPayCanclePopUp(false);
                    }}>취소</S.NotCancleDiv>
                </S.PopUpDiv>
            </S.PopUpTotalDiv>

            <S.ContentDiv>
                {/* 프로필 */}
                <S.ProfileDiv>
                    <S.ProfileImg src={profileImg}/>
                    {/* 프로필 text */}
                    <S.ProfileInfoDiv>
                        <S.UserIdAndEditBtnDiv>
                            <S.UserId>happypuppy</S.UserId>
                            <S.EditBtn>프로필편집</S.EditBtn>
                        </S.UserIdAndEditBtnDiv>
                        <S.AnyNumberSetDiv>
                            <S.AnyNumberDiv>
                                <S.AnyNameH5>게시물</S.AnyNameH5>
                                <S.AnyNumberH4>83</S.AnyNumberH4>
                            </S.AnyNumberDiv>
                            <S.AnyNumberDiv>
                                <S.AnyNameH5>팔로워</S.AnyNameH5>
                                <S.AnyNumberH4>1,560</S.AnyNumberH4>
                            </S.AnyNumberDiv>
                            <S.AnyNumberDiv>
                                <S.AnyNameH5>팔로워</S.AnyNameH5>
                                <S.AnyNumberH4>21</S.AnyNumberH4>
                            </S.AnyNumberDiv>
                        </S.AnyNumberSetDiv>
                        <S.IntroduceDiv>
                            <S.IntroduceMentH6>블루</S.IntroduceMentH6>
                            <S.IntroduceMentGrayH6>여행</S.IntroduceMentGrayH6>
                            <S.Pre>
                                <S.IntroduceMentH6>여행 다니는거 좋아해요 <br/>세계를 돌아다닙니다</S.IntroduceMentH6>
                            </S.Pre>
                        </S.IntroduceDiv>
                    </S.ProfileInfoDiv>
                </S.ProfileDiv>

                {/* 나머지 */}
                <S.MainContentsDiv>
                    
                    <S.BasicWrap>
                        <S.Img src={iphone1}/>
                        <S.Img2 src={iphone2}/>
                    </S.BasicWrap>

                    <S.MainJobDiv>
                        <S.SubscriptionBox>
                            <S.LogoImg src={logo}/>
                            
                            <S.CommandTextH6>{paying? '서비스를 구독해주셔서 감사합니다.' : '서비스를 구독하고, 더 다양한 소식을 받아보세요'}</S.CommandTextH6>
                            <S.SubscriptionTextH6>{paying? '서비스 구독중' : '월 9,900원으로 구독하기'}</S.SubscriptionTextH6>

                            <S.SubscriptionBtn
                            style={{backgroundColor : paying? '#F04438' : '#2E90FA'}}
                            onClick={() => {
                                    if(!paying){
                                        // 구독 중이 아니라면 결제
                                        onClickSubscriptionBtn();
                                    } else {
                                        // 구독 중이라면 취소
                                        setPayCanclePopUp(true);
                                    }
                                }
                                }>{paying? '구독 해지하기' : '바로 구독 신청하기'}</S.SubscriptionBtn>
                            <S.CheckTermsH6>이용약관 확인하기</S.CheckTermsH6>
                        </S.SubscriptionBox>
                        <S.AppDownloadBox>
                            <S.AppDownloadText>앱을 다운로드 하세요.</S.AppDownloadText>
                            <div>
                                <S.PlayStoreImg src={PlayStore}/>
                                <S.AppStoreImg src={AppStore}/>
                            </div>
                        </S.AppDownloadBox>
                    </S.MainJobDiv>

                </S.MainContentsDiv>
            </S.ContentDiv>
        </S.Root>
    );
    
}
export default Payment
