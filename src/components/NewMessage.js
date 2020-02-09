import React, { Component } from "react"
import API from "../API/API"

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
    API.new_message(this.state)
      .then(data => console.log(data))
      .catch(errorPromise => {
        errorPromise.then(data => alert(data.errors))
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
          id="new-msg"
          onChange={this.handleFormChange}
          onSubmit={this.sendNewMessage}>
          <div>
            <label>
              Title: <span className="req">*</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="title"
              required
              autoComplete="off"
              value={title}
            />
          </div>
          <div>
            <label>
              Message: <span className="req">*</span>
            </label>
            <textarea
              name="content"
              placeholder="Your Message"
              required
              autoComplete="off"
              value={content}
            />
          </div>
          <div>
            <button
              id="send-msg"
              type="submit"
              onClick={this.props.handleModal}>
              Send
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewMessage
