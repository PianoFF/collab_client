import React, { Component } from "react"
import API from "../API/API"
import PostCard from "../components/PostCard"

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
    const { posts } = this.state
    const { user } = this.props

    return (
      <div className="flex-container">
        <div>
          {posts.map(post => (
            <PostCard post={post} user={user} />
          ))}
          <div className="right-btm-cnr">
            <button>New Post</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Posts
