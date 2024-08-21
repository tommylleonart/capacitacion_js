/*
----- STRINGS (cadenas de text) -----

--- PROPIEDADES ---

- length: cantidad de caracteres.
- toUpperCase(): devuelve el string en mayúsculas.
- toLowerCase(): devuelve el string en minúsculas.
- slice(): devuelve una porción del string.
      string.slice(inicio, fin)
- indexOf(): devuelve la posición del caracter (o conjunto de caracteres).
      string.indexOf('caracter')
- trim(): elimina los espacios en blanco al inicio y al final de string.
- padStart(): toma la longitud deseada y el caracter de relleno.
      const nombre = 'Tomas'
      const nombreNormalizado = nombre.padStart(10, '-')

      console.log(nombreNormalizado)
- split(): devuelve un array con los strings que resultan de la división del original, tomando como separador
el valor del argumento.
      const dato = '12341234-123412341234-12452345'
      const datos = dato.split('-')

      console.log(datos) -> ['12341234', '123412341234', '12452345']
- join(): inverso de split.
      const datosSeparados = [1, 54623, 1236562]
      const datosJuntos = datosSeparados.join('-')

      console.log(datosJuntos)
- repeat(): devuelve un string con el string origial repetido tantas veces como indique el argumento.
      const la = 'la'
      const lalala = la.repeat(3)

      console.log(lalala)

Para acceder a un caracter de un string uso corchetes:

      const cadena = 'pedo'
      console.log(cadena[0])

*/
