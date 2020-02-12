import React from "react"
import Modal from "react-modal"
import { useState } from "react"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Popper from "@material-ui/core/Popper"
import Typography from "@material-ui/core/Typography"
import Confirmation from "./Confirmation"
import PostEditForm from "./PostEditForm"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "1em"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  body: {
    textAlign: "left"
  }
})

const MyPostCard = ({ post, user, deletePost, updatePost }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const open = Boolean(anchorEl)
  const id = open ? "simple-popper" : undefined

  const handlePopper = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  const handleDeletePost = e => {
    e.preventDefault()
    deletePost(post.id)
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "60%"
    }
  }

  const classes = useStyles()

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom>
          {new Date(post.created_at).toLocaleString()}
        </Typography>
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          for: {post.post_type}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          by: {post.user.first_name} {post.user.last_name}
        </Typography>
        <Typography variant="body2" component="p">
          Repertoire: {post.repertoire}
        </Typography>
        {showMore && (
          <Typography className={classes.body} variant="body2" component="p">
            {post.content}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={handleShowMore}>
          {showMore ? "close" : "read more"}
        </Button>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          onClick={handleModal}>
          Edit
        </Button>
        <Button
          type="button"
          size="small"
          color="primary"
          variant="text"
          style={{ marginLeft: "48%" }}
          onClick={handlePopper}>
          Delete
        </Button>
      </CardActions>

      <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
        <PostEditForm
          handleModal={handleModal}
          post={post}
          updatePost={updatePost}
        />
      </Modal>
      <Popper open={open} anchorEl={anchorEl}>
        <Confirmation
          handleDeletePost={handleDeletePost}
          handlePopper={handlePopper}
        />
      </Popper>
    </Card>
  )
}

export default MyPostCard
