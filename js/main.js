// definir las categorias y sus propiedades (stock maximo y % de reposicion)
const categorias = [
    { nombre: 'A', stockMaximo: 1000, porcentaje: 0.6 },
    { nombre: 'B', stockMaximo: 600, porcentaje: 0.4 },
    { nombre: 'C', stockMaximo: 300, porcentaje: 0.25 }
];

// funcion para determinar si es necesario reponer el stock
function verificarStock(categoria) {
    return categoria.stockActual <= categoria.porcentaje * categoria.stockMaximo;
}

// funcion para obtener la cantidad a reponer
function cantidadAReponer(categoria) {
    return categoria.stockMaximo - categoria.stockActual;
}

// inicializar el array para almacenar el stock actual
let stockActual = [];

// iterar sobre cada categoría para ingresar el stock actual
for (let i = 0; i < categorias.length; i++) {
    let stock = prompt("Ingrese el stock actual para la categoría " + categorias[i].nombre);
    stockActual.push(parseInt(stock));
}

// actualizar el stock actual en cada categoria
for (let i = 0; i < categorias.length; i++) {
    categorias[i].stockActual = stockActual[i];
}

// comprobar si es necesario reponer stock para cada categoria y mostrar mensaje correspondiente
for (let i = 0; i < categorias.length; i++) {
    if (verificarStock(categorias[i])) {
        const cantidad = cantidadAReponer(categorias[i]);
        console.log("Es necesario comprar " + cantidad + " unidades de la categoría " + categorias[i].nombre + ".");
    } else {
        alert("No es necesario comprar stock para la categoría " + categorias[i].nombre + ".");
    }
}