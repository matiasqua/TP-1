//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

// var x = prompt("Ingrese la edad");
// if(x > 18){
//     document.write("Puede conducir");
// }else{
//     document.write("No puede conducir");
// }

// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente


// do{
// y = prompt("Ingrese la nota(numero)");
// x = parseInt(y);

// if(x>=0 && x<=10){
//     if(x >=0 && x <=2){     alert("Muy deficiente");
// }else if(x>=3 && x<=4){      alert("Insuficiente");
// }else if(x>=5 && x<=6){      alert("Suficiente");
// }else if(x == 7){      alert("Bien");
// }else if(x>=8 && x<=9){      alert("Notable");
// }else if(x == 10){      alert("Sobresaliente");
// }
// }else{
//     alert("Ingrese un numero valido");
// }
// }while(typeof x === 'number');

// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

/*{ <script>
        var y = "";
    do{
        x = prompt("Ingrese texto");
        y = y + x + ".-";
    }while(confirm("Desea seguir"));
    document.write(y);
        // var num1 = prompt("Escriba el primer numero");
        // var num2 = prompt("escriba el segundo numero");
        // alert(parseInt(num1) + parseInt(num2));
    </script>} */

    // 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

// var y;
// var suma = 0;
// do{
// do{
// x = prompt("Ingrese numeros");
// y = parseInt(x);
// suma= suma + y;
// }while(typeof x === 'number')
// }while(confirm("Desea seguir"));
// document.write(suma);

// </script>

// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

// do{
// var x = prompt("Ingrese su DNI");
// var k = parseInt(x);
// // if(k>=0 && k<=99999999){
// var y = parseInt(x % 23);

// if(y == 0){
//     document.write("T");
// }else if(y == 1){
//     document.write("R");
// }else if(y == 2){
//     document.write("W");
// }else if(y == 3){
//     document.write("A");
// }else if(y == 4){
//     document.write("G");
// }else if(y == 5){
//     document.write("M");
// }else if(y == 6){
//     document.write("Y");
// }else if(y == 7){
//     document.write("F");
// }else if(y == 8){
//     document.write("P");
// }else if(y == 9){
//     document.write("D");
// }else if(y == 10){
//     document.write("X");
// }else if(y == 11){
//     document.write("B");
// }else if(y == 12){
//     document.write("N");
// }else if(y == 13){
//     document.write("J");
// }else if(y == 14){
//     document.write("Z");
// }else if(y == 15){
//     document.write("S");
// }else if(y == 16){
//     document.write("Q");
// }else if(y == 17){
//     document.write("V");
// }else if(y == 18){
//     document.write("H");
// }else if(y == 19){
//     document.write("L");
// }else if(y == 20){
//     document.write("C");
// }else if(y == 21){
//     document.write("K");
// }else if(y == 22){
//     document.write("E");
// }
// // }
// }while(k>=0 && k<=99999999);



// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….
// var c = 1;
          
//           do{
//             document.write( y + "<br>");
//             y = y + "1";
//             c = c + 1;
//           }while(c <= 30);         


//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
//Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
// var min;
// x1 = prompt("Ingrese su nombre1");
// x2 = prompt("Ingrese la edad1");
// y1 = prompt("Ingrese su nombre2");
// y2 = prompt("Ingrese la edad2");
// z1 = prompt("Ingrese su nombre3");
// z2 = prompt("Ingrese la edad3");
// max = Math.max(x2,y2,z2);
// if(max == x2){
//   document.write(x1);
//  }else if(max == y2){
//   document.write(y1);
//  }else if(max == z2){
//   document.write(z1);
//  }

// 12- Realiza un script que genere un número aleatorio entre 1 y 99
// var aleatorio=0;

// aleatorio = Math.trunc(Math.random() * 99);
// document.write(aleatorio);
    

// 13- Realiza un script que pida un texto y lo muestre en mayúsculas.
// var x;

// x = prompt("Ingrese un texto");
// document.write(x.toUpperCase());

// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

// var cadena = prompt("Ingrese un texto");
// document.write(cadena.split(''));
//     var Ncadena = cadena.replace('',"-");

// document.write(Ncadena);

// 15- Realiza un script que cuente el número de minusculas que tiene un texto.
// var cadena = prompt("ingrese un texto");

// var c = 1;
// for(let i=0; i< cadena.length ; i++){
//     if(cadena[i] === cadena[i].toLowerCase()){
//         c = c + 1;
//         document.write(cadena[i]);
//     }
   
// }
// document.write(c);

// 15- Realiza un script que cuente el número de vocales que tiene un texto.


// var cadena = prompt("ingrese un texto");
// var vocales = ['a','e','i','o','u','A','E','U','I','O'];
// var c = 0;

//    for(let i = 0; i < cadena.length; i++){
//         if(vocales.indexOf(cadena[i]) >= 0){
//             document.write(cadena[i]);
//             c++;
//         }

//    }
// document.write(c);

// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
// --------------------1er metodo
// var Cadena = prompt("ingrese un texto");
// var nuevaCadena = '';
// for (var i = Cadena.length - 1; i >= 0; i--) { 
//     nuevaCadena = Cadena[i];
//     document.write(nuevaCadena);


// --------------------2er metodo

// }

// const invertirCadena = cadena => cadena.split("").reverse().join("");
 
// let cadena = "Hola";
// console.log("Cadena:", invertirCadena(cadena));
// document.write(nuevaCadena);

// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// var cadena = prompt("ingrese un texto");
// var vocales = ['a','e','i','o','u','A','E','U','I','O'];
// var c = 0,posicion = 1;

//    for(let i = 0; i < cadena.length; i++){
//         if(vocales.indexOf(cadena[i]) >= 0){
//             c++;
//             if( c === 1){
//                 posicion = posicion + i;
//             }
//         }

//    }
// document.write(posicion);
