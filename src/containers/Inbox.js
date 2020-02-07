import React, { useState, useEffect } from "react"
import MessageCard from "../components/MesageCard"

const Inbox = ({ user }) => {
  return (
    <div className="inbox-container">
      <div>
        {user.received_messages.map(msg => (
          <MessageCard msg={msg} />
        ))}
      </div>
    </div>
  )
}

export default Inbox
