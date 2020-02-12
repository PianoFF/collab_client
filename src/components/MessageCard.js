import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ReactCardFlip from "react-card-flip"
import API from "../API/API"
import Modal from "react-modal"
import NewMessage from "./NewMessage"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginLeft: "5%",
    width: "90%",
    // borderLeft: "4px solid #89d1d9",
    backgroundColor: "white",
    borderRadius: "3%",
    marginBottom: "1em",
    marginTop: "1em"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  movebutton: {
    float: "right"
  }
})

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

const MessageCard = ({ msg, handleMessageStatus }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const classes = useStyles()

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped)
    API.update_message({
      id: msg.id,
      read: true
    }).then(message => handleMessageStatus(message))
  }

  const handleDeleteMessage = e => {
    // e.target.innerText === "DELETE" &&
    API.update_message({
      id: msg.id,
      receiver_delete: true
    })
      .then(message => handleMessageStatus(message))
      .catch(error => {
        console.log(error)
        alert(error)
      })
  }

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="card-front" onClick={handleCardFlip}>
        <Card className={classes.root} variant="outlined">
          <h3> You Have a Message From: </h3>
          <CardContent>
            <NavLink to={`/profile/${msg.sender.id}`}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
                variant="h5"
                component="h2">
                {msg.sender.first_name + " " + msg.sender.last_name}
              </Typography>
            </NavLink>
            {msg.read && (
              <Typography className={classes.pos} color="textSecondary">
                Read on: {msg.updated_at}
              </Typography>
            )}
          </CardContent>
        </Card>
      </div>
      <div className="card-back" onClick={handleCardFlip}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {msg.title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Received on: {msg.received_at}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Content:
              <br />
              {msg.content}
            </Typography>
          </CardContent>
          <CardActions className={classes.movebutton}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={handleModal}>
              Reply
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={handleDeleteMessage}>
              Delete
            </Button>
          </CardActions>
        </Card>
        <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
          <NewMessage recipient={msg.sender} handleModal={handleModal} />
        </Modal>
      </div>
    </ReactCardFlip>
  )
}

export default MessageCard
