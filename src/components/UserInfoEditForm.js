import React, { Component } from "react"

class UserInfoEditForm extends Component {
  render() {
    const {
      user,
      userVocal,
      userInstrumental,
      current_user,
      userProfile
    } = this.props
    return (
      <form className="ui form">
        <div className="fields">
          <div className="field">
            <label>First name: </label>
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              value={user.first_name}
            />
          </div>
          <div class="field">
            <label>Last name: </label>
            <input
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={user.last_name}
            />
          </div>
          <div className="field">
            <label> Field: </label>
            <input value={user.field} readOnly />
          </div>
          <div className="field">
            <label> Voice Type/Instrument: </label>
            <input
              value={userVocal ? userVocal : userInstrumental}
              name={userVocal ? "vocal" : "instrumental"}
            />
          </div>
          <div className="field">
            <label> Short Bio: </label>
            <textarea
              rows="10"
              cols="80"
              value={user.bio_content}
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
