/*8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
 */

class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }
  Saludar() {
    return `Hola, me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`;
  }

  Despedirse() {
    return `Adiós, soy ${this.nombre}. ¡Hasta luego!`;
  }
}

let persona1 = new Persona("Tomas", 19, "Programador");
let persona2 = new Persona("Lucas", 28, "Abogado");

document.write(persona1.Saludar() + "<br>");
document.write(persona1.Despedirse() + "<br>");

document.write(persona2.Saludar() + "<br>");
document.write(persona2.Despedirse() + "<br>");
