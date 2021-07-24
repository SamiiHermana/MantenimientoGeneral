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

// class Alumno {
//   constructor(nombre, apellido, nota) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.nota = nota;
//     this.resultado = function () {
//       console.log(`Alumno ${this.nombre} ${this.apellido}, obtuvo ${this.nota}`);
//     };
//   }
// }

// let nombre = "";
// let apellido = "";
// let nota = "";
// let curso = [];
// let salir="OK";
// do {
//   nombre = prompt("Ingrese Nombre del alumno");
//   apellido = prompt("Ingrese Apellido del alumno");
//   nota = prompt("Ingrese la nota de la asignatura");
//   let alumno = new Alumno(nombre, apellido, nota);

//   curso.push(alumno);
// } while (nombre ==! "OK" );

// for (let i = 0; i < curso.length; i++) {
//   const alumno = curso[i];
//   if (alumno.nota > 10 || alumno.nota < 1) {
//     alert("Ingrese una nota ente 1 y 10");
//   } else {
//     resultadoAlumnos(alumno);
//   }
// }

// let alumnos = document.getElementsByClassName("alumnos");
// for (const alumno of alumnos) {
//   console.log(alumno.innerHTML);
// }
// let listado = document.getElementById("alumnos");
// let alumnos = ["Samanta","Gabriel", "Nicolás", "Julio","Antonella", "Julieta"];
// for (const alumno of alumnos) {
//     let li = document.createElement("li");
//     li.setAttribute("class", "alumnos");
//     li.innerHTML = alumno
//     listado.appendChild(li);}

//Desafío clases 9 y 10  Segunda entrega Proyecto Final

// let boton = document.getElementById("agregar");

// function resultadoAlumnos(alumno) {
//   switch (alumno.nota) {
//     case "1":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
//       );
//       break;
//     case "2":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
//       );
//       break;
//     case "3":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
//       );
//       break;
//     case "4":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
//       );
//       break;
//     case "5":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
//       );
//       break;
//     case "6":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
//       );
//       break;
//     case "7":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Aprobado con ${alumno.nota}`
//       );
//       break;
//     case "8":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Aprobado con ${alumno.nota}`
//       );
//       break;
//     case "9":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Aprobado con ${alumno.nota}`
//       );
//       break;
//     case "10":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Aprobado con ${alumno.nota}`
//       );
//       break;
//   }
// }

// class Alumno {
//   constructor(nombre, apellido, nota) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.nota = nota;
//     this.resultado = function () {
//       console.log(
//         `Alumno ${this.nombre} ${this.apellido}, obtuvo ${this.nota}`
//       );
//     };
//   }
// }
// boton.onclick = () =>{
//     let curso = [];
//     let continuar = "";

//     do {
//       nombre = prompt("Ingrese Nombre del alumno");
//       apellido = prompt("Ingrese Apellido del alumno");
//       nota = prompt("Ingrese la nota de la asignatura");
//       continuar = prompt(
//         "¿Desea Continuar? Digite la letra C si la respuesta es si, de lo contrario presione cualquier otra letra"
//       );
//       let alumno = new Alumno(nombre, apellido, nota);

//       curso.push(alumno);

//       for (let i = 0; i < curso.length; i++) {
//         const alumno = curso[i];
//         if (alumno.nota > 10 || alumno.nota < 1) {
//           alert("Ingrese una nota ente 1 y 10");
//         } else {
//           resultadoAlumnos(alumno);
//         }
//       }
//       localStorage.setItem("curso", JSON.stringify(curso));
//     } while (continuar === "C");

//     let listado = document.getElementById("alumnos");

//     for (const alumno of curso) {
//       const alumnoJSON = JSON.stringify(alumno);
//       let li = document.createElement("li");
//       li.setAttribute("class", "alumnos");
//       li.innerHTML = alumnoJSON;
//       listado.appendChild(li);
//     }
//   }

//Desafío clases 11 y 12

// $("body").append('<button id="agregar">Agregar Alumno</button>');

