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
/* Se incluye parte II con uso de lbl e input */
const   miTitulo    = document.querySelector ("#mi-titulo");
const   imp2Carne   = document.querySelector ("#lb2-carne"); //para label carne
const   imp2Leche   = document.querySelector ("#lb2-leche"); //para label leche
const   imp2Latas   = document.querySelector ("#lb2-latas"); //para label latas
const   impCarne    = document.querySelector ("#lbl-carne"); //para input carne
const   impLeche    = document.querySelector ("#lbl-leche"); //para input leche
const   impLatas    = document.querySelector ("#lbl-latas"); //para input latas
const   miParrafo1  = document.querySelector ("#mi-salida1");
const   miParrafo2  = document.querySelector ("#mi-salida2");
const   miParrafo3  = document.querySelector ("#mi-salida3");

const PROMO_CARNE   = 0.25;
const PROMO_LACTEOS = 0.50;
const PROMO_LATAS   = 0.70;

const PRECIO_CARNE_KG   = 1000;
const PRECIO_LACTEOS_LT = 500;
const PRECIO_LATAS_UN   = 300;

const MAX_CANT_CARRITO  = 1000;

/* INICIALIZACIONES VARIAS */
miTitulo.textContent  = "Supermercado 'Dev & Foods' - ¡¡Hoy todo Promo!!";
imp2Carne.innerText   = "Carne " + (PROMO_CARNE   * 100) + "% off - Cuantos Kgr necesita?  ('0' si no compra)";
imp2Leche.innerText   = "Leche " + (PROMO_LACTEOS * 100) + "% off - Cuantos Lts necessita? ('0' si no compra)";
imp2Latas.innerText   = "Latas  " + (PROMO_LATAS  * 100) + "% off - Cuantas Uns. necesita?  ('0' si no compra)";

function verificaCompra() {
let kgCarnePedida = impCarne.value;
let ltLechePedida = impLeche.value;
let unLatasPedida = impLatas.value;

/* prevención por ingreso de datos indeseados*/
if (kgCarnePedida.trim() != "") { kgCarnePedida = parseInt(kgCarnePedida) } else { kgCarnePedida = 0 };
if (ltLechePedida.trim() != "") { ltLechePedida = parseInt(ltLechePedida) } else { ltLechePedida = 0 };
if (unLatasPedida.trim() != "") { unLatasPedida = parseInt(unLatasPedida) } else { unLatasPedida = 0 };

    //document.write("<h2> ***Devs & Food***</h2>");
    miParrafo1.textContent = "En el Carrito tiene : "+
        kgCarnePedida + ".- Kg./s de Carne. " +
        ltLechePedida + ".- Litro/s de Leche y " +
        unLatasPedida + ".- Lata/s";

    if ((kgCarnePedida + ltLechePedida + unLatasPedida) == 0) {
        miParrafo2.textContent = "Su carrito de compras está vacío... Aproveche las ofertas del día. Muchas gracias por su visita!";
        miParrafo3.textContent = "";
    }
    else if ((kgCarnePedida + ltLechePedida + unLatasPedida) > MAX_CANT_CARRITO) {
        miParrafo2.textContent = "Lo sentimos NO se permiten más de " + MAX_CANT_CARRITO +
         " productos por Carrito de compras. Intente usar varios carritos... Muchas gracias!";
         miParrafo3.textContent = "";
    }

    else {
        miParrafo2.textContent = "El precio de su compra con la promoción aplicada es de $ " +
            (((kgCarnePedida * PRECIO_CARNE_KG) * (1 - PROMO_CARNE)) +
                ((ltLechePedida * PRECIO_LACTEOS_LT) * (1 - PROMO_LACTEOS)) +
                ((unLatasPedida * PRECIO_LATAS_UN) * (1 - PROMO_LATAS))) + ".-";

        miParrafo3.textContent = "El descuento total fue de $ " +
            (((kgCarnePedida * PRECIO_CARNE_KG) * (PROMO_CARNE)) +
                ((ltLechePedida * PRECIO_LACTEOS_LT) * (PROMO_LACTEOS)) +
                ((unLatasPedida * PRECIO_LATAS_UN) * (PROMO_LATAS))) + ".-";
    };
}

