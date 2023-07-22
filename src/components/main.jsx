import "./main.scss"
import DarkModeToggle from "./colour_mode_icon.jsx";

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