import React from 'react'

const Breakinterval = (props) => {
  const{
    breakLength,
    increaseBreakOneMinute,
    reduceBreakOneMinute,
    clockFormat,
  } = props;
  
  return (
    <section>
      <h4>Break</h4>
         <section class = 'intervals'>
      <button class = "ui button plus" id='break-reduce' onClick={reduceBreakOneMinute}>-</button>
      <h5 id='break-length'>{clockFormat(breakLength)} </h5>
      <button  class= "ui button plus" id='break-increase' onClick={increaseBreakOneMinute}>+</button>
      </section>
    </section>

   
     
     
    
  )
};

export default Breakinterval
