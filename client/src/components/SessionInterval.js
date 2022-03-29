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
      <p id="session-label">PomoSession</p>
      <p id='session-length'>{clockFormat(sessionLength)}</p>

      <button class = "ui button plus" id='session-reduce' onClick={reduceSessionOneMinute}>-</button>
      <button class = "ui button plus" id='session-increase' onClick={increaseSessionOneMinute}>+</button>
    </div>
  )
};

export default Sessioninterval
