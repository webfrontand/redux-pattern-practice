import React, { Component } from 'react';
import { petchSuccess, selectMenu } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Post, Loading, Header } from './components';

class App extends Component {
  componentDidMount(){
    this.props.petchSuccess()
  }
  render() {
    const mapTo = (data) => {
      return data.map((data, i) => {
        return (
          <Post
            key={i}
            title={data.title}
            body={data.body}
            index={i}
          />
        )
      })
    }

    const checkLength = this.props.info.length == 0 ?  <Loading /> : mapTo(this.props.info)
    return (
      <div>
        <Header
          selectMenu={this.props.selectMenu}
          selected={this.props.selected}
        />
        <div className="container">
          <h1>hello world</h1>
          <h2>{this.props.info.length}</h2>
          <p>{this.props.status}</p>
          <div>
            <h2>Test</h2>
            {checkLength}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    status: state.data.status,
    info: state.data.info.slice(0, 20),
    selected: state.ui.selected
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    petchSuccess,
    selectMenu
  }, dispatch);
}

App.defaultProps = {
  info: []
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
