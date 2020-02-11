import React, { Component } from "react"
import PostCard from "../components/PostCard"
import NewPostForm from "../components/NewPostForm"
import Modal from "react-modal"

class Posts extends Component {
  state = {
    modalIsOpen: false
  }

  handleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
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

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
      }
    }

    return (
      <div className="flex-container post-container">
        <div>
          <div className="right-btm-cnr">
            <button onClick={this.handleModal}>New Post</button>
          </div>

          {crnt_user_posts.map(post => (
            <PostCard
              key={post.id}
              post={post}
              user={user}
              deletePost={handleDeletePost}
            />
          ))}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          style={customStyles}
          ariaHideApp={false}>
          <NewPostForm
            handleNewPost={handleNewPost}
            handleModal={this.handleModal}
          />
        </Modal>
      </div>
    )
  }
}

export default Posts
