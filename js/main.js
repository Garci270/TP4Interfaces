


//NavBar Scroll
let nav = document.querySelector('#nav');
let search = document.querySelector('#searchNav');
let btnsNav = document.querySelectorAll('.btnNav');


window.addEventListener("scroll",e=>{
	var elementTop = window.scrollY;
	if(elementTop == 0){
		nav.classList.remove('nav-change');
		search.classList.remove('noneSearch');
		btnsNav.forEach(e => {
			e.classList.remove('buttonScroll');
		});
		logoNav.classList.remove('logoNavsmall');
	}else{
		nav.classList.add('nav-change');
		search.classList.add('noneSearch');
		btnsNav.forEach(e => {
			e.classList.add('buttonScroll');
		});
		logoNav.classList.add('logoNavsmall');
		
	}
})
//Boton menu de hamburgesa

const buttonHambur = document.querySelector(".hambur");
buttonHambur.addEventListener('click', () =>{
	buttonHambur.classList.toggle('open')
	document.querySelector(".container-carrito-games").classList.remove("active-cart");
    document.querySelector(".menu-hamburgesa").classList.toggle("active-ham");
	setTimeout(() =>{
		document.querySelector(".img-user img").classList.add("active-menu");
	}, 1000)
	setTimeout(() =>{
		document.querySelector(".name-user h4").classList.add("active-menu")
	}, 2000)
	setTimeout(() =>{
		document.querySelector(".container-redes ul").classList.add("active-menu");
	}, 3000)
	setTimeout(() =>{
		document.querySelector(".container-items ul").classList.add("active-redes");
	}, 4500)

})

//Boton carrito
document.querySelector("#cart").addEventListener("click", toggleMenuCart);
function toggleMenuCart() {
	document.querySelector(".menu-hamburgesa").classList.remove("mostrar-hambur");
    document.querySelector(".container-carrito-games").classList.toggle("active-cart");
}

//Boton modal lanzamiento
if(document.querySelector("#compartir-juego")){
	document.querySelector("#compartir-juego").addEventListener("click", toggleCompartirModal);
	function toggleCompartirModal() {
		document.querySelector(".container-modal").classList.toggle("active-modal");
	}
	//Boton modal lanzamiento
	document.querySelector("#cruz-modal").addEventListener("click", toggleCerrarModal);
	function toggleCerrarModal() {
		document.querySelector(".container-modal").classList.remove("active-modal");
	}
}


//CARROUSEL DE JUEGOS PAGOS
const pagos = document.querySelectorAll('.pagos');
const nextPagos = document.querySelector('.flecha-d-pagos');
const prevPagos = document.querySelector('.flecha-i-pagos');
console.log(pagos)

window.addEventListener('load', ()=>{
	pagos[0].classList.add('active');
	pagos[1].classList.add('active');
	pagos[2].classList.add('active');
	pagos[3].classList.add('active');
})

nextPagos.addEventListener('click', () =>{
	paginationTwoPagos();
})

prevPagos.addEventListener('click',() =>{
	paginationOnePagos();
})
const paginationOnePagos = () =>{
	pagos[4].classList.remove('active');
	pagos[5].classList.remove('active');
	pagos[6].classList.remove('active');
	pagos[7].classList.remove('active');
	pagos[0].classList.add('active');
	pagos[1].classList.add('active');
	pagos[2].classList.add('active');
	pagos[3].classList.add('active');
}

const paginationTwoPagos = () =>{
	pagos[0].classList.remove('active');
	pagos[1].classList.remove('active');
	pagos[2].classList.remove('active');
	pagos[3].classList.remove('active');
	pagos[4].classList.add('active');
	pagos[5].classList.add('active');
	pagos[6].classList.add('active');
	pagos[7].classList.add('active');
}

//CARROUSEL JUEGOS GRATIS

const gratis = document.querySelectorAll('.gratis');
const nextGratis = document.querySelector('.flecha-d-gratis');
const prevGratis = document.querySelector('.flecha-i-gratis');
console.log(gratis)

window.addEventListener('load', ()=>{
	gratis[0].classList.add('active');
	gratis[1].classList.add('active');
	gratis[2].classList.add('active');
	gratis[3].classList.add('active');
})

nextGratis.addEventListener('click', () =>{
	paginationTwoGratis();
})

prevGratis.addEventListener('click',() =>{
	paginationOneGratis();
})
const paginationOneGratis = () =>{
	gratis[4].classList.remove('active');
	gratis[5].classList.remove('active');
	gratis[6].classList.remove('active');
	gratis[7].classList.remove('active');
	gratis[0].classList.add('active');
	gratis[1].classList.add('active');
	gratis[2].classList.add('active');
	gratis[3].classList.add('active');
}

const paginationTwoGratis = () =>{
	gratis[0].classList.remove('active');
	gratis[1].classList.remove('active');
	gratis[2].classList.remove('active');
	gratis[3].classList.remove('active');
	gratis[4].classList.add('active');
	gratis[5].classList.add('active');
	gratis[6].classList.add('active');
	gratis[7].classList.add('active');
}

//CARROUSEL JUEGOS DE VARIEDAD

const variedad = document.querySelectorAll('.variedad');
const nextVariedad = document.querySelector('.flecha-d-variedad');
const prevVariedad = document.querySelector('.flecha-i-variedad');
console.log(variedad)

window.addEventListener('load', ()=>{
	variedad[0].classList.add('active');
	variedad[1].classList.add('active');
	variedad[2].classList.add('active');
	variedad[3].classList.add('active');
})

nextVariedad.addEventListener('click', () =>{
	paginationTwoVariedad();
})

prevVariedad.addEventListener('click',() =>{
	paginationOneVariedad();
})
const paginationOneVariedad = () =>{
	variedad[4].classList.remove('active');
	variedad[5].classList.remove('active');
	variedad[6].classList.remove('active');
	variedad[7].classList.remove('active');
	variedad[0].classList.add('active');
	variedad[1].classList.add('active');
	variedad[2].classList.add('active');
	variedad[3].classList.add('active');
}

const paginationTwoVariedad = () =>{
	variedad[0].classList.remove('active');
	variedad[1].classList.remove('active');
	variedad[2].classList.remove('active');
	variedad[3].classList.remove('active');
	variedad[4].classList.add('active');
	variedad[5].classList.add('active');
	variedad[6].classList.add('active');
	variedad[7].classList.add('active');
}

//CARROUSEL JUEGOS DE MULTIJUGADOR

const multijugador = document.querySelectorAll('.multijugador');
const nextMultijugador = document.querySelector('.flecha-d-multijugador');
const prevMultijugador = document.querySelector('.flecha-i-multijugador');
console.log(multijugador)

window.addEventListener('load', ()=>{
	multijugador[0].classList.add('active');
	multijugador[1].classList.add('active');
	multijugador[2].classList.add('active');
	multijugador[3].classList.add('active');
})

nextMultijugador.addEventListener('click', () =>{
	paginationTwoMultijugador();
})

prevMultijugador.addEventListener('click',() =>{
	paginationOneMultijugador();
})
const paginationOneMultijugador = () =>{
	multijugador[4].classList.remove('active');
	multijugador[5].classList.remove('active');
	multijugador[6].classList.remove('active');
	multijugador[7].classList.remove('active');
	multijugador[0].classList.add('active');
	multijugador[1].classList.add('active');
	multijugador[2].classList.add('active');
	multijugador[3].classList.add('active');
}

const paginationTwoMultijugador = () =>{
	multijugador[0].classList.remove('active');
	multijugador[1].classList.remove('active');
	multijugador[2].classList.remove('active');
	multijugador[3].classList.remove('active');
	multijugador[4].classList.add('active');
	multijugador[5].classList.add('active');
	multijugador[6].classList.add('active');
	multijugador[7].classList.add('active');
}

//CARROUSEL JUEGOS DE MULTIJUGADOR

const personalizado = document.querySelectorAll('.personalizado');
const nextPersonalizado = document.querySelector('.flecha-d-personalizado');
const prevPersonalizado = document.querySelector('.flecha-i-personalizado');
console.log(personalizado)

window.addEventListener('load', ()=>{
	personalizado[0].classList.add('active');
	personalizado[1].classList.add('active');
	personalizado[2].classList.add('active');
})

nextPersonalizado.addEventListener('click', () =>{
	paginationTwoPersonalizado();
})

prevPersonalizado.addEventListener('click',() =>{
	paginationOnePersonalizado();
})
const paginationOnePersonalizado = () =>{
	personalizado[4].classList.remove('active');
	personalizado[5].classList.remove('active');
	personalizado[3].classList.remove('active');
	personalizado[0].classList.add('active');
	personalizado[1].classList.add('active');
	personalizado[2].classList.add('active');
}

const paginationTwoPersonalizado = () =>{
	personalizado[0].classList.remove('active');
	personalizado[1].classList.remove('active');
	personalizado[2].classList.remove('active');
	personalizado[3].classList.add('active');
	personalizado[4].classList.add('active');
	personalizado[5].classList.add('active');
}

//CARROUSEL JUEGOS DE ROL

const rol = document.querySelectorAll('.rol');
const nextRol = document.querySelector('.flecha-d-rol');
const prevRol = document.querySelector('.flecha-i-rol');
console.log(rol)

window.addEventListener('load', ()=>{
	rol[0].classList.add('active');
	rol[1].classList.add('active');
	rol[2].classList.add('active');
})

nextRol.addEventListener('click', () =>{
	paginationTwoRol();
})

prevRol.addEventListener('click',() =>{
	paginationOneRol();
})
const paginationOneRol = () =>{
	rol[4].classList.remove('active');
	rol[5].classList.remove('active');
	rol[3].classList.remove('active');
	rol[0].classList.add('active');
	rol[1].classList.add('active');
	rol[2].classList.add('active');
}

const paginationTwoRol = () =>{
	rol[0].classList.remove('active');
	rol[1].classList.remove('active');
	rol[2].classList.remove('active');
	rol[3].classList.add('active');
	rol[4].classList.add('active');
	rol[5].classList.add('active');
}


//LOADING

var progress = 0;
var timer;
var progressBar = document.querySelector('.progress-bar');
var components = document.querySelectorAll('.spinner-on');
var container = document.querySelector('.container-spinner');


timer = window.setInterval(function() {
	if(progress < 100){
		progress += 20;
		setTimeout(() => changeProgress(progress), 1000);
		progressBar.innerHTML = '%' + progress;
	}else if(progress == 100){
		components.forEach(e =>{
			e.classList.remove('spinner-on');
			container.classList.add('spinner-on');
		})
	}
}, 1000);

const progressbar = document.querySelector(".progress");

const changeProgress = (progress) => {
  progressbar.style.width = `${progress}%`;
};

 

