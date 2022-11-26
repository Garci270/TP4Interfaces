let containerCharacters = document.querySelectorAll('.container-card-character');
let characteres1 = document.querySelector('.zone-chars')
let characteres2 = document.querySelector('.zone-chars2')


window.addEventListener('scroll', () =>{
    if(window.scrollY >= 3500){
        characteres1.classList.remove('zone-active');
    }
    if(window.scrollY >= 4400){
        characteres2.classList.remove('zone-active');
    }
})





const itemsGameplay = document.querySelector('.list-galery');
const galeryNext = document.querySelector('.carousel-next');
const galeryPrev = document.querySelector('.carousel-prev');




galeryNext.addEventListener('click', ()=>{
	itemsGameplay.scrollLeft += 500;
	let lis = document.querySelectorAll(".slide-galery")
	lis.forEach(x =>{
		x.classList.remove('moveRightLi')
        x.classList.remove('moveLeftLi')
	})
	setTimeout(() =>{
		lis.forEach(x =>{
			x.classList.add('moveRightLi');
		})
	}, 100)
})
galeryPrev.addEventListener('click', ()=>{
	itemsGameplay.scrollLeft -= 500;
	let lis = document.querySelectorAll(".slide-galery")
	lis.forEach(x =>{
		x.classList.remove('moveLeftLi')
        x.classList.remove('moveRightLi')
	})
	setTimeout(() =>{
		lis.forEach(x =>{
			x.classList.add('moveLeftLi');
		})
	}, 100)
})

//scroll history

let img1scroll = document.querySelector("#img-1-scroll");
let img2scroll = document.querySelector("#img-2-scroll");
let img3scroll = document.querySelector("#img-3-scroll");
let card1scroll = document.querySelector("#card-1-scroll");
let card2scroll = document.querySelector("#card-2-scroll");
let card3scroll = document.querySelector("#card-3-scroll");
window.addEventListener('scroll', e =>{
    if(window.scrollY >= 1935 && window.scrollY < 2440){
        card1scroll.classList.add('opacity-set');
        card2scroll.classList.remove('opacity-set');
        card3scroll.classList.add('opacity-set');
        img1scroll.classList.add('opacity-set');
        img2scroll.classList.remove('opacity-set');
        img3scroll.classList.add('opacity-set');
    }else if(window.scrollY >= 2440){
        card1scroll.classList.add('opacity-set');
        card2scroll.classList.add('opacity-set');
        card3scroll.classList.remove('opacity-set');
        img1scroll.classList.add('opacity-set');
        img2scroll.classList.add('opacity-set');
        img3scroll.classList.remove('opacity-set');
    }
    else if(window.scrollY < 1935){
        card1scroll.classList.remove('opacity-set');
        card2scroll.classList.add('opacity-set');
        card3scroll.classList.add('opacity-set');
        img1scroll.classList.remove('opacity-set');
        img2scroll.classList.add('opacity-set');
        img3scroll.classList.add('opacity-set');
    }
})

//sprite
let contador = 1;
setInterval(()=>{
    const sprite = document.querySelector('#sprite');
    if(contador == 10){
        sprite.classList.remove('step-'+contador);
        sprite.classList.add('step-'+1);
        contador = 1;
    }else{
        sprite.classList.remove('step-'+contador);
        contador++;
        sprite.classList.add('step-'+contador);
    }
},300)

let slide1 = document.querySelector('#slide1');
let slide2 = document.querySelector('#slide2');
let slide3 = document.querySelector('#slide3');
let card1scrollFade = document.querySelector("#card-1-scroll");
let cardReservation = document.querySelector('#card-launch-fade');
window.addEventListener('scroll', e =>{
    if(window.scrollY >= 2770){
        slide1.classList.remove('card-1-fade');
        slide2.classList.remove('card-1-fade');
        slide3.classList.remove('card-1-fade');
    }else if(window.scrollY >= 320){
        cardReservation.classList.remove('card-1-fade');
    }
    if(window.scrollY >= 800){
        card1scrollFade.classList.remove('card-1-fade');
    }
})