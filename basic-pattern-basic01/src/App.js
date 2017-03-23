import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from './';
import { createStore } from 'redux';
import { increment, decrement, clear, test } from './actions/number';

class App extends Component {
  constructor(props){
    super(props);
  }

  handleIncrement = () => {
    store.dispatch(increment());
  }

  handleDecrement = () => {
    store.dispatch(decrement());
  }

  handleClear = () => {
    store.dispatch(clear());
  }

  handleTest = () => {
    store.dispatch(test());
  }

  render() {
    return (
      <div>
        <h1>hello world</h1>
        <p>{this.props.num}</p>
        <div>
          <button onClick={() => this.handleIncrement()}>증가</button>
          <button onClick={() => this.handleDecrement()}>감소</button>
          <button onClick={() => this.handleClear()}>초기화</button>
          <button onClick={() => this.handleTest()}>테스트</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    num: state.number.num
  }
}

export default connect(mapStateToProps)(App);
