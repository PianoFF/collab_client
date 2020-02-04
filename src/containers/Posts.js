import React, { Component } from "react"
import API from "../API/API"

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    API.all_posts()
      .then(postsData => {
        const current_user_posts = postsData.filter(
          post => post.user.id === this.props.user.id
        )
        this.setState({ posts: current_user_posts })
      })
      .catch(errorPromise => {
        errorPromise.then(data => alert(data.errors))
      })
  }

  render() {
    return <div>{this.state.posts.map(post => post.title)}</div>
  }
}

export default Posts
