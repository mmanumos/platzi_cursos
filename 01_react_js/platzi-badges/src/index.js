// const element = document.createElement("h1");
// element.innerText = "Hola Mundo";

// const container = document.getElementById("app");

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello platzi, Test git</h1>; //It's not necessary save the HTML elements like string,
// because using import React from "react" i can use JSX
const container = document.getElementById("app"); // I'm creating a variable to get an element

// Creating elemets with React.createElement
// 1st argument: Type of element html(h1,p)  2do argument: Properties (a -> href) 3er argument: children (innerHtml, innerTEXT)
const eleCreate = React.createElement(
  "a",
  { href: "https:platzi.com" },
  "Ir a platzi"
);

const name = "Manuel";
const eleVariable = React.createElement("h1", {}, "Hola, soy {name}");

// Creating element with JSX
const eleJSX = <h1> Hi i'm {name} </h1>;
const eleSuma = <h1> This is an Addition {2 + 2} </h1>;
const sum = () => 3 + 3;
const eleFunction = <h1> Addition from a function {sum()} </h1>;
const eleFalse = <h1>This is a False value {null} </h1>;

// ########## Doing the same with React.createElement and JSX

//JSX
const eleDivJsx = (
  <div>
    <h1>Hey i'm Manuel</h1>
    <p>Backend developer</p>
  </div>
);

// React.createElement
const eleDivCreate = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hey i am Manuel"),
  React.createElement("p", {}, "Backend Developer")
);

//ReactDOM.render(__qué__, __donde__); Pseudocode
ReactDOM.render(eleDivCreate, container);
