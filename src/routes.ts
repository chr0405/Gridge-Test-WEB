import React from "react";

const Home = React.lazy(() => import("./pages/home"));
const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard"));
const Page404 = React.lazy(() => import("./pages/page404/Page404"));
const Page500 = React.lazy(() => import("./pages/page500/Page500"));

const Login = React.lazy(() => import("./pages/login"));
const KakaoLoggin = React.lazy(() => import("./pages/kakaoLoggin"));

const SignUp1Page = React.lazy(() => import("./pages/signUp1"));
const SignUp2Page = React.lazy(() => import("./pages/signUp2"));
const SignUp3Page = React.lazy(() => import("./pages/signUp3"));

const Payment = React.lazy(() => import("./pages/payment"));

const routes = [
  { path: "/", element: Home },
  { path: "/dashboard", element: Dashboard },

  { path: "/login", element: Login },
  { path: "/login/kakao", element: KakaoLoggin },
  { path: "/sign-up", element: SignUp1Page },
  { path: "/sign-up", element: SignUp2Page },
  { path: "/sign-up", element: SignUp3Page },
  { path: "/pay", element: Payment },

  { path: "/404", element: Page404 },
  { path: "/500", element: Page500 },
];

export default routes;
