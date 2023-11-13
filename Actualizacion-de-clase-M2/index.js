/* Estructuras de datos: Arrays
Ejercicios
Todo ejercicio que incluya emojis puede ser sustituido con strings

obtenerMenor(numeros)
Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:

obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12) // 2
sumar(numeros)
Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:

sumarNumeros([5, 7, 10, 12, 24]) // 58
contiene(numero, numeros)
Crear una funci´ón contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false
invertirCaso(string)
Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

invertirCaso('Ada Lovelace') // 'aDA lOVELACE'
invertirCaso('feliz cumple') // 'FELIZ CUMPLE'
invertirCaso('jAvAsCrIpT') // 'JaVaScRiPt'
gano(tragamonedas)
Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.

gano(['⭐️', '⭐️', '⭐️', '💫', '✨']) // false
gano(['💫', '💫', '💫', '💫', '💫']) // true
gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) // true
estanJuntos(personajes)
Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:

estanJuntos(['Sam', 'Frodo', 'Legolas']) //true
estanJuntos(['Aragorn', 'Frodo', 'Frodo']) //true
estanJuntos(['Sam', 'Orco', 'Frodo']) //true
separar(perrosYGatos)
Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

separar('🐶🐱🐶🐱🐱🐶🐶') // '🐶🐶🐶🐶🐱🐱🐱'
obtenerChatStatus(usuarias)
Crear una función obtenerChatStatus que tome como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas
Ejemplo:

obtenerChatStatus(['Ada']) // 'Ada está conectada'
obtenerChatStatus(['Ada', 'Grace']) // 'Ada y Grace están conectadas'
obtenerChatStatus(['Ada', 'Grace', 'Marie']) // 'Ada, Grace y 1 persona(s) más están conectadas'
germinar(plantines)
Crear una función germinar que tome como argumento un string de plantines con flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱') // '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱') // '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱') // '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'
comer(plantas)
Crear una función comer que tome por parámetro un string plantas que consista en plantas, un conejo y una señal de prohibido. El conejo se come todas las plantas que hay a su derecha, hasta que se encuentra con la señal de prohibido. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). Ejemplo:

comer('🐰🥕🥬🥕🚫') // ''
comer('🥕🥬🐰🥕🥕🥕🚫') // '🥕🥬'
comer('🐰🥕🥬🥕🚫🥕') // '🥕'
comer('🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷') // '🌱🥕🌱🌷'
multiplicar(multiplicador, numeros)
Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

multiplicar(2, [5, 7, 15, 22, 40]) // [10, 14, 30, 44, 80]
multiplicar(10, [2, 5, 77]) // [20, 50, 770]
filtrarPorLongitudMayorA(longitud, palabras)
Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:

filtrarPorLongitudMayorA(4, [
  'dia',
  'remolacha',
  'azul',
  'sorpresa',
  'te',
  'verde',
]) // ['remolacha', 'sorpresa', 'verde']
recortar(cantidadLetras, palabras)
Crear una función recortar que tome como argumentos un número cantidadLetras y un array de strings palabras y devuelva un array con las mismas palabras pero recortadas. Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef.

recortar(4, ['elefante', 'dinosaurio'. 'chocolate', 'avion', 'america']) // ['eleft', 'dino' 'chocolate', 'avio', 'amer']
recortar(1, ['algoritmo', 'bug', 'compilador']) // ['a', 'b', 'c']
sonIguales(a, b)
Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva true si ambos arrays tienen los mismos valores en la misma posición, o false sino.

sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]) // true
sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]) // false
sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]) // false
obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB)
Crear una función obtenerResultado que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de numeros puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:

const puntajesA = [3, 5, 2]
const puntajesB = [4, 6, 2]

// puntajesA[0] vs. puntajesB[0] -> Gana B
// puntajesA[1] vs. puntajesB[1] -> Gana B
// puntajesA[2] vs. puntajesB[2] -> Empate

// Resultado final: Gana Jugadora B
obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3]) // Ada
obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9]) // Empate
obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3]) // Grace
jugarPiedraPapelTijeras(jugadoraA, jugadoraB, jugadasA, jugadasB)
Crear una función jugarPiedraPapelTijeras que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de strings jugadasA y jugadasB con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente. Por ejemplo:

const jugadasA = ['piedra', 'piedra', 'tijera']
const jugadasB = ['papel', 'tijera', 'tijera']

// jugadasA[0] vs. jugadasB[0] -> Gana B
// jugadasA[1] vs. jugadasB[1] -> Gana A
// jugadasA[2] vs. jugadasB[2] -> Empate

// Resultado final: Empate
jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra']) // Grace
jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel']) // Empate
jugarPiedraPapelTijeras(
  'Ada',
  'Grace',
  ['piedra', 'papel', 'papel', 'piedra', 'tijera'],
  ['papel', 'piedra', 'tijera', 'tijera', 'papel']
) // Ada
Ejercicios con DOM
Para los siguientes ejercicios, no es necesario darle estilos más allá de los básicos que requiera el ejercicio para visualizarse correctamente. Se pueden utilizar funciones realizadas en los ejercicios previos.

📝 Lista de tareas
Crear un programa que muestre:

un input de texto
un botón que diga Agregar tarea
una lista ul
Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista.

Para actualizar la lista se debe:

borrar todo lo que contenga
recorrer el array y por cada ítem
insertar un ítem de lista li con el valor del ítem del array
🔍 Buscador
Crear un programa que muestre:

un input de texto
una lista ul
El programa debe tener como datos un array con strings con distintas palabras, y al inicializarse la lista debe mostrar las palabras del array como ítems de lista.

Al escribir en el input, se debe actualizar la lista para mostrar aquellas palabras que contengan como substring lo ingresado, ignorando mayúsculas y minúsuculas. Es decir, si se busca script y JavaScript es un string dentro del array, se debe mostrar.

Para actualizar la lista se debe:

borrar todo lo que contenga
recorrer el array y por cada ítem
insertar un ítem de lista li con el valor del ítem del array
Cuando el input no tienen ningún valor ingresado, la lista debe mostrar todos los ítems del array.

TIP: vas a necesitar dos arrays, uno para todas las palabras y otro para los resultados de búsqueda.

📈 Total de gastos
Crear un programa que muestre:

un input de números
un botón que diga Agregar gasto/ganancia
una lista ul
un elemento p
Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista y el elemento p.

Para actualizar la lista se debe:

borrar todo lo que contenga
recorrer el array y por cada ítem
insertar un ítem de lista li con el valor del ítem del array
El elemento p se actualiza con el total de la suma de los valores del array. */

