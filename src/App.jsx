import {useEffect, useState} from 'react'
import React from "react"
import './App.scss'
import WebFont from "webfontloader";
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import Main from "./components/main.jsx";

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
    createTheme({
      palette: {
        mode: useDarkMode ? 'dark' : 'light',
      },
    }),
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
