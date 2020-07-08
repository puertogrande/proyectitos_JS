
var acertadas=[];
var ultimo_click=[];
var temporizador=false;
var imagenes=[];

function anadir_ceros(elemento,longtidud){
    var anadir="";
    var numero_ceros=longtidud-elemento.length;

    for(let i=0;i<numero_ceros;i++){
        anadir+="0";
    }
    return anadir;
}

function cambiar_tiempo(){
    var nuevo=new Date();
    var crono=nuevo-comienzo;
    var segundos=crono/1000;
    segundos=Math.trunc(segundos)
    var minutos=0;

    //corregir
    while (segundos > 59) {
        segundos-=60;
        minutos++;
      }

    var segundos=segundos.toString();
    var anadir=anadir_ceros(segundos,2);
    var segundos=anadir+segundos;
    var minutos=minutos.toString();
    var anadir=anadir_ceros(minutos,2);
    var minutos=anadir+minutos;

    var reloj=document.getElementById("div_reloj");
    reloj.innerHTML="";
   // var parrafo=document.createElement('p');
    var texto=document.createTextNode(minutos+":"+segundos);
    reloj.appendChild(texto);
   // reloj.appendChild(parrafo);
}

window.onload = function(){
    asignarImagenes();
    var imagenes= document.getElementsByClassName("imagen");
    for (var i=0; i<20; i++)
        imagenes[i].onclick = manejador;      
};

function manejador(){
    if(temporizador===false){
        document.getElementById("div_reloj").style.display="flex";
        temporizador=true;
        comienzo=new Date();
        temporizador=true;
        setInterval(cambiar_tiempo,1000);
    }
    
    if(ultimo_click.length<2){
        var imagen=document.getElementById(this.id);
        ultimo_click.push(imagen);
        if (ultimo_click.length == 1){
            var imagen = document.getElementById(this.id);
            imagen.style.opacity = "1.0";
        }
        if(ultimo_click.length>1){
            var imagen = document.getElementById(this.id);
            imagen.style.opacity = "1.0";
            setTimeout(comprobar,1000);
        }
    }
}

function comprobar(){
    var primera=ultimo_click[0];
        var segunda=ultimo_click[1];
        if(primera.src==segunda.src && primera.id!=segunda.id){
            alert("enhorabuena");
            acertadas.push(primera);
            acertadas.push(segunda);
            if(acertadas.length==imagenes.length){
                alert("has ganado maquina");
            }
        }

        if(!acertadas.includes(primera)){
            primera.style.opacity="0.0";   
        }
        if(!acertadas.includes(segunda)){
            segunda.style.opacity="0.0";  
        }

       ultimo_click = [];
}

function asignarImagenes(){
    var todas_imagenes=document.getElementsByClassName("todas_imagenes")[0];
    var fotos=todas_imagenes.getElementsByTagName("img");
    imagenes=["img/imagen1.jpg","img/imagen2.jpg","img/imagen3.jpg","img/imagen4.jpg","img/imagen5.jpg",
"img/imagen6.jpg","img/imagen7.jpg","img/imagen8.jpg","img/imagen9.jpg","img/imagen10.jpg","img/imagen1.jpg","img/imagen2.jpg","img/imagen3.jpg","img/imagen4.jpg","img/imagen5.jpg",
    "img/imagen6.jpg","img/imagen7.jpg","img/imagen8.jpg","img/imagen9.jpg","img/imagen10.jpg"];

    imagenes.sort(function() {return Math.random()-0.5});

for(let i=0;i<imagenes.length;i++){
    var imagen_seleccionada=fotos[i];
    imagen_seleccionada.src=imagenes[i];
    imagen_seleccionada.style.opacity = "0.0";
}


}







