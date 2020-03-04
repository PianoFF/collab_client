import React, { Component } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import "./components/Button.css"
import "./containers/FlexContainer.css"

import API from "./API/API"
import Navbar from "./components/Navbar"
import Home from "./containers/Home"
import Posts from "./containers/Posts"
import Profile from "./containers/Profile"
import Inbox from "./containers/Inbox"
import Manifesto from "./components/Manifesto"

class LoggedInUser extends Component {
  state = {
    posts: [],
    crnt_user_posts: []
  }

  componentDidMount() {
    API.all_posts()
      .then(postsData => {
        this.setState({
          posts: postsData
        })
      })
      .catch(error => {
        console.log(error)
        alert(error)
      })

    API.my_posts(this.props.user.id)
      .then(postsData => {
        this.setState({
          crnt_user_posts: postsData
        })
      })
      .catch(error => {
        alert(error)
      })
  }

  handleLogout = e => {
    e.preventDefault()
    this.props.setUser(null)
    API.clearToken()
    window.location.replace("/")
  }

  handleNewPost = newPost => {
    API.newpost(newPost)
      .then(post => {
        this.setState({
          crnt_user_posts: [post, ...this.state.crnt_user_posts],
          posts: [post, ...this.state.posts]
        })
        alert("Thank you for your post")
      })
      .catch(error => {
        console.log(error)
        alert(error)
      })
  }

  updatePost = (postID, newInfo) => {
    API.update_post(postID, newInfo).then(post => {
      this.setState({
        crnt_user_posts: this.state.crnt_user_posts.map(p => {
          return p.id === post.id ? post : p
        }),
        posts: this.state.posts.map(p => {
          return p.id === post.id ? post : p
        })
      })
    })
  }

  deletePost = postID => {
    API.delete_post(postID)
      .then(post => {
        this.setState({
          ...this.state,
          posts: this.state.posts.filter(p => p.id !== post.id),
          crnt_user_posts: this.state.crnt_user_posts.filter(
            p => p.id !== post.id
          )
        })
        alert("This post has been deleted")
      })
      .catch(error => {
        console.log(error)
        alert(error)
      })
  }

  render() {
    const { posts, users, crnt_user_posts } = this.state
    const { user, handleUpdateUser } = this.props

    return (
      <div id="LoggedInUser">
        <Router>
          <Navbar LogOut={this.handleLogout} user={user} />
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route exact path={"/about"}>
            <Manifesto />
          </Route>
          <Route exact path={"/home"}>
            <Home
              // user={user}
              deletePost={this.deletePost}
              handleNewPost={this.handleNewPost}
              users={users}
              posts={posts}
            />
          </Route>
          <Route exact path={"/posts"}>
            <Posts
              user={user}
              crnt_user_posts={crnt_user_posts}
              updatePost={this.updatePost}
              handleNewPost={this.handleNewPost}
              deletePost={this.deletePost}
            />
          </Route>
          <Route
            path="/profile/:userID"
            render={routerProps => (
              <Profile
                {...routerProps}
                current_user={user}
                handleUpdateUser={handleUpdateUser}
              />
            )}></Route>
          <Route exact path={"/inbox"}>
            <Inbox user={user} />
          </Route>
        </Router>
      </div>
    )
  }
}

// declare def props here
// AppLoggedIn.defaultProps = {}

export default LoggedInUser
