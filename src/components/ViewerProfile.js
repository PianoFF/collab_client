import React from "react"
import UserInfoForm from "./UserInfoForm"
import UserLocationInfoForm from "./UserLocationInfoForm"
import ViewerFileStore from "./ViewerFileStore"
import "../containers/ProfileAndForm.css"

const ViewerProfile = ({
  userProfile,
  userInstrumental,
  userVocal,
  userLocation,
  current_user,
  userFile
}) => {
  return (
    <div className="viewer-profile">
      <div className="files">
        <ViewerFileStore files={userFile} />
      </div>
      <div className="viewer-content">
        <div id="user-info">
          <UserInfoForm
            user={userProfile}
            userInstrumental={userInstrumental}
            userVocal={userVocal}
            current_user={current_user}
          />
        </div>
        <div id="user-location">
          <UserLocationInfoForm
            location={userLocation}
            user={userProfile}
            current_user={current_user}
          />
        </div>
      </div>
    </div>
  )
}

export default ViewerProfile
