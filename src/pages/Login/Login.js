import React, { useState } from "react";
import { useFormik } from "formik";

import eyeIcon from "../../assets/images/eye-icon.svg";
import appStore from "../../assets/images/app-store.png";
import googlePlay from "../../assets/images/google-play.png";

import "./Login.css";

const Login = () => {
  const [visibility, setVisibility] = useState(false);

  const formik = useFormik({
    initialValues: {
      account: "",
      password: ""
    },
    validate: values => {
      const errors = {};

      if (!values.account) {
        errors.account = "This is a required field";
      } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.account)) {
        errors.account = "The email format is not valid";
      }

      if (!values.password) {
        errors.password = "This is a required field";
      } else if (values.password.length < 8) {
        errors.password = "The password should be greater than 8 characters";
      } else if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&*()!+-]).*$/.test(values.password)) {
        errors.password = "The password format is not valid. It should contain at least one letter, one number, and one special character.";
      }

      return errors;
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="login-page">
      <div className="login-section">
        <h2 className="title">Instagram</h2>
        <div className="login-container">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="account"
                name="account"
                className={`form-control ${formik.touched.account && formik.errors.account ? "error" : ""}`}
                placeholder="Email"
                {...formik.getFieldProps("account")}
              />
              {formik.touched.account && formik.errors.account && (
                <div className="error-message">{formik.errors.account}</div>
              )}
            </div>
            <div className="form-group">
              <input
                type={visibility ? "text" : "password"}
                id="password"
                name="password"
                className={`form-control ${formik.touched.password && formik.errors.password ? "error" : ""}`}
                placeholder="Password"
                {...formik.getFieldProps("password")}
              />
              <button
                type="button"
                className="visibility"
                onClick={() => setVisibility(!visibility)}
              >
                <img src={eyeIcon} alt="eye-icon" />
              </button>
              {formik.touched.password && formik.errors.password && (
                <div className="error-message">{formik.errors.password}</div>
              )}
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-primary login-btn"
                disabled={formik.isSubmitting || Object.keys(formik.errors).length !== 0}
              >
                <span>Log In</span>
              </button>
            </div>
          </form>
          <p className="seperator">
            <span className="seperator-text">or</span>
          </p>
          <ul className="alternative-login">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-icon"></span>
                <span className="social-text">Login with Facebook</span>
              </a>
            </li>
          </ul>
          <p className="forget-password">
            <a href="https://www.instagram.com/">Forgot password?</a>
          </p>
        </div>
      </div>
      <div className="signup-section">
        <p>
          Don't have an account? <a href="/signUp">Sign up</a>
        </p>
      </div>
      <div className="get-the-app-section">
        <p className="get-the-app-text">Get the app</p>
        <div className="store-list">
          <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo">
            <img className="digital-store" src={appStore} alt="app-store" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D5FFEA1A9-BA03-4013-A737-939DD21CF41F%26utm_content%3Dlo%26utm_medium%3Dbadge">
            <img className="digital-store" src={googlePlay} alt="app-store" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
