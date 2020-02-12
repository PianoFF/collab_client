import React from "react"
import Button from "@material-ui/core/Button"

const Confirmation = ({ handleDeletePost, handlePopper }) => {
  return (
    <>
      <Button
        size="small"
        color="secondary"
        variant="contained"
        onClick={handlePopper}>
        Cancel
      </Button>
      <Button
        size="small"
        color="secondary"
        variant="contained"
        onClick={handleDeletePost}>
        Confirm
      </Button>
    </>
  )
}

export default Confirmation
