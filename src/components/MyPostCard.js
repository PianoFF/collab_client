import React from "react"
import NewMessage from "./NewMessage"
import Modal from "react-modal"
import { useState } from "react"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

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

const MyPostCard = ({ post, user }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [showMore, setShowMore] = useState(false)

  const handelModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handelShowMore = () => {
    setShowMore(!showMore)
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
          onClick={handelShowMore}>
          {showMore ? "close" : "read more"}
        </Button>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          onClick={handelModal}>
          Edit
        </Button>
        <Button
          size="small"
          color="primary"
          variant="text"
          style={{ marginLeft: "48%" }}
          onClick={handelModal}>
          Delete
        </Button>
      </CardActions>

      <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
        EditPostForm
      </Modal>
    </Card>
  )
}

export default MyPostCard
