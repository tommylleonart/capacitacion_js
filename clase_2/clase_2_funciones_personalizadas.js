/*
----- FUNCIONES -----

DEFINIENDO UNA FUNCIÓN:

Ejemplo:


const cuadrado = function (x) {
  return x * x
}

const potencia = (x, y) => {
  if (y === 0) {
    return 1
  }

  let contador = 1
  let resultado = x

  while (contador < y) {
    contador++
    resultado *= x
  }

  return resultado
}

function cuadrado (x) {
  return x * x
}

------ VINCULACIONES Y ALCANCES -----
El alcance (scope) es la parte del programa donde la vinculación es visible.

-+---- ARGUMENTOS OPCIONALES -----

Ejemplo:

const multiplicacionRara = (numero1, numero2 = 2) => {
  return numero1 * numero2
}

console.log(multiplicacionRara(3))
 */
