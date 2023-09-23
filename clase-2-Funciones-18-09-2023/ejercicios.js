/* 
Ejercitacion de la clase
Se espera que puedan realizar los ejercicios utilizando todo lo visto hasta ahora, y testeando sus propios codigos con varios ejemplos (numeros enteros, positivos y negativos, con coma, etc) las veces que sea necesario para asegurarse su funcionamiento. Probar que pasa si no se reciben parametros y analizar cada caso.
Recordar sintaxis:

const miFuncion = (parametros) => {
    // sentencias de codigo
    return
}
miFuncion()

Ejercicio 0
Crear una funcion que reciba como parametro un nombre y muestre por consola un saludo a esa persona. */

/* const saludar = (nombre) => {
  return `Hola ${nombre}`;
};
console.log(saludar("Sandra"));
console.log(saludar("Zeneida"));
console.log(saludar("José")); */

/* Ejercicio 1

Crear una funcion que reciba como parametro dos numeros y devuelva el resultado de cada calculo aritmetico.
sumar(a, b)
restar(a, b)
dividir(a, b)
multiplicar(a, b) */

/* const calculo = (a, b) => {
  let suma = a + b;
  let resta = a - b;
  let multiplicar = a * b;
  let dividir = a / b;

  return `Los resultados obtenidos son suma: ${suma}, resta: ${resta}, multiplicación: ${multiplicar} división: ${dividir} `;
};

console.log(calculo(2, 5)); */

/*Ejercicio 2

Crear una funcion que reciba como parametro un sueldo y un numero que representa el porcentaje de aumento. La funcion debe devolver el sueldo mas el aumento.
aumentarSueldo(1000, 10) // deberia devolver 1100*/

/* const aumentoSueldo = (a, b) => {
  let resultado = (b * a) / 100;
  return a + resultado;
};

console.log(aumentoSueldo(1000, 10));
console.log(aumentoSueldo(2000000, 10)); */

/*Ejercicio 3

Crear una funcion que reciba como parametros un nombre, una edad, una profesion y un pais y retorne un string con la concatenacion de los datos ingresados. Probar con varios datos varias veces para comprobar funcionamiento. Ejemplo: Me llamo Pepa, tengo 30 anios, vivo en Colombia y soy abogada.*/

/* const concatenar = (name, age, profession, country) => {
  return `¡Hola! Mi nombre es ${name}, tengo ${age} años, vivo en ${country} y soy estudiante de ${profession}.`;
};

console.log(concatenar("Sandra", 34, "Frontend Developer", "Chile")); */

/*Ejercicio 4

Crear una funcion que reciba como parametro un precio y devuelva el precio mas el IVA.*/

/* const calculoIva = (precio, iva) => {
    return (iva * precio / 100) + precio
};

console.log(calculoIva(500, 19)); */

/*Ejercicio 5

Como harian para usar las funciones del ejercicio 1 pero que los numeros se los pidamos al usuario?
Repetir solucion pero para el ejercicio 2 y ejercicio 3*/

/* let numOne = prompt("Ingrese el primer número")
let numTwo = prompt("Ingrese el segundo número")
const calculoPrompt = (a, b) => {
    let suma = a + b;
    let resta = a - b;
    let multiplicar = a * b;
    let dividir = a / b;
  
    return `Los resultados obtenidos son suma: ${suma}, resta: ${resta}, multiplicación: ${multiplicar} división: ${dividir} `;
  };
  
  console.log(calculoPrompt(Number(numOne), Number(numTwo))); */

  /* let sueldo = prompt("Ingrese su Salario")
  let iva = prompt("Ingrese el porcentaje de su aumento")

  const aumentoSueldoPrompt = (a, b) => {
    let resultado = (b * a) / 100;
    return a + resultado;
  };
  
  console.log(aumentoSueldo(Number(sueldo), Number(iva))); */

  /* let name = prompt("Ingrese su nombre")
  let age = prompt("Ingrese su edad")
  let profession = prompt("Ingrese su profesión")
  let country = prompt("Ingrese su el país donde vive")

  const concatenarPrompt = (name, age, profession, country) => {
    return `¡Hola! Mi nombre es ${name}, tengo ${age} años, vivo en ${country} y soy estudiante de ${profession}.`;
  };
  
  console.log(concatenarPrompt(name, Number(age), profession, country)); */

/*Bonus:

Crear una funcion contador() que cada vez que se ejecute, sume en una unidad a una variable.

*/
 let num = 0
const contador = () => {
    return ++num
    }

    console.log(contador());
    console.log(contador());
    console.log(contador());
    console.log(contador());
    console.log(contador());
   