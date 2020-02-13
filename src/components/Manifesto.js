import React from "react"
import "./Manifesto.css"

const Manifesto = () => {
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <img src="/collab-logo.png" className="front"></img>
          Front
        </div>
        <div className="back">
          <strong>
            <i>Collab</i>
          </strong>{" "}
          is dedicated to providing a platform for modern musicians to:
          <br />
          <i
            className="material-icons"
            style={{ fontSize: "24px", color: "#5080aa" }}>
            cloud
          </i>{" "}
          <i> Promote </i> yourself
          <br />
          <i
            className="material-icons"
            style={{ fontSize: "24px", color: "#5080aa" }}>
            cloud
          </i>{" "}
          <i> Socialize </i> with others near you
          <br />
          <i
            className="material-icons"
            style={{ fontSize: "24px", color: "#5080aa" }}>
            cloud
          </i>{" "}
          <i> Hire </i> another musician
          <br /> <br />
          <div className="regulation">
            <strong>
              {" "}
              <i> Collab</i>
            </strong>{" "}
            is not responsible for regulating this sacred and special market but
            only aims to provide the bridge to connect one's need to a possible
            solution. <br />
            All transactions happening amongst individuals are personal
            behavior. All{" "}
            <strong>
              <i> Collab </i>
            </strong>{" "}
            has to offer is only available to registered users.
          </div>
        </div>
      </div>
    </div>
    // <p className="manifesto">
    //   Manifesto: <br />
    //   <strong>
    //     <i>Collab</i>
    //   </strong>
    //   is dedicated to provide an easy and friendly platform for modern musician
    //   to:
    //   <ul>
    //     <li> be connected to other musician around a given location</li>
    //     <li> be able to post hiring information</li>
    //   </ul>
  )
}

export default Manifesto
