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

  handleUpdateUser = infoForPatch => {
    API.user_update(this.state.user.id, infoForPatch).then(newData => {
      console.log(newData)
      this.setState({
        user: {
          ...this.state.user,
          ...newData
        }
      })
    })
  }

  handleMessageStatus = msgID => {
    // const message = this.state.user.received_messages.find(
    //   msg => msg.id === msgID
    // )
    this.setState({
      user: {
        ...this.state.user,
        received_messages: this.state.user.received_messages.map(msg =>
          msg.id === msgID
            ? {
                ...msg,
                read: true
              }
            : msg
        )
      }
    })
  }

  render() {
    const { user } = this.state

    return (
      <div id="app">
        {!user && <FrontPage user={user} setUser={this.setUser} />}
        {user && (
          <AppLoggedIn
            user={user}
            setUser={this.setUser}
            handleUpdateUser={this.handleUpdateUser}
            handleMessageStatus={this.handleMessageStatus}
          />
        )}
      </div>
    )
  }
}

export default App
