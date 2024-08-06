/*
Valores: porción de bits que representa un pedazo de información.

-- Tipos de valores simples --

------ Números (number). ------
Valores numéricos.
64 bits.
Los números se escriben sin comillas ni nada, secos.
*/

let ejemploNumero = 31

/*
- Operadores numéricos.
+ - / *
% 

- Números especiales.
Infinity
-Infinity
NaN (Not a number)

------ Cadenas de texto (string). ------
Tipo de dato utilizado para representar texto.
Se escribe entre comillas.

Ejemplo:
*/

let ejemploTexto1 = 'Milei es un "sorete".'
let ejemploTexto2 = 'Milei es un sorete.'
let ejemploTexto3 = `Milei es un sorete ${ejemploNumero}.`

/*

\ -> Caracter de escape. Lo que le siga a esa barra no va a ser interpretado como un caracter.

- Operadores de texto
+ -> Concatenar texto.
Ejemplo:
*/

let textoUno = 'Esto es '
let textoDos = 'concatenar texto.'
let textoConcatenado = textoUno + textoDos

/*

Plantilla literal: ${}
Lo se escriba dentro de la plantilla literal, será computado.


----- Operadores Unarios ----
Son operadores que tienen un solo parámetro.

typeof: devuelve el tipo de valor

----- Operadores Binarios ------
+ - < > * /


----- Valores Booleanos (boolean)-----
Dos posibilidades:
- true (1)
- false (0)

Comparaciones producen valores boooleanos

Ejemplo:
*/

// console.log(3 > 2) // true
// console.log(2 > 3) // false

/*
----- Otros operadores importantes ----
= -> NO ES IGUAL, ES EL OPERADOR DE ASIGNACIÓN.
== -> Igual a.
=== -> Igual estricto

Ejemplos:
*/

let operadorAsignación = 'cualquierCosa.'
let igualA = 74 == 74
let stringIgualANumber = 'Hola' == 2
let numerosIgualesNoEstricto = '1' == 1
let numerosIgualesEstricto = '1' === 1

/*
"!=" -> Distinto a
"!==" -> Distinto estricto a

Ejemplos:
*/

let numerosDistintosNoEstricto = '2' != 2 // false
let numerosDistintosEstricto = '2' !== 2 // true

/*

<= Menor o igual
>= Mayor o igual

Hay un valor en JS que NO ES IGUAL A SÍ MISMO: NaN

----- OPERADORES LOGICOS -----

&& -> Y (and)
|| -> O (or)
"!" -> not


---- OPERADORES TERNARIOS -----

siEsto ? esto : siNoEsto

Ejemplo:

let variableUno = 8
let variableDos = 6

console.log(
  variableUno > variableDos
    ? `${variableUno} es mayor que ${variableDos}`
    : `${variableUno} no es mayor que ${variableDos}`
)

----- Valores Vacíos ----

Se usan para denotar la ausencia de un valor significativo. Son valores sin información.

- undefined
- null


Dato de color:
Los valores 0, undefined, Nan  y "" (string vacío) cuentan como false.
Null no es ni true ni false.

----- Problema con operadores lógicos (cuando se infiere el tipo).-----
&& y || devuelve el valor del lado izquierdo cuando este puede ser convertido a verdadero, de lo contrario,
devuelve el valor de la derecha.

console.log(null, 'usuario') // -> devuelve usuario
console.log('otro', 'usuario') // -> devuelve otro
*/

