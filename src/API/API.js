const COLLAB_ENDPOINT = "http://localhost:3000"

const LOG_IN = `${COLLAB_ENDPOINT}/login`

const SIGN_UP = `${COLLAB_ENDPOINT}/signup`

const VALIDATE = `${COLLAB_ENDPOINT}/validate`

const to_json = resp => resp.json()

const login = user => {
  // console.log(user)
  return fetch(LOG_IN, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      user
    })
  }).then(to_json)
}

export default { login }
