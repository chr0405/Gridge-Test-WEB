import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { signUp1State, signUp2State/*, signUp3State*/} from "./recoil/signUpPageChange";

const loading = <div>화면을 불러오는 중 입니다.</div>;

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));
const Home = React.lazy(() => import("./pages/home"));

// Pages
const Login = React.lazy(() => import("./pages/login"));
const KakaoLoggin = React.lazy(() => import("./pages/kakaoLoggin"));

const SignUp1Page = React.lazy(() => import("./pages/signUp1"));
const SignUp2Page = React.lazy(() => import("./pages/signUp2"));
const SignUp3Page = React.lazy(() => import("./pages/signUp3"));

const Payment = React.lazy(() => import("./pages/payment"));

const Page404 = React.lazy(() => import("./pages/page404/Page404"));
const Page500 = React.lazy(() => import("./pages/page500/Page500"));

//컴포넌트
const App = () => {
  const [signUp1, ] = useRecoilState(signUp1State);
  const [signUp2, ] = useRecoilState(signUp2State);
  // const [signUp3, setSignUp3] = useRecoilState(signUp3State);

  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={signUp1 ? (<SignUp1Page />) : signUp2 ? (<SignUp2Page />) : (<SignUp3Page />)} />
          <Route path="/login/kakao" element={<KakaoLoggin />} />
          <Route path="/pay" element={<Payment/>}/>
          <Route path="/404" element={<Page404 />} />
          <Route path="/500" element={<Page500 />} />
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
