//* Hay formas para Asignar valores a variables en TS

//* Indicando el tipo de dato de la variable
let texto1: string;

//*Dejando que TS interprete en función del contenido de la variable
let text2:"Colombia";

//! Existe Dos formas de declarar variables en TS

//! Usando let (se usa cuando el valor de la variable puede cambiar con el tiempo. NO se puede volver a declarar)
let contador = 0; //Definimos un valor a la variable
//let contador = 1; ❌ Error
contador= contador+1; //Cambia dicho valor
console.log(contador);

//! Usando const(se usa cuando NO debe cambiar a como se declaro inicialmente)
const pi = 3.1416;
//pi=3; ❌ Error
//* Pero si la variable es un objeto SI se puede modificar el contenido de la misma
const dict = { nombre: "Ludwing" }
dict.nombre = "Wladimir"; //✅ Si se puede
// dict = { nombre: "Nelson" } ❌ Error