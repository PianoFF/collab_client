import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import { makeStyles } from "@material-ui/core/styles"
import "./FileStore.css"
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
    <div className="viewer-file-store">
      <div className="file-item">
        <PictureAsPdfIcon
          style={{ fontSize: 50 }}
          className={classes.hover}
          color="secondary"
        />
        <label htmlFor="file-input">Repertoire List</label>
        {/* <input id="file-input" style={{ display: "none" }} type="file"></input> */}
      </div>
      <div className="file-item">
        <PictureAsPdfIcon
          style={{ fontSize: 50 }}
          className={classes.hover}
          color="secondary"
        />
        <label htmlFor="file-input">CV</label>
        {/* <input id="file-input" style={{ display: "none" }} type="file"></input> */}
      </div>
      <div className="file-item">
        <PictureAsPdfIcon
          style={{ fontSize: 50 }}
          className={classes.hover}
          color="secondary"
        />
        <label htmlFor="file-input">Resume</label>
        {/* <input id="file-input" style={{ display: "none" }} type="file"></input> */}
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
