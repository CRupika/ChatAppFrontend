import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { APP_ROUTES } from "./constants/apiConstants";
import SignupPage from "./pages/SignupPage";
import VerifyMailPage from "./pages/VerifyemailPage";
import WorkSpace from "./pages/WorkSpacePage";
import WorkSignin from "./pages/WorkSignInPage";
import SigninPage from "./pages/SigninPage";
// import 'primeicons/primeicons.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.SIGNUP} element={<SignupPage />} />
        {/* Redirect root to signup */}
        <Route path={APP_ROUTES.HOME} element={<Navigate to={APP_ROUTES.SIGNUP} replace />} />
        <Route path={APP_ROUTES.VERIFY_EMAIL} element={<VerifyMailPage/>}/>
        <Route path={APP_ROUTES.WORKSPACE} element={<WorkSpace/>}/>
        <Route path={APP_ROUTES.WORKSPACE_SIGNIN} element={<WorkSignin/>}/>
        <Route path={APP_ROUTES.SIGNIN} element={<SigninPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
