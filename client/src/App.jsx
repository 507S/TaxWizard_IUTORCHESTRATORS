import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/home";
import PageNotFound from "./pages/error/PageNotFound";
import ConfidentialCredentialPage from "./pages/register/ConfidentialCredentialPage";
import NormalCredentialPage from "./pages/register/NormalCredentialPage";
import VerifyOTPPage from "./pages/register/VerifyOTPPage";
import LoginPage from "./pages/login/LoginPage";
import EmailVerificationPage from "./pages/passwordRecovery/EmailVerificationPage";
import PasswordRecoveryResponsePage from "./pages/passwordRecovery/PasswordRecoveryResponsePage";
import PasswordRecoveryEmailNotFoundPage from "./pages/passwordRecovery/PasswordRecoveryEmailNotFoundPage";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<NormalCredentialPage />} />
          <Route path="/otp-verification" element={<VerifyOTPPage />} />
          <Route
            path="/profile-setup"
            element={<ConfidentialCredentialPage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/password-recovery"
            element={<EmailVerificationPage />}
          />
          <Route
            path="/password-recovery-success"
            element={<PasswordRecoveryResponsePage />}
          />
          <Route
            path="/password-recovery-failed"
            element={<PasswordRecoveryEmailNotFoundPage />}
          />
          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
