import React, { Component } from "react"

class Home extends Component {
  state = {
    posts: [],
    users: []
  }

  componentDidMount() {}
  render() {
    return (
      <div className="flex-container">
        <div>recent posts:</div>
        <div>recently registered users:</div>
      </div>
    )
  }
}

export default Home
