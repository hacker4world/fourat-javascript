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

function somme(x, y) {
  let s = 0;
  for (let i = x; i <= y; i++) {
    s = s + i;
  }
  return s;
}

function palndrom(A) {
  let s = A.length - 1;
  for (let i = 0; i <= A.length - 1; i++) {
    console.log(i);
    console.log(s);

    if (A[i] != A[s]) {
      return false;
    } else {
      s = s - 1;
    }
  }

  return true;
}

function gmail(A) {
  x = A.indexOf("@");
  z = A.length - 1;
  y = "azertyuiopqsdfghjklmwxcvbn123456789";

  if (isNaN(A[0]) == false) {
    return false;
  }

  for (let i = 0; i <= z; i++) {
    if (
      A.slice(i, x) != y &&
      A.slice(i, x).length < 4 &&
      A.slice(x, z) != "@gmail.com"
    ) {
      return false;
    }
  }
  return true;
}

// xxxx&@xxxgmail.com

let name = "aziz";

let y = "azertyuiopqsdfghjklmwxcvbn123456789";

console.log(y.includes(name));
