import React, {createContext} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
  state = {
    isLightTheme: true,
    lightTheme: {text: '#000', titleBar: '#9EA7AA', nav: '#CFD8DC', body:'#ECEFF1'},
    darkTheme: {text: '#FFF', titleBar: '#4f5b62', nav: '#37474f', body:'#263238'},
    isLoggin: true  
}

switchLoggin=()=>{
    this.setState({
        isLoggin: !this.state.isLoggin
    })
  }

  switchTheme=()=>{
    this.setState({
      isLightTheme: !this.state.isLightTheme
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={{...this.state, toggleTheme: this.switchTheme, toggleLoggin: this.switchLoggin}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContextProvider;