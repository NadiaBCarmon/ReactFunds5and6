import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



//Implicit Binding//

// const me = {
//   name: 'Nadia',
//   age: 29,
//   sayName: function(){
//     console.log(this.name);
//   }
// }

// me.sayName();

/*const sayNameMixin = function(obj){
  obj.sayName = function(){
    console.log(this.name);
  };
};

const me = {
  name: "Nadia",
  age: 29,
};

const you = {
  name: 'Joey',
  age: 21,
};

sayNameMixin(me);
sayNameMixin(you);

me.sayName();
you.sayName();*/

/*const Person = function(name, age){
  return{
    name: name,
    age: age,
    sayName: function(){
      console.log(this.name);
    }, 

    mother: {
      name: 'Stacey',
      sayName: function(){
        console.log(this.name);
      }

    }
  };
};

const Jim = Person('Jim', 45);
Jim.sayName();
Jim.mother.sayName();*/



//Explicit Binding//

/*const sayName = function(lang1, lang2, lang3, lang4){
  console.log('My name is ' + this.name + 
  ' and I know ' + lang1 + ", " + lang2 + ", " + lang3 + ' and ' + lang4 + ".");
};

const stacey = {
  name: 'Stacey',
  age: 34,
};

const languages = ['Javascript', 'Ruby', 'Angular', 'React'];


const newFn = sayName.bind(stacey, languages[0], languages[1], languages[2], languages[3]);

console.log('HERE');

newFn();*/



//New Binding//

/*const Animal = function(color, name, type){
  this.color = color;
  this.name = name;
  this.type = type;
};

const lion = new Animal('tan', 'Lucy', 'Lion');*/



//Window Binding//

/*const sayAge = function(){
  'use strict';
  console.log(this.age);
};

const me = {
  age: 25
};

sayAge();
window.age = 35;
sayAge();*/




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
