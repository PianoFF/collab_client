import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import React from "react"
import "./UserFileStore.css"

const useStyles = makeStyles(theme => ({
  hover: {
    "&:hover": {
      color: theme.palette.secondary.light
    }
  }
}))

const UserFileStore = () => {
  const classes = useStyles()

  return (
    <div className="file-container">
      <div className="file-item">
        <input id="file-input" type="file" />
        <PictureAsPdfIcon
          style={{ fontSize: 50 }}
          className={classes.hover}
          color="secondary"
        />
        <h3> Rep-list</h3>
      </div>
      <div className="file-item">
        <input id="file-input" type="file" />
        <PictureAsPdfIcon
          style={{ fontSize: 50 }}
          className={classes.hover}
          color="secondary"
        />
        <h3> CV </h3>
      </div>
      <div className="file-item">
        <input id="file-input" type="file" />
        <PictureAsPdfIcon
          style={{ fontSize: 50 }}
          className={classes.hover}
          color="secondary"
        />
        <h3> Resume </h3>
      </div>
    </div>
    // <form>
    //   <label htmlFor="file-input">
    //     <PictureAsPdfIcon
    //       style={{ fontSize: 80 }}
    //       className={classes.hover}
    //       color="secondary"
    //     />
    //   </label>
    //   <input id="file-input" style={{ display: "none" }} type="file"></input>
    // </form>
  )
}

export default UserFileStore
