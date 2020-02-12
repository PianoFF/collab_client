import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf"
import React from "react"

const FileStore = () => {
  return (
    <form>
      <input type="file">
        <PictureAsPdfIcon style={{ fontSize: 40 }} />
      </input>
    </form>
  )
}

export default FileStore
