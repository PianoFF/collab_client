import React, { Component } from "react"
import API from "../API/API"
import Button from "@material-ui/core/Button"

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
      .catch(error => {
        console.log(error)
        alert(error)
      })
  }

  render() {
    const { email, password } = this.state

    return (
      <div className="login-form">
        <div className="tab-content">
          <div id="login">
            <h1 style={{ color: "#89D1D9", textAlign: "center" }}>
              Welcome Back!
            </h1>

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

              <Button variant="contained" color="secondary" type="submit">
                Log In
              </Button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
