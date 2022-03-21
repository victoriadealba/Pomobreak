import React from 'react'

const Timer = (props) => {
    const {
        timerLabel,
        clickStartStop,
        startButtonLabel,
        timeLeft,
    } = props;

  return (
    <div>
        <p id='timer-label'>{timerLabel}</p> 
        {timeLeft}
        <button id='start-stop' onClick={clickStartStop}>
            {startButtonLabel}
        </button>
    </div>
  )
}

export default Timer
