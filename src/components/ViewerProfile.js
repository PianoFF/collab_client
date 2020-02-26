import React, { useState } from "react"

import "../containers/ProfileAndForm.css"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import InfoIcon from "@material-ui/icons/Info"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import ContactPhoneIcon from "@material-ui/icons/ContactPhone"
import ViewerFileStore from "./ViewerFileStore"

const ViewerProfile = ({
  userProfile,
  userInstrumental,
  userVocal,
  userLocation,
  current_user,
  handleUpdateUser
}) => {
  return (
    <div className="viewer-profile">
      <div className="files">
        <ViewerFileStore />
      </div>
    </div>
  )
}

export default ViewerProfile
