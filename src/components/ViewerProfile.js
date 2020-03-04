import React, { useState } from "react"

import "../containers/ProfileAndForm.css"
import ViewerFileStore from "./ViewerFileStore"

const ViewerProfile = ({
  userProfile,
  userInstrumental,
  userVocal,
  userLocation,
  userFile,
  current_user,
  handleUpdateUser
}) => {
  return (
    <div className="viewer-profile">
      <div className="files">
        <ViewerFileStore files={userFile} />
      </div>
    </div>
  )
}

export default ViewerProfile
