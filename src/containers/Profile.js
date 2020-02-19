import React, { Component } from "react"
import "./ProfileAndForm.css"
import API from "../API/API"
import UserInfoEditForm from "../components/UserInfoEditForm"
import UserLocationInfoForm from "../components/UserLocationInfoForm"
import Modal from "react-modal"
import Button from "@material-ui/core/Button"
import NewMessage from "../components/NewMessage"
import UserFileStore from "../components/UserFileStore"
import ViewerFileStore from "../components/ViewerFileStore"

class Profile extends Component {
  state = {
    userProfile: null,
    userLocation: null,
    userVocal: null,
    userInstrumental: null,
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
              {current_user.id === userProfile.id ? (
                <UserFileStore current_user={current_user} />
              ) : (
                <ViewerFileStore />
              )}
              {current_user.id !== userProfile.id && (
                <>
                  <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    style={{ marginLeft: "45%" }}
                    onClick={this.handleModal}>
                    Message
                  </Button>
                  <Modal
                    isOpen={this.state.modalIsOpen}
                    style={customStyles}
                    ariaHideApp={false}>
                    <NewMessage
                      recipient={userProfile}
                      handleModal={this.handleModal}
                    />
                  </Modal>
                </>
              )}
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Profile
