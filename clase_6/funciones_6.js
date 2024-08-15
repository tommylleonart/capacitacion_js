/*

----- PARÁMETROS RESTANTES -----

El promblema de declarar una función de esta forma es que sólo puede aceptar dos parámetros.
const suma = (x, y) => {
  return x + y
}

const resultado = suma(2, 3, 8, 10)

console.log(resultado)

Con el "spread operator" puede recibir tantos como se quiera. Estos entran en la función como un array.
const sumaInfinita = (...numeros) => {
  let resultado = 0

  for (let numero of numeros) {
    resultado += numero
  }

  // for (i = 0; i < numeros.length; i++) {
  //   resultado += numeros[i]
  // }

  return resultado
}

const resultadoSumaInfinita = sumaInfinita(1, 6, 10, -3)

console.log(resultadoSumaInfinita)


----- DESESTRUCTURAR -----

ES DEVINCULAR O SEPARAR UNA PROPIEDAD EN UNA VARIABLE SEPARADA.

const persona = {
  nombre: 'Francisco',
  edad: 30,
  nacionalidad: 'Argentino',
}

const { nombre, edad, nacionalidad } = persona

console.log(nombre)



------ JSON -----

Los objetos y arrays son secuencias de bits que contienen las direcciones de sus contenidos.
Para poder enviar un objeto por la red (por ejemplo), o guardarlo para después, tengo que convertir esas direcciones
de memoria en un archivo de algún tipo.
Para hacer esto se SERIALIZAN los datos -> se convierten a una descripción plana.
El formato de serialización más popular (en desarrollo web) es el JSON (JavaScript Object Notation).
Básicamente se ve igual que un objeto en javascript, con muy pequeñas diferencias.
1. Todos lo nombres de propiedades deben estar rodeados de comillas dobles.
2. Solo se permiten expresiones de datos siemples (no puede haber llamadas a funciones).
3. No pueden tener comentarios.

{
  "nombre": "Francisco",
  "edad": 30
}

--- Métodos integrados ---
JSON.stringify({ "nombre": "Francisco", "edad": 30 }) -> Devuelve un string codificado en JSON.
JSON.parse() -> Tomar un string y devolver un json.

*/

