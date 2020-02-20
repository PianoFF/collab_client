import React, { useState } from "react"

import "../containers/ProfileAndForm.css"
import ViewerInfoTab from "./ViewerInfoTab"
import UserLocationInfoForm from "../components/UserLocationInfoForm"
import UserFileStore from "../components/UserFileStore"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import InfoIcon from "@material-ui/icons/Info"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import ContactPhoneIcon from "@material-ui/icons/ContactPhone"

const useStyles = makeStyles({
  root: {
    flexFlow: 1,
    backgroundColor: "transparent",
    color: "white"
  },
  "@global": {
    ".css-tab": {
      color: "#f0dfe2"
    }
  }
})

const ViewerProfile = ({
  userProfile,
  userInstrumental,
  userVocal,
  userLocation,
  current_user,
  handleUpdateUser
}) => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (e, newValue) => {
    e.persist()
    setValue(newValue)
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        centered>
        <Tab label="Info" icon={<InfoIcon />} value={0} className="css-tab" />
        <Tab
          label="Location"
          icon={<LocationOnIcon />}
          value={1}
          className="css-tab"
        />
        <Tab
          label="Files"
          icon={<FileCopyIcon />}
          value={2}
          className="css-tab"
        />
        <Tab
          label="Contact"
          icon={<ContactPhoneIcon />}
          value={3}
          className="css-tab"
        />
      </Tabs>

      {value === 0 && (
        <>
          <ViewerInfoTab
            user={userProfile}
            userInstrumental={userInstrumental}
            userVocal={userVocal}
            current_user={current_user}
            handleUpdateUser={handleUpdateUser}
          />
        </>
      )}
      {value === 1 && (
        <>
          <UserLocationInfoForm
            location={userLocation}
            user={userProfile}
            current_user={current_user}
            handleUpdateUser={handleUpdateUser}
          />
        </>
      )}
      {value === 2 && (
        <>
          <UserFileStore current_user={current_user} />
        </>
      )}
    </Paper>
  )
}

export default ViewerProfile
