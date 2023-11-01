// Calcular Entero a partir de un Binario de 4 dígitos.

// Dada una matriz de unos y ceros, convierta el valor binario equivalente a un número entero.

// Ejemplos:

// Entrada: [0, 0, 0, 1]
// Salida :  1

// Entrada: [0, 0, 1, 0]
// Salida :  2

// Entrada: [0, 1, 0, 1]
// Salida :  5

// Entrada: [1, 0, 0, 1]
// Salida :  9

// Entrada: [0, 0, 1, 0]
// Salida :  2

// Entrada: [0, 1, 1, 0]
// Salida :  6

// Entrada: [1, 1, 1, 1]
// Salida :  15

// Entrada: [1, 0, 1, 1]
// Salida :  11.

let  entrada = [1, 0, 1, 1];
let entradaRevertida = entrada.reverse ();
resultadoFinal = 0
lista = [];

for (let i = entradaRevertida.length-1; i >= 0; i--) {
    result=(entradaRevertida[i]*2)**i;
    lista.push(result)
        
};

for(suma of lista){
    resultadoFinal += suma
}

console.log(resultadoFinal);