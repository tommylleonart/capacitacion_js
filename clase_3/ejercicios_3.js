/* Mínimo

Math.min() devuelve el argumento mas pequeño. Por ejemplo Math.min(8, 4) devuelve 4.

Recursión
Hemos visto que % (el operador de residuo) se puede usar para probar si un
número es par o impar usando % 2 para ver si es divisible entre dos. Aquí hay
otra manera de definir si un número entero positivo es par o impar:
• Zero es par.
• Uno es impar.
• Para cualquier otro número N, su paridad (si es par o no) es la misma que N - 2 (si N - 2 es par, entonces N es par).
Define una función recursiva esPar que corresponda a esta descripción. La
función debe aceptar un solo parámetro (un número entero, positivo) y devolver
un Booleano.
Pruébalo con 50 y 75. Observa cómo se comporta con -1. Por qué? Puedes
pensar en una forma de arreglar esto?

Conteo de frijoles
Puedes obtener el N-ésimo carácter, o letra, de un string escribiendo "string"[N].
El valor devuelto será un string que contiene solo un carácter (por ejemplo,
"f"). El primer carácter tiene posición cero, lo que hace que el último se
encuentre en la posición string.length - 1. En otras palabras, un string de
dos caracteres tiene una longitud de 2, y sus carácteres tendrán las posiciones
0 y 1.
Escribe una función contarFs que tome un string como su único argumento
y devuelva un número que indica cuántos caracteres “F” en mayúsculas haya
en el string.
Despues, escribe una función llamada contarCaracteres que se comporte
como contarFs, excepto que toma un segundo argumento que indica el carácter
que debe ser contado (en lugar de contar solo caracteres “F” en mayúscula).
Reescribe contarFs para que haga uso de esta nueva función.

const esPar = (n) => {
  console.log(`Evaluando ${n}`)

  if (n === 0) {
    console.log(`${n} es cero.`)
    return true
  } else if (n === 1) {
    console.log(`${n} es uno.`)
    return false
  } else {
    console.log(`${n} no es cero ni uno.`)
    return esPar(n - 2)
  }
}

const resultado = esPar(41)

console.log(resultado)


const contarFs = (palabra) => {
  let contador = 0

  for (i = 0; i < palabra.length; i++) {
    if (palabra[i] === 'F') {
      contador++
    }
  }

  return contador
}
*/
