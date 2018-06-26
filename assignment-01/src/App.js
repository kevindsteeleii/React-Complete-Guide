import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput'
import './App.css';

const divStyle = {
  borderRadius:"5px",
  backgroundColor: "#eee"
};

class App extends Component {
  state = {
    userName:"Bobby-Ray"
  }

  changeStateHandler = (event) => {
    this.setState({
      userName:event.target.value
    });
  }
  
  render() {
    return (
      <div className="App" style={divStyle} >
        <h1>React Assignment 01</h1>
        <UserInput 
        changed={this.changeStateHandler}
        name = {this.state.userName}
        />
        <UserOutput name={this.state.userName}/>
      </div>
    );
  }
}

export default App;
