import React from "react"

const UsersList = ({ users }) => {
  return users.map(user => <p> user_first_name: {user.first_name}</p>)
}

export default UsersList
