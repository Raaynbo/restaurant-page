import {createCarrousel,setMiddleNavbar, carrouselState, startProgressBar, createCarrouselNavbar, loadCarrouselBackground} from './carrousel.js';
import {createGallery, createGalleryGrid} from './gallery.js';
import logo_b from "./asset/logo-brasserie-georges.png";


function historyPage(container){

	// container avec img background carrousel + logo 
	const hdate = document.createElement('div');
	const hgallery = document.createElement('div');
	hdate.classList.add("history_date");
	hgallery.classList.add("history_gallery");
	container.classList.add("history_layout");

	let [hdate_text, hdate_text_title, hdate_logo, hdate_text_detail] = createTextHdate();

	hdate.appendChild(hdate_text);
	hdate_text.appendChild(hdate_logo);
	hdate_text.appendChild(hdate_text_title);
	hdate_text.appendChild(hdate_text_detail);
	
	let hgallery_catchtext = createHgalleryContent();

	hgallery.appendChild(hgallery_catchtext);
	createGalleryGrid(hgallery);
	let [carrousel, carrousel_img, carrousel_left, carrousel_right] = createCarrousel();
	let navbar = createCarrouselNavbar();
	let progress = startProgressBar();
	
	hdate.appendChild(carrousel);
	hdate.appendChild(navbar);
	hdate.appendChild(progress);
	container.appendChild(hdate);
	container.appendChild(hgallery);
	hdate.style.animation = "fadein 0.3s";


	carrousel_left.addEventListener("click",(e) => changeImgClick(carrousel_img, "left"));
	carrousel_right.addEventListener("click",(e) => changeImgClick(carrousel_img, "right"));

	let navdatas = document.querySelectorAll(".carrousel_nav");

	navdatas.forEach((pos) => {
		pos.addEventListener("click", (e) => {
			carrouselState.focus = true;
			console.log(carrouselState.focus);
			setMiddleNavbar(e.target.textContent);
		})
	})

	loadCarrouselBackground(carrousel_img);
}


function createTextHdate(){
	const hdate_text = document.createElement('div');
	const hdate_text_title = document.createElement('div');
	const hdate_logo = document.createElement('img');
	hdate_text.classList.add("history_date_textzone");
	hdate_text.classList.add("history_date_textzone");
	hdate_logo.classList.add("hdate_logo");
	
	hdate_logo.src = logo_b; 

	hdate_text_title.textContent = " THIS IS THE ZONE FOR FUN FACTS AND OTHER BULLSHIT";

	const hdate_text_detail = document.createElement('div');
	hdate_text_title.classList.add("hdate_text_title");
	hdate_text_detail.classList.add("hdate_text_detail");

	hdate_text_detail.textContent = "Smoll text heersr and there you know it wont be that long ";

	return [hdate_text, hdate_text_title, hdate_logo, hdate_text_detail];
}

function createHgalleryContent(){
	const hgallery_catchtext = document.createElement('div');

	hgallery_catchtext.classList.add("hgallery_catchtext");
	hgallery_catchtext.textContent = "These people came here to enjoy their meal, we celebrate their venue with a plate on their table"; 

	return hgallery_catchtext;
}

export {historyPage};
