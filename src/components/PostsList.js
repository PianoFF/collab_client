import React from "react"
import PostCard from "./PostCard"

const PostsList = ({ posts, showMessageBox, toggleMessageBox, user }) => {
  return posts.map(post => (
    <PostCard
      key={post.id}
      post={post}
      toggleMessageBox={toggleMessageBox}
      showMessageBox={showMessageBox}
      user={user}
    />
  ))
}

export default PostsList