// function resultadoAlumnos(alumno) {
//   switch (alumno.nota) {
//     case "1":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
//       );
//       break;
//     case "2":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
//       );
//       break;
//     case "3":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
//       );
//       break;
//     case "4":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
//       );
//       break;
//     case "5":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
//       );
//       break;
//     case "6":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Desaprobado con ${alumno.nota}`
//       );
//       break;
//     case "7":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Aprobado con ${alumno.nota}`
//       );
//       break;
//     case "8":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Aprobado con ${alumno.nota}`
//       );
//       break;
//     case "9":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Aprobado con ${alumno.nota}`
//       );
//       break;
//     case "10":
//       alert(
//         `El alumno ${alumno.nombre}${alumno.apellido} está Aprobado con ${alumno.nota}`
//       );
//       break;
//   }
// }

// class Alumno {
//   constructor(nombre, apellido, nota) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.nota = nota;
//     this.resultado = function () {
//       console.log(
//         `Alumno ${this.nombre} ${this.apellido}, obtuvo ${this.nota}`
//       );
//     };
//   }
// }
// $(document).ready(function () {
//   $("button").click(function () {
//     let curso = [];
//     let continuar = "";

//     do {
//       nombre = prompt("Ingrese Nombre del alumno");
//       apellido = prompt("Ingrese Apellido del alumno");
//       nota = prompt("Ingrese la nota de la asignatura");
//       continuar = prompt(
//         "¿Desea Continuar? Digite la letra C si la respuesta es si, de lo contrario presione cualquier otra letra"
//       );
//       let alumno = new Alumno(nombre, apellido, nota);

//       curso.push(alumno);

//       for (let i = 0; i < curso.length; i++) {
//         const alumno = curso[i];
//         if (alumno.nota > 10 || alumno.nota < 1) {
//           alert("Ingrese una nota ente 1 y 10");
//         } else {
//           resultadoAlumnos(alumno);
//         }
//       }
//       localStorage.setItem("curso", JSON.stringify(curso));
//     } while (continuar === "C");

//     let listado = document.getElementById("alumnos");

//     for (const alumno of curso) {
//       const alumnoJSON = JSON.stringify(alumno);
//       let li = document.createElement("li");
//       li.setAttribute("class", "alumnos");
//       li.innerHTML = alumnoJSON;
//       listado.appendChild(li);
//     }
//   });
// });

//Desafío clases 11 y 12

class Alumno {
  constructor(name, subject, book, nota1, exam, nota2) {
    this.name = name;
    this.subject = subject;
    this.book = book;
    this.nota1 = nota1;
    this.exam = exam;
    this.nota2 = nota2;
  }
}

const curso = [];

function submitStudentData() {
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var book = document.getElementById("book").value;
  var nota1 = document.getElementById("nota1").value;
  var exam = document.getElementById("exam").value;
  var nota2 = document.getElementById("nota2").value;

  let alumno = new Alumno(name, subject, book, nota1, exam, nota2);

  curso.push(alumno);

  for (let i = 0; i < curso.length; i++) {
    localStorage.setItem("curso", JSON.stringify(curso));
  }

  let vectorCurso = localStorage.getItem("curso");

  if (!vectorCurso) {
    localStorage.setItem("alumno", JSON.stringify(curso));
  }
  alert("Los datos se han cargado correctamente");
  vectorCurso = JSON.parse(vectorCurso);
}

document
  .querySelector("#resultados")
  .addEventListener("click", mostrarResultados);

function mostrarResultados() {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "alumnos.json", true);

  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datosAlumnos = JSON.parse(this.responseText);

      let content = document.querySelector("#contentAlumnos");

      for (let alumno of datosAlumnos) {
        content.innerHTML += `
      
                
                <tr>
                    <th scope="row">${alumno.name}</th>
                    <td>${alumno.subject}</td>
                    <td>${alumno.book}</td>
                    <td>${alumno.nota1}</td>
                    <td>${alumno.exam}</td>
                    <td>${alumno.nota2}</td>
                </tr>
                
                `;
      }
    }
  };

  document.querySelector("#button").addEventListener("click", traerHorarios);

  function traerHorarios() {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "data.json", true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let datosHorarios = JSON.parse(this.responseText);

        let content = document.querySelector("#content");

        for (let dato of datosHorarios) {
          content.innerHTML += `
                
                <tr>
                    <th scope="row">${dato.id}</th>
                    <td>${dato.Materia}</td>
                    <td>${dato.Docente}</td>
                    <td>${dato.Horario}</td>
                    <td>${dato.virtual ? "Si" : "No"}</td>
                </tr>
                
                `;
        }
      }
    };
  }
}
