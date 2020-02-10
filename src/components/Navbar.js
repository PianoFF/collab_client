import React, { Component } from "react"
import { NavLink, Link } from "react-router-dom"
import "./Navbar.css"

class Navbar extends Component {
  render() {
    const { LogOut, user } = this.props

    return (
      <header className="nav">
        <img src="collab-logo.png" className="collab-logo"></img>
        <NavLink to="/home">Home</NavLink>
        <NavLink to={`/profile/${user.id}`}>{user.first_name}</NavLink>
        <NavLink to="/posts">Your Posts</NavLink>
        <NavLink to="/inbox">Inbox</NavLink>
        <Link onClick={LogOut}>Log Out</Link>
      </header>
    )
  }
}

export default Navbar
