import React from 'react';
import classes from './Cockpit.css';
const cockpit = (props) => {
    const assignedClasses = []; //'red bold'
    let btnClass = "";

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }

    btnClass = (props.showPersons)?classes.Red: '';

    return(
    <div className={classes.Cockpit}>
        <h1>{props.appTitle}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!!</p>
        <button className ={btnClass}
        onClick ={props.toggleEvent}
        >Toggle Persons</button>
    </div>
    );
};

export default cockpit;