// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula:

// peso / altura^2
// Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30


const peso = Number(prompt('Por favor ingrese su peso: '));
const altura = Number(prompt('Por favor ingrese su latura en metro: '));

// console.log(peso);
// console.log(altura);

bmi = peso / (altura ** 2);
console.log(bmi);

if (bmi < 18.4){
    console.log("Bajo de peso")
}

else if  (bmi > 18.5 && bmi <24.9 ){
console.log("Peso normal")
}

else if  (bmi > 25 && bmi <29.9 ){
    console.log("Sobre peso")
}

else {
    console.log("Obeso")
};

console.log(bmi);
