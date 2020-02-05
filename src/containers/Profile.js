import React, { Component } from "react"
import "./Profile.css"
import API from "../API/API"

class Profile extends Component {
  state = {
    userProfile: null
  }

  componentDidMount() {
    API.one_user(this.props.match.params.userID).then(user => {
      console.log(user)
      this.setState({ userProfile: user })
    })
  }

  render() {
    // debugger
    const { userProfile } = this.state

    return (
      <div className="profile-container">
        {userProfile && (
          <>
            <div className="info-box-left">
              <h1> {userProfile.id}</h1>
            </div>

            <div className="info-box-right">
              <h1> field: {userProfile.field}</h1>
            </div>

            <div className="info-box-btm">
              <h1> bio: {userProfile.bio_content}</h1>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Profile
