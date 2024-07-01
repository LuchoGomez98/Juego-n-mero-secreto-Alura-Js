//Juegonumerosecreto_Propio

//Variables
let numeroMaximoPosible = 0;
let numeroMinimoPosible = 0;
let numeroSecreto = 0;
let numeroUsuario = 0;
let diferencia = 0;
let intentos = 0;
let maximosIntentos = 5;
let ganaste = false;
let perdiste = false;

//Definición del rango y generación del número secreto
alert('Bienvenido al juego del número mágico. A continuación digite 2 valores entre los cuales intentará adivinar el número oculto. Posee un máximo de 5 intentos ¡Buena suerte!');
numeroMinimoPosible = parseInt(prompt('Ingrese el valor mínimo permitido: '));
numeroMaximoPosible = parseInt(prompt('Ingrese el valor máximo permitido: '));
diferencia = numeroMaximoPosible-numeroMinimoPosible;
numeroSecreto = Math.floor(Math.random()*diferencia)+1;


while (!ganaste && !perdiste) {
    numeroUsuario = parseInt(prompt(`Ingrese un número entre ${numeroMinimoPosible} y ${numeroMaximoPosible}`));
    console.log(typeof(numeroUsuario));

    //Depuración de posible error por valores no permitidos
    if (numeroUsuario > numeroMaximoPosible || numeroUsuario < numeroMinimoPosible){
        alert('El valor ingresado no esá permitido, ingrese nuevamente:');
    } else {
        intentos ++;
    }
    //Juego
    if (numeroSecreto == numeroUsuario){
        ganaste = true;
        alert(`Acertaste, el número era ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? 'solo intento' : 'intentos'}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert ('El número es menor');
        } else {
            alert ('El número es mayor');
        }
        
    }
    if (!ganaste && intentos > maximosIntentos){
        perdiste = true;
        alert ('Perdiste, has superado la máxima cantidad de intentos permitidos');
    }

}
