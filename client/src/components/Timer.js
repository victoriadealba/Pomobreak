import React from 'react'

const Timer = (props) => {
    const {
        timerLabel,
        clickStartStop,
        startButtonLabel,
        timeLeft,
        clockFormat,
        clickReset
    } = props;

  return (
    <section>
       <section class = 'timer-container'>
      
      <h4 id='timer-label'>{timerLabel}</h4> 
      <h3 id='time-left'>{clockFormat(timeLeft)}</h3>
     
    ` </section>
      <section class = 'timer-button-pos'>
      <button class= "ui button start" id='start-stop' onClick={clickStartStop}>
          {startButtonLabel}
      </button>
      <button class = "ui button" id="reset-button" onClick={clickReset}>Reset</button>
      </section>


    </section>
   
  )
}

export default Timer
