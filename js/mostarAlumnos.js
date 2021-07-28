llenarTabla();

function llenarTabla() {
  var tbody = document.querySelector("#studentsTable tbody");
  tbody.innerHTML = "";

  var nameList = JSON.parse(localStorage.getItem("name_alumnos"));
  var subjectList = JSON.parse(localStorage.getItem("subject_alumnos"));
  var bookList = JSON.parse(localStorage.getItem("book_alumnos"));
  var nota1List = JSON.parse(localStorage.getItem("nota1_alumnos"));
  var examList = JSON.parse(localStorage.getItem("exam_alumnos"));
  var nota2List = JSON.parse(localStorage.getItem("nota2_alumnos"));

  var cantidadAlumnos = nameList.length;

  for (var i = 0; i < cantidadAlumnos; i++) {
    var fila = document.createElement("tr");

    var celdaName = document.createElement("td");
    var celdaSubject = document.createElement("td");
    var celdaBook = document.createElement("td");
    var celdaNota1 = document.createElement("td");
    var celdaExam = document.createElement("td");
    var celdaNota2 = document.createElement("td");

    var textName = document.createTextNode(nameList[i]);
    var textSubject = document.createTextNode(subjectList[i]);
    var textBook = document.createTextNode(bookList[i]);
    var textNota1 = document.createTextNode(nota1List[i]);
    var textExam = document.createTextNode(examList[i]);
    var textNota2 = document.createTextNode(nota2List[i]);
    celdaName.appendChild(textName);
    celdaSubject.appendChild(textSubject);
    celdaBook.appendChild(textBook);
    celdaNota1.appendChild(textNota1);
    celdaExam.appendChild(textExam);
    celdaNota2.appendChild(textNota2);

    fila.appendChild(celdaName);
    fila.appendChild(celdaSubject);
    fila.appendChild(celdaBook);
    fila.appendChild(celdaNota1);
    fila.appendChild(celdaExam);
    fila.appendChild(celdaNota2);

    tbody.appendChild(fila);
  }
}
