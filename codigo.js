//          Ejemplos de console.log

console.log("Hola que tal");
console.log(5 + 10);

//Aqui simplificamos en una sola linea estas dos funciones que le pedimos

console.log("El resultado de la siguiente operacion es: ", 5 + 10);



//          Ejemplos de mensajes de error

console.error("El ejercicio que intentas hacer esta mal");

console.warn("Esta es una advertencia, práctica mas");

console.info("Aquí aclaramos un texto que quieramos indicar al trabajar");

console.debug("Este método se utiliza para registrar mensajes de depuracion de codigo, su proposito es que muestre mensajes utiles durante el desarrollo y depuracion del codigo");



//          Limpieza de consola

console.clear(); //Este mando lo podemos colocar tanto en el codigo como en la consola



//          Agrupar mensajes

console.group(); //Inicia la union que se puede expandir con el texto que indiquemos en dicho parametro.
console.groupEnd(); //Cierra el grupo de union de texto.

//Ejemplo a continuacion

console.group("Mostrar información de los textos");
console.log("UA: ", navigator.userAgent, "Lang: ", navigator.language);
console.groupEnd();



//          Contadores

// for (let i = 0; i < 5; i++){
//     console.count("test-loop"); //Inicia el conteo
// }
// console.countEnd("test-loop");  //Finaliza el conteo



//          Test de velocidad

// Existe un metodo que nos permite iniciar un test de velocidad, para verificar cuanto tarda en milisegundos en realizar una operacion

console.time("test1");
for (let i = 0; i < 10; i++){
    console.timeLog("test1", i);
}
    console.timeEnd("test1");