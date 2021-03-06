import React, { Component } from "react"
import Button from "@material-ui/core/Button"

class UserInfoEditForm extends Component {
  state = {
    first_name: this.props.user.first_name,
    last_name: this.props.user.last_name,
    email: this.props.user.email,
    bio_content: this.props.user.bio_content,
    specialty:
      this.props.user.field === "vocalist"
        ? this.props.userVocal
        : this.props.userInstrumental
  }

  handleUserInfoFormChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  componentDidUpdate = prevProps => {
    if (this.props.user !== prevProps.user) {
      // console.log(this.props)
      this.setState({
        first_name: this.props.user.first_name,
        last_name: this.props.user.last_name,
        email: this.props.user.email,
        bio_content: this.props.user.bio_content,
        specialty:
          this.props.user.field === "vocalist"
            ? this.props.userVocal
            : this.props.userInstrumental
      })
    }
  }

  updateUserInfo = e => {
    e.preventDefault()
    const newUserInfo = Object.fromEntries(
      Object.entries(this.state).filter(([key]) =>
        ["first_name", "last_name", "email", "bio_content"].includes(key)
      )
    )
    const infoForPatch = {
      user: {
        ...newUserInfo,
        specialty: {
          [this.props.user.field === "vocalist"
            ? "voice_type"
            : "instrument"]: this.state.specialty
        }
      }
    }

    this.props.handleUpdateUser(infoForPatch)
    alert("Your information has been updated.")
  }

  disabled = () => {
    return this.props.user.id !== this.props.current_user.id
  }

  render() {
    const { user } = this.props

    const { first_name, last_name, email, bio_content, specialty } = this.state

    return (
      <div className="form-container" style={{ width: "80%" }}>
        <form
          className="user-form"
          onChange={this.handleUserInfoFormChange}
          onSubmit={this.updateUserInfo}>
          <div className="action_page.php">
            <div className="row">
              <div className="col-25">
                <label>First name: </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  disabled={this.disabled()}
                  value={first_name}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Last name: </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  disabled={this.disabled()}
                  value={last_name}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label> Email: </label>
              </div>
              <div className="col-75">
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  disabled={this.disabled()}
                  value={email}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label> Field: </label>
              </div>
              <div className="col-75">
                <input value={user.field} readOnly />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label disabled={this.disabled()}>
                  {user.field === "vocalist" ? "Voice Type: " : "Instrument: "}
                </label>
              </div>
              <div className="col-75">
                <input
                  value={specialty}
                  name="specialty"
                  disabled={this.disabled()}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label> Short Bio: </label>
              </div>
              <div className="col-75">
                <textarea
                  value={bio_content}
                  name="bio_content"
                  disabled={this.disabled()}
                />
              </div>
            </div>
            {!this.disabled() && (
              <Button variant="contained" color="secondary" type="submit">
                Update
              </Button>
            )}
          </div>
        </form>
      </div>
    )
  }
}

export default UserInfoEditForm
