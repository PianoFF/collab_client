import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./components/Button.css"
import "./containers/FlexContainer.css"

import API from "./API/API"
import Navbar from "./components/Navbar"
import Home from "./containers/Home"
import Posts from "./containers/Posts"
import Profile from "./containers/Profile"

class AppLoggedIn extends Component {
  state = {
    posts: [],
    users: [],
    crnt_user_posts: []
  }

  componentDidMount() {
    API.all_users()
      .then(userData => this.setState({ users: userData }))
      .catch(errorPromise => alert(errorPromise.errors))

    API.all_posts()
      .then(postsData => {
        this.setState({
          posts: postsData,
          crnt_user_posts: postsData.filter(
            post => post.user.id === this.props.user.id
          )
        })
      })
      .catch(errorPromise => alert(errorPromise.errors))
  }

  handleNewPost = newPost => {
    API.newpost(newPost)
      .then(post =>
        this.setState({
          crnt_user_posts: [...this.state.crnt_user_posts, post],
          posts: [...this.state.posts, post]
        })
      )
      .catch(errorPromise => alert(errorPromise.errors))
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
      .catch(errorPromise => alert(errorPromise.errors))
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
      .catch(errorPromise => alert(errorPromise.errors))
  }

  render() {
    const { posts, users, crnt_user_posts } = this.state
    const { user } = this.props

    return (
      <div id="AppLoggedIn">
        <Router>
          <Navbar LogOut={this.handleLogout} user={user} />
          <Route exact path={"/home"}>
            <Home
              user={user}
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
            render={routerProps => <Profile {...routerProps} />}></Route>
        </Router>
      </div>
    )
  }
}

export default AppLoggedIn
