import React, { Component } from "react"
import "semantic-ui-css/semantic.min.css"

class UserInfoEditForm extends Component {

  render() {
    const { user } = this.props
    return (
      <>
        <div className="ui form">
          <div className="fields">
            <div className="field">
              <label>First name</label>
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                value={user.first_name}
              />
            </div>
            <div class="field">
              <label>Last name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                valuse={user.last_name}
              />
            </div>
            <div className="field">
              <label> Field</label>
              <input
                value={user.field}
                readOnly />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default UserInfoEditForm
