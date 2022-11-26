class Ficha {
    constructor(posX, posY, radius, color, ctx) {
        this.posX = posX;
        this.posY = posY;
        this.radius = radius;
        this.color = color;
        this.ctx = ctx;
        this.drop = false;
        this.setImage(color);
    }
    getPosX(){
        return this.posX;
    }
    getPosY(){
        return this.posY;
    }
    setImage(color) {
        this.color = color;
        this.draw();
    }
    //Setea la forma de la ficha
    draw() {
        if (this.color != null) {
            this.ctx.drawImage(this.color, this.posX - this.radius, this.posY - this.radius, 2 * this.radius, 2 * this.radius);
        }
    }
    //Pregunta si la posicion esta en su rango
    hit(posX,posY){
        let radio = Math.sqrt((posX - this.posX) **2 + (posY - this.posY) ** 2);
        return radio < this.radius;
    }
    //Al mover las fichas setea la posicion de estas
    move(posX, posY){
        if(!this.drop){
            this.posX = posX;
            this.posY = posY;
        }
    }
    //Confirma el movimiento de las fichas
    setDrop(){
        this.drop = true;
    }
    
}