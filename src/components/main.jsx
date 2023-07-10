import Paper from "@mui/material/Paper";
import "./main.scss"
import {ReactComponent as StartingLightLogo} from "../assets/starting_light_mode.svg";
import {ReactComponent as StartingDarkLogo} from "../assets/starting_dark_mode.svg";

function Logo({defaultDarkMode, ...props}) {
  return (
    <>
      {defaultDarkMode ? <StartingLightLogo {...props} /> : <StartingDarkLogo {...props} />}
    </>
  )
}

function DarkModeToggle({setUseDarkMode, useDarkMode, defaultDarkMode}) {

  return (
    <Paper className={"toggleColourModeButtonPaper"} onClick={() => setUseDarkMode(!useDarkMode)}>
      <Logo defaultDarkMode={defaultDarkMode} className={"toggleColourModeButton"}/>
    </Paper>
  )
}

function Introduction({useDarkMode}) {
  return (
    <>
      <h1>Luke Roberts</h1>
      <a href = "mailto: contact@ltroberts.co.uk">contact@ltroberts.co.uk</a>
      {/*<h3>{useDarkMode ? "Dark mode on" : "Dark mode off"}</h3>*/}
      </>
  )
}

function Main({useDarkMode, setUseDarkMode, defaultDarkMode}) {
  console.log("here")
  return (
    <>
      <DarkModeToggle setUseDarkMode={setUseDarkMode} useDarkMode={useDarkMode} className={"darkModeToggle"} defaultDarkMode={defaultDarkMode}/>
      <Introduction useDarkMode={useDarkMode}/>
    </>
  )
}

export default Main