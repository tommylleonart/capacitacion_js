// Clase 2

/*

En la clase uno:
- Creamos.
- Les aplicamos operadores.
- Obtuvimos nuevos valores.

----- EXPRESIÓN -----
Un fragmento de código que produce un valor.
Las expresiones pueden contener otras expresiones adentro.
La expresión es como un fragmento de oración.


----- DECLARACIÓN -----
La declaración es como la oración completa.
Un PROGRAMA es una lista de declaraciones.
Generalmente, en programación, las declaraciones terminan con ";", en JS no es necesario.

----- VINCULACIONES O ASIGNACIONES -----
Las vinculaciones sirven para "atrapar" valores.

Ejemplo:

let vinculo = 5 * 5
let otroVinculo = vinculo
let tercerVinculo

const vinculoConst = 3

A partir de que una vinculación es declarada, puedo usarla como expresión.

const SIGNIFICA CONSTANTE, apunta al mismo valor durante toda su vida, ES INMUTABLE.

Los nombres de las variables pueden ser cualquier palabra, siempre que:
- Empiece por una letra.
- No tenga espacios.
- Que no sea una palabra clave.


----- ENTORNO -----
La colección de vinculaciones y sus valores que existe en un momento dado.


----- FUNCIONES -----
Las funciones se pueden ejecutar (invocar, llamar, aplicar).

----- VALORES DE RETORNO -----
Cuando una función PRODUCE UN VALOR se dice que lo RETORNA (retorna ese valor).
Todas las cosas que producen un valor en JS son una expresión -> las llamadas a funciones
se pueden usar dentro de expresiones más grandes.


----- FLUJOS DE CONTROL -----
Javascript ejecuta de arriba a abajo (dentro del archivo).


----- EJECUCIÓN CONDICIONAL -----
if omite una declaración dependiendo de una expresión booleana.

Ejemplo:

let numero = 4

if (numero < 6) {
  console.log('El numero es menor a 6')
} else if (numero > 4) {
  console.log('El numero es 5')
} else {
  console.log('El numero es menor a 5')
}

----- CICLOS WHILE Y DO -----

La declaración while crea un ciclo / bucle que dura hasta que la expresión entre paréntesis
es evaluada como false.

Ejemplo:

let contador = 100

while (contador < 100) {
  console.log(contador + 1)
  contador ++
}

El ciclo do tiene una diferencia: Siempre se ejecuta al menos una vez.

Ejemplo:

do {
  console.log('Se ejecuta igual')
} while (contador < 100)

----- CICLO FOR -----
FOR (CONTADOR; CONDICIÓN; INCREMENTO)

Ejemplo:

for (let numero = 0; numero <= 12; numero = numero + 2) {
  console.log(numero)
}

LOS CICLOS SE PUEDEN CORTAR CON LA PALABRA CLAVE BREAK

Ejemplo:

for (let i = 20; ; i++) {
  if (i % 7 == 0) {
    console.log(i)
    break
  }
}


REASIGNACIONES SUSCINTAS:

let numero = 1 
numero = numero + 1
numero ++

numero = numero + 2
numero += 2


----- SWITCH ------
Expresa despachos de manera directa:

Ejemplo:

let color = 'verde'

switch (color) {
  case 'negro':
    console.log('el color es negro')
    break
  case 'rojo':
    console.log('el color es rojo')
    break
  default:
    console.log('El color no es rojo ni negro')
    break
}
*/

