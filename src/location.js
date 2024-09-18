console.log("location-page");
import logo_b from "./asset/logo-brasserie-georges.png";

const txts = [
	"",
	"",
	""
];

function locationPage(container){
	container.classList.add("location_layout");
	const title = document.createElement('div');
	title.classList.add("location_header");

	const logo = document.createElement('img');
	logo.classList.add("hdate_logo");
	logo.src = logo_b;

	title.appendChild(logo);
	container.appendChild(title);
	title.style.animation = "fadein 0.3s";
	

	const location_txt = document.createElement('div');
	const location_txt_1 = document.createElement('div');
	const location_txt_2 = document.createElement('div');
	const location_txt_3 = document.createElement('div');
	location_txt_1.textContent = "SOME Tetxt WILL GOES HERE BUT FOR NOW ITS EMPTY SORRY";
	location_txt_2.textContent = "SOME Tetxt WILL GOES HERE BUT FOR NOW ITS EMPTY SORRY";
	location_txt_3.textContent = "SOME Tetxt WILL GOES HERE BUT FOR NOW ITS EMPTY SORRY";

	location_txt.classList.add("location_txt");
	location_txt_1.classList.add("location_txt_part");
	location_txt_2.classList.add("location_txt_part");
	location_txt_2.classList.add("right");
	location_txt_3.classList.add("location_txt_part");	

	location_txt.appendChild(location_txt_1);
	location_txt.appendChild(location_txt_2);
	location_txt.appendChild(location_txt_3);
	
	// play animation to display element after waiting awhile
	setTimeout(() => {
		container.appendChild(location_txt);
		location_txt_1.style.animation = "fadein 0.3s";
		location_txt_2.style.animation = "fadein 0.3s";
		location_txt_3.style.animation = "fadein 0.3s";
	}, 300);

}

export {locationPage};
