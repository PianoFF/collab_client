import React, { Component } from "react"

import Button from "@material-ui/core/Button"
import "./Button.css"

class NewPostForm extends Component {
  defaultState = {
    title: "",
    post_type: "hiring",
    content: "",
    repertoire: ""
  }

  state = {
    ...this.defaultState
  }
  handelFormChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handelFormSubmit = e => {
    e.preventDefault()
    this.props.handelNewPost(this.state)
    this.props.handelModal()
    this.setState({
      ...this.defaultState
    })
  }

  render() {
    const { title, content, post_type, repertoire } = this.state

    return (
      <form
        className="new-post-form"
        onChange={this.handelFormChange}
        onSubmit={this.handelFormSubmit}>
        <div className="action_page.php">
          <div className="row">
            <div className="col-25">
              <label>
                Title <span className="req">*</span>
              </label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="title"
                value={title}
                required
                autoComplete="off"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>
                This post is for: <span className="req">*</span>
              </label>
            </div>
            <div className="col-75">
              <select name="post_type" value={post_type}>
                <option value="hiring">Hiring</option>
                <option value="promoting"> Promoting</option>
                <option value="social"> Social</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>
                Content <span className="req">*</span>
              </label>
            </div>
            <div className="col-75">
              <textarea
                type="textarea"
                name="content"
                value={content}
                required
                autoComplete="off"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Repertoire</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="repertoire"
                value={repertoire}
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        <Button
          variant="outlined"
          color="secondary"
          onClick={this.props.handelModal}>
          Cancel
        </Button>
        <Button variant="contained" color="secondary" type="submit">
          Submit
        </Button>
      </form>
    )
  }
}

export default NewPostForm
