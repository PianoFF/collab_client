import React, { Component } from "react"
import { Manifesto } from "../components/Manifesto"

import "./FrontPage.css"
class FrontPage extends Component {
  render() {
    return (
      <div className="flex-container">
        <div>
          <Manifesto />
        </div>
        <div> 2 </div>
      </div>
    )
  }
}

export default FrontPage
