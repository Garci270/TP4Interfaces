document.addEventListener('DOMContentLoaded', () => {
    let control;
    let timer = 300;
    let first_move = true;
    let pausado = false;
    let timerHt = document.querySelector('.timerH4');
    let fichas = document.querySelector('#fichasNone');
    let fichas1 = document.querySelector('.fichas1');
    let fichas2 = document.querySelector('.fichas2');
    let size0 = document.querySelector('.size0');
    let size4 = document.querySelector('.size4');
    let size5 = document.querySelector('.size5');
    let size6 = document.querySelector('.size6');
    let size8 = document.querySelector('.size8');
    let canvas = document.getElementById('canvasGame');
    let btnReset = document.getElementById('restartGame');
    let img = document.querySelectorAll('.ficha');
    let img2 = document.querySelectorAll('.ficha2');
    let reiniciar = document.getElementById('restartGame');
    let srcimg = "./assets/ficha2.jpg";
    let srcimg2 = "./assets/ficha1.jpg";
    canvas.width = 800;
    canvas.height = 650;
    let ctx = canvas.getContext('2d');
    timerHt.innerHTML = timer + " segundos";
    let juego1 = new Juego(ctx, canvas.width, canvas.height,0);
    juego1.draw();
    juego1.selectLinea();
    canvas.addEventListener('mousedown', (eMouseDown) => {
        if (juego1.checkHit(eMouseDown.offsetX, eMouseDown.offsetY)) {
            canvas.addEventListener('mousemove', (eMouseMove) => {
                juego1.handleDrag(eMouseMove.offsetX, eMouseMove.offsetY);
            });

        }
    })
    canvas.addEventListener('mouseup', (eMouseUp) => {
        canvas.removeEventListener('mousemove', juego1.handleDrag);
        juego1.stopDragging();
    })
    function newGame() {
        fichas.classList.add('noneSize');
        fichas1.classList.add('noneSize');
        fichas2.classList.add('noneSize');
        pausado = true;
        parar();
        juego1 = new Juego(ctx, canvas.width, canvas.height,0);
        juego1.draw();
        juego1.selectLinea();
    }
    btnReset.addEventListener("click", newGame)
    img.forEach(element => {
        element.addEventListener('click', () => {
            srcimg2 = element.src;
            juego1.cambiarFicha1(element.src)
        })
    });
    img2.forEach(element => {
        element.addEventListener('click', () => {
            srcimg = element.src;
            juego1.cambiarFicha2(element.src)
        })
    });

    function inicio(){
      control = setInterval(function(){
            if(!pausado && juego1.gameOver == false){
                timerHt.innerHTML = timer + " segundos";
                timer--;
                if(timer == -1){
                    pausado = true;
                    juego1.empate();
                    parar();
                }
            }else{
                timer = 300;
                timerHt.innerHTML = timer + " segundos";
                parar();
            }
        },1000);
    }

    function parar(){
        clearInterval(control);
    }

    size4.addEventListener("click", () => {
        timer = 300;
        pausado = false;
        first_move = true;
        fichas1.classList.remove('noneSize');
        fichas2.classList.remove('noneSize');
        fichas.classList.remove('noneSize');
        size0.classList.remove('noneSize');
        size4.classList.add('noneSize');
        size5.classList.add('noneSize');
        size6.classList.add('noneSize');
        size8.classList.add('noneSize');
        let canvas = document.getElementById('canvasGame');
        let btnReset = document.getElementById('restartGame');
        let img = document.querySelectorAll('.ficha');
        let img2 = document.querySelectorAll('.ficha2');
        let srcimg = "./assets/ficha2.jpg";
        let srcimg2 = "./assets/ficha1.jpg";
        reiniciar.disabled= false
        canvas.width = 800;
        canvas.height = 650;
        let ctx = canvas.getContext('2d');
        juego1 = new Juego(ctx, canvas.width, canvas.height, size4.value);
        juego1.draw();
        canvas.addEventListener('mousedown', (eMouseDown) => {
            if(first_move){
                if (juego1.checkHit(eMouseDown.offsetX, eMouseDown.offsetY)) {
                    canvas.addEventListener('mousemove', (eMouseMove) => {
                        juego1.handleDrag(eMouseMove.offsetX, eMouseMove.offsetY);
                    });
                }
                first_move = false;
                inicio();
            }else{
                if (juego1.checkHit(eMouseDown.offsetX, eMouseDown.offsetY)) {
                    canvas.addEventListener('mousemove', (eMouseMove) => {
                        juego1.handleDrag(eMouseMove.offsetX, eMouseMove.offsetY);
                    });
                }
            }
        })
        canvas.addEventListener('mouseup', (eMouseUp) => {
            canvas.removeEventListener('mousemove', juego1.handleDrag);
            juego1.stopDragging();
        })
        function newGame() {
            fichas.classList.add('noneSize');
            fichas1.classList.add('noneSize');
            fichas2.classList.add('noneSize');
            pausado = true;
            parar();
            juego1 = new Juego(ctx, canvas.width, canvas.height,0);
            juego1.draw();
            juego1.selectLinea();
        }
        btnReset.addEventListener("click", newGame)
        img.forEach(element => {
            element.addEventListener('click', () => {
                srcimg2 = element.src;
                juego1.cambiarFicha1(element.src)
                fichas2.classList.add('noneSize');
            })
        });
        img2.forEach(element => {
            element.addEventListener('click', () => {
                srcimg = element.src;
                juego1.cambiarFicha2(element.src)
                fichas1.classList.add('noneSize');
            })
        });
    })
    size5.addEventListener("click", () => {
        timer = 300;
        pausado = false;
        first_move = true;
        fichas1.classList.remove('noneSize');
        fichas2.classList.remove('noneSize');
        fichas.classList.remove('noneSize');
        fichas.classList.remove('noneSize');
        size0.classList.remove('noneSize');
        size4.classList.add('noneSize');
        size5.classList.add('noneSize');
        size6.classList.add('noneSize');
        size8.classList.add('noneSize');
        reiniciar.disabled= false
        let canvas = document.getElementById('canvasGame');
        let btnReset = document.getElementById('restartGame');
        let img = document.querySelectorAll('.ficha');
        let img2 = document.querySelectorAll('.ficha2');
        let srcimg = "./assets/ficha2.jpg";
        let srcimg2 = "./assets/ficha1.jpg";
        canvas.width = 800;
        canvas.height = 650;
        let ctx = canvas.getContext('2d');
        juego1 = new Juego(ctx, canvas.width, canvas.height, size5.value);
        juego1.draw();
        canvas.addEventListener('mousedown', (eMouseDown) => {
            if(first_move){
                if (juego1.checkHit(eMouseDown.offsetX, eMouseDown.offsetY)) {
                    canvas.addEventListener('mousemove', (eMouseMove) => {
                        juego1.handleDrag(eMouseMove.offsetX, eMouseMove.offsetY);
                    });
                }
                first_move = false;
                inicio();
            }else{
                if (juego1.checkHit(eMouseDown.offsetX, eMouseDown.offsetY)) {
                    canvas.addEventListener('mousemove', (eMouseMove) => {
                        juego1.handleDrag(eMouseMove.offsetX, eMouseMove.offsetY);
                    });
                }
            }
        })
        canvas.addEventListener('mouseup', (eMouseUp) => {
            canvas.removeEventListener('mousemove', juego1.handleDrag);
            juego1.stopDragging();
        })
        function newGame() {
            fichas.classList.add('noneSize');
            fichas1.classList.add('noneSize');
            fichas2.classList.add('noneSize');
            pausado = true;
            parar();
            juego1 = new Juego(ctx, canvas.width, canvas.height, 0);
            juego1.draw();
            juego1.selectLinea();
        }
        btnReset.addEventListener("click", newGame)
        img.forEach(element => {
            element.addEventListener('click', () => {
                srcimg2 = element.src;
                juego1.cambiarFicha1(element.src)
                fichas2.classList.add('noneSize');
            })
        });
        img2.forEach(element => {
            element.addEventListener('click', () => {
                srcimg = element.src;
                juego1.cambiarFicha2(element.src)
                fichas1.classList.add('noneSize');
            })
        });
    })

    size6.addEventListener("click", () => {
        timer = 300;
        pausado = false;
        first_move = true;
        fichas1.classList.remove('noneSize');
        fichas2.classList.remove('noneSize');
        fichas.classList.remove('noneSize');
        fichas.classList.remove('noneSize');
        size0.classList.remove('noneSize');
        size4.classList.add('noneSize');
        size5.classList.add('noneSize');
        size6.classList.add('noneSize');
        size8.classList.add('noneSize');
        reiniciar.disabled= false
        let canvas = document.getElementById('canvasGame');
        let btnReset = document.getElementById('restartGame');
        let img = document.querySelectorAll('.ficha');
        let img2 = document.querySelectorAll('.ficha2');
        let srcimg = "./assets/ficha2.jpg";
        let srcimg2 = "./assets/ficha1.jpg";
        canvas.width = 800;
        canvas.height = 650;
        let ctx = canvas.getContext('2d');

        juego1 = new Juego(ctx, canvas.width, canvas.height, size6.value);
        juego1.draw();
        canvas.addEventListener('mousedown', (eMouseDown) => {
            if(first_move){
                if (juego1.checkHit(eMouseDown.offsetX, eMouseDown.offsetY)) {
                    canvas.addEventListener('mousemove', (eMouseMove) => {
                        juego1.handleDrag(eMouseMove.offsetX, eMouseMove.offsetY);
                    });
                }
                first_move = false;
                inicio();
            }else{
                if (juego1.checkHit(eMouseDown.offsetX, eMouseDown.offsetY)) {
                    canvas.addEventListener('mousemove', (eMouseMove) => {
                        juego1.handleDrag(eMouseMove.offsetX, eMouseMove.offsetY);
                    });
                }
            }
        })
        canvas.addEventListener('mouseup', (eMouseUp) => {
            canvas.removeEventListener('mousemove', juego1.handleDrag);
            juego1.stopDragging();
        })
        function newGame() {
            fichas.classList.add('noneSize');
            fichas1.classList.add('noneSize');
            fichas2.classList.add('noneSize');
            pausado = true;
            parar();
            juego1 = new Juego(ctx, canvas.width, canvas.height,0);
            juego1.draw();
            juego1.selectLinea();
        }
        btnReset.addEventListener("click", newGame)
        img.forEach(element => {
            element.addEventListener('click', () => {
                srcimg2 = element.src;
                juego1.cambiarFicha1(element.src)
                fichas2.classList.add('noneSize');
            })
        });
        img2.forEach(element => {
            element.addEventListener('click', () => {
                srcimg = element.src;
                juego1.cambiarFicha2(element.src)
                fichas1.classList.add('noneSize');
            })
        });
    })

    size8.addEventListener("click", () => {
        timer = 300;
        pausado = false;
        first_move = true;
        fichas1.classList.remove('noneSize');
        fichas2.classList.remove('noneSize');
        fichas.classList.remove('noneSize');
        fichas.classList.remove('noneSize');
        size0.classList.remove('noneSize');
        size4.classList.add('noneSize');
        size5.classList.add('noneSize');
        size6.classList.add('noneSize');
        size8.classList.add('noneSize');
        reiniciar.disabled= false
        let canvas = document.getElementById('canvasGame');
        let btnReset = document.getElementById('restartGame');
        let img = document.querySelectorAll('.ficha');
        let img2 = document.querySelectorAll('.ficha2');
        let srcimg = "./assets/ficha2.jpg";
        let srcimg2 = "./assets/ficha1.jpg";
        canvas.width = 800;
        canvas.height = 650;
        let ctx = canvas.getContext('2d');

        juego1 = new Juego(ctx, canvas.width, canvas.height, size8.value);
        juego1.draw();
        canvas.addEventListener('mousedown', (eMouseDown) => {
            if(first_move){
                if (juego1.checkHit(eMouseDown.offsetX, eMouseDown.offsetY)) {
                    canvas.addEventListener('mousemove', (eMouseMove) => {
                        juego1.handleDrag(eMouseMove.offsetX, eMouseMove.offsetY);
                    });
                }
                first_move = false;
                inicio();
            }else{
                if (juego1.checkHit(eMouseDown.offsetX, eMouseDown.offsetY)) {
                    canvas.addEventListener('mousemove', (eMouseMove) => {
                        juego1.handleDrag(eMouseMove.offsetX, eMouseMove.offsetY);
                    });
                }
            }
        })
        canvas.addEventListener('mouseup', (eMouseUp) => {
            canvas.removeEventListener('mousemove', juego1.handleDrag);
            juego1.stopDragging();
        })
        function newGame() {
            fichas.classList.add('noneSize');
            fichas1.classList.add('noneSize');
            fichas2.classList.add('noneSize');
            pausado = true;
            parar();
            juego1 = new Juego(ctx, canvas.width, canvas.height,0);
            juego1.draw();
            juego1.selectLinea();
        }
        btnReset.addEventListener("click", newGame)
        img.forEach(element => {
            element.addEventListener('click', () => {
                srcimg2 = element.src;
                juego1.cambiarFicha1(element.src)
                fichas2.classList.add('noneSize');
            })
        });
        img2.forEach(element => {
            element.addEventListener('click', () => {
                srcimg = element.src;
                juego1.cambiarFicha2(element.src)
                fichas1.classList.add('noneSize');
            })
        });
    })

    size0.addEventListener("click", ()=>{
        pausado = true;
        parar();
        juego1 = new Juego(ctx, canvas.width, canvas.height,0);
        juego1.draw();
        size4.classList.remove('noneSize');
        size5.classList.remove('noneSize');
        size6.classList.remove('noneSize');
        size8.classList.remove('noneSize');
        size0.classList.add('noneSize');
    })
})