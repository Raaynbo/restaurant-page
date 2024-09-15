
function historyPage(container){

	// container avec img background carrousel + logo 
	const hdate = document.createElement('div');
	const hgallery = document.createElement('div');
	hdate.classList.add("history_date");
	hgallery.classList.add("history_gallery");
	container.classList.add("history_layout");
	
	makeDateContent(hdate);

	container.appendChild(hdate);
	container.appendChild(hgallery);


}

function makeDateContent(container){
	const carrousel = document.createElement('div');
	const datebar = document.createElement('div');

	const carrousel_img = document.createElement('img');
	const carrousel_left = document.createElement('div'); 
	const carrousel_right = document.createElement('div'); 

	carrousel_img.classList.add("carrousel_img");
	carrousel_right.classList.add("carrousel_right");
	carrousel_left.classList.add("carrousel_left");
	carrousel.classList.add("carrousel");
	datebar.classList.add("datebar");

	carrousel.appendChild(carrousel_img);
	carrousel.appendChild(carrousel_left);
	carrousel.appendChild(carrousel_right);
	container.appendChild(carrousel);
	container.appendChild(datebar);

}


export {historyPage};
