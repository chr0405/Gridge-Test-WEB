/src
  ├── apis
  │   ├── authService.ts         # 토큰 재발급 API
  │   ├── axiosConfig.ts         # API 호출을 위한 axios 모듈
  │   ├── feedApis.ts            # 피드 게시물 관련 API
  │   ├── Firebase.ts            # Firebase 키-값 저장소
  │   └── userApis.ts            # 로그인 관련 API
  ├── components
  │   ├── Board                  # 게시판에 게시물을 표시하며, 내 게시물 수정 및 삭제 기능 포함
  │   ├── comments               # 댓글 컴포넌트
  │   ├── Feed                   # 개별 게시물 컴포넌트
  │   ├── Header                 # 모바일 뷰에 나타나는 헤더 및 푸터
  │   └── MakeFeed               # 게시물 작성 컴포넌트
  ├── img                        # 이미지 파일 저장 디렉토리
  ├── page
  │   ├── home                   # 홈페이지
  │   ├── kakaoLogin             # 카카오 로그인 리디렉션 페이지
  │   ├── login                  # 로그인 페이지
  │   ├── payment                # 결제 페이지
  │   ├── signUp1                # 회원가입 - 계정 정보
  │   ├── signUp2                # 회원가입 - 생년월일
  │   └── signUp3                # 회원가입 - 약관 동의
  ├── recoil
  │   ├── kakaoLogin.ts          # 카카오 로그인 인증 코드 상태 관리
  │   ├── login.ts               # 로그인 정보 상태 관리
  │   ├── showBoard.ts           # 모달이 열릴 때 스크롤 제한 상태 관리
  │   ├── signUpInfo.ts          # 회원가입 정보 상태 관리
  │   └── signUpPageChange.ts    # 회원가입 페이지 전환 상태 관리
  ├── App.tsx                    # 메인 App 컴포넌트
  └── kakaoCode.ts               # 카카오 관련 키 값 저장