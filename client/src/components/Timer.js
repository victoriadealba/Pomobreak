import React from 'react'

const Timer = (props) => {
    const {
        timerLabel,
        clickStartStop,
        startButtonLabel,
        timeLeft,
        clockFormat,
    } = props;

  return (
    <div>
        <p id='timer-label'>{timerLabel}</p> 
        {clockFormat(timeLeft)}
        <button id='start-stop' onClick={clickStartStop}>
            {startButtonLabel}
        </button>
    </div>
  )
}

export default Timer
