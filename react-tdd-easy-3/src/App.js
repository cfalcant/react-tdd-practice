import React, { Component } from 'react'

class App extends Component {
  state = {
    bands: ['garlic', 'butter', 'blah']
  }
  render () {
    let allBands = this.state.bands.map(band =>
      <li>
        {band}
      </li>
    )
    return (
      <div>
        <ul>
          {allBands}
        </ul>
      </div>
    )
  }
}

export default App
