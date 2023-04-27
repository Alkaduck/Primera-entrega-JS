


function presupuesto() {
    for(let i=1;i<100;i++){
        let cantidadDeSoquetes = parseInt(prompt("Pedido N°:"+(i)+" Ingrese la cantidad de soquetes"));
        let cantidadDeMedias = parseInt(prompt("Pedido N°:"+(i)+" Ingrese la cantidad de medias"));
        let cantidadDeBoxerZorba = parseInt(prompt("Pedido N°:"+(i)+" Ingrese la cantidad de boxers marca Zorba"));
        let cantidadDeBoxerDufour = parseInt(prompt("Pedido N°:"+(i)+" Ingrese la cantidad de boxers marca Dufour"));
        let precio;
//Promo 3x$1200 (cada una $450)        
if (cantidadDeSoquetes%3===0){ 
precio=cantidadDeSoquetes*400+ cantidadDeMedias*700 + cantidadDeBoxerDufour*1200+cantidadDeBoxerZorba*1050;}
else {
precio=(cantidadDeSoquetes-cantidadDeSoquetes%3)*400 + cantidadDeSoquetes%3*450 + cantidadDeMedias*700 + cantidadDeBoxerDufour*1200+cantidadDeBoxerZorba*1050;}
alert("El presupuesto del pedidio N°: "+i+" es $"+ precio);
}}


presupuesto()



