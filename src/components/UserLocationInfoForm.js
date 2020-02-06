import React, { Component } from "react"
import USStates from "./USStates"
import CountryList from "./CountryList"

class UserLocationInfoForm extends Component {
  state = {
    street: this.props.location.street,
    city_town: this.props.location.city_town,
    state_province: this.props.location.state_province,
    country: this.props.location.country,
    post_code: this.props.location.post_code
  }

  handleUserLocationFormChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  updateUserLocation = e => {
    e.preventDefault()

    const infoForPatch = {
      user: {
        location: [this.state]
      }
    }
    this.props.handleUpdateUser(infoForPatch)
  }

  render() {
    const { street, city_town, state_province, country, post_code } = this.state
    const { user, current_user } = this.props
    return (
      <div className="location-container">
        <form
          className="user-location-form"
          onChange={this.handleUserLocationFormChange}
          onSubmit={this.updateUserLocation}>
          <div className="action_page.php">
            <div className="row">
              <div className="col-25">
                <label>Street: </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  placeholder="Street Info"
                  name="street"
                  value={street}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>City</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  placeholder="City / Town"
                  name="city_town"
                  value={city_town}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label> State </label>
              </div>
              <div className="col-75">
                <select
                  placeholder="State / Province"
                  name="state_province"
                  value={state_province}>
                  <option> Select A State</option>
                  <option> Not on the list</option>
                  {USStates.map(state => (
                    <option>{state}</option>
                  ))}
                </select>
                {state_province === "Not on the list" && (
                  <div className="col-75">
                    <input
                      type="text"
                      name="state_province"
                      placeholder="Type your provice here"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label>Country</label>
              </div>
              <div className="col-75">
                <select
                  type="text"
                  value={country}
                  name="country"
                  placeholder="Country">
                  {CountryList.map(country => (
                    <option> {country}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label> Post Code </label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  value={post_code}
                  name="post_code"
                  placeholder="Post Code"
                />
              </div>
            </div>

            {current_user.id === user.id && (
              <button type="submit"> Update </button>
            )}
          </div>
        </form>
      </div>
    )
  }
}

export default UserLocationInfoForm
