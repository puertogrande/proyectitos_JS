var contador=0;
var parrafo=$("#parrafo1");
imagenes=[];
var parrafoImagen="";
var imagenElegida="";
var myInterval;

function mostrarImagen(){
    $(parrafo).css("background-color","white");
    $(imagenElegida).css("border", "2px solid yellow");
    var srcElegida=$(imagenElegida).attr("src");
    var altElegida=$(imagenElegida).attr("alt");
    $(parrafoImagen).attr("src",srcElegida);
    $(parrafoImagen).attr("alt",altElegida);
    $("#titulo").text(altElegida);
    if (imagenes.length>0){
        $(imagenes[0]).css("border", "0px solid yellow");
        imagenes=[];
    }
    imagenes.push(imagenElegida);
}

$("img").click(function(){
    
     parrafoImagen=document.getElementById("parrafo1").getElementsByTagName("img")[0];
     imagenElegida = this;
    $(parrafoImagen).attr("src","img/cargando.jpg");
     
    $(parrafo).css("background-color","black");
   
    setTimeout(mostrarImagen, 1000);
   });

$(".acciones").click(function(){
    var todas_imagenes=$(".imagenes img");
    parrafoImagen=document.getElementById("parrafo1").getElementsByTagName("img")[0];
    for(let i=0;i<todas_imagenes.length;i++){
        var imagen=todas_imagenes[i];
        var src_imagen=$(imagen).attr("src");
        var src_parrafo=$(parrafoImagen).attr("src");

        if(src_imagen==src_parrafo){
            if(this.id=="delante"){
                if(i<todas_imagenes.length-1){
                    imagenElegida=todas_imagenes[i+1];
                }
                else{
                    imagenElegida=todas_imagenes[0];
                }
                setTimeout(mostrarImagen, 1000);
            }

            if(this.id=="detras"){
                if(i>0){
                    imagenElegida=todas_imagenes[i-1];
                }
                else{
                    imagenElegida=todas_imagenes[todas_imagenes.length-1];
                }
                setTimeout(mostrarImagen, 1000);
            }
        }
    }
})

$("#play").click(function(){
    var todas_imagenes=$(".imagenes img");
    parrafoImagen=$("#parrafo1 img");
    function play(){
        if (contador==todas_imagenes.length){
            contador=0;
        }
        imagenElegida=todas_imagenes[contador];
        contador++;
        mostrarImagen();
    }
    myInterval=setInterval(play, 5000);
})

$("#stop").click(function(){
    clearInterval(myInterval);
})

$("body").keyup(function(e) {
    var todas_imagenes=$(".imagenes img");
    parrafoImagen=document.getElementById("parrafo1").getElementsByTagName("img")[0];

    for(let i=0;i<todas_imagenes.length;i++){
        var imagen=todas_imagenes[i];
        var src_imagen=$(imagen).attr("src");
        var src_parrafo=$(parrafoImagen).attr("src");

        if(src_imagen==src_parrafo){
            if(e.keyCode == 39){
                if(i<todas_imagenes.length-1){
                    imagenElegida=todas_imagenes[i+1];
                }
                else{
                    imagenElegida=todas_imagenes[0];
                }
                setTimeout(mostrarImagen, 1000);
            }
            if(e.keyCode == 37){
                if(i>0){
                    imagenElegida=todas_imagenes[i-1];
                }
                else{
                    imagenElegida=todas_imagenes[todas_imagenes.length-1];
                }
                setTimeout(mostrarImagen, 1000);
            }
        }
    }
  })

