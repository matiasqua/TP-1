//--------------------------------------------------POO(PROGRAMACION ORIENTADA A OBJETOS)

// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// const auto  = {
//     color : "Azul",
//     marca : "Fiat",
//     modelo : "Duna"
    
// }

// auto.precio = 70000;

// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

// Rectángulos

// class cuenta {
//     constructor(titular, saldo){
//         this.titular = titular;
//         this.saldo = saldo = 0;
//     }
//   // METODO
//   ingresar(x){
//     this.saldo = x;
//   }  
//   extraer(y){
//     this.saldo = this.saldo -y;
//   }
// }
// let cuenta1 = new cuenta("Juan Perz",);

// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

// class rectangulos {
//     constructor(alto,ancho){
//         this.alto = alto;
//         this.ancho = ancho;
//     }
//     //Metodo
//     perimetro(){
//         return this.alto * 2 + this.ancho * 2;
//     }
//     area(){
//         return this.alto * this.ancho;
//     }
// }
// let rectang = new rectangulos(10,5);


// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

// class Producto {
//     constructor (codigo, nombre,precio){
//     this.codigo = codigo;
//     this.nombre = nombre;
//     this.precio = precio;
//     }
//     imprime () {
//         document.write(`El codigo es ${this.codigo} nombre es ${this.nombre} precio es ${this.precio}`);
//     }
// }
// let Prod1 = new Producto (123, "Juan", 320000);

// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:

// class Persona {
//     constructor(nombre, edad, DNI, sexoM,sexoF, peso,altura,añoDeNacimiento) {
//         this.nombre = nombre;
//         this.edad = edad;
//         this.DNI = DNI;
//         this.sexoM = sexoM;
//         this.sexoF= sexoF;
//         this.peso = peso;
//         this.altura = altura;
//         this.añoDeNacimiento = añoDeNacimiento;
           
//     }
//     mostrarGeneracion(){
//         if(this.añoDeNacimiento >= 1994 && this.añoDeNacimiento <= 2010){
//             return "Generacion Z,7.800000, Irreverencia";
//         }else if(this.añoDeNacimiento >= 1981 && this.añoDeNacimiento <= 1993){
//             return "Generacion Y(milenials),7.200000, Frustacion"
//         }else if(this.añoDeNacimiento >= 1969 && this.añoDeNacimiento <= 1980){
//             return "Generacion X,9.300000, Obsesion por el exito"
//         }
//     }
// }

// let persona1 = new Persona("Juan", 23,39138965, "Masculino","-",98,1.85,1995);

// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
    constructor(ISBN,Titulo,Autor,NumeroDePaginas){
        this.ISBN = ISBN;
        this._Titulo = Titulo;
        this.Autor = Autor;
        this.NumeroDePaginas = NumeroDePaginas;
    }
    set cambiarTitulo(valor){
        this._Titulo=valor;
    }
    get obtenerTitulo(){
        return console.log(this._Titulo);
    }
}

let libro1 = new Libro(123, "Pepito", "Anna Frank", 84);
libro1.cambiarTitulo = "LOS MISTERIOS DE JAVA";
libro1.obtenerTitulo;