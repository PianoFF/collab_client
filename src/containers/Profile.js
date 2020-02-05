import React, { Component } from "react"
import "./Profile.css"

class Profile extends Component {
  state = {
    userProfile: null
  }

  // componentDidMount{
  //     fetch()
  //   }

  render() {
    debugger

    return (
      <div className="profile-container">
        <div className="info-box-left">
          <h1> this is personal info sec</h1>
        </div>

        <div className="info-box-right">
          <h1> this is personal info sec right</h1>
        </div>

        <div className="info-box-btm">
          <h1> this is personal info sec btm</h1>
        </div>
      </div>
    )
  }
}

export default Profile
