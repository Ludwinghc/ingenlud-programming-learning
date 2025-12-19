// * Funciónes en TypeScript sin retornar valor
// Declarar una función es: function + `nombre de funcion`+ (`Parametros`) + {`cuerpo de la funcion`}
function HolaMundo() {
    console.log("Hola Mundo en TypeScript");
}
HolaMundo(); // Forma de llamar a las funciones
// * Funciones En TypeScript retornando valores
function Multiplicar(num1, num2) {
    return num1 * num2;
}
console.log(Multiplicar(5, 6)); // ! Se debe tener cuidado con el tipo de dato definido en la función y el parametro que se envia
