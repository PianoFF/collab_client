import React, { Component } from "react"

import FrontPage from "./containers/FrontPage"

import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffbcaf",
      main: "#ff8a80",
      dark: "#c85a54",
      contrastText: "#37474f"
    },
    secondary: {
      light: "#ffffff",
      main: "#fce4ec",
      dark: "#c9b2ba",
      contrastText: "#37474f"
    }
  }
})

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <FrontPage />
      </ThemeProvider>
    )
  }
}

export default App
