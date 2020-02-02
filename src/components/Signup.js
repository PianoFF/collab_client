import React from "react"

export const Signup = () => {
  return (
    <div className="signup-form">
      <div className="tab-content">
        <div id="signup">
          <h1 style={{ color: "#89D1D9" }}>Sign Up for Free</h1>

          <form action="/" method="post">
            <div className="field-wrap">
              <label>
                First Name<span className="req">*</span>
              </label>
              <input type="text" required autoComplete="off" />
            </div>

            <div className="field-wrap">
              <label>
                Last Name<span className="req">*</span>
              </label>
              <input type="text" required autoComplete="off" />
            </div>

            <div className="field-wrap">
              <label>
                Email Address<span className="req">*</span>
              </label>
              <input type="email" required autoComplete="off" />
            </div>

            <div className="field-wrap">
              <label>
                You are a/an: <span className="req">*</span>
              </label>
              <select name="field">
                <option value="vocalist"> Vocalist</option>
                <option value="instrumentalist"> Instrumentalist</option>
              </select>
            </div>

            <div className="field-wrap">
              <label>
                Set Password<span className="req">*</span>
              </label>
              <input type="password" required autoComplete="off" />
            </div>

            <div className="field-wrap">
              <label>
                Confirm Password<span className="req">*</span>
              </label>
              <input type="password" required autoComplete="off" />
            </div>

            <button type="submit" className="button button-block">
              Get Started{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
