import React from "react"
import PostCard from "./PostCard"

const PostsList = ({ posts }) => {
  return posts.map(post => <PostCard key={post.id} post={post} />)
}

export default PostsList
