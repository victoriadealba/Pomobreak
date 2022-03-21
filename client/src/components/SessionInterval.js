import React from 'react'

const Sessioninterval = (props) => {
  const {
    sessionLength,
    reduceSessionOneMinute,
    increaseSessionOneMinute,
  } = props;


  return (
    <div>
      <p id="session-label">PomoSession</p>
      <p id='session-length'>{sessionLength}</p>

      <button id='session-reduce' onClick={reduceSessionOneMinute}>-</button>
      <button id='session-increase' onClick={increaseSessionOneMinute}>+</button>
    </div>
  )
};

export default Sessioninterval
