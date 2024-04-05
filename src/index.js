import './style.css';
import Landing from './landing';

const contentDiv = document.getElementById("content");
console.log(Landing());

//contentDiv.appendChild(Landing());
contentDiv.replaceWith(Landing());