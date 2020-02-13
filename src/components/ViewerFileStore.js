import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import "./UserFileStore.css"
import React from "react"

const useStyles = makeStyles(theme => ({
  hover: {
    "&:hover": {
      color: theme.palette.secondary.light
    }
  }
}))

const ViewerFileStore = () => {
  const classes = useStyles()

  return (
    <div className="file-container">
      <div className="file-item">
        <label htmlFor="file-input">
          <PictureAsPdfIcon
            style={{ fontSize: 50 }}
            className={classes.hover}
            color="secondary"
          />
        </label>
        <input id="file-input" style={{ display: "none" }} type="file"></input>
        <h3> Rep-list</h3>
      </div>
      <div className="file-item">
        <label htmlFor="file-input">
          <PictureAsPdfIcon
            style={{ fontSize: 50 }}
            className={classes.hover}
            color="secondary"
          />
        </label>
        <input id="file-input" style={{ display: "none" }} type="file"></input>
        <h3> CV </h3>
      </div>
      <div className="file-item">
        <label htmlFor="file-input">
          <PictureAsPdfIcon
            style={{ fontSize: 50 }}
            className={classes.hover}
            color="secondary"
          />
        </label>
        <input id="file-input" style={{ display: "none" }} type="file"></input>
        <h3> Resume </h3>
      </div>
    </div>
  )
}

export default ViewerFileStore

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
