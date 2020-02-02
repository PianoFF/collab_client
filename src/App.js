import React, { Component } from "react"
import "./App.css"
import FrontPage from "./containers/FrontPage"
import NewPostForm from "./components/NewPostForm"
import API from "./API/API"

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
    API.validate().then(user => {
      this.setUser(user)
    })
  }

  render() {
    const { user } = this.state

    return (
      <div id="app">
        <FrontPage user={user} setUser={this.setUser} />
        {user && <NewPostForm />}
      </div>
    )
  }
}

export default App
