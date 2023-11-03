import { useState } from "react";
import "../../styles/AdminLoginStyle.css";
import NavbarLayout from "../navBar/NavbarLayout";
import logo from "../../assets/icon2.png";
import { Footer } from "antd/es/layout/layout";

export default function AdminLoginLayout() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      setEmailError("Please provide valid email");
      return;
    } else {
      setEmailError("");
    }

    if (code.length < 5 ) {
      setCodeError("Please provide a valid Admin Verification Code");
      return;
    } else {
      setCodeError("");
    }

  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

    const handleCodeChange = (e) => {
      setCode(e.target.value);
      setCodeError("");
    };




  return (
    <>
      <NavbarLayout />

      <div className="container">
        <main
          className="form-signin "
          style={{ textAlign: "center", marginTop: " 30px" }}
        >
          <form onSubmit={handleSubmit}>
            <img className="mb-4" src={logo} alt="" width="80" height="80" />
            <h1 className="h3 mb-3 fw-normal">Admin Panel</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={handleEmailChange}
              />
              <label>Email address</label>
              {emailError && (
                <p className="text-danger m-1" style={{ fontSize: "12px" }}>
                  {emailError}
                </p>
              )}
            </div>
            <div style={{ marginTop: "30px" }}></div>
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                placeholder="Admin Code"
                value={code}
                onChange={handleCodeChange}
              />
              <label>Code</label>
              {codeError && (
                <p className="text-danger m-1" style={{ fontSize: "12px" }}>
                  {codeError}
                </p>
              )}
            </div>

            <button
              className="w-100 btn btn-lg btn-primary"
              style={{ marginTop: "30px" }}
              type="submit"
            >
              Sign in
            </button>
          </form>
        </main>
      </div>

      <Footer
        style={{
          textAlign: "center",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        TaxWizard ©2023 Created by IUT_ORCHESTRATORS
      </Footer>
    </>
  );
}
