import React from "react"
import MessageCard from "../components/MesageCard"

const Inbox = ({ user, handleMessageStatus }) => {
  return (
    <div className="inbox-container">
      <div>
        {user.received_messages.map(
          msg =>
            msg.receiver_delete === false && (
              <MessageCard
                msg={msg}
                handleMessageStatus={handleMessageStatus}
              />
            )
        )}
      </div>
    </div>
  )
}

export default Inbox
