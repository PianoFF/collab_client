import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import React, { useState } from "react"
import "./FileStore.css"
import API from "../API/API"

const useStyles = makeStyles(theme => ({
  hover: {
    "&:hover": {
      color: theme.palette.secondary.light
    }
  }
}))

const UserFileStore = ({ current_user, files }) => {
  const classes = useStyles()

  const [cv, setCv] = useState(null)
  const [resume, setResume] = useState(null)
  const [repertoire, setRepertoire] = useState(null)

  const handleFile = e => {
    // debugger
    {
      if (e.currentTarget.id === "file-rep") {
        setRepertoire(e.currentTarget.files[0])
      }
      if (e.currentTarget.id === "file-cv") {
        setCv(e.currentTarget.files[0])
      }
      if (e.currentTarget.id === "file-resume") {
        setResume(e.currentTarget.files[0])
      }
    }
  }

  const handleFileSubmit = e => {
    e.preventDefault()

    if (cv !== null) {
      // debugger
      const formDataCV = new FormData()
      formDataCV.append("file[title]", `${current_user.first_name} cv`)
      formDataCV.append("file[file]", cv)
      formDataCV.append("file[type]", "cv")
      API.file_upload(formDataCV)
        .then(msg => alert(msg.message))
        .catch(error => {
          alert(error)
        })
    }
    if (resume !== null) {
      const formDataResume = new FormData()
      formDataResume.append("file[title]", `${current_user.first_name} resume`)
      formDataResume.append("file[file]", resume)
      formDataResume.append("file[type]", "resume")
      API.file_upload(formDataResume)
        .then(msg => alert(msg.message))
        .catch(error => {
          alert(error)
        })
    }
    if (repertoire !== null) {
      const formDataRepertoire = new FormData()
      formDataRepertoire.append(
        "file[title]",
        `${current_user.first_name} repertoire`
      )
      formDataRepertoire.append("file[file]", repertoire)
      formDataRepertoire.append("file[type]", "repertoire_list")
      API.file_upload(formDataRepertoire)
        .then(msg => alert(msg.message))
        .catch(error => {
          alert(error)
        })
    }
  }

  return (
    <form
      className="file-container"
      onSubmit={handleFileSubmit}
      style={{ width: "80%" }}>
      <div className="file-item">
        <input id="file-rep" type="file" onChange={handleFile}></input>
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
        <label> {files.rep_list ? "view Reps" : "Rep-list"}</label>
      </div>

      <div className="file-item">
        <input id="file-cv" type="file" onChange={handleFile} />
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
        <label>{files.cv ? "view CV" : "CV"} </label>
      </div>

      <div className="file-item">
        <input id="file-resume" type="file" onChange={handleFile} />
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
        <label> {files.resume ? "view Resume" : "Resume"} </label>
      </div>

      <Button
        type="submit"
        size="small"
        color="secondary"
        variant="contained"
        style={{ marginLeft: "0%" }}>
        Update
      </Button>
    </form>
  )
}

export default UserFileStore
