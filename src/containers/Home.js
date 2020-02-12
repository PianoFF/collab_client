import React, { Component } from "react"
import Modal from "react-modal"
import PostsList from "../components/PostsList"

import Button from "@material-ui/core/Button"
import NewPostForm from "../components/NewPostForm"

class Home extends Component {
  state = {
    modalIsOpen: false
  }

  handelModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    })
  }

  render() {
    const { user, posts, handelNewPost } = this.props

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
      <div className="flex-container">
        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={this.handelModal}>
          New Post
        </Button>
        <div id="posts">
          <PostsList posts={posts} user={user} />
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          style={customStyles}
          ariaHideApp={false}>
          <NewPostForm
            handelModal={this.handelModal}
            handelNewPost={handelNewPost}
          />
        </Modal>
      </div>
    )
  }
}

export default Home
