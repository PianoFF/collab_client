import React from "react"

const UserCard = ({ user, current_user }) => {
  const full_name = user.first_name + " " + user.last_name

  return (
    <div className="card">
      <div className="title">
        <div>
          <h1>{full_name}</h1>
          <p>
            <span> is a/an </span>
            {user.field} <br />
          </p>
        </div>
      </div>

      <div className="content">
        <div className="post-body">
          <span>Something about {user.first_name}: </span>
          <p> {user.bio_content} </p>
        </div>

        <div className="right-btm-cnr">
          {/* {post.user.id !== user.id && ( */}
          <button>
            View Profile
            {/* {showMessageBox === post.id ? "Cancel" : "Message"} */}
          </button>
          {/* )} */}
        </div>
      </div>
    </div>
  )
}

export default UserCard
