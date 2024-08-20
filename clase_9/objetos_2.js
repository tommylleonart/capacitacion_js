/*

----- PROGRAMACIÓN ORIENTADA A OBJETOS (POO / OOP) -----

Conjunto de técnicas que usan objetos como principio central de organización de un programa.
Idea central: Dividir los programas en piezas pequeñas. Cada pieza tiene que ser responsable
de gestionar su propio estado.

--- ENCAPSULACIÓN ---

Los conocimientos de cómo funciona una parte de un programa, se mantenga local a esa pieza.
Cada vez que un detalle cambia, sólo el código directamente a su alrededor debe ser
actualizado.

Las diferentes piezas interactúan entre sí a través de INTERFACES.
Una interfaz es un conjunto limitado de funciones y vinculaciones que proporcionan
funcionalidad a un nivel abstracto, ocultando su implementación interna.
Es como un contrato.

Las propiedades de las interfaces se llaman públicas.
Las otras (no deben tocarlas códigos externos) son privadas.

Por convención en JS le ponemos un _ al comienzo de las variables privadas.

En resumen ENCAPSULAR (en JS) es seprar la interfaz de la implementación.


--- MÉTODO ---

Un método es UNA PROPIEDAD (de un objeto) con valor de FUNCIÓN.
Generalmente un método hace algo con el objeto que se llamó.
*/

/*

const persona = {
  nombre: 'Tomas',
  hablar: () => console.log(this.nombre),
}

persona.hablar() */

/*

this es como un parámetro extra, que se pasa de manera diferente.
Cada función tiene su propia vinculación "this".


--- PROTOTIPOS ---

El protoitipo es un objeto que se utiliza como reserva de propiedades alternativa.
Es donde se encuentran todos lo métodos y propiedades de un tipo de dato.



--- CLASES ---

Una clase es la definición formal de un tipo de objeto (qué métodos y propiedades va a
tener este). Es como una receta. (RECETA DE UNA PIZZA)

El objeto en cuestión, el que sale de la clase (la preparación de la receta) se llama
INSTANCIA de la clase (LA PIZZA).

Una clase se declara con la palabra clave "class". Por convención, las clases se nombran
con la primera letra en mayúsculas.

*/

/* class Conejo {
  constructor(tipo) {
    this.tipo = tipo
  }

  hablar(linea) {
    console.log(`El conejo ${this.tipo} dice '${linea}'`)
  }

  saludar() {
    console.log('Hola')
  }
}

// Para instanciar (crear un objeto a partir de una clase):

const conejoBlanco = new Conejo('blanco')

conejoBlanco.hablar('Hola') */

/*

--- MAPAS ---
Estructura de datos que asocia valores (key) con valores (value) (estructura key-value).

*/

/* const edades = {
  Tomas: 30,
  Francisco: 30,
  Lucas: 28,
} */
/* 
const edades = new Map()

edades.set('Tomas', 30)
edades.set('Francisco', 30)
edades.set('Lucas', 28)

console.log(edades)
*/
