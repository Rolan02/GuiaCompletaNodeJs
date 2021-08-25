var nombre = "Rolando";
var edad = 26;
var hobbies = true;

//Funcion normal con interpolacion de datos
function presentacion({}) {
  return `Mi nombre es ${nombre} tengo ${edad} anos de edad y tengo muchos hobbyes ${hobbies}`;
}
console.log(presentacion(nombre, edad));

//Funcion anonima con una sintaxis mas corta
const sumaDeDosNumeros = (a, b) => a + b;
console.log(sumaDeDosNumeros(4, 9));

//Funcion con un solo parametro - no nesecitamos parentesis cuando solo tenemos un parametro
const agregandoUnValor = (a) => a + 1;
console.log(agregandoUnValor(7));
