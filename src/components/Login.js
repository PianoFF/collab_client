import React, { Component } from "react"
import API from "../API/API"

class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    API.login(this.state)
      .then(user => this.props.onSuccess(user))
      .catch(errorPromise => {
        errorPromise.then(data => alert(data.errors))
      })
  }

  render() {
    const { email, password } = this.state

    return (
      <div className="login-form">
        <div className="tab-content">
          <div id="login">
            <h1 style={{ color: "#89D1D9" }}>Welcome Back!</h1>

            <form
              action="/"
              method="post"
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}>
              <div className="field-wrap">
                <label>
                  Email Address<span className="req">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  autoComplete="off"
                  value={email}
                />
              </div>

              <div className="field-wrap">
                <label>
                  Password<span className="req">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                  autoComplete="off"
                  value={password}
                />
              </div>

              <button type="submit" className="button button-block">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
