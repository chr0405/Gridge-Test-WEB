# ✈️Tnovel
![main](https://github.com/chr0405/js_counter/assets/129362281/022d3f4f-20e6-43eb-817e-09cb90a47ee1](https://github.com/chr0405/Gridge-Test-WEB/assets/129362281/5c09cd4d-c3dc-478a-82d5-d68b7a945ff2)
나만의 여행 이야기를 만들어보세요.

/src<br/>
  ├── apis<br/>
  │   ├── authService.ts  # 토큰 재발급 API<br/>
  │   ├── axiosConfig.ts   # API 호출을 위한 axios 모듈<br/>
  │   ├── feedApis.ts  # 피드 게시물 관련 API<br/>
  │   ├── Firebase.ts  # Firebase 키-값 저장소<br/>
  │   └── userApis.ts  # 로그인 관련 API<br/>
  ├── components<br/>
  │   ├── Board  # 게시판에 게시물을 표시하며, 내 게시물 수정 및 삭제 기능 포함<br/>
  │   ├── comments   # 댓글 컴포넌트<br/>
  │   ├── Feed   # 개별 게시물 컴포넌트<br/>
  │   ├── Header   # 모바일 뷰에 나타나는 헤더 및 푸터<br/>
  │   └── MakeFeed   # 게시물 작성 컴포넌트<br/>
  ├── img  # 이미지 파일 저장 디렉토리<br/>
  ├── page<br/>
  │   ├── home   # 홈페이지<br/>
  │   ├── kakaoLogin   # 카카오 로그인 리디렉션 페이지<br/>
  │   ├── login  # 로그인 페이지<br/>
  │   ├── payment  # 결제 페이지<br/>
  │   ├── signUp1  # 회원가입 - 계정 정보<br/>
  │   ├── signUp2  # 회원가입 - 생년월일<br/>
  │   └── signUp3  # 회원가입 - 약관 동의<br/>
  ├── recoil<br/>
  │   ├── kakaoLogin.ts  # 카카오 로그인 인증 코드 상태 관리<br/>
  │   ├── login.ts   # 로그인 정보 상태 관리<br/>
  │   ├── showBoard.ts   # 모달이 열릴 때 스크롤 제한 상태 관리<br/>
  │   ├── signUpInfo.ts  # 회원가입 정보 상태 관리<br/>
  │   └── signUpPageChange.ts  # 회원가입 페이지 전환 상태 관리<br/>
  ├── App.tsx  # 메인 App 컴포넌트<br/>
  └── kakaoCode.ts   # 카카오 관련 키 값 저장<br/>
