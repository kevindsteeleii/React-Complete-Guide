import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Matthew', age:19},
      {name: 'Mark', age:54},
      {name: 'Luke', age:23}
    ]
  }

  switchNameHandler = (newName) => {
    // alert("Button Clicked Huzzah!!!");
    this.setState({persons: [
      {name: newName, age:19},
      {name: 'Marcus', age:54},
      {name: 'Lukas', age:99}
    ]
    });
  }
  nameChangedHanlder = event => {
    this.setState({persons: [
      {name: 'Matthew', age:19},
      {name: event.target.value , age:54},
      {name: 'Lukas', age:99}
    ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <button onClick ={this.switchNameHandler.bind(this, 'Maximillian')}>Switch Name</button>

        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Joshua')}
        changed = {this.nameChangedHanlder}
        >My Hobbies are bottle-ship making.
        </Person>

        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
