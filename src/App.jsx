import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { APP_ROUTES } from "./constants/apiConstants";
import SignupPage from "./pages/SignupPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_ROUTES.SIGNUP} element={<SignupPage />} />
        {/* Redirect root to signup */}
        <Route path={APP_ROUTES.HOME} element={<Navigate to={APP_ROUTES.SIGNUP} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
