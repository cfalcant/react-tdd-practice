import React, { Component } from 'react'
import BandList from './BandList'

class App extends Component {
  state = {
  bands: ['garlic', 'butter', 'blah']
}
  render () {
    return (
      <div>
        <BandList
            bands={this.state.bands}
        />
      </div>
    )
  }
}

export default App
