const persona = {
  nombre: "Rolando",
  apellido: "Mamani",
  presentacion() {
    console.log(`Hola mi nombre es ${this.nombre}`);
  },
};
console.log(persona);
persona.presentacion();

//Destructuracion de propiedades
const imprimirNombre = ({ nombre }) => {
  console.log(nombre);
};
imprimirNombre(persona);

//El operador ... te permite copiar ya sea objetos y cualquier estructura de datos
const personaCopiada = { ...persona };
console.log(personaCopiada);

//Arreglos
const hobbies = ["Peliculas", "Bailar", "Pasear"];
console.log(hobbies.map((hobby) => "Hobbiy: " + hobby));
console.log(hobbies);

//El operador de descanzo (...args) Se utiliza en los metodos para definir parametros dimanicos
const agregando = (...args) => {
  return args;
};

console.log(agregando(1, 2, 3));
