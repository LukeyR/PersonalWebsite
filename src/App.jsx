import {useEffect, useState} from 'react'
import React from "react"
import './App.scss'
import WebFont from "webfontloader";
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import Main from "./components/main.jsx";


const getDesignTokens = (useDarkMode) => {

    let shared = {
        primary: {
            main: "#4649DC"
        }
    }

    let mode = useDarkMode ? "dark" : "light"

    return (
        {
            palette: {
                mode,
                ...(mode === 'light'
                    ? {
                        ...shared,
                        // palette values for light mode
                        background: {
                            default: "#FFFBFF"
                        },
                        text: {
                            primary: "#5D5D72"
                        }
                    }
                    : {
                        ...shared,
                        text: {
                            primary: "#FFFBFF"
                        }
                    }),
            },
        })
};

function App() {
  useEffect(() => {
   WebFont.load({
     google: {
       families: ['Urbanist', 'Roboto']
     }
   });
  }, []);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [useDarkMode, setUseDarkMode] = useState(prefersDarkMode)

  const theme = React.useMemo(
  () =>
     createTheme(getDesignTokens(useDarkMode)),
  [useDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main className={"App"} useDarkMode={useDarkMode} setUseDarkMode={setUseDarkMode} defaultDarkMode={prefersDarkMode}/>
    </ThemeProvider>
  )
}

export default App
