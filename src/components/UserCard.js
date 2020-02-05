import React from "react"
import { Link } from "react-router-dom"
import "./UserCard.css"

const UserCard = ({ user }) => {
  const full_name = user.first_name + " " + user.last_name

  return (
    <div className="card">
      <div className="title">
        <div>
          <h1>{full_name}</h1>
          <p>
            <span> is a/an </span>
            {user.field.voice_type} <br />
          </p>
        </div>
      </div>

      <div className="content">
        <div className="post-body">
          <span>Something about {user.first_name}: </span>
          <p> {user.bio_content} </p>
        </div>

        <div className="a-link">
          <Link to={`/profile/${user.id}`}>View Profile</Link>
        </div>
      </div>
    </div>
  )
}

export default UserCard
