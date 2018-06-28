import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor (props){
    super(props);
    console.log("[App.js] Inside Constructor ",props);
  }

  componentWillMount() {
    console.log(`[App.js] Inside componentWillMount()`);
  }
  componentDidMount() {
    console.log(`[App.js] Inside componentDidMount()`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log ('[UPDATE App.js] Inside shouldComponentUpdate ',nextProps, nextState);
    return true;
}
componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate ',nextProps, nextState);
}

  state = {
    persons: [
      {id: 'skdjf893ij',name: 'Matthew', age:19},
      {id: 'skdjf893',name: 'Mark', age:54},
      {id: 'skdj93ij',name: 'Luke', age:23}
    ],
    showPersons: false
  }

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
  render() {
    let persons = null; 
    console.log('[App.js] inside render ()');
    if (this.state.showPersons) {
      persons = (
          <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}/>
      );
    }

    return (
      <div className={classes.App} >
        <Cockpit
        appTitle = {this.props.title}
        toggleEvent = {this.togglePersonsHandler}
        showPersons = {this.state.showPersons}
        persons={this.state.persons}
        />
        {persons}
      </div>
    );
  }
  componentDidUpdate(previousProps, previousState) {
    console.log('[UPDATE App.js] Inside componentDidUpdate',previousProps ,previousState);
}
}
export default App;