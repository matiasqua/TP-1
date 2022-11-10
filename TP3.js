//----------------------Prácticas con arreglos y funciones
// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

// let meses = ['enero','febrero','marzo','abril','junio','julio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
// for(let i = 0; i<= meses.length ; i++){
//     document.write(meses[i] + "<br>");
// }

// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// var ciudades = '';
// var c = 1;
// do{
// ciudades = ciudades + prompt("Ingrese los nombre de ciudades") + ',';
// var d = parseInt(ciudades.length);
// }while(confirm("Desea seguir"));
// document.write(ciudades + "<br>");
// // document.write(ciudades.length);
 
// for(let i = 0; i<= ciudades.length; i++){
//     if(ciudades[i] == ',' && c == 1 ){
//         document.write(ciudades[i-1] + "<br>");
//         c = c + 2;
    
//     }else if(ciudades[i] == ',' && c == 3){
//         document.write(ciudades[i+1] + "<br>");
//         c = parseInt(ciudades.length);
//         //  document.write(c);
    
//     }else if(ciudades[i] == ',' && c == d){
//         document.write(ciudades[i+1] + "<br>");
//         // c = 0;
//     }
// }


// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

// var suma = 0;
// var dado = 0;
// // var dado = parseInt(Math.random() * (7 - 1) + 1);
// // document.write(dado);

// for(let i=0; i < 50; i++){
//     dado = parseInt(Math.random() * (7 - 1) + 1);
//     document.write(dado + " " );
//     suma = suma  + dado;
// }
// // document.write(dado);
// document.write("<br>" + suma);

// --------------------------------------------FUNCIONES---------------------------------------

// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

// function paridad(x){
//         if(x % 2 === 0){
//             return "El numero es Par";
//         }else{
//             return "El numero es Impar"
//         }
// }

// document.write(paridad(2));

// 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
// var min=0;
// var may=0;
// function mayusminus(cadena){
//     for(let i=0; i < cadena.length ; i++){
//         if(cadena[i] === cadena[i].toLowerCase()){
//             min = 1;
//         }else{
//             if(cadena[i] === cadena[i].toUpperCase()){
//                 may = 1;
//             }
//         }
//     }
    
//     if( may === 1 && min === 1){
//         return "tiene Mayusculas y Minusculas";
//     }else if(may === 1 && min === 0){
//         return "solo posee Mayusculas";
//     }else if(may === 0 && min === 1){
//         return "solo posee Minusculas";
//     }

// }
// var cadena = "ninons";
// document.write(mayusminus(cadena));

// 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
// La fórmula del perímetro  es p = 2*(a +b)

// let x = parseInt(prompt("ingresar lado A de un rectangulo"));
// let y = parseInt(prompt("ingresar lado B de un rectangulo"));
// var p=0;
// function perimetro(x,y){
//  return p = 2*(x + y);
// }
// perimetro(x,y);
//  document.write(p);

// 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
// let num = parseInt(prompt("ingresar cualquier numero"));
// var multi = 0;
// function tablemulti(num){
//     // for(let i=1; i <= 10; i++){
//     //     d = x;
//     //     x = d * i;
//     //     document.write("La tabla del" + d + "es:" + x);
//     // }
//     for (var i = 1; i <= 10; i++) {
//         multi = num * i;
//         document.write(num + "x" + i + "=" + multi + "<br>");
//     }

// }

// tablemulti(num);