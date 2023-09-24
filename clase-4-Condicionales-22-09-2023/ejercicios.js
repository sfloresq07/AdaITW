/* Condicionales y operadores lógicos
Ejercicios con operadores lógicos

Ejercicio 0 

puedeVerPelicula(edad, tieneAutorizacion)

Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

puedeVerPelicula(12, false) // false
puedeVerPelicula(12, true)  // true
puedeVerPelicula(16, false) // true
puedeVerPelicula(18, true)  // true*/

/* const puedeVerPelicula = (age,permission) => {
    if (age >= 15 || permission){
        return (`Si puedes ver la Película`)
    }
    return (`Necesitas se mayor de 15 años ó tener autorización de tus padres`)
}

console.log(puedeVerPelicula(12, false));
console.log(puedeVerPelicula(12, true));
console.log(puedeVerPelicula(16, false));
console.log(puedeVerPelicula(18, true));
console.log(puedeVerPelicula(15, false)); */

/*
Ejercicio 1

estaEnRango(valor, minimo, maximo)  

Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos se considera que está dentro del rango)

estaEnRango(3, 1, 10)   // true
estaEnRango(1, 1, 10)   // true
estaEnRango(10, 1, 10)  // true
estaEnRango(12, 1, 10)  // false
estaEnRango(-3, 1, 10)  // false
 */

/* const estaEnRango = (a, b, c) => {
if(a >= b && a <= c){
    return true
}
return false
} 

console.log(estaEnRango(3, 1, 10));
console.log(estaEnRango(1, 1, 10));
console.log(estaEnRango(10, 1, 10));
console.log(estaEnRango(12, 1, 10));
console.log(estaEnRango(-3, 1, 10)); */

/* 
Ejercicio 2 

puedeAvanzar(colorSemaforo)

Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

puedeAvanzar('verde')     // true
puedeAvanzar('amarillo')  // false
puedeAvanzar('rojo')      // false
puedeAvanzar('lila')      // 'Error: color de semáforo inválido'
 */

/* const puedeAvanzar = (color) => {
    if (color == "verde") {
        return true
    } else if (color == "amarillo" || color == "rojo"){
        return false
    } else
    return 'Error: color de semáforo inválido'
}
console.log(puedeAvanzar('verde'));
console.log(puedeAvanzar('amarillo'));
console.log(puedeAvanzar('rojo'));
console.log(puedeAvanzar('lila')); */

/* 
Ejercicio 3

esVocal(letra)

Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.

esVocal('a') // true
esVocal('n') // false
 */

/* const esVocal = (string) =>{
  if (string == "a" || string == "e" || string == "i" || string == "o" || string == "u"  ){
    return true
  }  
  return false
}

console.log(esVocal('a'));
console.log(esVocal('n'));
console.log(esVocal('e'));
console.log(esVocal('s'));
console.log(esVocal('i'));
console.log(esVocal('b'));
console.log(esVocal('o'));
console.log(esVocal('p'));
console.log(esVocal('u'));*/

/* 
Ejercicio 4

esConsonante(letra) 
Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es

esVocal('a') // false
esVocal('n') // true
 */

/* const esConsonante = (string) =>{
    if (string != "a" && string != "e" && string != "i" & string != "o" & string != "u"  ){
      return true
    }  
    return false
  }

console.log(esConsonante('a'));
console.log(esConsonante('n'));
console.log(esConsonante('e'));
console.log(esConsonante('s'));
console.log(esConsonante('i'));
console.log(esConsonante('b'));
console.log(esConsonante('o'));
console.log(esConsonante('p'));
console.log(esConsonante('u')); */
/*
Ejercicio 5

esHoraValida(hora)

Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no

esHoraValida('12:23') // true
esHoraValida('12:65') // false
esHoraValida('28:05') // false
esHoraValida('00:00') // true
 */
/*  const esHoraValida = (string) =>{
    let HH = string.slice(0,2)
    let mm = string.slice(3,6) 
    if(Number(HH) >=0 && Number(HH) <= 12 && Number(mm) >= 0 && Number(mm) <= 59){
        return true
    }
    return false
 }

 console.log(esHoraValida('12:23'));
 console.log(esHoraValida('12:65'));
 console.log(esHoraValida('28:05'));
 console.log(esHoraValida('00:00')); */
/*


Ejercicio 6

puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)

Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

puedeRenovarCarnet(true, true, true)    // false
puedeRenovarCarnet(true, true, false)   // false
puedeRenovarCarnet(true, false, true)   // true
puedeRenovarCarnet(true, false, false)  // false
puedeRenovarCarnet(false, true, true)   // false
puedeRenovarCarnet(false, true, false)  // false
puedeRenovarCarnet(false, false, true)  // false
puedeRenovarCarnet(false, false, false) // false
 */

