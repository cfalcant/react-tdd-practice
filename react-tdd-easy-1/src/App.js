import React, { Component } from 'react'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        objective: 'Wash dishes'
      },
      {
        id: 2,
        objective: 'Make dinner'
      },
      {
        id: 3,
        objective: 'Laundry'
      }
    ]
  }

  render () {
    let listOfTodos=this.state.todos.map((todo)=>{
        return (
          <li
            key={todo.id}>
            {todo.objective}
          </li>
        )
    })

    return (
      <div className="App">
        {listOfTodos}
      </div>
    )
  }
}

export default App
