import React from 'react';
import './App.css';
import BreakInterval from './components/BreakInterval';
import SessionInterval from './components/SessionInterval';
import Timer from './components/Timer'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25
    }
  }
  
  
  render() {
    return (  
      <main>
        <h1>
          PomoBreak
        </h1>
          <BreakInterval breakInterval={this.state.breakLength} />
          <SessionInterval sessionInterval={this.state.sessionLength} />
          <Timer timerMinute={this.state.timerMinute} />
      </main>
    );
  }
}

export default App;
