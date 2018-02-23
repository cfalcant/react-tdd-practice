import React from 'react'

const BandList = (props) => {
  console.log('props in BL', props.bands)
  let allBands = props.bands.map(band =>
    <li>
      {band}
    </li>
  )

  return (
    <div>
      {allBands}
    </div>
  )
}

export default BandList
