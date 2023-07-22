import "./main.scss"
import DarkModeToggle from "./colour_mode_icon.jsx";

function Introduction({useDarkMode}) {
  return (
    <>
      <h1>Luke Roberts</h1>
      <p>Front Office Software Engineer Specialising In Energy Derivatives @ Dare</p>
      <a href = "mailto: contact@ltroberts.co.uk">contact@ltroberts.co.uk</a>
      </>
  )
}

function Main({useDarkMode, setUseDarkMode, defaultDarkMode}) {
  return (
      <>
      <DarkModeToggle setUseDarkMode={setUseDarkMode} useDarkMode={useDarkMode} className={"darkModeToggle"} defaultDarkMode={defaultDarkMode}/>
      <Introduction useDarkMode={useDarkMode}/>
    </>
  )
}

export default Main