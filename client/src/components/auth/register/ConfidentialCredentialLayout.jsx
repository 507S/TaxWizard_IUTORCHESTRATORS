import { useState } from "react";
import NavbarLayout from "../../navBar/NavbarLayout";
// import {
//   Button,
//   FloatButton,
//   Upload,
//   theme,
//   message,
//   Progress,
//   Space,
//   Typography,
//   Spin,
// } from "antd";
import ImgCrop from "antd-img-crop";

// import {
//   UploadOutlined,
//   FileOutlined,
//   LoadingOutlined,
// } from "@ant-design/icons";

import { Layout, Upload } from "antd";
import "react-toastify/dist/ReactToastify.css";
const { Footer } = Layout;
export default function ConfidentialCredentialLayout() {
  const [dob, setDob] = useState("");
  const [dobError, setDobError] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [corporation, setCorporation] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");

  //   const [isInitialLoad, setIsInitialLoad] = useState(true);

  //   useEffect(() => {
  //     if (isInitialLoad) {
  //       toast.info("🦄 Wow so easy!", {
  //         position: "bottom-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //       setIsInitialLoad(false);
  //     }
  //   }, [isInitialLoad]);
  const validateDob = (dob) => {
    const today = new Date();
    const selectedDob = new Date(dob);
    const age = today.getFullYear() - selectedDob.getFullYear();

    if (age < 18) {
      return "You must be at least 18 years old to register.";
    } else {
      return "";
    }
  };
  const handleDobChange = (e) => {
    const dobValue = e.target.value;
    setDob(dobValue);

    const dobValidationError = validateDob(dobValue);
    setDobError(dobValidationError);
  };
  const [fileList, setFileList] = useState([
    // {
    //   uid: "-1",
    //   name: "image.png",
    //   status: "done",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Date of Birth
    const dobValidationError = validateDob(dob);
    setDobError(dobValidationError);

    // ... Rest of your form validation logic

    if (dobValidationError === "") {
      // Process the form submission
      // ...
    }
  };

  return (
    <>
      <NavbarLayout />

      <div className="container h-80">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow" style={{ marginTop: "6rem" }}>
              <div className="card-body p-5">
                <form
                  className="row g-3"
                  style={{ fontSize: "14px" }}
                  onSubmit={handleSubmit}
                >
                  <div className="col-md-12" style={{ textAlign: "center" }}>
                    <label className="form-label">Passport Size Photo</label>
                    <div>
                      <ImgCrop rotationSlider>
                        <Upload
                          listType="picture-circle"
                          fileList={fileList}
                          onChange={(file) => onChange(file)}
                          onPreview={onPreview}
                          accept=".png, .jpg, ,jpeg"
                          // customRequest={handlePassportImageChange}
                        >
                          {fileList.length < 1 && "+ Upload "}
                        </Upload>
                      </ImgCrop>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label className="mb-2 text-muted" htmlFor="dob">
                      Date of Birth (YYYY/MM/DD)
                    </label>
                    <input
                      id="dob"
                      type="date"
                      className="form-control"
                      name="dob"
                      placeholder="YYYY/MM/DD"
                      value={dob}
                      onChange={handleDobChange}
                      required
                    />
                    {dobError && (
                      <p
                        className="text-danger mt-3"
                        style={{ fontSize: "12px" }}
                      >
                        {dobError}
                      </p>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                      value={mobileNumber}
                      required
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label">Division</label>
                    <select
                      id="inputState"
                      className="form-select"
                      value={division}
                      //   onChange={handleDivisionChange}
                      required
                    >
                      <option selected>Choose...</option>
                      <option value="">Dhaka</option>
                      <option value="">Rangpur</option>
                    </select>
                  </div>
                  <div className="col-md-4  ">
                    <label className="form-label">District</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      value={district}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">City Corporation </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputZip"
                      value={corporation}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Present Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      value={presentAddress}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Permanent Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      value={permanentAddress}
                      required
                    />
                  </div>
                  <div className="col-12" style={{ textAlign: "right" }}>
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        TaxWizard ©2023 Created by IUT_ORCHESTRATORS
      </Footer>
    </>
  );
}
