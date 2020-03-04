import React, { Component } from "react"
import "./ProfileAndForm.css"
import API from "../API/API"
import UserProfile from "../components/UserProfile"
import ViewerProfile from "../components/ViewerProfile"

class Profile extends Component {
  state = {
    userProfile: null,
    userLocation: null,
    userVocal: null,
    userInstrumental: null,
    userFile: {
      cv: null,
      resume: null,
      rep_list: null
    },
    modalIsOpen: false
  }

  handleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    })
  }

  userFetch = () => {
    API.one_user(this.props.match.params.userID)
      .then(user => {
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

  fetchFile = userID => {
    // debugger
    API.file_download(userID).then(data => {
      this.setState({
        ...this.state,
        userFile: {
          ...this.state.userFile,
          resume: data.url_resume,
          cv: data.url_cv,
          rep_list: data.url_rep
        }
      })
    })
  }
  componentDidUpdate(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.userFetch()
      this.fetchFile(this.props.match.params.userID)
    }
  }

  componentDidMount() {
    this.userFetch()
    this.fetchFile(this.props.match.params.userID)
  }

  render() {
    const {
      userProfile,
      userInstrumental,
      userVocal,
      userLocation,
      userFile
    } = this.state
    const { current_user, handleUpdateUser } = this.props
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "60%"
      }
    }
    return (
      <>
        {userProfile &&
          (userProfile.id === current_user.id ? (
            <UserProfile
              userProfile={userProfile}
              userInstrumental={userInstrumental}
              userVocal={userVocal}
              userLocation={userLocation}
              userFile={userFile}
              current_user={current_user}
              handleUpdateUser={handleUpdateUser}
            />
          ) : (
            <ViewerProfile
              userProfile={userProfile}
              userInstrumental={userInstrumental}
              userVocal={userVocal}
              userLocation={userLocation}
              userFile={userFile}
              current_user={current_user}
            />
          ))}
      </>
    )
  }
}

export default Profile
