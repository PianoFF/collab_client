import React, { Component } from "react"
import { Route } from "react-router-dom"

class Home extends Component {
  state = {}

  render() {
    const { user, match } = this.props
    return (
      <div className="home">
        <h1> This is Home page</h1>
        <Route
          exact
          path={`${match.url}/:userID`}
          render={routerProps => <UserHome {...routerProps} user={user} />}
        />
      </div>
    )
  }
}

export default Home
