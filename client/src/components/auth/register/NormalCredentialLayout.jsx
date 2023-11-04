import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../styles/AuthStyleForNormalCredentialLayout.css";
import axios from "axios";

export default function NormalCredentialLayout() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();
 const base_url = process.env.REACT_APP_BASE_URL;
  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
      setEmailError("Please provide valid email");
      return;
    } else {
      setEmailError("");
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9]).{6,15}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must contain at least 6 characters, including at least one uppercase letter and one numeric digit, and must not exceed 15 characters"
      );
      return;
    } else {
      setPasswordError("");
    }

    if (name.trim() === "") {
      setNameError("Name is required");
      return;
    } else {
      setNameError("");
    }

    if (gender === "") {
      setGenderError("Please select your gender");
      return;
    } else {
      setGenderError("");
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    } else {
      setConfirmPasswordError("");
    }

    if (emailError === "" && passwordError === "" && passwordError === "") {
      // var encryptedPassword = CryptoJS.AES.encrypt(
      //   JSON.stringify(password),
      //   my_secret_key
      // ).toString();

      // // updateRememberedCredentials(email, password);
      // updateRememberedCredentials(email, encryptedPassword);

      axios
        .post(`${base_url}/api/v1/client/auth/login`, {
          email,
          password: encryptedPassword,
        })
        .then((response) => {
          const { token, data, code, message } = response.data;
          const clientInfo = {
            auth: true,
          };

          sessionStorage.setItem("clientInfo", JSON.stringify(clientInfo));

          // Store the token and data in session storage
          sessionStorage.setItem("accessToken", token);
          sessionStorage.setItem("userData", JSON.stringify(data.user_id));

          // Redirect to the home page or any other protected route
          const passwordRecovered = sessionStorage.getItem("passwordRecovered");

          // If passwordRecovered is "yes", navigate to "/client-password", else navigate to "/home"
          if (passwordRecovered === "yes") {
            navigate("/reset-password");
            // Clear the value of passwordRecovered from sessionStorage since it's not needed anymore
            sessionStorage.removeItem("passwordRecovered");
          } else {
            navigate("/home");
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            setModalVisible(true);
            setModalMessage("User Doesn't Exist");
          } else if (error.response.status === 400) {
            setModalVisible(true);
            setModalMessage("Wrong Email and Password Combination");
          } else if (error.response.status === 403) {
            setModalVisible(true);
            setModalMessage("Account Verification ");
          } else {
            console.error("Login failed:", error.response.data.error);
          }
        });
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setGenderError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-7 d-none d-md-flex bg-image-normal-credential"></div>

        <div className="col-md-5 bg-light">
          <div className="login d-flex align-items-center py-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="display-5">Create Account</h3>
                  <p className="text-muted mb-4">
                    {/* Create a login split page using Bootstrap 4. */}
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <input
                        id="inputEmail"
                        type="text"
                        placeholder="Name"
                        required=""
                        autoFocus=""
                        className="form-control rounded-pill border-1 shadow-sm px-4 py-2"
                        value={name}
                        onChange={handleNameChange}
                      />
                      {nameError && (
                        <p
                          className="text-danger m-1"
                          style={{ fontSize: "12px" }}
                        >
                          {nameError}
                        </p>
                      )}
                    </div>
                    <div className="form-group mb-3">
                      <input
                        id="inputEmail"
                        type="email"
                        placeholder="Email address"
                        required=""
                        autoFocus=""
                        className="form-control rounded-pill border-1 shadow-sm px-4 py-2"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      {emailError && (
                        <p
                          className="text-danger m-1"
                          style={{ fontSize: "12px" }}
                        >
                          {emailError}
                        </p>
                      )}
                    </div>
                    <div className="form-group mb-3">
                      <select
                        id="inputGender"
                        required=""
                        className={`form-control rounded-pill border-1 shadow-sm px-4 py-2 ${
                          genderError ? "is-invalid" : ""
                        }`}
                        value={gender}
                        onChange={handleGenderChange}
                      >
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      {genderError && (
                        <p
                          className="text-danger m-1"
                          style={{ fontSize: "12px" }}
                        >
                          {genderError}
                        </p>
                      )}
                    </div>

                    <div className="form-group mb-3">
                      <input
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                        required=""
                        className="form-control rounded-pill border-1 shadow-sm px-4 py-2"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      {passwordError && (
                        <p
                          className="text-danger m-1"
                          style={{ fontSize: "12px" }}
                        >
                          {passwordError}
                        </p>
                      )}
                    </div>
                    <div className="form-group mb-3">
                      <input
                        id="inputPassword"
                        type="password"
                        placeholder="Retype Password"
                        required=""
                        className="form-control rounded-pill border-1 shadow-sm px-4 py-2"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      {confirmPasswordError && (
                        <p
                          className="text-danger m-1"
                          style={{ fontSize: "12px" }}
                        >
                          {confirmPasswordError}
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm w-100"
                      >
                        Save &nbsp;
                        <i className="fa-solid fa-key"></i>
                      </button>
                    </div>
                    <div
                      className="text-center d-flex justify-content-between mt-3"
                      style={{ textAlign: "center" }}
                    >
                      <p>
                        Already have an account?
                        <NavLink to="/login" className="font-italic text-muted">
                          <u>&nbsp;Login</u>
                        </NavLink>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
