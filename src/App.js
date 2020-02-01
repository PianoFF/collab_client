import React, { Component } from "react"
import "./App.css"
import FrontPage from "./containers/FrontPage"

// import { ThemeProvider } from "styled-components"

class App extends Component {
  render() {
    return (
      <div id="app">
        <FrontPage />
      </div>
    )
  }
}

export default App
