import React, { Component } from "react"
import API from "../API/API"
import UsersList from "../components/UsersList"
import PostsList from "../components/PostsList"
import "./Home.css"

class Home extends Component {
  state = {
    posts: [],
    users: [],
    toMessage: false
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

  sendMessage = () => {}

  render() {
    const { posts, users } = this.state

    return (
      <div className="flex-container">
        <div id="posts">
          <h1> Since you last signed in:</h1>
          <PostsList posts={posts} sendMessage={this.sendMessage} />
        </div>
        <div id="users">
          <h1> New Members:</h1>
          <UsersList users={users} />
        </div>
      </div>
    )
  }
}

export default Home
