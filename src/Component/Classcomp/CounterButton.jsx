import { Box } from '@mui/material';
import React, { Component } from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <Box  variant="contained" textAlign={'center'}
      // color="primary"
      style={{ backgroundColor: 'red', color: 'white' }} >
        <p >Count: {this.state.count}</p>
        <button variant='primary' style={{background: 'blue',color: 'white' }} onClick={this.incrementCount}>Increment</button>
        <button variant='primary' style={{background: 'blue',color: 'white', marginLeft:'2rem' }} onClick={this.decrementCount}>Decrement</button>
      </Box>
    );
  }
}

export default CounterButton;


