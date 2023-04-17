/*
Supermercado "Dev & Foods"
Promoción 25% en carnes
Promoción 50% en Lacteos
Promoción 70% en enlatados
Aplicar el descuento a las compras realizadas
y mostrarlo.
****** Parte #2 .. LA SOLUCIóN SUBIDA en 1 
        Cubre parte #1 y parte #2   ********
*/

const PROMO_CARNE = 0.25;
const PROMO_LACTEOS = 0.50;
const PROMO_LATAS = 0.70;

const PRECIO_CARNE_KG = 1000;
const PRECIO_LACTEOS_LT = 500;
const PRECIO_LATAS_UN = 300;

const MAX_CANT_CARRITO = 1000;

let kgCarnePedida = prompt("Hoy Promo Carne " + (PROMO_CARNE * 100) + "% - Ingrese los Kg que necesita. ('0' si no va a comprar)");
let ltLechePedida = prompt("Hoy Promo Leche " + (PROMO_LACTEOS * 100) + "% - Ingrese los Litros que necesita. ('0' si no va a comprar)");
let unLatasPedida = prompt("Hoy Promo Latas " + (PROMO_LATAS * 100) + "% - Ingrese la cantidad que necesita. ('0' si no va a comprar)");
/* prevención por ingreso de datos indeseados*/

if (kgCarnePedida.trim() != "") { kgCarnePedida = parseInt(kgCarnePedida) } else { kgCarnePedida = 0 };
if (ltLechePedida.trim() != "") { ltLechePedida = parseInt(ltLechePedida) } else { ltLechePedida = 0 };
if (unLatasPedida.trim() != "") { unLatasPedida = parseInt(unLatasPedida) } else { unLatasPedida = 0 };

document.write("<h2> ***Devs & Food***</h2>");
document.write("<h3>En el Carrito tiene : " +
    kgCarnePedida + ".- Kg./s de Carne. " +
    ltLechePedida + ".- Litro/s de Leche y " +
    unLatasPedida + ".- Lata/s</h3>");

if ((kgCarnePedida + ltLechePedida + unLatasPedida) == 0) {
    document.write("<h3>Su carrito de compras está vacío... Aproveche las ofertas del día. Muchas gracias por su visita!<h/3>");
}
else if ((kgCarnePedida + ltLechePedida + unLatasPedida) > MAX_CANT_CARRITO) {
    document.write("<h3>Lo sentimos NO se permiten más de " + MAX_CANT_CARRITO +
     " productos por Carrito de compras. Intente usar varios carritos... Muchas gracias!<h/3>");
}

else {
    document.write("<h3>El precio de su compra con la promoción aplicada es de $ " +
        (((kgCarnePedida * PRECIO_CARNE_KG) * (1 - PROMO_CARNE)) +
            ((ltLechePedida * PRECIO_LACTEOS_LT) * (1 - PROMO_LACTEOS)) +
            ((unLatasPedida * PRECIO_LATAS_UN) * (1 - PROMO_LATAS))) + ".-</h3>");

    document.write("<h4>" + "</h4>"); /* agrego línea */

    document.write("<h3>El descuento total fue de $ " +
        (((kgCarnePedida * PRECIO_CARNE_KG) * (PROMO_CARNE)) +
            ((ltLechePedida * PRECIO_LACTEOS_LT) * (PROMO_LACTEOS)) +
            ((unLatasPedida * PRECIO_LATAS_UN) * (PROMO_LATAS))) + ".-</h3>");
};
