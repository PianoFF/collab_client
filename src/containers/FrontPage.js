import React, { Component } from "react"
import SignupLogin from "./SignupLogin"

import "./FrontPage.css"
class FrontPage extends Component {
  render() {
    const { setUser } = this.props

    return (
      <div className="flex-container">
        <div className="singuplogin">
          <SignupLogin setUser={setUser} />
        </div>
      </div>
    )
  }
}

export default FrontPage
