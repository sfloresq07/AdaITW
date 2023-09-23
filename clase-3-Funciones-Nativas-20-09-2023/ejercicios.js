/* Ejercicio 1

Crear una funcion que reciba como argumento un string y devuelva la cantidad de caracteres que tenga el mismo.
candidadDeCaracteres("Hola Mundo!") // deberia devolver 11*/

const longitudCarateres = (string) => {
  return string.length;
};

console.log(longitudCarateres("Hola Mundo!"));

/*Ejercicio 2

Tomar la siguiente variable, convertirla a todo mayusculas y mostrar por consola. Hacer lo mismo pero con minusculas.
let string = "El artista WOS cantando QUEREME"*/

let string = "El artista WOS cantando QUEREME";

/* console.log(string.toUpperCase());
console.log(string.toLowerCase()); */

/*Ejercicio 3

Tomar la variable del ejercicio 2 y cortar el string devolviendo solo "WOS" y hacer el mismo proceso pero devolver "QUEREME".*/

console.log(string.indexOf("W"));
console.log(string.indexOf("Q"));

console.log(string.slice(11, 14));
console.log(string.slice(24, 31));

/*Ejercicio 4

Tomar la variable del ejercicio 2 y reemplazar "WOS" por "Queen" y "QUEREME" por "Bohemian Rhapsody"*/

const remplazo = (string) => {
  return string.replace("WOS", "Queen").replace("QUEREME", "Bohemian Rhapsody");
};
console.log(remplazo("El artista WOS cantando QUEREME"));

/*Ejercicio 5

Crear una funcion que tome por parametro un numero de DNI y retorne el mismo valor pero como un string
parsearDNI(12345678) // deberia devolver "12345678"*/

const typeString = (DNI) =>{
return DNI.toString()
}
console.log(typeString(parseInt(12345678)));

/*Ejercicio 6

Crear una funcion que tome por parametro al menos 4 numeros y retorne el numero menor de ellos
Realizar lo mismo pero con otra funcion que retorne el numero mayor*/
//minimo(5, 10, -7, 43) deberia devolver -7
// maximo(-1, 12, 32, 18) deberia devolver 32

const menor = (a, b, c, d) => {
    return Math.min(a,b,c,d)
}

console.log(menor(5, 10, -7, 43));

const mayor = (a, b, c, d) => {
    return Math.max(a,b,c,d)
}

console.log(mayor(-1, 12, 32, 18));

/*Ejercicio 7

Crear una funcion que tome por argumento un numero y retorne un numero aleatorio entre el 0 y el argumento.
numeroRandom(100)*/ // puede devolver cualquier numero entre 0 y 100

const aleatorio = (num) => {
    return Math.random() * num
}

console.log(aleatorio(100));
console.log(aleatorio(50));

/*Ejercicio 8

Tomar la siguiente variable y lograr las siguientes tareas:
Redondear el numero hacia arriba
Redondear el numero hacia abajo
let number = 12.49 */

let number = 12.49 
console.log(Math.ceil(number));
console.log(Math.floor(number));
