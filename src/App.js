import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import "./components/Button.css"
import "./containers/FlexContainer.css"

import FrontPage from "./containers/FrontPage"
import API from "./API/API"
import Navbar from "./components/Navbar"
import Home from "./containers/Home"
import Posts from "./containers/Posts"

// import { ThemeProvider } from "styled-components"

class App extends Component {
  state = {
    user: null,
    validatedUser: false,
    posts: [],
    users: [],
    crnt_user_posts: []
  }

  setUser = user => {
    this.setState({
      user: user,
      validatedUser: !!user
    })
  }

  forceUpdateHandler() {
    this.forceUpdate()
  }

  componentDidMount() {
    if (API.hasToken()) {
      API.validate().then(user => {
        this.setUser(user)
      })
    }

    API.all_users()
      .then(userData => this.setState({ users: userData }))
      .catch(errorPromise => {
        errorPromise.then(data => alert(data.errors))
      })

    API.all_posts()
      .then(postsData => {
        this.setState({
          posts: postsData,
          crnt_user_posts: postsData.filter(
            post => post.user.id === this.state.user.id
          )
        })
      })
      .catch(errorPromise => {
        errorPromise.then(data => alert(data.errors))
      })
  }

  handleNewPost = newPost => {
    API.newpost(newPost)
      .then(post =>
        this.setState({
          crnt_user_posts: [...this.state.crnt_user_posts, post]
        })
      )
      .catch(errorPromise => {
        errorPromise.then(data => alert(data.errors))
      })
  }

  handleLogout = e => {
    e.preventDefault()
    this.setUser(null)
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
      .catch(errorPromise => {
        errorPromise.then(data => alert(data.errors))
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
      .catch(errorPromise => {
        errorPromise.then(data => alert(data.errors))
      })
  }

  componentDidUpdate(prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.crnt_user_posts !== prevState.crnt_user_posts) {
      API.all_posts()
        .then(postsData => {
          this.setState({
            posts: postsData,
            crnt_user_posts: postsData.filter(
              post => post.user.id === this.state.user.id
            )
          })
        })
        .catch(errorPromise => {
          errorPromise.then(data => alert(data.errors))
        })
    }
  }

  render() {
    const { user, posts, users, crnt_user_posts } = this.state

    return (
      <div id="app">
        {!user && <FrontPage user={user} setUser={this.setUser} />}
        {user && (
          <Router onChange={this.forceUpdateHandler}>
            <Navbar LogOut={this.handleLogout} />
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
          </Router>
        )}
      </div>
    )
  }
}

export default App
