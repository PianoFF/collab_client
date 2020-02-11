import React, { Component } from "react"
import "./App.css"
import "./components/Button.css"
import "./containers/FlexContainer.css"

import FrontPage from "./containers/FrontPage"
import API from "./API/API"
import LoggedInUser from "./LoggedInUser"

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#5d4e5e",
      main: "#352236",
      dark: "#251725",
      contrastText: "#fff"
    },
    secondary: {
      light: "#7399bb",
      main: "#5080aa",
      dark: "#385976",
      contrastText: "#000"
    }
  }
})

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

  handleMessageStatus = msg => {
    // const message = this.state.user.received_messages.find(
    //   msg => msg.id === msgID
    // )
    this.setState({
      user: {
        ...this.state.user,
        received_messages: this.state.user.received_messages.map(message =>
          message.id === msg.id ? msg : message
        )
      }
    })
  }

  handleReceiverMessageDelete = () => {
    this.setState({
      user: {
        ...this.state.user,
        received_messages: this.state.user.received_messages.filter(
          msg => msg.receiver_delete === false
        )
      }
    })
  }

  render() {
    const { user } = this.state

    return (
      <ThemeProvider theme={theme}>
        <div id="app">
          {!user && <FrontPage user={user} setUser={this.setUser} />}
          {user && (
            <LoggedInUser
              user={user}
              setUser={this.setUser}
              handleUpdateUser={this.handleUpdateUser}
              handleMessageStatus={this.handleMessageStatus}
            />
          )}
        </div>
      </ThemeProvider>
    )
  }
}

export default App
