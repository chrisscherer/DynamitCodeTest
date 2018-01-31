import React, { Component } from 'react';
import ImageGrid from './ImageGrid/ImageGrid.js'
import NavBar from './NavBar/NavBar.js'
import Intro from './Intro/Intro.js'
import ContentGrid from './ContentGrid/ContentGrid.js'
import Footer from './Footer/Footer.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ImageGrid />
          <NavBar />
          <Intro />
          <ContentGrid />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
