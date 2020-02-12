const COLLAB_ENDPOINT = "http://localhost:3000"

const LOG_IN = `${COLLAB_ENDPOINT}/login`

const SIGN_UP = `${COLLAB_ENDPOINT}/signup`

const VALIDATE = `${COLLAB_ENDPOINT}/validate`

const NEWPOST = `${COLLAB_ENDPOINT}/posts`
const ALL_POSTS = `${COLLAB_ENDPOINT}/posts`
const UPDATE_POST = `${COLLAB_ENDPOINT}/posts`
// const MY_POSTS = `${COLLAB_ENDPOINT}/:id/posts`

const ALL_USERS = `${COLLAB_ENDPOINT}/users`
const ONE_USER = `${COLLAB_ENDPOINT}/users`

const NEW_MESSAGE = `${COLLAB_ENDPOINT}/messages`

const DELETE_POST = `${COLLAB_ENDPOINT}/posts`

const VOICE_TYPE = `${COLLAB_ENDPOINT}/vocals`

const INSTRUMENT = `${COLLAB_ENDPOINT}/instrumentals`

const LOCATION = `${COLLAB_ENDPOINT}/locations`

// const to_json = resp => {
const to_json = async res => {
  if (res.ok) {
    return res.json()
  } else {
    const errorBody = await res.json()
    throw errorBody.error
  }
}

// if (resp.ok) {
//   return resp.json()
// } else {
//   throw resp.json()
// }
// }

const signup = user => {
  return fetch(SIGN_UP, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      user
    })
  })
    .then(to_json)
    .then(user => {
      if (user.token) {
        localStorage.token = user.token
      }
      return user
    })
}

const login = user => {
  // console.log(user)
  return fetch(LOG_IN, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      user
    })
  })
    .then(to_json)
    .then(user => {
      if (user.token) {
        localStorage.token = user.token
      }
      return user
    })
}

const validate = () => {
  return fetch(VALIDATE, {
    method: "POST",
    headers: {
      Authorization: localStorage.token
    }
  })
    .then(to_json)
    .then(user => {
      if (user.token) {
        localStorage.token = user.token
        return user
      }
      return null
    })
}

const hasToken = () => !!localStorage.token

const newpost = post => {
  return fetch(NEWPOST, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify({
      post
    })
  }).then(to_json)
}

const update_post = (postID, newPostData) => {
  return fetch(`${UPDATE_POST}/${postID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify(newPostData)
  }).then(to_json)
}
const all_users = () => {
  return fetch(ALL_USERS, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    }
  }).then(to_json)
}

const one_user = userID => {
  return fetch(`${ONE_USER}/${userID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    }
  }).then(to_json)
}

const my_posts = userID => {
  return fetch(`${ONE_USER}/${userID}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    }
  }).then(to_json)
}

const received_messages = userID => {
  return fetch(`${ONE_USER}/${userID}/received_messages`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    }
  }).then(to_json)
}

const all_posts = () => {
  return fetch(ALL_POSTS, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    }
  }).then(to_json)
}

const new_message = message => {
  return fetch(NEW_MESSAGE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify({
      message
    })
  }).then(to_json)
}

const user_update = (userID, newInfo) => {
  return fetch(`${ONE_USER}/${userID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify(newInfo)
  }).then(to_json)
}

const delete_post = postID => {
  return fetch(`${DELETE_POST}/${postID}`, {
    method: "DELETE",
    headers: {
      Authorization: localStorage.token
    }
  }).then(to_json)
}

const voice_type = voice => {
  return fetch(VOICE_TYPE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify({
      voice
    })
  }).then(to_json)
}

const instrument = instrument => {
  return fetch(INSTRUMENT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify({
      instrument
    })
  }).then(to_json)
}

const new_location = location => {
  return fetch(LOCATION, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify({
      location
    })
  }).then(to_json)
}

const update_message = msg => {
  return fetch(`${NEW_MESSAGE}/${msg.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.token
    },
    body: JSON.stringify(msg)
  }).then(to_json)
}

const clearToken = () => localStorage.removeItem("token")

export default {
  login,
  signup,
  validate,
  all_users,
  one_user,
  all_posts,
  user_update,
  newpost,
  update_post,
  my_posts,
  delete_post,
  new_message,
  update_message,
  received_messages,
  clearToken,
  hasToken,
  instrument,
  voice_type,
  new_location
}
