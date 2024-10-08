import {createCarrousel,setMiddleNavbar, carrouselState, startProgressBar, createCarrouselNavbar, loadCarrouselBackground} from './carrousel.js';
import {createGallery, createGalleryGrid} from './gallery.js';
import logo_b from "./asset/logo-brasserie-georges.png";


const text = [
	["Alsatian Georges Hoffherr opens the Brasserie on the former Perrache marsh. The building was truly unique, with a single span ceiling of 710 m2 held uniquely by three huge pine beams. Commemorative plaques are attached to the seats to celebrate famous patrons.","Georges Hoffherr opens Brasserie Georges", "1836"],
	["After Georges Hoffherr dies, his son-in-law Mathieu Umdenstock takes over Brasserie Georges. During the golden years between 1880 and 1895, he opens four other famous Lyon brasseries: Dupuis, Thomassin, Du Parc and Café Bellecour.", "", "1873"],
	["In economic hardship, Brasserie Georges is acquired by Brasserie Rinck. Only four working brasseries remain in Lyon: Rinck, Winckler, Velten and Brasseries et Malteries Lyonnaises. They will all eventually disappear in the 1960s/70s.", "", "1937"],
	["World record for the largest Baked Alaska: 34 metres.", "","1996"],
	["700 MPs, alongside Prime Minister Lionel Jospin and his government, dine at the restaurant.", "", "2000"],
]


function historyPage(container){

	// container avec img background carrousel + logo 
	const hdate = document.createElement('div');
	const hgallery = document.createElement('div');
	const carrousel_container = document.createElement('div');
	hdate.classList.add("history_date");
	hgallery.classList.add("history_gallery");
	container.classList.add("history_layout");

	const title = document.createElement('div');
	title.classList.add("location_header");

	const logo = document.createElement('img');
	logo.classList.add("hdate_logo");
	logo.src = logo_b;

	title.appendChild(logo);
	hdate.appendChild(title);
	container.style.animation = "fadein 0.3s";
	//hdate_text.appendChild(hdate_text_title);
	//hdate_text.appendChild(hdate_text_detail);
	
	let hgallery_catchtext = createHgalleryContent();

	hgallery.appendChild(hgallery_catchtext);
	createGalleryGrid(hgallery, 9, "history");
	let [carrousel, carrousel_img, carrousel_left, carrousel_right] = createCarrousel();
	let navbar = createCarrouselNavbar();
	let progress = startProgressBar();
	
	
	carrousel_container.appendChild(carrousel);
	carrousel_container.appendChild(progress);
	carrousel_container.appendChild(navbar);
	hdate.appendChild(carrousel_container);
	container.appendChild(hdate);
	container.appendChild(hgallery);
	hgallery.style.animation = "fadein 0.3s";
	carrousel.style.animation = "fadein 0.3s";


	let navdatas = document.querySelectorAll(".carrousel_nav");

	navdatas.forEach((pos) => {
		pos.addEventListener("click", (e) => {
			carrouselState.focus = true;
			console.log(carrouselState.focus);
			//hdate_text_detail.textContent = text[(e.target.textContent-1)][0];
			//hdate_text_title.textContent = `${text[(e.target.textContent-1)][2]}  ${text[(e.target.textContent-1)][1]} `;
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
	const hgallery_catchtext_title = document.createElement('div');
	const hgallery_catchtext_content = document.createElement('div');

	hgallery_catchtext.classList.add("hgallery_catchtext");
	hgallery_catchtext_title.classList.add("hgallery_catchtext_title");
	hgallery_catchtext_content.classList.add("hgallery_catchtext_content");
	hgallery_catchtext_title.textContent = "BRASSERIE GEORGES, AN HISTORIC FIGURE IN LYON LIFE.";
	hgallery_catchtext_content.textContent = "Right from its opening in 1836, Brasserie Georges was a resounding success, graced by stars such as Alphonse de Lamartine. And as it happens, accounts from 1857 show the French writer still owes 40 francs. Many of France’s greatest names have passed through its doors, including Paul Verlaine, Jules Verne, Utrillo, Jongkind, the Lumière brothers, Edouard Herriot, Mistinguett, Léon Blum, Emile Zola and Rodin. Commemorative plaques are fitted to the seats to mark the visits of such public figures."; 

	hgallery_catchtext.appendChild(hgallery_catchtext_title);
	hgallery_catchtext.appendChild(hgallery_catchtext_content);
	return hgallery_catchtext;
}

export {historyPage};
