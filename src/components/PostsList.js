import React from "react"
import PostCard from "./PostCard"

const PostsList = ({ posts, showMessageBox, toggleMessageBox }) => {
  return posts.map(post => (
    <PostCard
      key={post.id}
      post={post}
      toggleMessageBox={toggleMessageBox}
      showMessageBox={showMessageBox}
    />
  ))
}

export default PostsList
