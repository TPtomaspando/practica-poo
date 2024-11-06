/*9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. */

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    return "Este animal emite un sonido.";
  }
}

class Perro extends Animal {
  emitirSonido() {
    return "Guau, Guau!";
  }
}

class Gato extends Animal {
  emitirSonido() {
    return "Miau!";
  }
}

let perro = new Perro("Labrador", 5);
let gato = new Gato("Negro", 6);

document.write(
  `${perro.nombre} emite el sonido de: ${perro.emitirSonido()}<br>`
);
document.write(`${gato.nombre} emite el sonido de: ${gato.emitirSonido()}<br>`);
