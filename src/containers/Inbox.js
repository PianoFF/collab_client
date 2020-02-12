import React, { useState, useEffect } from "react"
import MessageCard from "../components/MessageCard"
import API from "../API/API"

const Inbox = ({ user }) => {
  const [receivedMessages, setReceivedMessages] = useState([])

  const handleMessageStatus = msg => {
    setReceivedMessages(
      receivedMessages.map(message => (message.id === msg.id ? msg : message))
    )
  }

  useEffect(() => {
    API.received_messages(user.id)
      .then(data => setReceivedMessages(data))
      .catch(error => {
        alert(error)
      })
  }, [])

  return (
    <div className="inbox-container">
      <div>
        {receivedMessages.length === 0 && (
          <h1> We'll let you know once someone writes you.</h1>
        )}
        {receivedMessages.map(
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
