import "./style.css";
import {homePage} from "./home.js";
console.log("restaurant-page");



const content = document.querySelector("#content");

console.log(content);

function createIndexContent(){
	let contentEl = document.createElement('div');
	contentEl.style['background-color'] = 'red';
	contentEl.style.width = '100px';
	contentEl.style.height = '100px';
	content.appendChild(contentEl);
}

homePage(content);
