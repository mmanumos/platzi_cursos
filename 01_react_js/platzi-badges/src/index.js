// const element = document.createElement("h1");
// element.innerText = "Hola Mundo";

// const container = document.getElementById("app");

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello platzi, Test git</h1>; // It's not necessary save the HTML elements like string,
// because using import React from "react" i can use JSX
const container = document.getElementById("app"); // I'm creating a variable to get an element

//ReactDOM.render(__qué__, __donde__); Pseudocode
ReactDOM.render(element, container);
