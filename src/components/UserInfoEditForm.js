import React, { Component } from "react"
import API from "../API/API"

class UserInfoEditForm extends Component {
  state = {
    first_name: this.props.user.first_name,
    last_name: this.props.user.last_name,
    email: this.props.user.email,
    bio_content: this.props.user.bio_content,
    specialty: this.props.userVocal
      ? this.props.userVocal
      : this.props.userInstrumental
  }

  handleUserInfoFormChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
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
          [this.props.userVocal ? "voice_type" : "instrument"]: this.state
            .specialty
        }
      }
    }
    this.props.handleUpdateUser(infoForPatch)
  }

  render() {
    const { user, userVocal, current_user, userProfile } = this.props

    const { first_name, last_name, email, bio_content, specialty } = this.state

    return (
      <form
        className="ui form"
        onChange={this.handleUserInfoFormChange}
        onSubmit={this.updateUserInfo}>
        <div className="fields">
          <div className="field">
            <label>First name: </label>
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              value={first_name}
            />
          </div>
          <div className="field">
            <label>Last name: </label>
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={last_name}
            />
          </div>
          <div className="field">
            <label> Email: </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={email}
            />
          </div>
          <div className="field">
            <label> Field: </label>
            <input value={user.field} readOnly />
          </div>
          <div className="field">
            <label>{userVocal ? "Voice Type: " : "Instrument: "}</label>
            <input value={specialty} name="specialty" />
          </div>
          <div className="field">
            <label> Short Bio: </label>
            <textarea
              rows="10"
              cols="80"
              max-width="95%"
              value={bio_content}
              name="bio_content"
            />
          </div>
        </div>
        {current_user.id === userProfile.id && (
          <button type="submit"> Update </button>
        )}
      </form>
    )
  }
}

export default UserInfoEditForm
