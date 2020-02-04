import React, { Component } from "react"
import API from "../API/API"
import PostCard from "../components/PostCard"
import NewPostForm from "../components/NewPostForm"

class Posts extends Component {
  state = {
    user_posts: [],
    toShowNewPostBox: false
  }

  componentDidMount() {
    API.all_posts()
      .then(postsData => {
        const current_user_posts = postsData.filter(
          post => post.user.id === this.props.user.id
        )
        this.setState({ user_posts: current_user_posts })
      })
      .catch(errorPromise => {
        errorPromise.then(data => alert(data.errors))
      })
  }

  handleDeletePost = postID => {
    API.delete_post(postID)
      .then(post =>
        this.setState({
          ...this.state,
          user_posts: this.state.user_posts.filter(p => p.id !== post.id)
        })
      )
      .catch(errorPromise => {
        errorPromise.then(data => alert(data.errors))
      })
  }

  toggleNewPostBox = () => {
    this.setState({
      toShowNewPostBox: !this.state.toShowNewPostBox
    })
  }

  handleNewPost = newPost => {
    API.newpost(newPost)
      .then(newPost =>
        this.setState({
          ...this.defaultState,
          user_posts: [...this.state.user_posts, newPost]
        })
      )
      .catch(errorPromise => {
        errorPromise.then(data => alert(data.errors))
      })
  }

  render() {
    const { user } = this.props
    const { user_posts, toShowNewPostBox } = this.state

    return (
      <div className="flex-container">
        <div>
          {user_posts.map(post => (
            <PostCard
              post={post}
              user={user}
              deletePost={this.handleDeletePost}
            />
          ))}
          <div className="right-btm-cnr">
            <button onClick={this.toggleNewPostBox}>
              {toShowNewPostBox ? "Cancel" : "New Post"}
            </button>
          </div>

          <div className="new-msg">
            {toShowNewPostBox && (
              <NewPostForm handleNewPost={this.handleNewPost} />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Posts
