//constantes de precios en criptomonedas

const precioBitcoin = 20106;
const precioEthereum = 1352;
const precioRaven = 0.0358;
const precioETC = 27.84;
const precioXRP = 0.478;

//Funciones cotizadoras USD a Cripto
function cotizarBitcoin(dolar){
    let = cotizacionBitcoin = dolar/precioBitcoin;
    return cotizacionBitcoin
}
function cotizarEthereum(dolar){
    let = cotizacionEthereum = dolar/precioEthereum;
    return cotizacionEthereum
}
function cotizarRaven(dolar){
    let = cotizacionRaven = dolar/precioRaven;
    return cotizacionRaven
}
function cotizarETC(dolar){
    let = cotizacionETC = dolar/precioETC;
    return cotizacionETC
}
function cotizarXRP(dolar){
    let = cotizacionXRP = dolar/precioXRP;
    return cotizacionXRP
}
//Funciones cotizadoras Cripto a USD
function cotizarBitcoin2(dolar){
    let = cotizacionBitcoin = dolar * precioBitcoin;
    return cotizacionBitcoin
}
function cotizarEthereum2(dolar){
    let = cotizacionEthereum = dolar * precioEthereum;
    return cotizacionEthereum
}
function cotizarRaven2(dolar){
    let = cotizacionRaven = dolar * precioRaven;
    return cotizacionRaven
}
function cotizarETC2(dolar){
    let = cotizacionETC = dolar * precioETC;
    return cotizacionETC
}
function cotizarXRP2(dolar){
    let = cotizacionXRP = dolar * precioXRP;
    return cotizacionXRP
}


// Programacion de las opciones
let opcion = prompt("₿ Cotizador de Criptomonedas ₿\n\n¿Que deseas convertir? 😄\n\n1 - De USD a Criptomoneda\n2 - De Criptomoneda a USD");

if (opcion == "1"){
        let opciones = prompt("Selecciona una opción de Criptimoneda\n\n1 - Bitcoin\n2 - Ethereum\n3 - Ravencoin\n4 - Ethereum Classic\n5 - XRP Ripple");
        if(opciones == "1"){
            let cantiDolares  = parseFloat(prompt("Ingresa la cantidad de dolares"));
            let cotizacion = cotizarBitcoin(cantiDolares);
            alert("Ingresando $"+cantiDolares+" USD podrias comprar "+cotizacion+" BTC");
        }else if(opciones == "2"){
            let cantiDolares  = parseFloat(prompt("Ingresa la cantidad de dolares"));
            let cotizacion = cotizarEthereum(cantiDolares);
            alert("Ingresando $"+cantiDolares+" USD podrias comprar "+cotizacion+" ETH");
        }else if(opciones == "3"){
            let cantiDolares  = parseFloat(prompt("Ingresa la cantidad de dolares"));
            let cotizacion = cotizarRaven(cantiDolares);
            alert("Ingresando $"+cantiDolares+" USD podrias comprar "+cotizacion+" RVN");
        }else if(opciones == "4"){
            let cantiDolares  = parseFloat(prompt("Ingresa la cantidad de dolares"));
            let cotizacion = cotizarETC(cantiDolares);
            alert("Ingresando $"+cantiDolares+" USD podrias comprar "+cotizacion+" ETC");
        }else if(opciones == "5"){
            let cantiDolares  = parseFloat(prompt("Ingresa la cantidad de dolares"));
            let cotizacion = cotizarXRP(cantiDolares);
            alert("Ingresando $"+cantiDolares+" USD podrias comprar "+cotizacion+" XRP");
        }else{
            alert("Error en la opcion !");
        }
}else if(opcion == "2"){
        let opciones = prompt("Selecciona una opción de Criptimoneda\n\n1 - Bitcoin\n2 - Ethereum\n3 - Ravencoin\n4 - Ethereum Classic\n5 - XRP Ripple");
        if(opciones == "1"){
            let cantiCripto  = parseFloat(prompt("Ingresa la cantidad de Bitcoin"));
            let cotizacion = cotizarBitcoin2(cantiCripto);
            alert(cantiCripto+" BTC actualmente valen $"+cotizacion+" USD");
        }else if(opciones == "2"){
            let cantiCripto  = parseFloat(prompt("Ingresa la cantidad de Ethereum"));
            let cotizacion = cotizarEthereum2(cantiCripto);
            alert(cantiCripto+" ETH actualmente valen $"+cotizacion+" USD");
        }else if(opciones == "3"){
            let cantiCripto  = parseFloat(prompt("Ingresa la cantidad de Ravencoin"));
            let cotizacion = cotizarRaven2(cantiCripto);
            alert(cantiCripto+" RVN actualmente valen $"+cotizacion+" USD");
        }else if(opciones == "4"){
            let cantiCripto  = parseFloat(prompt("Ingresa la cantidad de Ethereum Classic"));
            let cotizacion = cotizarETC2(cantiCripto);
            alert(cantiCripto+" ETC actualmente valen $"+cotizacion+" USD");
        }else if(opciones == "5"){
            let cantiCripto  = parseFloat(prompt("Ingresa la cantidad de XRP"));
            let cotizacion = cotizarXRP2(cantiCripto);
            alert(cantiCripto+" XRP actualmente valen $"+cotizacion+" USD");
        }else{
            alert("Error en la opcion !");
        }
}else{
    alert ("Error en la opcion !");
}
