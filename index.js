import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    
    

    return (
      <div>
        <Hello/>
      </div>
    );
  }
}

render(<App name='bull shit' />, document.getElementById('root'));
