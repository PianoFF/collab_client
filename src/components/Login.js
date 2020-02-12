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
      <div className="login">
        <h1 style={{ color: "#89D1D9", textAlign: "center" }}>Welcome Back!</h1>

        <form
          action="/"
          className="login-form"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}>
          <div className="action_page.php">
            <div className="row">
              <div className="col-25">
                <label>
                  Email Address<span className="req">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  autoComplete="off"
                  value={email}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>
                  Password<span className="req">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  required
                  autoComplete="off"
                  value={password}
                />
              </div>
            </div>
            <Button variant="contained" color="secondary" type="submit">
              Log In
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login
