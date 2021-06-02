
let nombre= (prompt("Ingrese su Nombre"));
let apellido= (prompt("Ingrese su Apellido"))
let edad= Number(prompt("Ingrese su Edad"))

let alerta = alert("Mi nombre es "+ nombre+" apellido "+apellido + " edad: "+edad )


if(edad<=1){
    alert("Es un bebé");
}
else if(edad>1 && edad<=10){
    alert("Es Niño");
}
else if(edad>10 && edad<=25){
    alert("Es Adolescente");
}
else if(edad>25 && edad<=60){
    alert("Es Adulto");
}
else{
    alert("Es Anciano");
}

