import React, { Component } from 'react'

import store from '../store'

class Counter extends Component {

  increment = () => {
    store.dispatch({
      type: 'INC_COUNTER'
    })
  }

  decrement = () => {
    store.dispatch({
      type: 'DEC_COUNTER'
    })
  }

  render() {
    return (
      <div>
        <h1>Counter: {store.state.counter}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}

export default Counter
