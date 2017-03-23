import React, { Component } from 'react';
import { ReqeustPetch } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount(){
    this.props.ReqeustPetch();
  }
  render() {
    return (
      <div>
        <h1>hello world</h1>
        <p>{this.props.info}</p>
        <h2>{this.props.info.length}</h2>
        <p>{this.props.status}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    status: state.data.status,
    info: state.data.info
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    ReqeustPetch
  }, dispatch);
}

App.defaultProps = {
  info: []
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
