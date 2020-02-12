import React, { Component } from "react"

import PostsList from "../components/PostsList"
import "../components/Card.css"

class Home extends Component {
  render() {
    const { user, deletePost, posts } = this.props

    return (
      <div className="flex-container">
        <div id="posts">
          <PostsList posts={posts} user={user} deletePost={deletePost} />
        </div>
      </div>
    )
  }
}

export default Home
