import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import "./Navbar.css"

class Navbar extends Component {
  render() {
    return (
      <header className="nav">
        <img src="collab-logo.png" className="collab-logo sepia"></img>
        <NavLink
          to="/home"
          activeStyle={{ background: "#BF6C5A", color: "black" }}>
          Home
        </NavLink>
        <NavLink
          to="/profile"
          activeStyle={{ background: "#BF6C5A", color: "black" }}>
          Profile
        </NavLink>
        <NavLink
          to="/posts"
          activeStyle={{ background: "#BF6C5A", color: "black" }}>
          Posts
        </NavLink>
        <NavLink
          to="/inbox"
          activeStyle={{ background: "#BF6C5A", color: "black" }}>
          Inbox
        </NavLink>
      </header>
    )
  }
}

export default Navbar
