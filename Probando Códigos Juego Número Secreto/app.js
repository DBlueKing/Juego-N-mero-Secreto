/*
let titulo = document.querySelector('h1');
//query permite acceder a cada uno de los elementos
titulo.innerHTML = 'Juego del número secreto';
*/

/*
let parrafo = document.querySelector('p');
parrafo.innerHTML = `Indica un elemento del 1 al ${numeroMaximo}`;
*/ //se quitan estos codigos ya que creamos la funcion asignar elemento

//Variable
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
/*let numeroSecreto = generarNumeroSecreto(); //puedo tener una variable fuera o dentro de la funcion. Alance o ambito de la variable, alcance o ambito global de una variable
let intentos =1;
*/


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // se cambio h1 por elemento por la funcion
    elementoHTML.innerHTML = texto; //En vez de titulo.innerHTML se cambia a elementoHTML.innerHTML y texto fijo de juego del número secreto se cambio a texto
   return; 

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    /*console.log(typeof(numeroDeUsuario));
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto); //triple = es para decirle que tiene que ser igual en valor y tambien igual en tipo
    */

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos=== 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {
    // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número es menor')
        } else {
            asignarTextoElemento('p', 'El número es mayor')
        }
    }
intentos++;

limpiarCaja();
   return;
    }

    function limpiarCaja(){
        document.querySelector('#valorUsuario').value = '';

       /* 
       let valorCaja =  document.querySelector('#valorUsuario')  //ocupamos el id por query selector con numeral
        valorCaja.value = '';*/ 
    }

function generarNumeroSecreto() {
   let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    // si el numero generado esta incluido en la lista
console.log(numeroGenerado);
console.log(listaNumerosSorteados);
// si ya sorteamos todos los  numeros
if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
} else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        // el includes nos hace barrer o recorrer todo el arreglo y verificar si existe entonces nos devulve un booleano si es true or false
        //si ese numero ya existe, vamos a hacer que la funcion se llame a ella misma
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

    

    /*
    return Math.floor(Math.random()*numeroMaximo)+1;
    */
    /*
    let numeroSecreto = math.floor(math.random()*numeroMaximo)+1;
    return numeroSecreto; */ //Como pusimos afuera la variable ya no es necesario crearla por lo que solo basta con hacer return de ello

    
}

function condicionesIncialies() {
asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1

}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // generar número aleatorio
    // inicializar el número de intentos
    condicionesIncialies();
    // deshabilitar el boton del nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
    
}

condicionesIncialies();