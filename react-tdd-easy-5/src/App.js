import React, { Component } from 'react'
import TodosList from './TodosList'

class App extends Component {
  state = {
    todos: ['Homework','Take out the trash', 'Wash dishes']
  }

  render () {
    return (
      <div>
        <TodosList
          todos={this.state.todos}
        />
      </div>
    )
  }
}

export default App
