import React, { Component } from 'react';
import { render } from 'react-dom';
import { Header } from './components/header';
import { Section1 } from './components/sections/section1';
import { Section2 } from './components/sections/section2';
import { Section3 } from './components/sections/section3';
import './style.css';
import './themefisher.css';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />      
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
