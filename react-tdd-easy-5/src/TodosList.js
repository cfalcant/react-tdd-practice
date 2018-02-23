import React from 'react'

const TodosList = (props) => {
  console.log('props in TL', props)
  let allTodos = props.todos.map(todo=>
    <li>
      {todo}
    </li>
  )
  return (
    <div>
      {allTodos}
    </div>
  )
}

export default TodosList
