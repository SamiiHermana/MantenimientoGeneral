//Desafío clases 1 y 2

// let nombre= (prompt("Ingrese su Nombre"));
// let apellido= (prompt("Ingrese su Apellido"))
// let edad= Number(prompt("Ingrese su Edad"))

// let alerta = alert("Mi nombre es "+ nombre+" apellido "+apellido + " edad: "+edad )

// if(edad<=1){
//     alert("Es un bebé");
// }
// else if(edad>1 && edad<=10){
//     alert("Es Niño");
// }
// else if(edad>10 && edad<=25){
//     alert("Es Adolescente");
// }
// else if(edad>25 && edad<=60){
//     alert("Es Adulto");
// }
// else{
//     alert("Es Anciano");
// }

//Desafío clases 3 y 4
// let alumno = prompt("Ingrese Nombre del alumno");
// let nota = prompt("Ingrese la nota de la asignatura");

// if (nota > 10 || nota < 1) {
//   alert("Ingrese una nota ente 1 y 10");
// } else {
//   resultadoAlumnos(alumno, nota);
// }

// function resultadoAlumnos(alumno, nota) {
//   switch (nota) {
//     case '1':
//       alert(`El alumno ${alumno} está Desaprobado con ${nota}`);
//       break;
//     case '2':
//       alert(`El alumno ${alumno} está Desaprobado con ${nota}`);
//       break;
//     case '3':
//       alert(`El alumno ${alumno} está Desaprobado con ${nota}`);
//       break;
//     case '4':
//       alert(`El alumno ${alumno} está Desaprobado con ${nota}`);
//       break;
//     case '5':
//       alert(`El alumno ${alumno} está Desaprobado con ${nota}`);
//       break;
//     case '6':
//       alert(`El alumno ${alumno} está Desaprobado con ${nota}`);
//       break;
//     case '7':
//       alert(`El alumno ${alumno} está Aprobado con ${nota}`);
//       break;
//     case '8':
//       alert(`El alumno ${alumno} está Aprobado con ${nota}`);
//       break;
//     case '9':
//       alert(`El alumno ${alumno} está Aprobado con ${nota}`);
//       break;
//     case '10':
//       alert(`El alumno ${alumno} está Aprobado con ${nota}`);
//       break;
//   }
// }
//Desafío clases 5 y 6 y Primer entrega Proyecto Final

class Alumno {
  constructor(nombre, apellido, nota) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nota = nota;
    this.resultado = function () {
      console.log(`Alumno ${this.nombre} ${this.apellido}, obtuvo ${this.nota}`);
    };
  }
}

let nombre = "";
let apellido = "";
let nota = "";
let curso = [];
let salir="OK";
do {
  nombre = prompt("Ingrese Nombre del alumno");
  apellido = prompt("Ingrese Apellido del alumno");
  nota = prompt("Ingrese la nota de la asignatura");
  let alumno = new Alumno(nombre, apellido, nota);

  curso.push(alumno);
} while (nombre ==! "OK" );

for (let i = 0; i < curso.length; i++) {
  const alumno = curso[i];
  if (alumno.nota > 10 || alumno.nota < 1) {
    alert("Ingrese una nota ente 1 y 10");
  } else {
    resultadoAlumnos(alumno);
  }
}

function resultadoAlumnos(alumno) {
  switch (alumno.nota) {
    case "1":
      alert(
        `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
      );
      break;
    case "2":
      alert(
        `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
      );
      break;
    case "3":
      alert(
        `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
      );
      break;
    case "4":
      alert(
        `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
      );
      break;
    case "5":
      alert(
        `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
      );
      break;
    case "6":
      alert(
        `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
      );
      break;
    case "7":
      alert(
        `El alumno ${alumno.nombre}${alumno.apellido} está Aprobado con ${alumno.nota}`
      );
      break;
    case "8":
      alert(
        `El alumno ${alumno.nombre}${alumno.apellido} está Aprobado con ${alumno.nota}`
      );
      break;
    case "9":
      alert(
        `El alumno ${alumno.nombre}${alumno.apellido} está Aprobado con ${alumno.nota}`
      );
      break;
    case "10":
      alert(
        `El alumno ${alumno.nombre}${alumno.apellido} está Aprobado con ${alumno.nota}`
      );
      break;
  }
}
const clase = curso.map((alumno) => {
  alumno.resultado();
});
