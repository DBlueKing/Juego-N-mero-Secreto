//Variables
let numeroMaximoPosible = 20
//las variables tienen que ir a fuera ya que si no comparamos con un vacio y no arroja codigo
/*let numeroSecreto = 8;*/
let numeroSecreto = Math.floor(Math.random ()*numeroMaximoPosible + 1); //variable aleatoria del número secreto, buscando la formula en internet 
let numeroUsuario = 0; 
let intentos = 1; 
/*let palabraVeces = 'Vez';*/
let maximosIntentos = 5;

console.log (numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor:`));
    //parseint nos retorna la parte entera de un string que es la variable número de usuario, lo que un número para el usuario para java es un string
    // 1 = es para asignarle una caja de nombre a 1 prompt o x.
    console.log(typeof(numeroUsuario)); //console.log() es una función muy útil en JavaScript que se utiliza para imprimir o mostrar información en la consola del navegador web.
    //typeof operador en JavaScript que se utiliza para determinar el tipo de dato de una variable o expresión
    /*
    Este codigo realiza 
    la comparacion
    */
    /* se ocupapa / *  y * / para decirle a java no ocupes este codigo o dejar comentario */
    if (numeroUsuario == numeroSecreto) {
        // doble == es para dar un valor a la caja de nombre que eso sea igual a eso
        //Acertamos, fue verdadera la condición
       /* alert(`Acertaste el número, el número es: ${numeroUsuario}, Lo hiciste en ${intentos} ${palabraVeces}`);*/
        //se ocupa ` comillas invertidas para incorporar la variable $, se llama interpolacion para colocar variables o codigos 
        //el sino $ se llama templeate stringhs
        alert(`Acertaste el número, el número es: ${numeroUsuario}, Lo hiciste en ${intentos} ${intentos == 1 ? 'Vez' : 'Veces' } `)
        //condicion ? valor si es verdadero : valor si es falso en este caso intentos == 1 ? 'Vez' : 'Veces'
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor')
        } else {
            alert('El número secreto es mayor')
        } 
        //incrementamos el contador cuando la persona no acierta
        /*intentos = intentos + 1; */ //Se deja aca por razon de que no acierte se muestren mas intentos
        /*intentos +  = intentos + 1; */ //otra forma de contador
        intentos ++;
        palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert (`Llegaste al número maximo de ${maximosIntentos} intentos`);
            break; //break corta, hace una salida del bucle
        }
        //Se deja aca por razon de que no acierte se muestren mas intentos
        //Doble else es un condicional anidado
    //La condición no se cumplio
    // alert('Lo siento no acertaste el numero');
    }
    }
