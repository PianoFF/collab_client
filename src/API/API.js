const COLLAB_ENDPOINT = "http://localhost:3000"

const LOG_IN = `${COLLAB_ENDPOINT}/login`

const SIGN_UP = `${COLLAB_ENDPOINT}/signup`

const VALIDATE = `${COLLAB_ENDPOINT}/validate`

const NEWPOST = `${COLLAB_ENDPOINT}/posts`
const ALL_POSTS = `${COLLAB_ENDPOINT}/posts`

const ALL_USERS = `${COLLAB_ENDPOINT}/users`
const ONE_USER = `${COLLAB_ENDPOINT}/users`

const NEW_MESSAGE = `${COLLAB_ENDPOINT}/messages`

const DELETE_POST = `${COLLAB_ENDPOINT}/posts`

const VOICE_TYPE = `${COLLAB_ENDPOINT}/vocals`

const INSTRUMENT = `${COLLAB_ENDPOINT}/instrumentals`

const to_json = resp => {
  if (resp.ok) {
    return resp.json()
  } else {
    throw resp.json()
  }
}

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

const clearToken = () => localStorage.removeItem("token")

export default {
  login,
  signup,
  validate,
  all_users,
  one_user,
  all_posts,
  newpost,
  delete_post,
  new_message,
  clearToken,
  hasToken,
  instrument,
  voice_type
}
