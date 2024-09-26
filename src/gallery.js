import {createModal} from './popup.js';

const img_list = ["https://www.brasseriegeorges.com/wp-content/uploads/2016/11/jean-moulin-dr.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/leon-blum.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/alphonse-daudet.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/louis-auguste-lumiere.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/edith-piaf.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/antoine-de-saint-exupery.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/jules-verne.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/emile-zola.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/verlaine-paul.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/photo-la-carte-1",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/photo-galerie-1.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/photo-la-biere.jpg"
];

const guest_infos = [
	["Jean Moulin","time lived", "job"],
	["Leon Blum","time lived", "job"],
	["Alphonse Daudet","time lived", "job"],
	["Louis & Auguste Lumiere","time lived", "job"],
	["Edith Piaf","time lived", "job"],
	["Antoine de Saint Exupery","time lived", "job"],
	["Jules Verne","time lived", "job"],
	["Emile Zola","time lived", "job"],
	["Paul Verlaine","time lived", "job"],
];

function createGalleryGrid(container, size, key){
	const gridzone = document.createElement('div');
	gridzone.classList.add(`gallery_grid_${key}`);

	const grid_title = document.createElement('div');
	grid_title.classList.add("grid_title");
	grid_title.id = "grid_title";

	grid_title.textContent = "GRID TITLE HERE";

	for (let i = 0; i<size; i++){
		const gallery = document.createElement('div');
		gallery.id = `${key}-${i+1}`;
		gridzone.appendChild(gallery);
		createGallery(gallery)
	}


	gridzone.appendChild(grid_title);
	container.appendChild(gridzone);
}


function createGallery(gallery){
	const img = document.createElement('img');

	const re = /[0-9]/;
	const gallerynb = gallery.id.match(re)[0] -1;

	if (gallery.id !== "socials-"+gallery.id.match(re)[0]){
		img.src = img_list[gallerynb];
		img.addEventListener("click",(e) =>{
		createModal(guest_infos[gallerynb][0], `${guest_infos[gallerynb][1]} -${guest_infos[gallerynb][2]}` );
		})
		if (gallerynb == 4){
			img.classList.add('gallery_icon_md');
		}else{
			img.classList.add('gallery_icon');
		}
	}else{
		img.src = img_list[gallerynb+9];
		img.classList.add("social_gallery_icon");
	
	}
	
	gallery.appendChild(img)
}

export {createGalleryGrid, createGallery};
