import React from 'react'

const Sessioninterval = (props) => {
  const {
    sessionLength,
    reduceSessionOneMinute,
    increaseSessionOneMinute,
    clockFormat,
  } = props;


  return (
    <div>
      <h2 id="session-label">Session</h2>
      <h3 id='session-length'>{clockFormat(sessionLength)} mins</h3>

      <button class = "ui button plus" id='session-reduce' onClick={reduceSessionOneMinute}>-</button>
      <button class = "ui button plus" id='session-increase' onClick={increaseSessionOneMinute}>+</button>
    </div>
  )
};

export default Sessioninterval
