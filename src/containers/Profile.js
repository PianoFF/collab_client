import React, { Component } from "react"
import "./Profile.css"
import API from "../API/API"
import UserInfoEditForm from "../components/UserInfoEditForm"

class Profile extends Component {
  state = {
    userProfile: null,
    userLocation: null,
    userVocal: null,
    userInstrumental: null
  }

  componentDidMount() {
    API.one_user(this.props.match.params.userID).then(user => {
      console.log(user)
      const userProfile = Object.fromEntries(
        Object.entries(user)
          .filter(([key]) => ['id', 'first_name', 'last_name', 'email', 'field', 'token'].includes(key))
      );

      const userLocation = Object.fromEntries(
        Object.entries(user)
          .filter(([key]) => ['location'].includes(key))
      );

      const userSpecialty = Object.fromEntries(
        Object.entries(user)
          .filter(([key]) => ['specialty'].includes(key))
      );
      if (userSpecialty.specialty.voice_type) {
        this.setState({
          userVocal: userSpecialty.specialty.voice_type
        })
      } else {
        const instrument = userSpecialty.specialty.instrument;
        this.setState({
          userInstrumental: instrument
        })
      }
      // debugger
      this.setState({
        userProfile: userProfile,
        userLocation: userLocation,
      })
    })
  }

  render() {
    // debugger
    const { userProfile, userInstrumental, userVocal, userLocation } = this.state

    return (
      <div className="profile-container">
        {userProfile && (
          <>
            <div className="info-box-left">
              <UserInfoEditForm user={userProfile} userInstrumental={userInstrumental} />
            </div>

            <div className="info-box-right">
              {userInstrumental
                ? <h1> {userProfile.first_name}'s voice/instrument is: {userInstrumental}</h1>
                : <h1> {userProfile.first_name}'s voice/instrument is: {userVocal}</h1>
              }
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
