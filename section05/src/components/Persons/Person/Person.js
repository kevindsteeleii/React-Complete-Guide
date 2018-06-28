import React, { Component } from 'react';
import classes from './Person.css'

class Person extends Component {
    constructor (props){
        super(props);
        console.log("[Person.js] Inside Constructor ",props);
      }
    
      componentWillMount() {
        console.log(`[Person.js] Inside componentWillMount()`);
      }
      componentDidMount() {
        console.log(`[Person.js] Inside componentDidMount()`);
      }
    render () {
        console.log(`[Person.js] Inside render()`);
        return (
            // <div className="Person" style={style}>
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm a person, named {this.props.name}, age {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.changed}/>
            </div>
        ); 
    }
}

export default Person;