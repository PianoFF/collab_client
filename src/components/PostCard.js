import React from "react"

const PostCard = ({ post }) => {
  return (
    <div className="card">
      <div className="header">
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
      </div>

      <div className="content">
        <div className="articlemeta">
          <div className="right">
            <button className="generalBtn"> Message</button>
          </div>

          <div className="post-body">
            <p> {post.content} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
