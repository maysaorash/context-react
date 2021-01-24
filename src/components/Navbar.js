import React from 'react';
import {ThemeContext} from '../contexts/ThemeContext';


class Navbar extends React.Component {
  static contextType = ThemeContext;
  render() {
    const {isLightTheme, lightTheme, darkTheme, toggleLoggin, isLoggin} = this.context;
    const theme = isLightTheme? lightTheme: darkTheme;
    return (
      <ul className="navbar" style={{backgroundColor: theme.nav}}>
        <li>Home</li>
        <li>About</li>
        <li onClick={toggleLoggin}>{isLoggin? "Logout": "Login"}</li>
      </ul>
    )
  }
}

export default Navbar;