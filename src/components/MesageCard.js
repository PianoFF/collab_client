import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import ReactCardFlip from "react-card-flip"
import API from "../API/API"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginLeft: "5%",
    width: "90%",
    borderLeft: "4px solid #89d1d9",
    backgroundColor: "rgb(231, 200, 192)",
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

const MessageCard = ({ msg, handleMessageStatus }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const classes = useStyles()

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped)
    API.update_message_read(msg.id)
    handleMessageStatus(msg.id)
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="card-front" onClick={handleCardFlip}>
        <Card className={classes.root} variant="outlined">
          <h3> You Have a Message From: </h3>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="h5"
              component="h2">
              {msg.sender.first_name + " " + msg.sender.last_name}
            </Typography>
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
            <Button size="small" variant="outlined">
              Reply
            </Button>
            <Button size="small" variant="outlined">
              Delete
            </Button>
          </CardActions>
        </Card>
      </div>
    </ReactCardFlip>
  )
}

export default MessageCard