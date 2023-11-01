// Escribe una función que calcule el precio original del producto, sin IVA. Si el precio de un producto es 200,00 y el IVA es del 15%, entonces el precio final del producto (con IVA) es: 200,00 + 15% = 230,00. Por lo tanto, si su función recibe 230,00 como entrada, debería devolver 200,00

// Restricciones:
// El IVA es siempre del 15%.
// Redondea el resultado a 2 decimales.
// Si se proporciona un valor nulo, devuelve -1


const precioIva = 4756
const iva = 15



function porcentaje(a,b){
    if (isNaN(a)) {
        return -1
    }
    
    else{
        const iva = a * b /100;
        let precio = a - iva;
        return precio.toFixed(2)
    }
    
}

console.log(porcentaje(precioIva, iva));