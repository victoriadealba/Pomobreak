import React, {useState, useEffect} from 'react';
import './App.css';
import BreakInterval from './components/BreakInterval';
import Sessioninterval from './components/SessionInterval';
import Timer from './components/Timer'

function App () {

  //Session Interval Prop Implementation
  const [sessionLength, setSessionLength] = useState(1500)
  const [intervalLength, setIntervalLength] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const [currIntervalType, setCurrIntervalType] = useState('Session');    //For Session or Break, start in session

  //Formatting Clock Display from ss to hr:mm:ss
  const clockFormat = (seconds) => {

    let clockHours = Math.floor(seconds/3600);
    let clockMinute = Math.floor((seconds % 3600) / 60);
    let clockSecond = Math.floor(seconds % 60);

    let res = "";

    //Need to account single digits requiring a leading 0
      //Display Hrs:MM:SS in that order


    if (clockHours > 0) {
      res += "" + clockHours + ":" + (clockMinute < 10 ? "0" : "");
    }
    res += "" + clockMinute + ":" + (clockSecond < 10 ? "0" : "");
    res += "" + clockSecond;

  return res;
}
  
  //Change the time left when the session changes
  useEffect(() => {
    setTimeLeft(sessionLength);
}, [/*dependencies*/ sessionLength])


  //Reduce timer by one minute, note this is in seconds.
  const reduceSessionOneMinute = () => {
    const newLength = sessionLength - 60;
     if(newLength > 0) {
      setSessionLength(newLength);
     }
  }

  const increaseSessionOneMinute = () => {
    setSessionLength(sessionLength + 60);
  }
  
  //Break Interval Session Implementation, identical functionality as Session Interval
  const [breakLength, setBreakLength] = useState(300)

  const reduceBreakOneMinute = () => {
    const newLength = breakLength - 60;
     if(newLength > 0) {
      setBreakLength(newLength);
     }
  }

  const increaseBreakOneMinute = () => {
    setBreakLength(breakLength + 60);
  }

  //Timer implementation, combine session and break
  //Timer starts if the intervallength is not null
  const timerStarted = intervalLength != null;

  const clickStartStop = () => {
      if(timerStarted) {
          //If in started, stop timer:

          //Reference from https://www.w3schools.com/jsref/met_win_clearinterval.asp
          clearInterval(intervalLength);
          //Timer started has to be reset to false;
          setIntervalLength(null);
      }  else {
          //If in stopped, decrement:
          //Decrement Time (note: every 1000ms)

          //Referenced from https://www.w3schools.com/jsref/met_win_setinterval.asp
          const currIntervalLength = setInterval(() => {
              setTimeLeft(currTime => {
                  const tempTime = currTime -1;
                  
                  //Keep decrementing as long as there is time left
                  if(tempTime >= 0) {
                      return tempTime;
                  }
                  
                  //Switch between sessions and breaks and vice versa
                  
                  //If session:
                      //Switch to break
                          //setTimeLeft to breakLength
                  if(currIntervalType === 'Session') {
                      setCurrIntervalType('Break');
                      setTimeLeft(breakLength);
                  }
                  //Switch to break:
                      //Switch to session
                          //setTimeLeft to sessionLength
                  else if(currIntervalType === 'Break') {
                      setCurrIntervalType('Session');
                      setTimeLeft(sessionLength);
                  }
              })
          }, 100);    //<-- SET ME BACK TO 1000 AFTER TESTING
          setIntervalLength(currIntervalLength);
      }
  }

  //Handle Reset Button
  const clickReset = () => {
    //TODO
    //set intervalLength to null
    //reset session length to 25 minutes,=
    //reset break length to 5 minutes
    //reset timer to 25 minutes (initial values)

    clearInterval(intervalLength);
    setIntervalLength(null);
    setCurrIntervalType('Session');
    setSessionLength(60 * 25);
    setBreakLength(60 * 5);
    setTimeLeft(60 * 25);
  }

  return <div className='App'>
    <BreakInterval
    breakLength={breakLength}
    reduceBreakOneMinute={reduceBreakOneMinute}
    increaseBreakOneMinute={increaseBreakOneMinute}
    clockFormat={clockFormat} />

    <Timer 
    sessionLength={sessionLength}
    breakLength={breakLength}
    timerLabel={currIntervalType}
    clickStartStop={clickStartStop}
    timeLeft={timeLeft}
    startButtonLabel={timerStarted? 'Stop' : 'Start'}
    clockFormat={clockFormat} />

    <Sessioninterval
    sessionLength={sessionLength}
    reduceSessionOneMinute={reduceSessionOneMinute}
    increaseSessionOneMinute={increaseSessionOneMinute}
    clockFormat={clockFormat} />

    <button class = "ui button" id="reset-button" onClick={clickReset}>Reset</button>
  </div>
  
}

export default App
