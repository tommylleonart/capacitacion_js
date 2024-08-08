/*

FIZZBUZZ:
Escribe un programa que use console.log para imprimir todos los números de
1 a 100, con dos excepciones. Para números divisibles por 3, imprime "Fizz"
en lugar del número, y para los números divisibles por 5 (y no 3), imprime
"Buzz" en su lugar.
Cuando tengas eso funcionando, modifica tu programa para imprimir "
FizzBuzz", para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz"
o "Buzz" para números divisibles por solo uno de ellos).

Tablero de ajedrez
Escribe un programa que cree un string que represente una cuadrícula de 8 ×
8, usando caracteres de nueva línea para separar las líneas. En cada posición
de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de
formar un tablero de ajedrez.
Pasar este string a console.log debería mostrar algo como esto:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

Cuando tengas un programa que genere este patrón, define una vinculación
tamaño = 8 y cambia el programa para que funcione con cualquier tamaño,
dando como salida una cuadrícula con el alto y ancho dados.

*/

const funcionAjedrez = (lado = 8) => {
  const caracteresPorRenglon = lado + 1
  const numeroTotalDeCaracteres = lado * lado

  let string = ``

  for (i = 0; i < numeroTotalDeCaracteres; i++) {
    if (i % caracteresPorRenglon === 0) {
      string += '\n'
    } else if (i % 2 == 0) {
      string += '#'
    } else {
      string += ' '
    }
  }

  console.log(string)
}

funcionAjedrez(100)

/* 
for (i = 0; i < 73; i++) {
  if (i % 9 === 0) {
    string += '\n'
  } else if (i % 2 == 0) {
    string += '#'
  } else {
    string += ' '
  }
} 
*/

/*

INSTRUCCIONES PARA SUBIR:

1. ABRIR POWERSHELL
2. IR A LA CARPETA CAPACITACION_JS USANDO EL COMANDO cd
3. COMANDO "git add ."
4. COMANDO "git commit -m 'Entrega'"
5. COMANDO "git push origin main"
*/

/* for (let numero = 1; numero <= 100; numero++) {
  if (numero % 3 === 0 && numero % 5 !== 0) {
    console.log('Fizz')
  } else if (numero % 5 === 0 && numero % 3 !== 0) {
    console.log('Buzz')
  } else if (numero % 3 === 0 && numero % 5 === 0) {
    console.log('FizzBuzz')
  } else {
    console.log(numero)
  }
} */
