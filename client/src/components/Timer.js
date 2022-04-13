import React, { useState } from 'react'

const Timer = (props) => {
    const {
        timerLabel,
        clickStartStop,
        startButtonLabel,
        timeLeft,
        clockFormat,
        clickReset,
        clickHideTimer
    } = props;

  return (
  
    <section>
       <section class = 'timer-container'>
      
      <h4 id='timer-label'>{timerLabel}</h4> 
      <h3 id='time-left'>{clockFormat(timeLeft)}</h3>
     
      <button class= "ui button start" id='start-stop' onClick={clickStartStop}>
          {startButtonLabel}
      </button>
      <button class = "ui button" id="reset-button" onClick={clickReset}>Reset</button>
      <button class = "ui button hide" id="hide-button" onClick={clickHideTimer}>Hide</button>      
      
     
     </section>


    </section>
   
  )
}

export default Timer
