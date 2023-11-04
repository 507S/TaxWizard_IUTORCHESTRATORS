import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../../../styles/AuthStyleForOTPVerificationLayout.css";

export default function VerifyOTPLayout() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const otpInputs = useRef([]);
  const [error, setError] = useState("");

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    // Ensure the value is a single digit
    if (/^\d*$/.test(value) && value.length <= 1) {
      // Update the OTP array with the new digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus on the next input element if available
      if (index < otpInputs.current.length - 1 && value.length === 1) {
        otpInputs.current[index + 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all OTP fields are filled
    if (otp.every((digit) => digit !== "")) {
      const enteredOtp = otp.join("");
      // Validate and process the OTP as needed
      console.log("Entered OTP:", enteredOtp);
      setError(""); // Clear any previous error
    } else {
      setError("Please fill in all OTP fields.");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-8 d-none d-md-flex bg-image-otp-verification"></div>

        <div className="col-md-4 bg-light">
          <div className="login d-flex align-items-center py-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="display-6">OTP Verification</h3>
                  <p className="text-muted mb-4"></p>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3 d-flex">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          type="text"
                          className="otp-input form-control m-1"
                          maxLength="1"
                          value={digit}
                          ref={(input) => (otpInputs.current[index] = input)}
                          onChange={(e) => handleOtpChange(e, index)}
                        />
                      ))}
                    </div>
                    {error && (
                      <p
                        className="text-danger mb-2"
                        style={{ fontSize: "13px" }}
                      >
                        {error}
                      </p>
                    )}
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm w-100"
                      >
                        Verify &nbsp;
                        <i className="fa-solid fa-check"></i>
                      </button>
                    </div>
                    <NavLink to="/login">
                      <div>
                        <button className="btn btn-dark btn-block text-uppercase mb-2 rounded-pill shadow-sm w-100">
                          Go Back &nbsp;
                          <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        </button>
                      </div>
                    </NavLink>
                    {/* <div
                      className="text-center d-flex justify-content-between mt-3"
                      style={{ textAlign: "center" }}
                    >
                      <p>
                        Go Back?
                        <NavLink to="/login" className="font-italic text-muted">
                          <u>&nbsp;Login</u>
                        </NavLink>
                      </p>
                    </div> */}
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
