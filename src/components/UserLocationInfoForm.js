import React, { Component } from "react"
import USStates from "./USStates"
import CountryList from "./CountryList"
import Button from "@material-ui/core/Button"

class UserLocationInfoForm extends Component {
  conditionalState = () => {
    if (this.props.location) {
      return {
        street: this.props.location.street,
        city_town: this.props.location.city_town,
        state_province: this.props.location.state_province,
        user_state_province_input: this.props.location.state_province,
        country: this.props.location.country,
        post_code: this.props.location.post_code
      }
    } else {
      return {
        street: "",
        city_town: "",
        state_province: "",
        user_state_province_input: "",
        country: "",
        post_code: ""
      }
    }
  }

  state = this.conditionalState()

  componentDidUpdate = prevProps => {
    if (this.props.user !== prevProps.user) {
      // console.log(this.props)
      this.setState(this.conditionalState())
    }
  }
  handleUserLocationFormChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  updateUserLocation = e => {
    e.preventDefault()
    const newLocationInfo = Object.fromEntries(
      Object.entries(this.state).filter(([key]) =>
        ["street", "city_town", "country", "post_code"].includes(key)
      )
    )

    const infoForPatch = {
      user: {
        location: {
          ...newLocationInfo,
          state_province:
            this.state.state_province === "Not on the list"
              ? this.state.user_state_province_input
              : this.state.state_province
        }
      }
    }

    // console.log(infoForPatch)
    this.props.handleUpdateUser(infoForPatch)
    alert("Your information has been updated.")
  }

  render() {
    const {
      street,
      city_town,
      state_province,
      country,
      post_code,
      user_state_province_input
    } = this.state
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

            {user.id === current_user.id ? (
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
            ) : (
              <div className="row">
                <div className="col-25">
                  <label>City</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    placeholder="City / Town"
                    name="city_town"
                    value={
                      city_town.length !== 0
                        ? `${city_town}, ${this.props.location.state_province}`
                        : ""
                    }
                  />
                </div>
              </div>
            )}

            {user.id === current_user.id && (
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
                  {!USStates.find(state => state === state_province) && (
                    <div className="col-75">
                      <input
                        type="text"
                        name="user_state_province_input"
                        value={user_state_province_input}
                        placeholder="Type your province here"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

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
            <Button variant="contained" color="secondary" type="submit">
              Update
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default UserLocationInfoForm