/* const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
 if (pasoTests == true && tieneMultasImpagas == false && pagoImpuestos == true){
    return true
 }
 return false
} 

console.log(puedeRenovarCarnet(true, true, true));
console.log(puedeRenovarCarnet(true, true, false));
console.log(puedeRenovarCarnet(true, false, true));
console.log(puedeRenovarCarnet(true, false, false));
console.log(puedeRenovarCarnet(false, true, true));
console.log(puedeRenovarCarnet(false, true, false));
console.log(puedeRenovarCarnet(false, false, true));
console.log(puedeRenovarCarnet(false, false, false)); */

/* 
Ejercicio 7

puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)

Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.

puedeGraduarse(80, 50, true)  // true
puedeGraduarse(80, 50, false) // false
puedeGraduarse(80, 45, true)  // false
puedeGraduarse(80, 45, false) // false
puedeGraduarse(65, 50, true)  // false
puedeGraduarse(33, 55, false) // false
puedeGraduarse(42, 45, true)  // false
puedeGraduarse(28, 45, false) // false */

/* const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {

    if(asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada == true){
        return true
    } return false

}

console.log(puedeGraduarse(80, 50, true));
console.log(puedeGraduarse(80, 50, false));
console.log(puedeGraduarse(80, 45, true));
console.log(puedeGraduarse(80, 45, false));
console.log(puedeGraduarse(65, 50, true));
console.log(puedeGraduarse(33, 55, false));
console.log(puedeGraduarse(42, 45, true));
console.log(puedeGraduarse(28, 45, false)); */

/* 

Ejercicios con condicionales


Ejercicio 8

esParOImpar(numero)
Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar

esParOImpar(3)  // 'impar'
esParOImpar(10) // 'par'
 */

/* const esParOImpar = (num) => {
    if (num % 2 === 0) {
        return "Este número es par"
    } else {
        return  "Este número es impar"
    } 
}
console.log(esParOImpar(3));
console.log(esParOImpar(10)); */

/*

Ejercicio 9

esPositivoONegativo(numero) 

Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo

esPositivoONegativo(3)  // 'positivo'
esPositivoONegativo(-5) // 'negativo'
 */

/* const esPositivoONegativo = (num) => {
    if ( num > 0 && num != 0 ){
        return "El número es positivo"
    } else if (num < 0 && num != 0 ) {
    return "El número es negativo"
    } 
    return "0 no es ni positivo ni negativo"
}

console.log(esPositivoONegativo(3));
console.log(esPositivoONegativo(-5));
console.log(esPositivoONegativo(0)); */
/* 

Ejercicio 10

avanzarSemaforo(colorActual)

Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde

avanzarSemaforo('verde')     // 'amarillo'
avanzarSemaforo('amarillo')  // 'rojo'
avanzarSemaforo('rojo')      // 'verde'
 */

/* const avanzarSemaforo = (string) => {
  if (string == "verde") {
    return "amarillo";
  } else if (string == "amarillo") {
    return "rojo";
  } else if (string == "rojo") {
    return "verde";
  }
  return "Coloque un color valido";
};
console.log(avanzarSemaforo("verde"));
console.log(avanzarSemaforo("amarillo"));
console.log(avanzarSemaforo("rojo"));
console.log(avanzarSemaforo("azul")); */

/* 
Ejercicio 11

obtenerDiasMes(mes)

Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes

obtenerDiasMes("diciembre") // 31
obtenerDiasMes("febrero")   // 29
 */

/* const obtenerDiasMes = (mes) => {
  if (mes == "enero" || mes == "marzo" || mes == "mayo" || mes =="julio" || mes == "agosto" || mes == "octubre" || mes == "diciembre"){
  return `${mes} tiene 31 dias`
} else if (mes == "abril" || mes =="junio" || mes == "septiembre" || mes == "noviembre") {
    return `${mes} tiene 30 dias`
}  else if (mes == "febrero"){
    return `${mes} tiene 29 dias`
}
return "Introduce un mes válido"
};
console.log(obtenerDiasMes("diciembre"));
console.log(obtenerDiasMes("febrero"));
console.log(obtenerDiasMes("junio"));
console.log(obtenerDiasMes("hola")); */
/* 
Ejercicio 12

obtenerGeneracion(anioNacimiento)

Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

Generación	Años de nacimiento
Baby boomer	1949-1968
Generación X	1969-1980
Millennials	1981-1993
Generación Z	1994-2010
 */

