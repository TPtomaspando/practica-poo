/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:

objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó
*/

const auto = {
  color: "rojo",
  marca: "Ford",
  modelo: "Kuga Hibrida",
  encendido: false,

  encendido: function () {
    this.encendido = true;
    document.write("El auto esta encendido");
  },
  apagado: function () {
    this.encendido = false;
    document.write("<p>El auto esta apagado</p>");
  },
};

auto.encendido();
auto.apagado();
