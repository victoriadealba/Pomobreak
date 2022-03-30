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
        <h2 id='timer-label'>{timerLabel}</h2> 
        <h3 id='time-left'>{clockFormat(timeLeft)}</h3>
        <button class= "ui button start" id='start-stop' onClick={clickStartStop}>
            {startButtonLabel}
        </button>
    </div>
  )
}

export default Timer
