import React, { Component } from 'react'

class TodoList extends Component {
    render() {
        return (
            <div>
            <input type="text"/>
            <ul>
            <li>Go to the market</li>
            <li>Get some milk</li>
            <li>Pay the bills</li>
            </ul>   
            </div>
        )
    }
}

export default TodoList;