import React from "react"
import PostCard from "./PostCard"

const PostsList = ({ posts, sendMessage }) => {
  return posts.map(post => (
    <PostCard key={post.id} post={post} sendMessage={sendMessage} />
  ))
}

export default PostsList
