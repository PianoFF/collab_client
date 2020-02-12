import React from "react"
import PostCard from "./PostCard"

const PostsList = ({ posts, user }) => {
  return posts.map(post => <PostCard key={post.id} post={post} user={user} />)
}

export default PostsList
