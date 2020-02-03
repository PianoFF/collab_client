import React from "react"
import "./PostCard.css"
import NewMessage from "./NewMessage"

const PostCard = ({ post, showMessageBox, toggleMessageBox }) => {
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

        <div className="right-btm-cnr">
          <button id="message" onClick={() => toggleMessageBox(post.id)}>
            {showMessageBox === post.id ? "Cancel" : "Message"}
          </button>
        </div>
        <div id="message-box">
          {showMessageBox === post.id && <NewMessage />}
        </div>
      </div>
    </div>
  )
}

export default PostCard
