/* Ejercicio 1:
Declarar variables con datos de un usuario (user, age, email)
Mostrar estos datos por consola
Mostrar el tipo de dato de cada variable por consola */

/* let user = "Sandra";
let age = 34;
let email = "sflores.linkss@gmail.com"; */

/* console.log(typeof(user));
console.log(typeof(age));
console.log(typeof(email)); */

/* Ejercicio 2:
Pedir al usuario sus datos personales (nombre, edad, pais, profesion)
Mostrar esos datos por consola usando concatenacion
Mostrar por consola la edad + 10 */

/* let username = prompt("Cuál es tu nombre")
let age = parseInt(prompt("Y tu edad"))
let country = prompt("De que país eres")
let profession = prompt("Cuál es tu profesión")

console.log(`Tu nombre es ${username}, tienes ${age} años, eres de ${country}, ${profession} y en 10 años tendras ${age+10} años`); */

/* Ejercicio 3:
Tomar las variables del ejercicio 1 y mostrar un texto por consola, por el documento y por un alert (hagan de a uno por vez, comentando y probando) y utilizar template literals. Recordar: document.write() y alert() */

/* console.log(`Mi nombre es ${user} tengo ${age} años y mi correo es ${email}`);
document.write(`Mi nombre es ${user} tengo ${age} años y mi correo es ${email}`);
alert(`Mi nombre es ${user} tengo ${age} años y mi correo es ${email}`) */

/* Ejercicio 4:
Pedir al usuario dos numeros y mostrar por el documento los resultados de cada calculo aritmetico. Ejemplo: El resultado de la suma es: ${resultado} */

/* let number1 = Number(prompt("Introduce primer número de la suma"))
let number2 = Number(prompt("Introduce el segundo número para sumar "))
let addition = number1 + number2
let subtraction = number1 - number2
let multiplication = number1 * number2
let division = number1 / number2
let module = number1 % number2
document.write(`Los resultado son: suma: ${addition} resta: ${subtraction} multiplicación: ${multiplication} división: ${division} y modulo: ${module}`) */

/* Bonus:
A lo que hiciste en el ejercicio 4, sumale un tercer numero a cada calculo. Mostrar por consola y analizar que paso en cada caso. Obtuviste los resultados esperados? */

let number1 = Number(prompt("Introduce primer número"))
let number2 = Number(prompt("Introduce el segundo número"))
let number3 = Number(prompt("Introduce el tercer número"))
let addition = number1 + number2 + number3
let subtraction = (number1 - number2) -number3
let multiplication = number1 * number2 * number3
let division = (number1 / number2) / number3
let module = (number1 % number2) % number3
document.write(`Los resultado son: suma: ${addition} resta: ${subtraction} multiplicación: ${multiplication} división: ${division} y modulo: ${module}`)