/* const obtenerGeneracion = (num) => {
if (num >= 1949 && num <= 1968){
    return "Perteneces a la generación Baby boomer"
}else if (num >= 1969 && num <= 1980){
    return "Perteneces a la generación X"
}else if (num >= 1981 && num <= 1993){
    return "Perteneces a la generación Millennials"
}else if (num >= 1994 && num <= 2010){
    return "Perteneces a la generación Z"
}else if (num >= 2011){
    return "Perteneces a la generación Alfa"
}
return "Introduce un año válido"
}
console.log(obtenerGeneracion(2023));
console.log(obtenerGeneracion(2010));
console.log(obtenerGeneracion(1993));
console.log(obtenerGeneracion(1980));
console.log(obtenerGeneracion(1968));
console.log(obtenerGeneracion(1948)); */

/* 
Ejercicio 13

obtenerSensacion(temperatura)

Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:

Temperatura	Mensaje
Menor a 0°	¡Está helando!
Mayor o igual a 0° y menor a 15°	¡Hace frío!
Mayor o igual a 15° y menor a 25°	Está lindo
Mayor o igual a entre 25° y menor a 30°	Hace calor
Mayor o igual de 30°	¡Hace mucho calor!
obtenerSensacion(33) // "¡Hace mucho calor!"
 */

/* const obtenerSensacion = (num) => {
  if (num < 0) {
    return "¡Está Helando!";
  } else if (num >= 0 && num < 15) {
    return "¡Hace frío!";
  } else if (num >= 15 && num < 25) {
    return "Esta Lindo";
  } else if (num >= 25 && num < 30) {
    return "Hace calor";
  }
  return "¡Hace mucho calor!";
};
 console.log(obtenerSensacion(33));
 console.log(obtenerSensacion(29));
 console.log(obtenerSensacion(24));
 console.log(obtenerSensacion(14));
 console.log(obtenerSensacion(-1)); */

/* 

Ejercicio 14

obtenerNota(puntaje)

Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado, con las siguientes reglas:

Puntaje	Nota
Menor a 6	Desaprobado
Mayor o igual a 6 y menor a 7	Regular
Mayor o igual a 7 y menor a 8	Bueno
Mayor o igual a entre 8 y menor a 10	Muy bueno
10	Excelente
Menor a 0 o mayor a 10	Puntaje inválido
obtenerNota(7)    // "Bueno"
obtenerNota(9.6)  // "Excelente"
obtenerNota(12)   // "Puntaje inválido"
*/

/* const obtenerNota = (num) => {
  if (Math.round(num) < 6) {
    return "¡Está Desaprobado!";
  } else if (Math.round(num)>= 6 && Math.round(num) < 7) {
    return "¡Su nota es Regular!";
  } else if (Math.round(num) >= 7 && Math.round(num) < 8) {
    return "¡Su nota es Buena!";
  } else if (Math.round(num) >= 8 && Math.round(num) < 10) {
    return "¡Su nota es Muy Buena!";
  } else if (Math.round(num) == 10) {
    return "¡Su nota es Excelente!";
  }
  return "Puntaje invalido";
};

console.log(obtenerNota(7));
console.log(obtenerNota(9.6));
console.log(obtenerNota(12)); */
/* 

Ejercicio 15

jugarPiedraPapelTijera(a, b) 

Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!

jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!

jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate! */

/* const jugarPiedraPapelTijera = (a, b) => {
    if ( a == "piedra" && b == "tijera"){
    return `¡Ganó ${a}!`
}else if (a == "piedra" && b == "papel"){
    return `¡Ganó ${b}`
} else if (a == "tijera" && b == "papel"){
    return `¡Ganó ${a}!`
}else if (a == "tijera" && b == "piedra"){
    return `¡Ganó ${b}!`
}else if (a == "papel" && b == "piedra"){
    return `¡Ganó ${a}!`
}else if (a == "papel" && b == "tijera"){
    return `¡Ganó ${b}!`
}else if (a == "piedra" && b == "piedra"){
    return `¡Empate!`
}else if (a == "papel" && b == "papel"){
    return `¡Empate!`
}else if (a == "tijera" && b == "tijera"){
    return `¡Empate!`
}
}

console.log(jugarPiedraPapelTijera('tijera', 'piedra'));
console.log(jugarPiedraPapelTijera('piedra', 'tijera'));
console.log(jugarPiedraPapelTijera('papel', 'piedra'));
console.log(jugarPiedraPapelTijera('piedra', 'papel'));
console.log(jugarPiedraPapelTijera('papel', 'tijera'));
console.log(jugarPiedraPapelTijera('tijera', 'papel'));
console.log(jugarPiedraPapelTijera('piedra', 'piedra'));
console.log(jugarPiedraPapelTijera('papel', 'papel'));
console.log(jugarPiedraPapelTijera('tijera', 'tijera')); */
