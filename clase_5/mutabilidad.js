/*

----- MUTABILIDAD -----

Los tipos de valores como numeros, strings y booleanos SON INMUTABLES. No pueden cambiar su valor.
Cuando a una variable se le asigna un valor de esos tipos, lo que hace es mirar a ese espacio de memoria.
Si la variable cambia de valor, mira a otro espacio de memoria, pero el anterior no cambia, ES INMUTABLE.

En los objetos esto es diferente. Puedo cambiar las propiedades, haciendo que un único valor de objeto
tenga contenido DIFERENTE en DIFERENTES MOMENTOS.

let objeto1 = { valor: 10 }
let objeto2 = objeto1
let objeto3 = { valor: 10 }

console.log(objeto1 == objeto2)
console.log(objeto1 == objeto3)

objeto1.valor = 125

console.log(objeto2)

OBJETO2 Y OBJETO TIENEN LA MIMA IDENTIDAD, OBJETO3 OTRA.


== -> COMPARA POR IDENTIDAD
=== -> COMPARA EL TIPO

----- CICLOS ARRAY -----


*/
/*

let diario = [1, 2, 3, 4]

for (let i = 0; i < diario.length; i++) {
  console.log(diario[i])
}
// El operador binario "of" en un ciclo for, espera una declaración a la izquierda y un iterable (array) a la derecha.
// Cada elemento del array, será el valor de la declaración en cada iteración.

for (let entrada of diario) {
  console.log(entrada)
}


----- METODOS DE ARRAYS -----

- push -> agrega un elemento al final de un array
- pop -> quita el ultimo elemento de un array
- shift -> agrega un elemento al comienzo de un array
- unshift -> quita el primer elemento de un array
- indexOf(elemento) -> qué número de elemento es el elemento pasado como argumento, acepta
un segundo argumento, que indica donde empezar la búsqueda, si devuelve -1 significa que no lo encuentra.
const arrayDePrueba = ['Tomas', 1, 2, 3]
console.log(arrayDePrueba.indexOf('Tomas'))
- lastIndexOf ->  igual que indexOf, pero cuando hay más de un elemento con el mismo valor (devuelve el último), acepta
un segundo argumento, que indica donde empezar la búsqueda, si devuelve -1 significa que no lo encuentra.
- slice -> toma todos los elementos entre el "inicio" (primer argumento, inclusivo) y el 
"fin" (segundo argumento, exclusivo) y devuelve un array.
console.log(arrayDePrueba.slice(1, 3))
console.log(arrayDePrueba.slice(1))
console.log(arrayDePrueba.slice(0, 2))
console.log(arrayDePrueba.slice()) 

*/

const arrayDePrueba = ['Tomas', 1, 2, 3]
