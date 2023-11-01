/** De un listado de personas determinar cuales son los productos que estan entre 10 y 20 dolares */

const frutas = [
    { nombre: 'Mangostino', precio: 34 },       
    { nombre: 'Mora', precio: 17 },      
    { nombre: 'Banano', precio: 11 },        
    { nombre: 'Papaya', precio: 13 },      
    { nombre: 'Lulo', precio: 8 }  
]


frutas1020 = [];

for (let i = 0; i < frutas.length; i++) {
    if(frutas[i].precio > 10 && frutas[i].precio < 20)
    frutas1020.push(frutas[i]);
    
    
}
console.log(frutas1020);



// const frutas = [
//     { nombre: 'Mangostino', precio: 34 },       
//     { nombre: 'Mora', precio: 16 },      
//     { nombre: 'Banano', precio: 10 },        
//     { nombre: 'Papaya', precio: 14 },      
//     { nombre: 'Lulo', precio: 8 }  
// ]

// let frutas1020 = frutas.filter(function(fruta){
//     return fruta.precio >= 10 && fruta.precio <= 20;
// })

console.log(frutas1020);
