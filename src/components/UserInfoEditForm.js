import React, { Component } from "react"

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
    const { user, userVocal, current_user } = this.props

    const { first_name, last_name, email, bio_content, specialty } = this.state

    return (
      <div className="container">
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
                <label>{userVocal ? "Voice Type: " : "Instrument: "}</label>
              </div>
              <div className="col-75">
                <input value={specialty} name="specialty" />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label> Short Bio: </label>
              </div>
              <div className="col-75">
                <textarea value={bio_content} name="bio_content" />
              </div>
            </div>

            {current_user.id === user.id && (
              <button type="submit"> Update </button>
            )}
          </div>
        </form>
      </div>
    )
  }
}

export default UserInfoEditForm
