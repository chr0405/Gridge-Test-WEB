# ✈️Tnovel

![main](https://github.com/chr0405/Gridge-Test-WEB/assets/129362281/c6404a74-496b-4f17-9258-5e3c1cf3a749)\
나만의 여행 이야기를 만들어보세요

## 💙Tnovel이란?

Gridge test를 통해 진행한 몰입 시뮬레이션 챌린지입니다\
인스타그램의 핵심 기능을 개발해보는 챌린지이며,\
핵심 구현 기능으로 유저 맵, 게시물 맵, 결제 맵이 있습니다

## 🐬Demo

Web site : [Demo](https://tnovel-three.vercel.app/login)\
youtube : [시연 연상](https://www.youtube.com/watch?v=87onRxoCdH8)

## ⌚개발 기간

2024.03

## 🔎Front-end 기술 스택
<p>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
  <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white"/>
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>
</p>

## 💻주요 기능
🔹 회원 관리 시스템 (회원 가입, 일반 로그인 & 소셜 로그인)\
🔹 포트원 (구 아임포트)를 이용한 구독 서비스 결제 시스템\
🔹 게시물 관리 기능 (CRUD, 무한 스크롤)

## 🌐개발 사항
🔹 유저 기능 개발\
➡️ 회원 가입 프로세스와 클라이언트 측 유효성 검사 구현\
➡️ 일반 로그인과 소셜 로그인 기능 구현\
➡️ JWT 액세스 토큰을 검증하고 새로 발급하는 API를 이용해 토큰 만료, 새로 고침 시에도 로그인 상태 유지 기능 구현\
\
🔹 결제 시스템 구현\
➡️ 포트원 (구 아임포트)를 통해 결제 모듈을 생성하고, 이를 시스템에 연동하여 결제 화면 구현\
➡️ PC 환경에서 콜백 함수의 반환값을 이용해 결제 결과에 따라 완료 / 실패 화면 구현\
\
🔹 게시판 기능 개발\
➡️ 무한 스크롤 방식의 피드 구현\
➡️ 게시물 CRUD(Create, Read, Update, Delete) 기능 구현\
➡️ 게시물을 자세히 보여주는 기능 모달로 구현\
➡️ 피드에서 댓글 작성 시, 모달을 열었을 때 해당 댓글이 즉시 반영되도록 구현

## 📘파일 구조
```
📁src
  ├── 📁apis
  │   ├── authService.ts  # 토큰 재발급 API
  │   ├── axiosConfig.ts   # API 호출을 위한 axios 모듈
  │   ├── feedApis.ts  # 피드 게시물 관련 API
  │   ├── Firebase.ts  # Firebase 키-값 저장소
  │   └── userApis.ts  # 로그인 관련 API
  ├── 📁components
  │   ├── Board  # 게시판에 게시물을 표시하며, 내 게시물 수정 및 삭제 기능 포함
  │   ├── comments   # 댓글 컴포넌트
  │   ├── Feed   # 개별 게시물 컴포넌트
  │   ├── Header   # 모바일 뷰에 나타나는 헤더 및 푸터
  │   └── MakeFeed   # 게시물 작성 컴포넌트
  ├── 📁img  # 이미지 파일 저장 디렉토리
  ├── 📁page
  │   ├── home   # 홈페이지
  │   ├── kakaoLogin   # 카카오 로그인 리디렉션 페이지
  │   ├── login  # 로그인 페이지
  │   ├── payment  # 결제 페이지
  │   ├── signUp1  # 회원가입 - 계정 정보
  │   ├── signUp2  # 회원가입 - 생년월일
  │   └── signUp3  # 회원가입 - 약관 동의
  ├── 📁recoil
  │   ├── kakaoLogin.ts  # 카카오 로그인 인증 코드 상태 관리
  │   ├── login.ts   # 로그인 정보 상태 관리
  │   ├── showBoard.ts   # 모달이 열릴 때 스크롤 제한 상태 관리
  │   ├── signUpInfo.ts  # 회원가입 정보 상태 관리
  │   └── signUpPageChange.ts  # 회원가입 페이지 전환 상태 관리
  ├── App.tsx  # 메인 App 컴포넌트
  └── kakaoCode.ts   # 카카오 관련 키 값 저장
```
