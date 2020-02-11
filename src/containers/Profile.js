import React, { Component } from "react"
import "./Profile.css"
import API from "../API/API"
import UserInfoEditForm from "../components/UserInfoEditForm"
import UserLocationInfoForm from "../components/UserLocationInfoForm"
import Button from "@material-ui/core/Button"

class Profile extends Component {
  state = {
    userProfile: null,
    userLocation: null,
    userVocal: null,
    userInstrumental: null
  }

  userFetch = () => {
    API.one_user(this.props.match.params.userID)
      .then(user => {
        // console.log(user)
        const userProfile = Object.fromEntries(
          Object.entries(user).filter(([key]) =>
            [
              "id",
              "first_name",
              "last_name",
              "email",
              "field",
              "token",
              "bio_content"
            ].includes(key)
          )
        )

        const userSpecialty = Object.fromEntries(
          Object.entries(user).filter(([key]) => ["specialty"].includes(key))
        )

        if (userSpecialty.specialty) {
          if (userSpecialty.specialty.voice_type) {
            this.setState({
              userVocal: userSpecialty.specialty.voice_type
            })
          } else {
            const instrument = userSpecialty.specialty.instrument
            this.setState({
              userInstrumental: instrument
            })
          }
        }

        this.setState({
          userProfile: userProfile,
          userLocation: user.location
        })
      })
      .catch(error => {
        console.log(error)
        alert(error)
      })
  }

  componentDidUpdate(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.userFetch()
    }
  }

  componentDidMount() {
    this.userFetch()
  }

  render() {
    const {
      userProfile,
      userInstrumental,
      userVocal,
      userLocation
    } = this.state
    const { current_user, handleUpdateUser } = this.props

    return (
      <div className="profile-container">
        {userProfile && (
          <>
            <div className="info-box-left">
              <UserInfoEditForm
                user={userProfile}
                userInstrumental={userInstrumental}
                userVocal={userVocal}
                current_user={current_user}
                handleUpdateUser={handleUpdateUser}
              />
            </div>

            <div className="info-box-right">
              <UserLocationInfoForm
                location={userLocation}
                user={userProfile}
                current_user={current_user}
                handleUpdateUser={handleUpdateUser}
              />
            </div>

            <div className="info-box-btm">
              <h3> PDF files: CV, resume, repertoire_list come here</h3>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Profile
