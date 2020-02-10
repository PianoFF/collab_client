import React, { Component } from "react"
import PostCard from "../components/PostCard"
import NewPostForm from "../components/NewPostForm"

class Posts extends Component {
  state = {
    toShowNewPostBox: false
  }

  toggleNewPostBox = () => {
    this.setState({
      toShowNewPostBox: !this.state.toShowNewPostBox
    })
  }

  render() {
    const {
      user,
      crnt_user_posts,
      handleNewPost,
      handleDeletePost
    } = this.props
    const { toShowNewPostBox } = this.state

    return (
      <div className="flex-container">
        <div>
          {crnt_user_posts.map(post => (
            <PostCard
              key={post.id}
              post={post}
              user={user}
              deletePost={handleDeletePost}
            />
          ))}
          <div className="right-btm-cnr">
            <button onClick={this.toggleNewPostBox}>
              {toShowNewPostBox ? "Cancel" : "New Post"}
            </button>
          </div>

          <div className="new-msg">
            {toShowNewPostBox && <NewPostForm handleNewPost={handleNewPost} />}
          </div>
        </div>
      </div>
    )
  }
}

export default Posts
