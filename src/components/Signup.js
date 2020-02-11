import React, { Component } from "react"
import API from "../API/API"
import "./Signup.css"

class Signup extends Component {
  defaultState = {
    first_name: "",
    last_name: "",
    email: "",
    field: "vocalist",
    password: "",
    passsword_confirmation: ""
  }

  state = {
    ...this.defaultState
  }

  handleFormChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    API.signup(this.state)
      .then(user => {
        this.props.onSuccess(user)
        // console.table(user)
      })
      .catch(error => {
        console.log(error)
        alert(error)
      })
    this.setState({
      ...this.defaultState
    })
  }

  render() {
    const {
      first_name,
      last_name,
      email,
      field,
      password,
      passsword_confirmation
    } = this.state

    return (
      <div className="signup-form">
        <div className="tab-content">
          <div id="signup">
            <h1 style={{ color: "#89D1D9" }}>Sign Up for Free</h1>

            <form
              action="/"
              method="post"
              onChange={this.handleFormChange}
              onSubmit={this.handleFormSubmit}>
              <div className="field-wrap">
                <label>
                  First Name<span className="req">*</span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={first_name}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="field-wrap">
                <label>
                  Last Name<span className="req">*</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={last_name}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="field-wrap">
                <label>
                  Email Address<span className="req">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="field-wrap">
                <label>
                  You are a/an: <span className="req">*</span>
                </label>
                <select name="field" value={field}>
                  <option value="vocalist"> Vocalist</option>
                  <option value="instrumentalist"> Instrumentalist</option>
                </select>
              </div>

              <div className="field-wrap">
                <label>
                  Set Password<span className="req">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="field-wrap">
                <label>
                  Confirm Password<span className="req">*</span>
                </label>
                <input
                  type="password"
                  name="passsword_confirmation"
                  value={passsword_confirmation}
                  required
                  autoComplete="off"
                />
              </div>

              <button type="submit" className="button button-block">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
