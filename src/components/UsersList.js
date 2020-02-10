import React from "react"
import UserCard from "./UserCard"

const UsersList = ({ users, current_user }) => {
  return users.map(user => (
    <UserCard key={user.id} user={user} current_user={current_user} />
  ))
}

export default UsersList
