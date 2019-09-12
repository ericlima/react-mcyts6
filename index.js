import React, { Component } from 'react';
import {Chart} from 'primereact/chart';
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
    
    const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]    
        };

    return (
      <div>
        <a href="#">link</a>   
        <Chart data={data}/>
      </div>
    );
  }
}

render(<App name='bull shit' />, document.getElementById('root'));
