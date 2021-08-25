// Se llama codigo asincrono por que no se ejecuta ni finaliza de inmediato

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!!");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

//Codigo sincrono se ejecutan una lina despues de la otra
console.log("Hola a todos");
console.log("Como estas");

//Js primero ejecutara el codigo sincrono despues el codigo asincrono aunq el tiempo sea el mas minimo
