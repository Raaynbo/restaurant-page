import {actualContent} from "./index.js";
import bg1 from './asset/bg1.jpg';
import bg2 from './asset/bg2.jpg';
import bg3 from './asset/bg3.jpg';
import bg4 from './asset/bg4.jpg';
import bg5 from './asset/bg5.jpg';

let focus = true;
let index = 0;
const img_list = [bg1,
		  bg2,
		  bg3,
		  bg4,
		  bg5];

function createCarrousel(){
	const carrousel = document.createElement('div');
	const carrousel_dir = document.createElement('div');

	const carrousel_img = document.createElement('img');
	const carrousel_left = document.createElement('div'); 
	const carrousel_right = document.createElement('div'); 
	carrousel_img.classList.add("carrousel_img");
	carrousel_right.classList.add("carrousel_right");
	carrousel_left.classList.add("carrousel_left");
	carrousel.classList.add("carrousel");
	carrousel_dir.classList.add("carrousel_dir");

	carrousel_left.textContent = "←";
	carrousel_right.textContent = "→";
	carrousel_dir.appendChild(carrousel_left);
	carrousel_dir.appendChild(carrousel_right);
	carrousel.appendChild(carrousel_img);
	carrousel.appendChild(carrousel_dir);



	return [carrousel, carrousel_img, carrousel_left, carrousel_right];
}

function createCarrouselNavbar() {

	const navbar = document.createElement('div');
	const navdata_1 = document.createElement('div');
	const navdata_2 = document.createElement('div');
	const navdata_3 = document.createElement('div');
	const navdata_4 = document.createElement('div');
	const navdata_5 = document.createElement('div');

	navdata_1.classList.add("carrousel_nav");
	navdata_1.classList.add("outer_data");
	navdata_2.classList.add("carrousel_nav");
	navdata_2.classList.add("inner_data");
	navdata_3.classList.add("carrousel_nav");
	navdata_3.classList.add("middle_data");
	navdata_4.classList.add("carrousel_nav");
	navdata_4.classList.add("inner_data");
	navdata_5.classList.add("carrousel_nav");
	navdata_5.classList.add("outer_data");

	navbar.classList.add("carrousel")
	navbar.classList.add("datebar")
	
	navdata_1.textContent = "4";
	navdata_2.textContent = "5";
	navdata_3.textContent = "1";
	navdata_4.textContent = "2";
	navdata_5.textContent = "3";

	navbar.appendChild(navdata_1);
	navbar.appendChild(navdata_2);
	navbar.appendChild(navdata_3);
	navbar.appendChild(navdata_4);
	navbar.appendChild(navdata_5);
	startProgressBar();
	return navbar;
}

function setMiddleNavbar(target){
	const middle = document.querySelector(".middle_data");
	index = target-1;
	middle.textContent = target;
	updateNavbar();
}

function updateNavbar(){
	const navdatas = document.querySelectorAll(".carrousel_nav")
		switch(index){
			case 0:
				navdatas[0].textContent = index+4;
				navdatas[1].textContent = index+5;
				navdatas[3].textContent = index+2;
				navdatas[4].textContent = index+3;
				break;
			case 1:
				navdatas[0].textContent = index+4;
				navdatas[1].textContent = index;
				navdatas[3].textContent = index+2;
				navdatas[4].textContent = index+3;
				break;
			case 2:
				navdatas[0].textContent = index-1;
				navdatas[1].textContent = index;
				navdatas[3].textContent = index+2;
				navdatas[4].textContent = index+3;
				break;
			case 3:
				navdatas[0].textContent = index-1;
				navdatas[1].textContent = index;
				navdatas[3].textContent = index+2;
				navdatas[4].textContent = index-2;
				break;
			case 4:
				navdatas[0].textContent = index-1;
				navdatas[1].textContent = index;
				navdatas[3].textContent = index-3;
				navdatas[4].textContent = index-2;
				break;
		}
		setCarrouselImg(index)
}

function setCarrouselImg(index){
	const el = document.querySelector(".carrousel_img");
	el.src = img_list[index];

}

function changeImgClick(el, direction){
	const middle = document.querySelector(".middle_data");
	switch (direction){
		case "left":
			index -= 1;
			if (index < 0){
				index= img_list.length-1;
			}
			break;
		case "right":
			index += 1;
			if (index == img_list.length){
				index = 0;
			}
			break;
	}
	el.src =  img_list[index];
}


function startProgressBar(){
	const progress = document.createElement('div');
	const bar  = document.createElement('div');

	progress.classList.add("progress");
	progress.classList.add("carrousel");
	bar.classList.add("bar");


	progress.appendChild(bar);

	return progress;
}



async function loadCarrouselBackground(el){
	resetProgressBar();
	el.src = img_list[index];
	if (actualContent == 2){
		await  updateProgressBar(el, 9000);
	}

}

function resetProgressBar(){
	const pb = document.querySelector(".bar");
	barWidth = 0;
	pb.style.width = `${barWidth}%`; 
}

async function updateProgressBar(el ){
		if (actualContent == 2){ 
		let intervalID = setInterval(() => {

		    if (barWidth >= 100) {
		      clearInterval(intervalID);
				updateCarrouselImg(el);
		    } else {
		      animate();
		    }
		  }, 10);
		}
}

let barWidth = 0;

const animate = () => {
	if (actualContent ==2) {
		barWidth += 0.1;
		const progressBar = document.querySelector(".bar");
		progressBar.style.width = `${barWidth}%`;
	}
};

async function updateCarrouselImg(el ) {
	const navbar = document.querySelectorAll(".carrousel_nav");
	navbar.forEach((pos) => {
		pos.style.animation = "roll_left 0.5s";
	})
	setTimeout(() => {
	navbar.forEach((pos) => {
		pos.style.animation = "";
	})
	},500);
			index < img_list.length-1 ? index++: index = 0;
			el.src = img_list[index];
			setMiddleNavbar(index+1);
			loadCarrouselBackground(el);
}
// --- utils
//

function getRandomInt(max){
	return Math.floor(Math.random() * max);
}

// main 
//let carrousel;
//let carrousel_img;
//let carrousel_left;
//let carrousel_right;
//
//[carrousel, carrousel_img, carrousel_left, carrousel_right] = createCarrousel();
//document.body.appendChild(carrousel);
//let navbar = createCarrouselNavbar();
//
//carrousel_left.addEventListener("click",(e) => changeImgClick(carrousel_img, "left"));
//carrousel_right.addEventListener("click",(e) => changeImgClick(carrousel_img, "right"));
//
//let navdatas = document.querySelectorAll(".carrousel_nav");
//
//navdatas.forEach((pos) => {
//	pos.addEventListener("click", (e) => {
//		setMiddleNavbar(e.target.textContent);
//	})
//})

//loadCarrouselBackground(carrousel_img);

export {createCarrousel, startProgressBar,setMiddleNavbar, createCarrouselNavbar, loadCarrouselBackground};
