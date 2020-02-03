import React, { Component } from "react"
import { Manifesto } from "../components/Manifesto"
import SignupLogin from "./SignupLogin"

import "./FrontPage.css"
class FrontPage extends Component {
  render() {
    const { setUser } = this.props

    return (
      <div className="flex-container">
        <div>
          <Manifesto />
        </div>
        <div>
          <SignupLogin setUser={setUser} />
        </div>
      </div>
    )
  }
}

export default FrontPage
