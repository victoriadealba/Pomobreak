import React, {useState, useEffect} from 'react';
import './App.css';
import BreakInterval from './components/BreakInterval';
import Sessioninterval from './components/SessionInterval';
import Timer from './components/Timer';
import LongActivityGenerator from "./components/LongActivityGenerator";
import shortActivtyGenerator from "./components/ShortActivityGenerator";

function App () {

  //Session Interval Prop Implementation
  const [sessionLength, setSessionLength] = useState(1500)
  const [intervalLength, setIntervalLength] = useState(null);
  const [timeLeft, setTimeLeft] = useState(sessionLength);
  const [currIntervalType, setCurrIntervalType] = useState('Session');    //For Session or Break, start in session

  // Long activity generator
  const [longActivity, setLongActivity] = useState(null);
  var longActivities = [
    "Let's flutter away and decorate our study space! Grab some sheets of paper and string Follow this link to make a group of butterflies. Copy and paste:  https://www.redtedart.com/easy-paper-butterfly/",
    "Think of the perfect day, design a story board illustrating how it would happen! Copy and paste: https://www.wikihow.com/Draw-Storyboards",
    "Scavenger Hunt! Go outside or around your house and take a picture of: Something Shiny, Something Red, An interesting view of the Sky, The biggest Tree, Something beautiful, The funniest thing",
    "Rap Battle! Make a rap with the following words: Rat, Fun, Distance, copy and paste this link and go crazy!  https://rapscript.net/words/",
    "Nature Scavenger Hunt! Go find: something fuzzy, something noisy, a chewed leaf, a stick, something you think is a treasure, two pieces of man-made litter, two different types of flowers or leaves",
    "Yoga Time! Let's stretch, go outside or do it inside and see if you're up for the challenge! How bendy can you get? Copy and paste: https://www.youtube.com/watch?v=X655B4ISakg",
    "Are you the next MasterChef? Ask your parent to help you cook up a fun snack! Recipe ideas: ",
    "RIDDLE ME THIS! Time to put your mind to the test... Are you a Genius? Copy and paste: https://www.youtube.com/watch?v=6WZ5DCd3_4o",
    "DANCE BATTLE! Can you do them all? Copy and paste: 1) https://www.youtube.com/watch?v=tz2OnrmzzHE 2) https://www.youtube.com/watch?v=Hf9MtIOZEzU&t=5s 3) https://www.youtube.com/watch?v=aXgy3kE1NIg",
    "Close your eyes and listen to this video for a guided meditation. Can you be the next Yoda? Copy and paste: https://www.youtube.com/watch?v=DWOHcGF1Tmc",
    "Let's do a DRINKING CHALLENGE! How long will it take you to drink 3 glasses of water? After the water lie down and copy and paste this link: https://www.youtube.com/watch?v=mV9BBR1RoGg",
    "Take a power nap you deserve it! Or go watch an episode of your favorite TV show ",
    "Airplane Competition! See which one could fly further... Let's make multiple types and test it out: Copy and paste: 1) https://allfortheboys.com/move-over-paper-airplanes/  2) https://www.youtube.com/watch?v=r9ReNKZiZNc",
    "Let's make a Vision Board! Draw pictures of your biggest dreams and put it together in a collage! How to make a vision board, copy and paste: https://www.youtube.com/watch?v=9kDS24W8VRE",
    "Picture your dream and write out the dream as if it's already yours. Create a story of you living a day out in that dream or write a day in your life living your dream life!"
  ];

  // Short activity generator 
  const [shortActivity, setShortActivity] = useState(null);
  var shortActivities = [
    "Lets take flight and make some paper airplanes! Grab 1 sheet of paper and click on the link below for instructions. Let's see how far your airplane can go! https://tinyurl.com/PaperAirplane321",
    "Time to draw! Grab 1 sheet of paper and draw your favorite animal.",
    "Lets get colorful! Grab 1 sheet of paper and your crayons and draw a rainbow!",
    "Brrr it's cold in here! Grab 1 sheet of paper and safety scissors, and click on the link to see how to make a snowflake! https://tinyurl.com/snowflakeTutorial0",
    "Gobble Gobble it's hand turkey time! Grab 1 sheet of paper and follow the link below for instructions! https://tinyurl.com/gobblegobble0",
    "It's time to get up and move! Follow the link for a 5-minute workout with Hip-po: https://tinyurl.com/Hip-poWorkout",
    "Dance Party! Click on the links below and follow along to the dance moves on the screen! 1) https://tinyurl.com/gummyBearDance 2) https://tinyurl.com/MinionDance",
    "It's time to SALSA! Follow the link to learn how to Salsa Dance: https://tinyurl.com/SalsaDanceForKids",
    "TAKE IT BACK NOW Y'ALL! Lets cha cha slide! https://tinyurl.com/chachaslide0",
    "THE FLOOR IS LAVA! Make your way around the room you are in, but make sure to not touch the floor!",
    "Lets take some deep breaths together, follow this link and follow along to the video to learn how to meditate: https://tinyurl.com/MeditateKids",
    "Time to put on your thinking cap! Follow the link for some brain teasers... can you figure them out? https://tinyurl.com/brainteasersWordPuzzles",
    "Can you get the 2048 tile? Click below to play 2048! https://play2048.co/",
    "It's time for some journaling! Grab 1 sheet of paper and tell me all about your favorite hobbies!",
    "It's time to breath in... and breath out. Grab 1 sheet of paper, some markers, and follow this link to learn how to draw your breath: https://tinyurl.com/drawYourBreath",
    "Let's take a moment to relax and learn how to do Yoga! Follow the link below: https://tinyurl.com/animalYoga0",
    "It's time to grab your favorite slime or putty and see how many different shapes you can create!",
    "Snack Break! If your feeling a little rumbley in your tumbley, ask a parent for permission to go get a quick study snack!",
    "Okay everyone, deep breaths now... follow think to learn a new way to relax: https://www.youtube.com/watch?v=FZoFPT3FXDI",
    "Movie time! Follow the link to watch a short movies on dinosaurs! https://tinyurl.com/dinoMovies0",
    "RAVE TIME!! Click on the following links to listen to some ~GROOVY~ music and dance along: 1) https://tinyurl.com/encantoSP1 2) https://tinyurl.com/encantoWECID1",
    "Ahh a monster!! Quick, grab 1 sheet of paper and your crayons and draw yourself as a superhero! What would your powers be?",
    "Let's build a fort! Using the materials around you, build a small fort! (but don't forget to put everything back where you found it!)",
    "Let's write a story! Grab 1 sheet of paper and a pencil, and using your imagination tell me about your life if you were a... PIRATE!",
    "What do you want to be when you grow up? For the next 10 minutes, pretend you are that! How would you act?"
  ];

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

  //Generate Random Long activity
  const generateLongActivity = () => {
    setLongActivity(longActivities[Math.floor(Math.random()*longActivities.length)]);
  }

  //Generate Random Long activity
  const generateShortActivity = () => {
    setShortActivity(shortActivities[Math.floor(Math.random()*shortActivities.length)]);
  }



  return <div className='App'>
    <div className = 'timecontainer'>
    <BreakInterval
    breakLength={breakLength}
    reduceBreakOneMinute={reduceBreakOneMinute}
    increaseBreakOneMinute={increaseBreakOneMinute}
    clockFormat={clockFormat} />

  <Sessioninterval
    sessionLength={sessionLength}
    reduceSessionOneMinute={reduceSessionOneMinute}
    increaseSessionOneMinute={increaseSessionOneMinute}
    clockFormat={clockFormat} />

<Timer 
    sessionLength={sessionLength}
    breakLength={breakLength}
    timerLabel={currIntervalType}
    clickStartStop={clickStartStop}
    timeLeft={timeLeft}
    startButtonLabel={timerStarted? 'Stop' : 'Start'}
    clockFormat={clockFormat}
     />
   <button class = "ui button" id="reset-button" onClick={clickReset}>Reset</button> 

    </div>

    <LongActivityGenerator 
   generate={generateLongActivity}
   activity={longActivity}
    />
  </div>
  
  
}

export default App
