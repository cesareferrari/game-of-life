import React from 'react'

const Buttons = props => {
  return (
    <div>
      <button onClick={props.playButton}>Play</button>
      <button onClick={props.pauseButton}>Pause</button>
      <button onClick={props.clearButton}>Clear</button>
      <button onClick={props.seed}>Seed</button>
    </div>
  )
}

export default Buttons;
