import React, { Component } from "react"

import UsersList from "../components/UsersList"
import PostsList from "../components/PostsList"
import "../components/Card.css"

class Home extends Component {
  state = {
    showMessageBox: null
  }

  render() {
    const { showMessageBox } = this.state
    const { user, deletePost, posts, users } = this.props

    return (
      <div className="flex-container">
        <div id="posts">
          <h1>
            What's going on at <i> Collab </i>:
          </h1>
          <PostsList
            posts={posts}
            showMessageBox={showMessageBox}
            user={user}
            deletePost={deletePost}
          />
        </div>
        <div id="users">
          <h1> New Members:</h1>
          <UsersList users={users} current_user={user} />
        </div>
      </div>
    )
  }
}

export default Home
