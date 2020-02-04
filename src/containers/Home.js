import React, { Component } from "react"
import API from "../API/API"
import UsersList from "../components/UsersList"
import PostsList from "../components/PostsList"
import "../components/Card.css"

class Home extends Component {
  state = {
    showMessageBox: null
  }

  toggleMessageBox = postID => {
    if (this.state.showMessageBox === postID) {
      this.setState({
        showMessageBox: null
      })
    } else {
      this.setState({
        showMessageBox: postID
      })
    }
  }

  render() {
    const { showMessageBox } = this.state
    const { user, deletePost, posts, users } = this.props

    return (
      <div className="flex-container">
        <div id="posts">
          <h1> Since you last signed in:</h1>
          <PostsList
            posts={posts}
            showMessageBox={showMessageBox}
            toggleMessageBox={this.toggleMessageBox}
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
