import React, { Component } from "react"

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
  handleFormChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.handleNewPost(this.state)
    this.setState({
      ...this.defaultState
    })
  }

  render() {
    const { title, content, post_type, repertoire } = this.state

    return (
      <form
        id="new-post"
        onChange={this.handleFormChange}
        onSubmit={this.handleFormSubmit}>
        <div className="field-wrap">
          <label>
            Title <span className="req">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={title}
            required
            autoComplete="off"
          />
        </div>
        <div className="field-wrap">
          <label>
            This post is for: <span className="req">*</span>
          </label>
          <select name="post_type" value={post_type}>
            <option value="hiring">Hiring</option>
            <option value="promoting"> Promoting</option>
            <option value="social"> Social</option>
          </select>
        </div>
        <div className="field-wrap">
          <label>
            Content <span className="req">*</span>
          </label>
          <textarea
            type="textarea"
            name="content"
            value={content}
            required
            autoComplete="off"
          />
        </div>
        <div className="field-wrap">
          <label>Repertoire</label>
          <input
            type="text"
            name="repertoire"
            value={repertoire}
            autoComplete="off"
          />
        </div>
        <button type="submit" className="button button-block">
          Submit Post
        </button>
      </form>
    )
  }
}

export default NewPostForm
