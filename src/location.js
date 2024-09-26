console.log("location-page");
import logo_b from "./asset/logo-brasserie-georges.png";

const txts = [
	"PARKING Gare de Perrache car park – 700 places accessible via Quai Rambaud or Quai Gailleton, follow signs for ‘Verdun-Perrache’. Parking des Archives – located 200 meters from the Brasserie with 649 places across 8 levels, accessible via Cours Charlemagne.",
	"Opening hours Weekdays: 11:30am to 11:00pm (continuous service)Fridays, Saturdays and days before bank holidays: 11:30am to 00:15am",
	"Address 30, Cours de Verdun 69002 LYON Perrache 45.748207, 4.828350",
	"Téléphone : Tel : +33 (0)4 72 56 54 54  "
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
	container.style.animation = "fadein 0.3s";
	

	const location_txt = document.createElement('div');
	const location_txt_1 = document.createElement('div');
	const location_txt_2 = document.createElement('div');
	const location_txt_3 = document.createElement('div');
	const location_txt_4 = document.createElement('div');
	location_txt_1.textContent = txts[0];
	location_txt_2.textContent = txts[1];
	location_txt_3.textContent = txts[2];
	location_txt_4.textContent = txts[3];

	location_txt.classList.add("location_txt");
	location_txt_1.classList.add("location_txt_part");
	location_txt_2.classList.add("location_txt_part");
	location_txt_2.classList.add("right");
	location_txt_3.classList.add("location_txt_part");	
	location_txt_4.classList.add("location_txt_part");	
	location_txt_4.classList.add("right");

	location_txt.appendChild(location_txt_1);
	location_txt.appendChild(location_txt_2);
	location_txt.appendChild(location_txt_3);
	location_txt.appendChild(location_txt_4);
	
	// play animation to display element after waiting awhile
	setTimeout(() => {
		container.appendChild(location_txt);
		location_txt_1.style.animation = "fadein 0.3s";
		location_txt_2.style.animation = "fadein 0.3s";
		location_txt_3.style.animation = "fadein 0.3s";
	}, 300);

}

export {locationPage};
