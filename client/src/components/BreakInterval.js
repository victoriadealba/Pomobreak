import React from 'react'

const Breakinterval = (props) => {
  const{
    breakLength,
    increaseBreakOneMinute,
    reduceBreakOneMinute,
    clockFormat,
  } = props;
  
  return (
    <div>
      <h2 id="break-label">Break</h2>
      <h3 id='break-length'>{clockFormat(breakLength)} mins</h3>
      <div className='row'>
      <button class = "ui button plus" id='break-reduce' onClick={reduceBreakOneMinute}>-</button>
      <button  class= "ui button plus" id='break-increase' onClick={increaseBreakOneMinute}>+</button>
      </div>
     
    </div>
  )
};

export default Breakinterval
