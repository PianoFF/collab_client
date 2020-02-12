import React, { Component } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import "./components/Button.css"
import "./containers/FlexContainer.css"

import API from "./API/API"
import Navbar from "./components/Navbar"
import Home from "./containers/Home"
import Posts from "./containers/Posts"
import Profile from "./containers/Profile"
import Inbox from "./containers/Inbox"
import Manifesto from "./components/Manifesto"

class LoggedInUser extends Component {
  state = {
    posts: [],
    crnt_user_posts: []
  }

  componentDidMount() {
    API.all_posts()
      .then(postsData => {
        this.setState({
          posts: postsData,
          crnt_user_posts: postsData.filter(
            post => post.user.id === this.props.user.id
          )
        })
      })
      .catch(error => {
        console.log(error)
        alert(error)
      })
  }

  handleNewPost = newPost => {
    API.newpost(newPost)
      .then(post =>
        this.setState({
          crnt_user_posts: [...this.state.crnt_user_posts, post],
          posts: [...this.state.posts, post]
        })
      )
      .catch(error => {
        console.log(error)
        alert(error)
      })
  }

  handleLogout = e => {
    e.preventDefault()
    this.props.setUser(null)
    API.clearToken()
  }

  deletePost = postID => {
    API.delete_post(postID)
      .then(post =>
        this.setState({
          ...this.state,
          posts: this.state.posts.filter(p => p.id !== post.id)
        })
      )
      .catch(error => {
        console.log(error)
        alert(error)
      })
  }

  handleDeletePost = postID => {
    API.delete_post(postID)
      .then(post =>
        this.setState({
          ...this.state,
          crnt_user_posts: this.state.crnt_user_posts.filter(
            p => p.id !== post.id
          )
        })
      )
      .catch(error => {
        console.log(error)
        alert(error)
      })
  }

  render() {
    const { posts, users, crnt_user_posts } = this.state
    const { user, handleUpdateUser, handleMessageStatus } = this.props

    return (
      <div id="LoggedInUser">
        <Router>
          <Navbar LogOut={this.handleLogout} user={user} />
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route exact path={"/about"}>
            <Manifesto />
          </Route>
          <Route exact path={"/home"}>
            <Home
              // user={user}
              deletePost={this.deletePost}
              users={users}
              posts={posts}
            />
          </Route>
          <Route exact path={"/posts"}>
            <Posts
              user={user}
              crnt_user_posts={crnt_user_posts}
              handleNewPost={this.handleNewPost}
              handleDeletePost={this.handleDeletePost}
            />
          </Route>
          <Route
            path="/profile/:userID"
            render={routerProps => (
              <Profile
                {...routerProps}
                current_user={user}
                handleUpdateUser={handleUpdateUser}
              />
            )}></Route>
          <Route exact path={"/inbox"}>
            <Inbox user={user} handleMessageStatus={handleMessageStatus} />
          </Route>
        </Router>
      </div>
    )
  }
}

// declare your def props here
// AppLoggedIn.defaultProps = {}

export default LoggedInUser
