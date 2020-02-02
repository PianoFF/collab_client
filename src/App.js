import React, { Component } from "react"
import "./App.css"
import FrontPage from "./containers/FrontPage"
import "semantic-ui-css/semantic.min.css"

// import { ThemeProvider } from "styled-components"

class App extends Component {
  state = {
    user: null
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    const { user } = this.state

    return (
      <div id="app">
        <FrontPage user={user} setUser={this.setUser} />
      </div>
    )
  }
}

export default App
