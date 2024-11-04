/*crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.pasajeros = [];
  }
  abordar(pasajero) {
    if (this.listaPasajeros.length < this.capacidad) {
      this.listaPasajeros.push(pasajero);
      return `Pasajero ${pasajero} abordó el avión ${this.nombre}.`;
    } else {
      return `El avión ${this.nombre} está lleno. No se puede abordar.`;
    }
  }
}

class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = [];
  }
  agregarAvion(avion) {
    this.listaAviones.push(avion);
  }

  buscarAvion(nombreAvion) {
    const avionEncontrado = this.listaAviones.find(
      (avion) => avion.nombre === nombreAvion
    );
    if (avionEncontrado) {
      return `Avión encontrado: Nombre: ${avionEncontrado.nombre}, Destino: ${avionEncontrado.destino}, Capacidad: ${avionEncontrado.capacidad}, Pasajeros a bordo: ${avionEncontrado.listaPasajeros.length}`;
    } else {
      return `No se encontró ningún avión con el nombre "${nombreAvion}".`;
    }
  }
}

let aeropuerto = new Aeropuerto("Aeropuerto Internacional");

let avion1 = new Avion("Boeing 737", 100, "Nueva York");
let avion2 = new Avion("Airbus A320", 150, "Londres");
let avion3 = new Avion("Boeing 747", 200, "Tokio");

aeropuerto.agregarAvion(avion1);
aeropuerto.agregarAvion(avion2);
aeropuerto.agregarAvion(avion3);

// Buscar un avión y mostrar su información
document.write(aeropuerto.buscarAvion("Boeing 737") + "<br>");

// Abordar pasajeros en el avión encontrado
document.write(avion1.abordar("Juan Pérez") + "<br>");
document.write(avion1.abordar("María López") + "<br>");
document.write(avion1.abordar("Luis García") + "<br>");
