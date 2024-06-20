import {v4} from "uuid" 
const element = document.createElement('div');
element.innerHTML = 'Hello, Webpack!';
document.body.appendChild(element);
console.log(v4());