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
    users: []
  }

  setUser = user => {
    this.setState({
      user: user,
      validatedUser: !!user
    })
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
      .then(postsData => this.setState({ posts: postsData }))
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

  render() {
    const { user, posts, users } = this.state

    return (
      <div id="app">
        {!user && <FrontPage user={user} setUser={this.setUser} />}
        {user && (
          <Router>
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
              <Posts user={user} deletePost={this.deletePost} />
            </Route>
          </Router>
        )}
      </div>
    )
  }
}

export default App
