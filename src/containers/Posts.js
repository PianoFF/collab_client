import React, { Component } from "react"
import MyPostCard from "../components/MyPostCard"

class Posts extends Component {
  render() {
    const { user, crnt_user_posts, deletePost } = this.props

    return (
      <div className="flex-container post-container">
        <div>
          {crnt_user_posts.map(post => (
            <MyPostCard
              key={post.id}
              post={post}
              user={user}
              deletePost={deletePost}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Posts
