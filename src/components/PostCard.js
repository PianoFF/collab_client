import React from "react"
import "./PostCard.css"

const PostCard = ({ post, sendMessage }) => {
  return (
    <div className="card">
      <div className="title">
        <div>
          <h1>{post.title}</h1>
          <p>
            <span>by </span>
            {post.user.first_name} <br />
            <span> posted for: </span>
            {post.post_type}
            <br />
            <span> repertoire: </span>
            {post.repertoire}
          </p>
        </div>
      </div>

      <div className="content">
        <div className="post-body">
          <p> {post.content} </p>
        </div>

        <div className="right">
          <button className="generalBtn" onClick={sendMessage}>
            Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostCard
