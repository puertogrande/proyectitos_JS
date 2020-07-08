// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

// CREA LOS OBJETOS

function Boloncho() {
  this.x = random(0 + 60,width - 60); //posición horizontal 
  this.y = random(0 + 60,height - 60); //posición vertical 
  this.velX = random(-5,5); //velocidad horizontal
  this.velY = random(-5,5); //velocidad vertical
  this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')'; //color
  //crear el tamaño en ancho y alto
  this.size = 10; //tamaño
}

function Palo(x,y,velY){
  this.x=x;
  this.y=y;
  this.velY = velY;
  
}

// CREA LA FUNCION DRAW A LOS OBJETOS
Boloncho.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

Palo.prototype.draw=function(){
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255, 0, 255, 0.25)';
  ctx.fillRect(this.x, this.y, 20, 200);
  ctx.fill();

}

// FUNCION QUE ACTUALIZA EL MOVIMIENTO

Boloncho.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX =0;
    this.velY =0;
  }

  if ((this.x - this.size) <= 0) {
    this.velX =0;
    this.velY =0;
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
}



Boloncho.prototype.choca = function() {
  this.velX = -(this.velX);
  this.velY = -(this.velY);

}



Palo.prototype.update = function(posicion) {
  
  if(posicion=="arriba"){
    if(this.y-20<20){
      this.y=0;
    }
    else{
      this.y-=20;
    }
  }
  else if(posicion=="abajo"){
    if(this.y+200>height){
      this.y+200==height;
    }
    else{
      this.y+=20;
    }       
  }
  this.draw();
}


Boloncho.prototype.collisionDetect = function() {
  if(Troncho.x-20<0 ){
    //Troncho.choca();
    //alert(Palo1.y);
    if(Troncho.y>=Palo1.y && Troncho.y<=Palo1.y+200){
      Troncho.velX = -Troncho.velX;
      Troncho.velY = -Troncho.velY;
      //Troncho.choca();
    }
  }

  if(Troncho.x+20>=width){
    //(Troncho.choca();
   
    if(Troncho.y>=Palo2.y && Troncho.y<=Palo2.y+200){
      Troncho.velX = -Troncho.velX;
      Troncho.velY = -Troncho.velY;
    }
    

  }







}


// CREACION DE LAS BOLAS

//var balls = [];

Troncho = new Boloncho();

ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
ctx.fillRect(0, 0, width, height);

Troncho.draw();

Palo1 = new Palo(0,20,5);
Palo1.draw();

Palo2=new Palo(width-20,20,5);
Palo2.draw()

//esto debe ir dentro del bucle
function manejador(){
  if(event.keyCode==38){
      Palo2.update("arriba");
  }
  if(event.keyCode==40){
      Palo2.update("abajo");
  }
}   

function manejador2(){
 //119 arriba
 //115 abajo
    if(event.keyCode==119){
        Palo1.update("arriba");
      }
    if(event.keyCode==115){
      Palo1.update("abajo");
    }  
}   

function loop() {
    document.onkeyup=manejador;
    document.onkeypress = manejador2;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    Troncho.draw();
    Palo1.draw();
    Palo2.draw()
    Troncho.update();
    Troncho.collisionDetect();
   
    requestAnimationFrame(loop);
}
loop();