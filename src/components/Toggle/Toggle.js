import React from 'react'
import './Toggle.css'
import {themeContext} from '../../Context'
import {useContext} from 'react'

function Toggle() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () => {
        theme.dispatch({ type: "toggle" });
      };
  return (
    <div className="toggle" onClick={handleClick}>
      <div class="indicator"
      style={darkMode ? { left: "30px" } : { right: "30px" }}
      >

      </div>
    </div>
  )
}

export default Toggle
