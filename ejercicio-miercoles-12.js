// 1. Obtener una lista con los nombres de los productos mas baratos, en el entendido que se considera barato un producto que no supera los 5 dólares.
// 2. Calcular el costo promedio de todos productos de la lista cuyo precio y cantidad disponible es mayor a cero
// 3 .Calcular el costo total del inventario.


let products = [
    { nombre: "Pan", precio: 3, cantidad: 20 },
    { nombre: "Tomate", precio: 8, cantidad: 7 },
    { nombre: "Leche", precio: 0, cantidad: 4 },
    { nombre: "Huevos", precio: 9, cantidad: 0 },
    { nombre: "Arroz", precio: 5, cantidad: 5 },
    { nombre: "Cebolla", precio: 0, cantidad: 10 },
    { nombre: "Naranjas", precio: 12, cantidad: 10 },
];

frutasbaratas = [];

for (let i = 0; i < products.length; i++) {
    if(products[i].precio >= 1 && products[i].precio <= 5)
    frutasbaratas.push(products[i]);  
    
    
}
console.log(frutasbaratas);

for (let i = 0; i < products.length; i++) {
    
    
}

