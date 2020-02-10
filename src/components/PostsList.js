import React from "react"
import PostCard from "./PostCard"

const PostsList = ({ posts, showMessageBox, user, deletePost }) => {
  return posts.map(post => (
    <PostCard
      key={post.id}
      post={post}
      showMessageBox={showMessageBox}
      user={user}
      deletePost={deletePost}
    />
  ))
}

export default PostsList
