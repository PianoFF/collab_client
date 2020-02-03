import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.css"

import FrontPage from "./containers/FrontPage"
import NewPostForm from "./components/NewPostForm"
import API from "./API/API"
import Navbar from "./components/Navbar"
import Home from "./containers/Home"

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

  handleLogout = e => {
    e.preventDefault()
    this.setUser(null)
    API.clearToken()
  }

  render() {
    const { user } = this.state

    return (
      <div id="app">
        {!user && (
          <FrontPage
            user={user}
            setUser={this.setUser}
            // logOut={this.handleLogout}
          />
        )}
        {user && (
          <Router>
            <Navbar />
            <Route exact path={"/home"}>
              <Home user={user} />
            </Route>
          </Router>
        )}

        {/* {user && <NewPostForm />} */}
      </div>
    )
  }
}

export default App
