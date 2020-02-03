import React from "react"

const PostsList = ({ posts }) => {
  return posts.map(post => <p> post_title: {post.title}</p>)
}

export default PostsList
