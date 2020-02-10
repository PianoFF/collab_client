import React, { Component } from "react"
import "./SignupLogin.css"
import Signup from "../components/Signup"
import Login from "../components/Login"

class SignupLogin extends Component {
  state = {
    signUp: true
  }

  handleSignup = e => {
    e.preventDefault()
    this.setState({
      signUp: true
    })
  }

  handleLogin = e => {
    e.preventDefault()
    this.setState({
      signUp: false
    })
  }

  render() {
    const { signUp } = this.state
    const { user, setUser } = this.props
    // console.log(this.props)
    return (
      <div className="tab-group">
        <div className="table">
          <ul className="tabs">
            <li className="tab">
              <a href="" onClick={this.handleSignup}>
                Sign Up
              </a>
            </li>
            <li className="tab">
              <a href="" onClick={this.handleLogin}>
                Log In
              </a>
            </li>
          </ul>
          {!user && !signUp ? (
            <Login onSuccess={setUser} />
          ) : (
            <Signup onSuccess={setUser} />
          )}
        </div>
      </div>
    )
  }
}

export default SignupLogin
