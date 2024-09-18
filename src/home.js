 function homePage(container){
	//
	// container avec img background carrousel + logo 
	const logo = document.createElement("img");
	const hometxt = document.createElement('div');
	logo.classList.add("home_logo");
	hometxt.classList.add("home_intro");
	container.classList.add("home_layout")
	
	hometxt.textContent = "balskbaljbjfgaoigak [o fhpi qo pf oshduffsuojdfi p wjifhsdi fsf hsf i fopf s hs uvspi - i suoi " 
	
	container.appendChild(logo);
	container.appendChild(hometxt);
	
	logo.style.animation = "fadein 0.3s";
	hometxt.style.animation = "fadein 0.3s";
}

export {homePage};
