import Paper from "@mui/material/Paper";
import DarkModeIcon from "../assets/light_mode_black_24dp.svg?react";
import LightModeIcon from "../assets/dark_mode_black_24dp.svg?react";
import {useState} from "react";
import "./colour_mode_icon.scss";
import {useTheme} from "@mui/material";

function Icon({darkMode, ...props}) {

  const theme = useTheme()

  return (
    <>
      {darkMode ? <DarkModeIcon {...props}  fill={theme.palette.primary.main}/> : <LightModeIcon {...props} fill={theme.palette.primary.main} />}
    </>
  )
}

export default function DarkModeToggle({setUseDarkMode, useDarkMode, defaultDarkMode}) {

  const [darkModeIcon, setDarkModeIcon] = useState(<Icon darkMode={true} className={defaultDarkMode ? "start_visible" : "start_hidden"}/>)
  const [lightModeIcon, setLightModeIcon] = useState(<Icon darkMode={false} className={defaultDarkMode ? "start_hidden" : "start_visible"}/>)


  const handleClick = async () => {

    if (useDarkMode) { // Switching from dark to light mode
      setDarkModeIcon(<Icon darkMode={true} className={defaultDarkMode ? "hide_default" : "hide_secondary"}/>)
      setLightModeIcon(<Icon darkMode={false} className={defaultDarkMode ? "show_secondary" : "show_default"}/>)
    } else {
      setDarkModeIcon(<Icon darkMode={true} className={defaultDarkMode ? "show_default" : "show_secondary"}/>)
      setLightModeIcon(<Icon darkMode={false} className={defaultDarkMode ? "hide_secondary" : "hide_default"}/>)
    }

    setUseDarkMode(!useDarkMode)
  }

  return (
    <Paper className={"toggleColourModeButtonPaper"} onClick={() => handleClick()}>
        {darkModeIcon}
        {lightModeIcon}
    </Paper>
  )
}