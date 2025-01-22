import "./main.scss"
import DarkModeToggle from "./colour_mode_icon.jsx";
import {Avatar, Box, Card, Divider, Link, Typography, useTheme} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProfilePicture from "../assets/pp.png"

function Introduction() {

    const theme = useTheme()
    const lines = [
        "Formerly:",
        "- Front Office Software Engineer @ Dare"
    ]

    return (
        <>
            <div className={"titleContainer"}>
                <h1 style={{color: theme.palette.primary.main}}>Luke </h1>
                <h1 style={{color: theme.palette.text.primary}}>Roberts</h1>
            </div>

            <Typography style={{color: theme.palette.text.primary, marginBottom: "1rem"}}>
                Software Engineer currently open to exciting new opportunities
            </Typography>
            {
                lines.map((line) =>
                    <Typography style={{color: theme.palette.text.primary}}>
                        {line}
                    </Typography>
                )
            }
            <Link href="mailto: contact@ltroberts.co.uk"
                  color={theme.palette.primary.main}>contact@ltroberts.co.uk</Link>
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
        <div style={{marginTop: "1rem"}}>
            <LinkableIcon sx={{"&:hover": {color: `${LinkedInBlue} !important`}}}
                          url={"https://www.linkedin.com/in/lukeyr/"} Icon={LinkedInIcon}
                          style={{color: theme.palette.text.primary, ...sharedStyle}}/>
            <LinkableIcon sx={{"&:hover": {color: `${GithubBlue} !important`}}} url={"https://github.com/LukeyR/"}
                          Icon={GitHubIcon} style={{color: theme.palette.text.primary, ...sharedStyle}}/>
        </div>
    )

}

function Main({useDarkMode, setUseDarkMode, defaultDarkMode}) {

    const theme = useTheme()

    return (
        <>
            <DarkModeToggle setUseDarkMode={setUseDarkMode} useDarkMode={useDarkMode} className={"darkModeToggle"}
                            defaultDarkMode={defaultDarkMode}/>
            <Card className={"paperBackground"}>
                <Avatar
                    sx={{ width: 151, height: 151,
                        border: `0.15rem solid ${theme.palette.primary.main}` }}
                    src={ProfilePicture}
                    alt="A photo of me"
                />
                <Divider orientation="vertical" flexItem />
                <Box>
                <Introduction/>
                <Links/>
                </Box>
            </Card>
            <div className={"sourceCodePositioning"}>
                <LinkableIcon sx={{"&:hover": {color: `${theme.palette.primary.main} !important`}}}
                              url={"https://github.com/LukeyR/PersonalWebsite"} Icon={CodeIcon}
                              style={{color: theme.palette.text.primary}}/>
            </div>

        </>
    )
}

export default Main