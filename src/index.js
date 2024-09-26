import "./style.css";
import "./components.css";

import {homePage} from "./home.js";
import {historyPage} from "./history.js";
import {locationPage} from "./location.js";
import {socialPage} from "./socials.js";
import {clearElement} from "./utils.js";
console.log("restaurant-page");

let actualContent = 0;


const content = document.querySelector("#content");
const homebtn = document.querySelector("#home");
const historybtn = document.querySelector("#history");
const menubtn = document.querySelector("#location");
const aboutbtn = document.querySelector("#about");





homebtn.addEventListener("click", (e) => {
	clearElement(content, e.target);
	actualContent = 1;
	console.log(actualContent)
	homePage(content);
})
historybtn.addEventListener("click", (e) => {
	clearElement(content, e.target);
	actualContent = 2;
	console.log(actualContent)
	historyPage(content);
})
menubtn.addEventListener("click", (e) => {
	clearElement(content, e.target);
	actualContent = 3;
	console.log(actualContent)
	locationPage(content);
})
//aboutbtn.addEventListener("click", (e) => {
//	clearElement(content, e.target);
//	actualContent = 4;
//	console.log(actualContent)
//	socialPage(content);
//})


export {actualContent};
