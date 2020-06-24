import React from 'react'

const Buttons = props => {
  return (
    <div class="buttons">
      <button onClick={props.initRandomGrid}>Autofill Grid</button>
      <button onClick={props.startGame}>Start</button>
      <button onClick={props.pauseGame}>Pause</button>
      <button onClick={props.slowGame}>Slow</button>
      <button onClick={props.fastGame}>Fast</button>
      <button onClick={props.clearGrid}>Clear</button>
    </div>
  )
}

export default Buttons;
