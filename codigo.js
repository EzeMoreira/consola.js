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



//          Ejemplo extra de consola

const materias = {
    matematica: [90, 9, 3, "matematica"],    //1° parametro porcentaje de asistencia, 2° promedio, 3°TPS presentados
    fisica: [85, 8, 5, "fisica"],
    programacion: [80, 8, 8, "programacion"],
    calculo: [75, 7, 5, "calculo"],
    baseDeDatos: [70, 6, 4, "baseDeDatos"]
}

const aprobo = () =>{
    for (materia in materias){
        let asistencias = materias[materia][0]; //el materias[materia] es para recorrer el objeto y sus datos
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);      //El elemento 3 es el nombre de la materia

        if (asistencias >= 90){
            console.log("%c Asistencias en orden", "color:green");
        }   else {
            console.log("%c Falta asistencias", "color:red")
        }

        if (promedio >= 7){
            console.log("%c Promedio correcto", "color:green");
        }   else {
            console.log("%c Promedio desaprobado", "color:red")
        }

        if (trabajos >= 5){
            console.log("%c TPS en orden", "color:green");
        }   else {
            console.log("%c TPS insuficientes", "color:red")
        }
    }
}
aprobo();



//          Ejemplo extra 2 de consola

let tp = "1000 minutos para realizar trabajos practicos TPS";
let estudio = "1000 minutos de estudio durante el cursado";
let trabajo = "300 minutos en total trabajos en clase";
let homework = "60 minutos para realizar actividades de casa";
let descanso = "30 minutos de tiempo muerto para la persona";

console.log("TAREAS");

for (let i = 0; i < 15; i++){
    if (i == 0){
        console.group("Semana 1 finalizada");
    }
    console.groupCollapsed(" Dia " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if (i == 7){
        console.groupEnd();
        console.groupCollapsed("Semana 2 por iniciar");
    }
}

console.groupEnd();