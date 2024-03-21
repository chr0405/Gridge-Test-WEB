/src  
//apis  
  authService.ts - 토큰 재발급api  
  axiosConfig.ts - 토큰 필요한 api 전송할 때 전용으로 만든 axios 모듈  
  feedApis.ts - 피드 게시물 관련api  
  Firebase.ts - Firebase key 값 저장  
  userApis.ts - 로그인 관련 api  
//components
  //Board - 게시글을 board로 띄울 때, 내 게시물의 경우 수정과 삭제 기능
  //comments - 댓글
  //Feed - 게시글 하나 당 설정
  //Header - 헤더, 모바일 뷰일 경우 나타나는 푸터까지
  //MakeFeed - 게시글을 만들 때
//img - 이미지 파일 전부 여기 저장
//page
 //home - 홈페이지
 //kakaoLogin - 카카오 로그인 시 잠시 띄우는 페이지
 //login - 로그인
 //payment - 결제 페이지
 //signUp1 - 회원가입 - 계정 정보
 //signUp2 - 회원가입 - 생일
 //signUp3 - 회원가입 - 약관 동의
//recoil
 kakaoLogin.ts - 인가 코드 저장
 login.ts - 로그인 관련 정보 저장
 showBoard.ts - 모달 띄어져 있을 시 스크롤 제한
 signUpInfo.ts - 회원가입 관련 정보 저장
 signUpPageChange.ts - 회원가입 창을 바꾸기 위한 boolean 값
App.tsx
kakaoCode.ts - 카카오 관련 key 값 저장
