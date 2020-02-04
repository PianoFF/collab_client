import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import "./components/Button.css"
import "./containers/FlexContainer.css"

import FrontPage from "./containers/FrontPage"
import API from "./API/API"
import AppLoggedIn from "./AppLoggedIn"

// import { ThemeProvider } from "styled-components"

class App extends Component {
  state = {
    user: null,
    validatedUser: false
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
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // Typical usage (don't forget to compare props):
  //   if (this.state.crnt_user_posts !== prevState.crnt_user_posts) {
  //     API.all_posts()
  //       .then(postsData => {
  //         debugger
  //         this.setState({
  //           crnt_user_posts: postsData.filter(
  //             post => post.user.id === this.state.user.id
  //           )
  //         })
  //       })
  //       .catch(errorPromise => {
  //         errorPromise.then(data => alert(data.errors))
  //       })
  //   }
  // }

  render() {
    const { user } = this.state

    return (
      <div id="app">
        {!user && <FrontPage user={user} setUser={this.setUser} />}
        {user && <AppLoggedIn user={user} setUser={this.setUser} />}
      </div>
    )
  }
}

export default App
