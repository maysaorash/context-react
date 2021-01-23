import React, { Component } from 'react'

class TitleBar extends Component {
    render() {
        return (
            <div className='title-bar'>
            <div className='branding'>Todo App</div>
            <i className="fas fa-moon"></i>  
            </div>
        )
    }
}

export default TitleBar;