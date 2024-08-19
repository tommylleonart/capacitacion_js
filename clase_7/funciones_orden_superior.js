/*

----- FUNCIONES DE ORDEN SUPERIOR -----


--- ABSTRACCIÓN ---

Las abstacciones son vocablos que esconden detalles y otorgan la capacidad de hablar acerca de los problemas
a un nivel superior.


--- ABSTRAYENDO LA REPETICIÓN ---

Es común que un programa hago algo una determinada cantidad de veces.

const repetirLog = (n) => {
  for (i = 0; i < n; i++) {
    console.log(i)
  }
}

const repetirAccion = (n, accion) => {
  for (i = 0; i < n; i++) {
    accion(i)
  }
}

repetirAccion(6, console.log)

const etiquetas = []

repetirAccion(5, (i) => {
  etiquetas.push(`Unidad ${i + 1}`)
})

console.log(etiquetas)


************************** SOBRE ARROW FUNCTIONS **************************
Si una arrow function es muy cortita, la puedo escribir en un solo renglón,
en ese caso no hace falta poner la palabra return ni los corchetes:

const suma = (x, y) => x + y

Es lo mismo que escribir

const suma = (x, y) => {
  return x + y
}
****************************************************************************

--- FUNCIONES DE ORDEN SUPERIOR ---

Son funciones que operan en otras funciones, ya sea tomándolas cono argumentos o retornándolas.
Las funciones son valores regulares.
Las funciones de orden superior nos permiten abstraer sobre acciones, no solo sobre valores.

Hay varias formas:

- funciones que crean nuevas funciones (función generadora):

const mayorQue = (n) => {
  return (m) => {
    m > n
  }
}

const mayorQue10 = mayorQue(10) // const mayorQue10 = (m) => m > 10

console.log(mayorQue10(11))

- funciones que cambian otras funciones:

const ruidosa = (funcion) => {
  return (...argumentos) => {
    console.log(`Llamando con ${argumentos}`)

    let resultado = funcion(...argumentos)

    console.log(`Llamada con ${argumentos}, retorno ${resultado}`)

    return resultado
  }
}

ruidosa(Math.min)(3, 2, 1)

- Funciones que proporcionan nuevos tipos de flujo de control.

const repetirAccion = (n, accion) => {
  for (i = 0; i < n; i++) {
    accion(i)
  }
}

function aMenosQue(prueba, entonces) {
  if (!prueba) entonces()
}

repetirAccion(3, (n) => {
  aMenosQue(n % 2 == 1, () => {
    console.log(n, 'es par')
  })
})


- Ciclo forEach.
Método de array incorporado. Acepta una función (es una función de orden superior).
Ejemplo:

const arrayPrueba = [1, 2, 3]

arrayPrueba.forEach((elemento) => console.log(elemento))
*/
