import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import { makeStyles } from "@material-ui/core/styles"
import "./FileStore.css"
import Button from "@material-ui/core/Button"
import React from "react"

const useStyles = makeStyles(theme => ({
  hover: {
    "&:hover": {
      color: theme.palette.secondary.light
    }
  }
}))

const ViewerFileStore = ({ files }) => {
  const classes = useStyles()

  return (
    <div className="viewer-file-store">
      <div className="file-item">
        <Button
          aria-label="file"
          variant="link"
          href={files.rep_list}
          startIcon={
            <PictureAsPdfIcon
              style={{ fontSize: 50 }}
              className={classes.hover}
              color="secondary"
            />
          }
        />
        <label> View Reps</label>
      </div>
      <div className="file-item">
        <Button
          aria-label="file"
          variant="link"
          href={files.cv}
          startIcon={
            <PictureAsPdfIcon
              style={{ fontSize: 50 }}
              className={classes.hover}
              color="secondary"
            />
          }
        />
        <label> View CV</label>
      </div>
      <div className="file-item">
        <Button
          aria-label="file"
          variant="link"
          href={files.resume}
          startIcon={
            <PictureAsPdfIcon
              style={{ fontSize: 50 }}
              className={classes.hover}
              color="secondary"
            />
          }
        />
        <label> View Resume</label>
      </div>
    </div>
  )
}

export default ViewerFileStore
