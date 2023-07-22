import "./main.scss"
import DarkModeToggle from "./colour_mode_icon.jsx";
import {Link, Typography, useTheme} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code.js";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Introduction() {

    const theme = useTheme()

  return (
    <>
        <div className={"titleContainer"}>
        <h1 style={{color: theme.palette.primary.main}}>Luke </h1>
        <h1 style={{color: theme.palette.text.primary}}>Roberts</h1>
            </div>
      <Typography style={{color: theme.palette.text.primary}}>Front Office Software Engineer Specialising In Energy Derivatives @ Dare</Typography>
      <Link href = "mailto: contact@ltroberts.co.uk" color={theme.palette.primary.main}>contact@ltroberts.co.uk</Link>
      </>
  )
}

function LinkableIcon({url, Icon, LinkProps, ...props}) {

    return (
        <Link href={url} target="_blank" {...LinkProps}>
            <Icon {...props}/>
        </Link>
    )
}

function Links() {

    const theme = useTheme()

    const sharedStyle = {
        fontSize: "3rem",
        padding: "0.5rem",
    }

    const LinkedInBlue = "#0077B5"
    const GithubBlue = "#4078c0"

    return (
        <div>
          <LinkableIcon sx={{ "&:hover": { color: `${LinkedInBlue} !important` } }} url={"https://www.linkedin.com/in/lukeyr/"} Icon={LinkedInIcon} style={{color: theme.palette.text.primary, ...sharedStyle}}/>
          <LinkableIcon sx={{ "&:hover": { color: `${GithubBlue} !important` } }} url={"https://github.com/LukeyR/"} Icon={GitHubIcon} style={{color: theme.palette.text.primary, ...sharedStyle}}/>
            </div>
    )

}

function Main({useDarkMode, setUseDarkMode, defaultDarkMode}) {

    const theme = useTheme()

  return (
      <>
      <DarkModeToggle setUseDarkMode={setUseDarkMode} useDarkMode={useDarkMode} className={"darkModeToggle"} defaultDarkMode={defaultDarkMode}/>
      <Introduction/>
      <Links />
      <div className={"sourceCodePosiioning"}>
      <LinkableIcon sx={{ "&:hover": { color: `${theme.palette.primary.main} !important` } }} url={"https://github.com/LukeyR/PersonalWebsite"} Icon={CodeIcon} style={{color: theme.palette.text.primary}}/>
      </div>

    </>
  )
}

export default Main