import React, { Component } from "react"
import MyPostCard from "../components/MyPostCard"
import Button from "@material-ui/core/Button"
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
      deletePost,
      updatePost,
      handleNewPost
    } = this.props

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "60%"
      }
    }
    return (
      <div className="flex-container post-container">
        <div>
          {crnt_user_posts.length === 0 && (
            <>
              <h2 style={{ color: "white" }}>
                {" "}
                Perhaps you'd like to create a{" "}
                <Button
                  size="small"
                  color="secondary"
                  variant="contained"
                  style={{
                    color: "white",
                    fontSize: "large",
                    position: "fixed",
                    marginLeft: "1em"
                  }}
                  onClick={this.handleModal}>
                  New Post
                </Button>{" "}
              </h2>
              <Modal
                isOpen={this.state.modalIsOpen}
                style={customStyles}
                ariaHideApp={false}>
                <NewPostForm
                  handleModal={this.handleModal}
                  handleNewPost={handleNewPost}
                />
              </Modal>
            </>
          )}
          {crnt_user_posts.map(post => (
            <MyPostCard
              key={post.id}
              post={post}
              user={user}
              deletePost={deletePost}
              updatePost={updatePost}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Posts
