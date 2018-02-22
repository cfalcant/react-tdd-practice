import React, { Component } from 'react'

class App extends Component {
  state = {
    favFoods: [
      {
        id:1,
        item: 'wings'
      },
      {
        id: 2,
        item: 'pizza'
      },
      {
        id: 3,
        item: 'spaghetti'
      }
    ]
  }
  render () {
    let listOfFoodItems = this.state.favFoods.map(food=>
          <li
            key={food.id}>
            {food.item}
          </li>
        )


    return (
      <div>{listOfFoodItems}</div>
    )
  }
}

export default App
