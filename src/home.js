import logo_b from "./asset/logo-brasserie-georges.png";


 function homePage(container){
	//
	// container avec img background carrousel + logo 
	const logo = document.createElement("img");
	const logobox = document.createElement("div");
	const hometxt = document.createElement('div');
	hometxt.classList.add("home_intro");
	logobox.classList.add("home_logobox");
	container.classList.add("home_layout")
	
	logo.src = logo_b;
	hometxt.textContent = "FINE FOOD, FINE BEER SINCE 1836" 
	
	logobox.appendChild(logo)
	container.appendChild(logobox);
	container.appendChild(hometxt);
	
	logo.style.animation = "fadein 0.3s";
	hometxt.style.animation = "fadein 0.3s";
}

export {homePage};
