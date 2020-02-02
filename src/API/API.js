const COLLAB_ENDPOINT = "http://localhost:3000"

const LOG_IN = `${COLLAB_ENDPOINT}/login`

const SIGN_UP = `${COLLAB_ENDPOINT}/signup`

const VALIDATE = `${COLLAB_ENDPOINT}/validate`

const NEWPOST = `${COLLAB_ENDPOINT}/posts`

const to_json = resp => resp.json()

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

export default { login, validate, newpost }
