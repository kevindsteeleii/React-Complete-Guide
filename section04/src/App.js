import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import ValidationComponent from './ValidationComponent/ValidationComponent';
// import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    persons: [
      {id: 'skdjf893ij',name: 'Matthew', age:19},
      {id: 'skdjf893',name: 'Mark', age:54},
      {id: 'skdj93ij',name: 'Luke', age:23}
    ],
    showPersons: false
    // ,textLength: 0,
    // text: ''
  }
  //Assignment02 stuff
  // textDeleteHandler = (letterIndex) => {
  //   const myWord = this.state.text;
  //   const newWord = myWord.slice(0,letterIndex) + myWord.slice(letterIndex+1);
  //   this.setState({text:newWord})
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] //object destructuring ftw creates an unlinked object with the same properties as the original state at the index personIndex
    };

    person.name = event.target.value; //provided by the input
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }
  //Assignment02 stuff
  // textChanged = (event) => {
  //   this.setState({text:event.target.value});
  //   this.setState({textLength:event.target.value.length});
  // }

  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor: 'pointer',
      margin:'10px auto',
      borderRadius:'5px'
    }

    let persons = null; 

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }
    //Assignment02 stuff
    // let chars = null;
    // if (this.state.textLength > 0) {
    //   chars = (
    //     <div>
    //       {this.state.text.split('').map((x, index) => {
    //         return <CharComponent
    //         letter = {x}
    //         index = {index}
    //         click = {(event) => this.textDeleteHandler(index)}/>
    //       })
    //       }
    //     </div>
    //   );
    // }
    
    return (
      <div className="App">
        <h1>Hi, I'm a react app.</h1>
        <button 
        onClick ={this.togglePersonsHandler}
        style={style}>
        Toggle Persons</button>
        {persons}

        {/* Assignment 02 Stuff */}
        {/* <br/>
        <input type="text" value={this.state.text} onChange={(event) => this.textChanged(event)}/>
        <br/>
        <ValidationComponent inputLength ={this.state.textLength}/>
        {chars} */}
      </div>
    );
  }
}

export default App;
