// Reto para mañana, sencillito.
// Amplia la funcionalidad de la función suma()

// La siguiente función es capaz de sumar dos números. ¿qué cambios deben hacerse a la misma para que sea capaz de sumar 2 o más números?

// function suma( numero1, numero2 ) {
//     return numero1 + numero2;
// }

// suma( 3, 6 );   // 9 


// const numero1 = 3;
// const numero2 = 6;

// function suma (... numeros) {
//     let resultado = 0
//     for (let i = 0; i < numeros.length; i++) {
//         resultado += numeros[i]

//     }
//     return resultado
//   }

//   console.log(suma(5, 8 ,17, 29, 67));



// ¿Va a sobrevivir?

// Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

// Responda a la pregunta y devuelva true si es así, de lo contrario false


function balasNecesarias(dragones) {
    const balasNecesarias = dragones * 2; 
   
    const balasDisponibles = 17; 
  
    return balasDisponibles >= balasNecesarias;
  }
  
  // Ejemplo de uso:
  const dragones = 8;
  const suficientesBalas = balasNecesarias(dragones);
  console.log(suficientesBalas); 
  