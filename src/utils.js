
function clearElement(container, e){
	
	while (container.firstChild){
		container.removeChild(container.lastChild);
	}
	while(container.classList.length > 0){
		container.classList.remove(container.classList[0]);
	}
	const selectedNav = document.querySelector(".selected");
	selectedNav.classList.remove("selected");
	e.classList.add("selected");
}


export {clearElement};
