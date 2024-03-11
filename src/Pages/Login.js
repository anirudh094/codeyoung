import React from "react";
import "../CSS/Login.scss";
function Login() {
  return (
    <div className="login-body">
      <div className="login-body-header">Welcome to Student Portal</div>
      <div class="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          name="name"
          id="name"
          required
        />
        <label for="name" className="form__label">
          Please enter Student Email/Username
        </label>
      </div>
      <button className="login-body-btn">Continue</button>
      <div className="login-body-content">
        Please use Registered Email/Username given in Codeyoung to login
      </div>
      <img
        className="login-page-logo"
        src="https://www.codeyoung.com/_nuxt/img/codeyoung-logo.4c8144c.svg"
        alt="logo"
      ></img>
      <div className="login-body-content-2">
        Login to access a community of 10000+ members and thousands of resources
      </div>
    </div>
  );
}

export default Login;
