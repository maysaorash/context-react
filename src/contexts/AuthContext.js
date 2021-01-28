import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
     isLoggedIn: false   
    }

   switchAuthStatus = () => {
    this.setState({
     isLoggedIn: !this.state.isLoggedIn   
    })   
   } 

    render() {
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.switchAuthStatus}}>
            {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider; 