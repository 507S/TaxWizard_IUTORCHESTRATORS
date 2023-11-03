import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageNotFound from "./pages/error/PageNotFound";

import HomeLayout from "./components/HomeLayout";
import LoginPage from "./pages/auth/login/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/admin-login" element={<LoginPage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
