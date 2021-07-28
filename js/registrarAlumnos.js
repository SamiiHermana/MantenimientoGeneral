var nameList = [];
var subjectList = [];
var bookList = [];
var nota1List = [];
var examList = [];
var nota2List = [];

if (localStorage.getItem("name_alumnos") != null) {
  nameList = JSON.parse(localStorage.getItem("name_alumnos"));
  subjectList = JSON.parse(localStorage.getItem("subject_alumnos"));
  bookList = JSON.parse(localStorage.getItem("book_alumnos"));
  nota1List = JSON.parse(localStorage.getItem("nota1_alumnos"));
  examList = JSON.parse(localStorage.getItem("exam_alumnos"));
  nota2List = JSON.parse(localStorage.getItem("nota2_alumnos"));
}

var registerButton = document.querySelector("#submit");

registerButton.addEventListener("click", registrarAlumno);

function registrarAlumno() {
  var name = document.querySelector("#name").value;
  var subject = document.querySelector("#subject").value;
  var book = document.querySelector("#book").value;
  var nota1 = document.querySelector("#nota1").value;
  var exam = document.querySelector("#exam").value;
  var nota2 = document.querySelector("#nota2").value;

  nameList.push(name);
  subjectList.push(subject);
  bookList.push(book);
  nota1List.push(nota1);
  examList.push(exam);
  nota2List.push(nota2);

  localStorage.setItem("name_alumnos", JSON.stringify(nameList));
  localStorage.setItem("subject_alumnos", JSON.stringify(subjectList));
  localStorage.setItem("book_alumnos", JSON.stringify(bookList));
  localStorage.setItem("nota1_alumnos", JSON.stringify(nota1List));
  localStorage.setItem("exam_alumnos", JSON.stringify(examList));
  localStorage.setItem("nota2_alumnos", JSON.stringify(nota2List));

  window.location.reload();
}
