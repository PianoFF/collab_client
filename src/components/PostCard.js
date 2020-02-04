import React from "react"
import NewMessage from "./NewMessage"

const PostCard = ({
  post,
  showMessageBox,
  toggleMessageBox,
  user,
  deletePost
}) => {
  const handleDeletePost = e => {
    e.preventDefault()
    alert("You are about to delete this post")
    deletePost(post.id)
  }

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
          {post.user.id !== user.id && (
            <button id="message" onClick={() => toggleMessageBox(post.id)}>
              {showMessageBox === post.id ? "Cancel" : "Message"}
            </button>
          )}
          {post.user.id === user.id && (
            <button onClick={handleDeletePost}> Delete</button>
          )}
        </div>
        <div id="message-box">
          {showMessageBox === post.id && <NewMessage recipient={post.user} />}
        </div>
      </div>
    </div>
  )
}

export default PostCard
