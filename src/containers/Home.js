import React, { Component } from "react"
import API from "../API/API"
import UsersList from "../components/UsersList"
import PostsList from "../components/PostsList"
import "./Home.css"

class Home extends Component {
  state = {
    posts: [],
    users: [],
    showMessageBox: null
  }

  componentDidMount() {
    API.all_users()
      .then(userData => this.setState({ users: userData }))
      .catch(errorPromise => {
        errorPromise.then(data => alert(data.errors))
      })

    API.all_posts()
      .then(postsData => this.setState({ posts: postsData }))
      .catch(errorPromise => {
        errorPromise.then(data => alert(data.errors))
      })
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
    const { posts, users, showMessageBox } = this.state
    const { user } = this.props

    return (
      <div className="flex-container">
        <div id="posts">
          <h1> Since you last signed in:</h1>
          <PostsList
            posts={posts}
            showMessageBox={showMessageBox}
            toggleMessageBox={this.toggleMessageBox}
            user={user}
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
