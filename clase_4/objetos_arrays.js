/*
----- ESTRUCTURAS DE DATOS -----

TIPOS DE DATOS VISTOS HASTA AHORA:
- STRING
- NUMBER
- BOOLEAN
- UNDEFINED
- NULL

LOS OBJETOS PERMITEN AGRUPAR VALORES (INCLUIDOS OTROS OBJETOS) -> PARA CONSTRUIR ESTRUCTURAS MAS COMPLEJAS.

----- CONJUNTOS DE DATOS ----- 

Como puedo guardar una lista de 1, 2, 3, 4, 6 en la memoria?

CON UN ARRAY.

----- ARRAY (ARREGLO) -----
Un array se escribe como una lista de valores entre corchetes, separados por coma.

const listaDeNumeros = [1, 2, 3, 4, 6]
const listaDeCualquierCosa = ['Tomas', 2, undefined, null, [1, 2, 3, 4]]

Para acceder a un elemento de la lista lo hago con corchetes LA PRIMERA POSICIÓN ES CERO.
Cuando se ponen corchetes despues de una expresión, con otra expresión dentro, se busca en la expresiuón de la izquierda
el elemento correspondiente AL ÍNDICE dado por la expresión entre corchetes.

listaDeNumeros[3] --> 4

----- PROPIEDADES -----
palabra.length
Math.max

Lo que estamos haciendo cuando llamamos con el punto, es acceder a una propiedad de un valor.
null y undefined no tienen propiedades, intentar acceder tira error.

Hay dos maneras de acceder a propiedaes de un valor:
- Corchetes.
- Punto.

valor.x -> propiedad de valor que se llama x.
valor[x] -> intenta evaluar la expresion y usa ese resultado, convertido a string, como nombre de la propiedad.

Los elementos de un array son almacenados como propiedades del array, usando numeros como nombres de la propiedad.


----- MÉTODOS -----
Los métodos son PROPIEDADES cuyo valor es una función.

METODOS COMUNES DE STRINGS:
- toUpperCase
- toLowerCase

METODOS COMUNES DE ARRAYS
- push -> agrega un elemento al final del array.
- pop -> eliminar el último valor y devolverlo.

Estos son metodos (push y pop) tradicionales de las estructuras de PILA.
Las estructuras de pila, son estructuras que perminten agregar valores a ella y volverlos a sacar en el orden opuesto
(LIFO -> Last In, First Out ó Ultimo en entrar, primero en salir.).



----- OBJETOS -----
Son colecciones arbitrarias de propiedades.
*/

// Así se declaran los objetos, con llaves y comas separando las propiedades

/*
const diaUno = {
  ardilla: false,
  eventos: ['trabajo', 'toco un arbol', 'pizza', 'salir a correr'],
}

Para agregar propiedades a un objeto, sólo necesito vincularla, aunque la propiedad no exista previamente.
Para cambiar el valor de una propiedad, sólo tengo que vincularle un nuevo valor.
Si la propiedad ya existe -> La reemplaza
Si la propiedad no existe -> La crea

Para borrar una propiedad se usa la palabra clave delete:
delete persona.nombre

Operador binario 'in':
Evaluar si el objeto contiene una propiedad con el nombre del string.
string in objeto

Saber qué propiedades existen dentro de un objeto:
Object.keys(objeto) -> Devuelve array de strings, con los nombres de cada una de las propiedades del objeto.

Object.values(objeto) -> Devuleve un array (de múltiples tipos) con los valores de las propiedades del objeto.

Object.assign() -> copiar todas las propiedads de un objeto en otro.

const persona = {
  nombre: 'Tomás',
  apellido: 'Lleonart',
  edad: 30,
  nacimiento: '10/03/1994',
  club: "Newell's Old Boys de Rosario",
  saludo: (personaASaludar) => {
    console.log(`Tomás dice "Hola ${personaASaludar}"`)
  },
}

*/
