// import React, { useState } from "react"
// import { makeStyles } from "@material-ui/core/styles"
// import Paper from "@material-ui/core/Paper"
// import Tabs from "@material-ui/core/Tabs"
// import Tab from "@material-ui/core/Tab"
// import InfoIcon from "@material-ui/icons/Info"
// import LocationOnIcon from "@material-ui/icons/LocationOn"
// import FileCopyIcon from "@material-ui/icons/FileCopy"
// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     backgroundColor: "transparent",
//     color: "white"
//   }
// })

// const FormTabBar = () => {
//   const classes = useStyles()
//   const [value, setValue] = useState(0)

//   const handleChange = newValue => {
//     setValue(newValue)
//   }

//   return (
//     <Paper className={classes.root}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         indicatorColor="secondary"
//         textColor="secondary"
//         centered>
//         <Tab label="Info" icon={<InfoIcon />} />
//         <Tab label="Location" icon={<LocationOnIcon />} />
//         <Tab label="Files" icon={<FileCopyIcon />} />
//       </Tabs>
//     </Paper>
//   )
// }

// export default FormTabBar
