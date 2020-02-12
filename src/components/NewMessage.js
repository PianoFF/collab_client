import React, { Component } from "react"
import API from "../API/API"
import Button from "@material-ui/core/Button"

class NewMessage extends Component {
  defaultState = {
    title: "",
    content: "",
    recipient_id: this.props.recipient.id
  }

  state = {
    ...this.defaultState
  }

  handleFormChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  sendNewMessage = e => {
    e.preventDefault()
    this.props.handleModal()

    API.new_message(this.state)
      .then(data => console.log(data))
      .catch(error => {
        alert(error)
      })

    this.setState({
      ...this.defaultState
    })
  }

  render() {
    const { title, content } = this.state

    return (
      <div className="new-msg">
        <form
          className="new-msg-form"
          onChange={this.handleFormChange}
          onSubmit={this.sendNewMessage}>
          <div className="action_page.php">
            <div className="row">
              <div className="col-25">
                <label>
                  Title: <span className="req">*</span>
                </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  required
                  autoComplete="off"
                  value={title}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>
                  Message: <span className="req">*</span>
                </label>
              </div>
              <div className="col-75">
                <textarea
                  name="content"
                  placeholder="Your Message"
                  required
                  autoComplete="off"
                  value={content}
                />
              </div>
            </div>
          </div>
          <Button
            size="small"
            color="secondary"
            variant="outlined"
            onClick={this.props.handelModal}>
            Cancel
          </Button>
          <Button
            type="submit"
            size="small"
            color="secondary"
            variant="outlined"
            onClick={this.props.handelModal}>
            Send
          </Button>
        </form>
      </div>
    )
  }
}

export default NewMessage
