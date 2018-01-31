import React, { Component } from 'react';
import hotdog from '../Images/hotdog.png';
import './Intro.css';

class App extends Component {
  render() {
    return (
      <div id="intro-content">
        <div id="intro-hotdog-image">
          <img src={hotdog} alt="hotdog" />
        </div>
        <div id="intro-text">
          <p> Dirty Dogs serves all-beef, vegan and vegetarian hot dogs.</p>
        </div>
        <div id="intro-button"> 
          <button>More Dogs 'n Make Em Hot</button>
        </div>
      </div>
    );
  }
}

export default App;
