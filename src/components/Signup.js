import React, { Component } from "react"
import API from "../API/API"
import Button from "@material-ui/core/Button"

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
      <div className="signup">
        <h1 style={{ color: "#89D1D9" }}>Sign Up for Free</h1>
        <form
          action="/"
          className="signup-form"
          onChange={this.handleFormChange}
          onSubmit={this.handleFormSubmit}>
          <div className="action_page.php">
            <div className="row">
              <div className="col-25">
                <label>
                  First Name<span className="req">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="first_name"
                  value={first_name}
                  required
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>
                  Last Name<span className="req">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="last_name"
                  value={last_name}
                  required
                  autoComplete="off"
                />
              </div>
            </div>

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
                  value={email}
                  required
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>
                  You are a/an: <span className="req">*</span>
                </label>
              </div>
              <div className="col-75">
                <select name="field" value={field}>
                  <option value="vocalist"> Vocalist</option>
                  <option value="instrumentalist"> Instrumentalist</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>
                  Set Password<span className="req">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="password"
                  name="password"
                  value={password}
                  required
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>
                  Confirm Password<span className="req">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="password"
                  name="passsword_confirmation"
                  value={passsword_confirmation}
                  required
                  autoComplete="off"
                />
              </div>
            </div>
            <Button variant="contained" color="secondary" type="submit">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup
