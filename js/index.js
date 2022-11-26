var rolBtn = document.querySelector('#rolBtn');
rolBtn.addEventListener('click', function(){
	goToGame("Rol")
});

var gratisBtn = document.querySelector('#variedadBtn');
gratisBtn.addEventListener('click', function(){
	goToGame("Variedad")
});

var gratisBtn = document.querySelector('#gratisBtn');
gratisBtn.addEventListener('click', function(){
	goToGame("Gratis")
});

var gratisBtn = document.querySelector('#multijugadorBtn');
gratisBtn.addEventListener('click', function(){
	goToGame("Multijugador");
});

function goToGame(id){
	location.href = "#";
	location.href = "#"+id;
}

