import React, { Component } from "react"
import { NavLink, Link } from "react-router-dom"
import "./Navbar.css"

class Navbar extends Component {
  render() {
    const { LogOut, user } = this.props

    return (
      <header className="nav dropdown">
        <div>
          <img src="/collab-logo.png" className="collab-logo dropbtn"></img>
        </div>
        <div className="dropdown-content">
          <NavLink to="/home">Home</NavLink>
          <NavLink to={`/profile/${user.id}`}>{user.first_name}</NavLink>
          <NavLink to="/posts">My Posts</NavLink>
          <NavLink to="/inbox">Inbox</NavLink>
          <NavLink to="/about"> About </NavLink>
          <Link onClick={LogOut}>Log Out</Link>
        </div>
      </header>
    )
  }
}

export default Navbar
