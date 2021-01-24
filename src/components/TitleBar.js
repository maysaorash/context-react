import React from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class TitleBar extends React.Component {
  static contextType = ThemeContext;
  render() {
    const {isLightTheme, lightTheme, darkTheme} = this.context;
    const theme = isLightTheme? lightTheme: darkTheme;
    return (
      <div className='title-bar' style={{backgroundColor: theme.titleBar}}>
        <div className='branding'>Todo App</div>
        <i className="fas fa-moon"></i>
      </div>
    )
  }
}

export default TitleBar;