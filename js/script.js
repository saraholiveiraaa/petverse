// variables
const header = document.querySelector("header"),
	bar = document.querySelector(".bar"),
	barContainer = document.querySelector(".bar-container"),
	icons = document.querySelector(".icons"),
	userBtn = document.querySelector(".user-btn"),
	cartBtn = document.querySelector(".cart-btn"),
	favBtn = document.querySelector(".fav-btn"),
	searchBtn = document.querySelector(".search-btn"),
	mediaQuerieDesktop = window.matchMedia("(max-width: 1025px)");

function mobileLayout() {
	// ativa as clases headerBottom e active quando o tamanho da tela for menor que 1025px (desktop)
	header.classList.toggle("headerBottom", mediaQuerieDesktop.matches);
	bar.classList.toggle("active", mediaQuerieDesktop.matches);
	barContainer.classList.toggle("active", mediaQuerieDesktop.matches);

	if (mediaQuerieDesktop.matches) {
		searchBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
		bar.appendChild(cartBtn);
		bar.appendChild(favBtn);
		bar.appendChild(userBtn);
		icons.appendChild(searchBtn);
	} else {
		searchBtn.innerHTML =
			'<i class="fa-solid fa-magnifying-glass"></i>Pesquisar';
		icons.appendChild(cartBtn);
		icons.appendChild(favBtn);
		icons.appendChild(userBtn);
	}
}

// chama a função mobileLayout() assim que a página carrega
document.body.onload = mobileLayout();
// verifica se a página está maior que 1025px e chama a função mobileLayout()
window.addEventListener("resize", mobileLayout);

// Barra fixa
window.onscroll = () => {
	if (window.scrollY !== 0 && window.matchMedia("(min-width: 1025px)")) {
		header.classList.add("sticky-header");
	} else {
		header.classList.remove("sticky-header");
	}
};

// userBtn.onclick = () => {
//   window.location.href = "src/my-account.html";
// };

// prepend: adicionar como primeiro filho

// function changesHeaderLocation() {
// 	if (window.scrollY != 0) {
// 		header.classList.add("headerBottom");
// 		bar.classList.add("active");
// 		barContainer.classList.add("active");
// 		bar.appendChild(mobileBtn);
// 		bar.appendChild(icons);
// 	} else {
// 		header.classList.remove("headerBottom");
// 		bar.classList.remove("active");
// 		barContainer.classList.remove("active");
// 		header.prepend(mobileBtn);
// 		header.appendChild(icons);
// 	}
// }
