/*let A = Number(prompt("Enter A"));
let B = Number(prompt("Enter B"));
let C = prompt("donner l'opération");

if (C != "+" && C != "-" && C != "*" && C != "**" && C != "%" && C != "/") {
  alert("NOOOO PLEASESSS");
} else if (C == "+") {
  console.log(A + B);
} else if (C == "-") {
  console.log(A - B);
} else if (C == "*") {
  console.log(A * B);
} else if (C == "**") {
  console.log(A ** B);
} else if (C == "%") {
  console.log(A % B);
} else if (C == "/" && (A == 0 || B == 0)) {
  alert("Eruurrr");
} else {
  console.log(A / B);
}*/

/*for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}*/

/*if (isNaN(A) && isNaN(B)) {
  alert("ta7che  !!");
} else {
  console.log(A + B);
  console.log(A - B);
  console.log(A * B);
  console.log(A / B);
  console.log(A ** B);
  console.log(A % B);
}*/
let A = Number(prompt("saisir les nombres"));
let List = [];
for (let i = 0; i <= A; i++) {
  let B = Number(prompt("Enter les nombres"));
  while (B < 50 || B > 100) {
    alert("les nombres doit etre et enter 50 et 100");
    B = Number(prompt("Enter les nombres"));
  }
  List.push(B);
  if (B % 2 == 0) {
    console.log(B);
  }
}
