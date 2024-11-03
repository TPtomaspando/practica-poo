/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área
 */

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  setAlto(nuevoAlto) {
    this.alto = nuevoAlto;
  }
  setAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }
  mostrar() {
    return `El ancho es: ${this.ancho}, el altos es: ${this.alto}`;
  }
  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }
  calcularArea() {
    return this.alto * this.ancho;
  }
}

let rectangulo1 = new Rectangulo(5, 10);

document.write(rectangulo1.mostrar() + "<br>");
document.write(`Perimetro: ${rectangulo1.calcularPerimetro()}<br>`);
document.write(`Area: ${rectangulo1.calcularArea()}<br>`);
rectangulo1.setAlto(8);
rectangulo1.setAncho(12);
document.write(rectangulo1.mostrar() + "<br>");
document.write("Nuevo Perímetro:", rectangulo1.calcularPerimetro() + "<br>");
document.write("Nueva Área:", rectangulo1.calcularArea());
