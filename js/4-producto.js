/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    return `Codigo: ${this.codigo}, nombre: ${this.nombre}, precio: ${this.precio}`;
  }
}

let producto1 = new Producto(100, "Manzana", 2.5);
let producto2 = new Producto(101, "Naranja", 3.5);
let producto3 = new Producto(102, "Banana", 4.5);

let productos = [producto1, producto2, producto3];

for (let producto of productos) {
  document.write(producto.imprimeDatos() + "<br>");
}
