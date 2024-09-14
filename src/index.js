import "./style.css";
import {homePage} from "./home.js";
import {historyPage} from "./history.js";
import {clearElement} from "./utils.js";
console.log("restaurant-page");



const content = document.querySelector("#content");
const homebtn = document.querySelector("#home");
const historybtn = document.querySelector("#history");
const menubtn = document.querySelector("#menu");
const aboutbtn = document.querySelector("#about");

console.log(content);

function createIndexContent(){
	let contentEl = document.createElement('div');
	contentEl.style['background-color'] = 'red';
	contentEl.style.width = '100px';
	contentEl.style.height = '100px';
	content.appendChild(contentEl);
}



homebtn.addEventListener("click", (e) => {
	clearElement(content, e.target);
	homePage(content);
})
historybtn.addEventListener("click", (e) => {
	clearElement(content, e.target);
	historyPage(content);
})
menubtn.addEventListener("click", (e) => {
	clearElement(content, e.target);
})
aboutbtn.addEventListener("click", (e) => {
	clearElement(content, e.target);
})
