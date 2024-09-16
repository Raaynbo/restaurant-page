import {createCarrousel,setMiddleNavbar, startProgressBar, createCarrouselNavbar, loadCarrouselBackground} from './carrousel.js';



function historyPage(container){

	// container avec img background carrousel + logo 
	const hdate = document.createElement('div');
	const hgallery = document.createElement('div');
	hdate.classList.add("history_date");
	hgallery.classList.add("history_gallery");
	container.classList.add("history_layout");
	

	let [carrousel, carrousel_img, carrousel_left, carrousel_right] = createCarrousel();
	let navbar = createCarrouselNavbar();
	let progress = startProgressBar();
	
	hdate.appendChild(carrousel);
	hdate.appendChild(navbar);
	hdate.appendChild(progress);
	container.appendChild(hdate);
	container.appendChild(hgallery);


	carrousel_left.addEventListener("click",(e) => changeImgClick(carrousel_img, "left"));
	carrousel_right.addEventListener("click",(e) => changeImgClick(carrousel_img, "right"));

	let navdatas = document.querySelectorAll(".carrousel_nav");

	navdatas.forEach((pos) => {
		pos.addEventListener("click", (e) => {
			setMiddleNavbar(e.target.textContent);
		})
	})

	loadCarrouselBackground(carrousel_img);
}




export {historyPage};
