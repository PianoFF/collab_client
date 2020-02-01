import React, { Component } from "react"

import Grid from "@material-ui/core/grid"
import Paper from "@material-ui/core/paper"

class FrontPage extends Component {
  render() {
    const style = {
      paper: { marginLeft: 10, marginTop: 20, padding: 12 }
    }
    return (
      <Grid container justify={"center"} lg>
        <Grid item spacing={4}>
          <Paper style={style.paper}> box 1</Paper>
        </Grid>
        <Grid item spacing={4}>
          <Paper style={style.paper}> box 2</Paper>
        </Grid>
      </Grid>
    )
  }
}

export default FrontPage
