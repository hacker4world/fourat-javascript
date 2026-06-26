function displayName(name) {
  console.log(name);
}

function addition(a, b) {
  return a + b;
}

function premier(x) {
  let s = 0;
  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      s = s + 1;
    }
  }
  if (s != 0) {
    return false;
  } else {
    return true;
  }
}

let B = Number(prompt("saisir un nombre :"));
test = premier(B);

console.log(test);

console.log(premier(B));


console.log(premier( Number(prompt("saisir un nombre :"))));