//obtenerMenor(numeros)
//Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:

//obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12) // 2
/*let numeroMenor = +Infinity;

const obtenerNumeroMenor = (arr) => {
    for (let i = 1; i < numeroMenor.length; i++) {
        if (array[i] < numeroMenor) {
            numeroMenor = array[i];
        }
    }
    return obtenerNumeroMenor;
};
*/
const array = [5, 7, 99, 34, 54, 2, 12];
/* const obtenerNumeroMenor = (arrayNumbers) => {
  let numeroMenor = +Infinity;
  for (let i = 1; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] < numeroMenor) {
      numeroMenor = arrayNumbers[i];
    }
  }
  return numeroMenor
};
console.log(obtenerNumeroMenor(array)); */

/* const impares = (num) => {
    for (let index = 1; index <= num; index = index + 2) {
     console.log(index);
    }
  };
  
console.log(impares(10)); */
/* 
for (let index = 10; index >= 1; --index) {
  console.log(index);
} */

/* let acc = 1
for (let numero = 1; numero <= 5; numero++){
    console.log(acc = acc * numero);
} */

/* let arreglo = [1,2,3,4,5,7]

for (let index = 0; index < arreglo.length; index++) {
    console.log(arreglo[index]);
    
} */

/* const arreglo = [1, 2, 3, 4, 5, 66, 88, 9, 74, 85, 91, 100, 102, 78];

for (let numero = 0; numero < arreglo.length; numero++) {
  if (arreglo[numero] % 2 === 0) {
    console.log(arreglo[numero]);
  }
} */
/* const base = 2
const exponente = 5
let resul = 1

for (let numero = 0; numero < exponente; numero++) {
    resul = resul * base
    }
    console.log(`2^3 = ${resul}`); */

//calcula la suma de los multiplos de tres del 1 al 100

/* let acc = 0

for (let numero = 0; numero <= 100 ; numero = numero + 3) {
  acc = acc + numero;
  
    
}
console.log(acc); */

//Imprimir los numeros  del 1 al 100,  pero sustituir los multiplos de 3 por la palabra fizz y los multiplos de 5 por la palabra buzz
/* 
for (let numero = 0; numero < 100; numero++) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("fizzbuzz", numero);
  } else if (numero % 3 === 0) {
    console.log("fizz", numero);
  } else if (numero % 5 === 0) {
    console.log("buzz", numero);
  }
} */

/* Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.

repetir('lovelace', 3) // ['lovelace', 'lovelace', 'lovelace']
repetir('a', 5) // ['a', 'a', 'a', 'a', 'a']
repetir('html', 0) // [] */

/* const repetir = (str, num ) =>{
let repeat = []
for (let indice = 0; indice < num; indice++) {
    repeat.push(str)
       
}
return repeat
}
console.log(repetir('html', 0)); */

/* Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.

sumarImparesHasta(5) // 9 (1 + 3 + 5 = 9)
sumarImparesHasta(13) // 49
sumarImparesHasta(47) // 576 */
