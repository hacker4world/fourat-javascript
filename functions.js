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
  z = A.length;
  y = "azertyuiopqsdfghjklmwxcvbn123456789";

  if (isNaN(A[0]) == false) {
    return false;
  } else {
    first = A.slice(0, x);
    second = A.slice(x, z);

    if (first.length < 4 || second != "@gmail.com") {
      return false;
    }

    for (i = 1; i < first.length; i++) {
      if (y.includes(first[i]) == false) {
        return false;
      }
    }
  }

  return true;
}

function filter(F) {
  v = "aeiouy";
  a = "zrtypqsdfghjklmwxcvbn";
  s = 0;
  k = 0;
  for (i = 0; i <= F.length; i++) {
    if (v.includes(F[i])) {
      s = s + 1;
    } else {
      if (a.includes(F[i])) {
        k = k + 1;
      }
    }
  }

  console.log("les nombre voyel sont :", s);
  console.log("les nombre non voyel sont :", k);
}

function add(L) {
  list = [];
  s = 0;
  for (let i = 0; i < L; i++) {
    list.push(Number(prompt("donner nbr")));
    if (s < list[i]) {
      s = list[i];
    }
  }
  return s;
}

function split(data) {
  List = [];
  f = data.indexOf(",");
  l = data.length;
  first = data.slice(0, f);
  second = data.slice(f + 1, l);
  List.push(first);
  List.push(second);
  return List;
}

function PGCD(A, B) {
  let k = 0;
  for (let i = 1; i < B; i++) {
    if (A % i == 0 && B % i == 0) {
      k = i;
    }
  }
  return k;
}
function verif(data) {
  k = 0;
  f = data.indexOf(",");
  l = data.length;

  for (i = 0; i < data.length; i++) {
    if (data[i] == ",") {
      k = k + 1;
    }
  }
  if (k != 1) {
    return false;
  }

  first = data.slice(0, f);
  second = data.slice(f + 1, l);
  console.log(first);
  console.log(second);
  if (first == "" || second == "") {
    return false;
  }

  if (isNaN(first) == true || isNaN(second) == true) {
    return false;
  }
  if (Number(first) < 0 || Number(second) < 0) {
    return false;
  }
  if (first.includes(" ") || second.includes(" ")) {
    return false;
  }

  if (Number(first) > Number(second)) {
    return false;
  }

  return true;
}

