Dificultad:
1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

alert("un mensaje");

  2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("Hello World" + " ");


3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

document.write(3 + 5);

4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt
y escriba un texto que diga «Hola nombreUsuario»
var nombre = prompt('Nombre de usuario?');
        alert('Hola' + "   " + nombre);

5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt

var num1 = prompt("Escriba el primer numero");
        var num2 = prompt("escriba el segundo numero");
        alert(parseInt(num1) + parseInt(num2));


6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
var k = parseInt(prompt("Escriba el primer numero"));
var z = parseInt(prompt("Escriba el segundo numero"));
if(k > z){
    document.write(k);
}else{
    document.write(z);
}

 
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

var a = parseInt(prompt("Escriba el primer numero A"));
var b = parseInt(prompt("Escriba el segundo numero B"));
var c = parseInt(prompt("Escriba el primer numero C"));

if((a > b) && (a > c)){
    document.write(a);
}else if ((b > a) && (b > c)){
    document.write(b);
}else if ((c > a) && (c > b)){
    document.write(c);
}

8.- Escribe un programa que pida un número y diga si es divisible por 2
var a = parseInt(prompt("Escriba el primer numero"));

if((a % 2) == 0){
    document.write("Es divisible entre 2");
}else{
    document.write("No es divisible entre  2");
}

9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

var A = prompt("Escriba una frase");
var B = A.length;

for(i=0; i <= B ; i++){
    if(A[i] === 'a' || A[i] === 'e' || A[i] === 'i' || A[i] === 'o'  || A[i] === 'u'){
        document.write(A[i]);
        
    }
}

10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

var a = prompt("Escriba un numero");
if((a % 2) == 0 || (a % 3) == 0 || (a % 5) == 0 || (a % 7) == 0){
        document.write("Es divisible");
    }else{
        document.write("No es divisible");
    }

11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

var a = prompt("Escriba un numero");

document.write("El numero  ");
document.write(a);
document.write("  es divisible por: ")
for(i = 2 ; i <= 7 ; i++){
   
    if((a % i) == 0){
        if( i == 2 || i == 3 || i == 5 || i == 7 ){
            document.write(i);
            document.write("    ");
        }else{}
    }
}

    