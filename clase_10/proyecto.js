/*

Construir un robot que hace entregas por correo
(recoge y deja paquetes).

- VillaGobernadorGalvez
- Tiene 11 lugares, con  14 caminos entre ellos:

const caminos = [
  'Casa de Alicia - Casa de Tommy',
  'Casa de Alicia - Municipalidad',
  'Casa de María - Casa de Franco',
  'Casa de Franco - Casa de Josefina',
  'Casa de Josefina - Kiosco',
  'Super - Municipalidad',
  'Super - Policia',
  'Casa de Alicia - Cabaña',
  'Casa de Tommy - Policia',
  'Casa de María - Policia',
  'Casa de Josefina - Granja',
  'Super - Granja',
  'Super - Kiosco',
  'Kiosco - Policia',
]


La red de caminos forma un GRAFO (colección de puntos [lugares]
con líneas [caminos] entre ellos)

Queremos ver a qué destinos podemos llegar desde un lugar determinado.

***************** DESTRUCTURING DE ARRAYS *******************

const array = [1, 2, 3]

let [primero, segundo, tercero] = array

console.log(primero) => 1
console.log(segundo) => 2
console.log(tercero) => 3


1) Convertir la lista de caminos en una estructura de datos que, para
cada lugar, nos diga a donde se puede llegar desde ahí.

*/

const caminos = [
  'Casa de Alicia - Casa de Tommy',
  'Casa de Alicia - Municipalidad',
  'Casa de María - Casa de Franco',
  'Casa de Franco - Casa de Josefina',
  'Casa de Josefina - Kiosco',
  'Super - Municipalidad',
  'Super - Policia',
  'Casa de Alicia - Cabaña',
  'Casa de Tommy - Policia',
  'Casa de María - Policia',
  'Casa de Josefina - Granja',
  'Super - Granja',
  'Super - Kiosco',
  'Kiosco - Policia',
]

const construirGrafo = (array) => {
  // Así se crea un objeto vacío:
  const grafo = Object.create(null)

  const arrayDeArrays = array.map((camino) => camino.split(' - '))

  const añadirCamino = (desde, hasta) => {
    if (grafo[desde] == null) {
      grafo[desde] = [hasta]
    } else {
      grafo[desde].push(hasta)
    }
  }

  for (elemento of arrayDeArrays) {
    const desde = elemento[0] // Casa de Alicia
    const hasta = elemento[1] // Casa de Tommy
    // Con destructuring:
    /* const [desde, hasta] = elemento */

    añadirCamino(desde, hasta)
    añadirCamino(hasta, desde)
  }

  return grafo
}

console.log(construirGrafo(caminos))

/*

El robot se mueve por Gálvez.
Hay paquetes en distintos lugares, cada uno dirigido a otro lugar.
El robot toma un paquete cuando lo encuentra y lo entrega cuando
llega al destino.
El robot debe decidir, en cada punto, a donde ir después.
Termina cuando entrega todos los paquetes.

*/