import React from 'react'

const Sessioninterval = (props) => {
  const {
    sessionLength,
    reduceSessionOneMinute,
    increaseSessionOneMinute,
    clockFormat,
  } = props;


  return (
    <section>
      <h4>Session</h4>
       <section class = 'intervals'>
     
      <button class = "ui button plus" id='session-reduce' onClick={reduceSessionOneMinute}>-</button>
      <h5 id='session-length'>{clockFormat(sessionLength)} </h5>
      <button class = "ui button plus" id='session-increase' onClick={increaseSessionOneMinute}>+</button>
    </section>

    </section>
   
      
   
  )
};

export default Sessioninterval
