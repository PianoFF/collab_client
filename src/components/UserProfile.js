import React from "react"
import "../containers/ProfileAndForm.css"
import UserInfoEditForm from "../components/UserInfoEditForm"
import UserLocationInfoForm from "../components/UserLocationInfoForm"
import UserFileStore from "../components/UserFileStore"

const UserProfile = ({
  userProfile,
  userInstrumental,
  userVocal,
  userLocation,
  current_user,
  handleUpdateUser
}) => {
  return (
    <div className="profile-container">
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
        <UserFileStore current_user={current_user} />
      </div>
    </div>
  )
}

export default UserProfile
