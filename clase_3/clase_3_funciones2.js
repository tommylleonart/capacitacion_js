/*

----- VINCULACIONES Y ALCANCES (scope) -----

Cada vinculación tiene un alcance.
El alcance corresponde a la parte del programa donde es visible la vinculación.

Si definimos una vinculación fuera de una función o bloque, el alcance es TODO EL PROGRAMA. -> Vinculaciones globales
(de scope global).

Las vinculaciones creadas como parámetros de función o dentro de una función, solo pueden ser referenciadas en la
función. -> Vinculaciones locales.

Ejemplo:
const vinculacionGlobal = 'Hola Global'

function testingGlobal() {
  const vinculacionLocal = 'Hola Local'
  console.log(vinculacionGlobal)
  console.log(vinculacionLocal)
}

testingGlobal()

Podemos crear bloques y funciones dentro de otros bloques y funciones, eso genea múltiples grados de localidad (múltiples
scopes).
Cada alcance local puede ver todos los alcances locales que lo contengan. Y todos los alcances puede ver el global.
Este enfoque se llama ALCANCE LÉXICO.


----- FUNCIONES COMO VALORES -----
Vincular una función es darle nombre a un pedazo de código.
Esa vinculación se define una vez y no cambia nunca. 

----- FUNCIONES DE CIERRE (CLOUSURE FUNCTIONS) -----

¿QUÉ PASA CON LAS VINCULACIONES LOCALES CUANDO LA LLAMADA DE FUNCIÓN QUE LOS CREO NO ESTÁ ACTIVA?

function envolverValor(n) {
  let local = n

  return () => local
}

let envolver1 = envolverValor(1)
let envolver2 = envolverValor(2)

console.log(envolver1())
console.log(envolver2())

----- RECURSIÓN -----

Una función recursiva es una función que se llama así misma.

const potencia = (base, exponente) => {
  if (exponente === 0) {
    return 1
  } else {
    return base * potencia(base, exponente - 1)
  }
}

const cuboDeCinco = potencia(5, 3)

console.log(cuboDeCinco)

----- FUNCIONES Y EFECTOS SECUNDARIOS (SIDE EFFECTS) -----

Básicamente tenemos dos tipos de funciones:
- Las que se llaman por un efecto secundario.
- Las que se llaman por su valor de retorno.

FUNCIÓN PURA: Tipo de función / generación de valores SIN EFECTOS SECUNDARIOS. Que además no
depende de efectos secundarios de otro código. Cuando se llama con los mismos argumentos
devuelve el mismo valor.

*/

