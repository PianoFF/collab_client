import React from "react"
import PostCard from "./PostCard"
import NewMessage from "./NewMessage"

const PostsList = ({ posts, sendMessage, toMessage }) => {
  return posts.map(post => (
    <>
      <PostCard key={post.id} post={post} sendMessage={sendMessage} />
      {toMessage && <NewMessage />}
    </>
  ))
}

export default PostsList
