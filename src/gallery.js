
const img_list = [
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/jean-moulin-dr.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/leon-blum.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/alphonse-daudet.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/louis-auguste-lumiere.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/edith-piaf.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/antoine-de-saint-exupery.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/jules-verne.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/emile-zola.jpg",
	"https://www.brasseriegeorges.com/wp-content/uploads/2016/11/verlaine-paul.jpg"
]

function createGalleryGrid(container){
	const gridzone = document.createElement('div');
	gridzone.classList.add("gallery_grid");


	const gallery1 = document.createElement('div');
	const gallery2 = document.createElement('div');
	const gallery3 = document.createElement('div');
	const gallery4 = document.createElement('div');
	const gallery5 = document.createElement('div');
	const gallery6 = document.createElement('div');
	const gallery7 = document.createElement('div');
	const gallery8 = document.createElement('div');
	const gallery9 = document.createElement('div');
	gallery1.id = "gallery1";
	gallery2.id = "gallery2";
	gallery3.id = "gallery3";
	gallery4.id = "gallery4";
	gallery5.id = "gallery5";
	gallery6.id = "gallery6";
	gallery7.id = "gallery7";
	gallery8.id = "gallery8";
	gallery9.id = "gallery9";

	gridzone.appendChild(gallery1)
	gridzone.appendChild(gallery2)
	gridzone.appendChild(gallery3)
	gridzone.appendChild(gallery4)
	gridzone.appendChild(gallery5)
	gridzone.appendChild(gallery6)
	gridzone.appendChild(gallery7)
	gridzone.appendChild(gallery8)
	gridzone.appendChild(gallery9)

	container.appendChild(gridzone);
	createGallery(gallery1)
	createGallery(gallery2)
	createGallery(gallery3)
	createGallery(gallery4)
	createGallery(gallery5)
	createGallery(gallery6)
	createGallery(gallery7)
	createGallery(gallery8)
	createGallery(gallery9)
}

function createGallery(gallery){
	const img = document.createElement('img');

	console.log(gallery);
	const re = /[0-9]/;
	const gallerynb = gallery.id.match(re);
	console.log(gallerynb[0])

	if (gallerynb[0] == 5){
		img.classList.add('gallery_icon_md');
	}else{
		img.classList.add('gallery_icon');
	}
	img.src = img_list[gallerynb[0]-1];
	gallery.appendChild(img)
}

export {createGalleryGrid, createGallery};
