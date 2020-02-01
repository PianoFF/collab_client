import React, { Component } from "react"

class Login extends Component {
  render() {
    return (
      <div className="login-form">
        <div className="tab-content">
          <div id="login">
            <h1 style={{ color: "#89D1D9" }}>Welcome Back!</h1>

            <form action="/" method="post">
              <div className="field-wrap">
                <label>
                  Email Address<span className="req">*</span>
                </label>
                <input type="email" required autocomplete="off" />
              </div>

              <div className="field-wrap">
                <label>
                  Password<span className="req">*</span>
                </label>
                <input type="password" required autocomplete="off" />
              </div>

              <p className="forgot">
                <a href="#">Forgot Password?</a>
              </p>

              <button className="button button-block">Log In</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
