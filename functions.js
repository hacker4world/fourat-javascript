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

function sos(ch) {
  chaine = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn123456789";
  sb = 0;
  s = 0;
  m = 0;
  n = 0;
  pair = 0;
  inpair = 0;
  for (let i = 0; i < ch.length; i++) {
    if (isNaN(ch[i]) == false) {
      s = s + Number(ch[i]);
    }
    if (
      ch[i].toUpperCase() == ch[i] &&
      isNaN(ch[i]) == true &&
      chaine.includes(ch[i])
    ) {
      m = m + 1;
    }
    if (
      ch[i].toLowerCase() == ch[i] &&
      isNaN(ch[i]) == true &&
      chaine.includes(ch[i])
    ) {
      n = n + 1;
    }
    if (chaine.includes(ch[i]) == false) {
      sb = sb + 1;
    }
    if (isNaN(ch[i]) == false && Number(ch[i]) % 2 == 0) {
      pair = pair + 1;
    } else if (isNaN(ch[i]) == false && Number(ch[i]) % 2 != 0) {
      inpair = inpair + 1;
    }
  }

  console.log(s);
  console.log(m);
  console.log(n);
  console.log(sb);
  console.log(pair);
  console.log(inpair);
}

function clean(ch2) {
  k = "";
  for (i = 0; i < ch2.length; i++) {
    if (isNaN(ch2[i]) == false) {
      k = k + ch2[i];
    }
  }
  return k;
}

function add(ch) {
  list = [];
  n = 0;
  while (ch.indexOf(",") != -1) {
    let a = ch.indexOf(",");
    let b = ch.slice(0, a);
    if (isNaN(b) == false) {
      list.push(b);
    }
    if (isNaN(b) == true) {
      n = clean(b);

      if (clean(b) == "") {
        list.push(0);
      } else {
        list.push(n);
      }
    }
    ch = ch.slice(a + 1, ch.length);
    console.log(ch);
  }

  if (isNaN(ch) == false) {
    list.push(ch);
  } else {
    if (clean(ch) == "") {
      list.push(0);
    } else {
      list.push(clean(ch));
    }
  }

  console.log(list);
}
function desimal(ch) {
  k = "";
  c = "";
  while (ch != 0) {
    if (ch % 16 < 10) {
      k = k + Math.trunc(ch % 16);
    } else if (ch % 16 == 10) {
      k = k + "A";
    } else if (ch % 16 == 11) {
      k = k + "B";
    } else if (ch % 16 == 12) {
      k = k + "C";
    } else if (ch % 16 == 13) {
      k = k + "D";
    } else if (ch % 16 == 14) {
      k = k + "E";
    } else if (ch % 16 == 15) {
      k = k + "F";
    }
    ch = ch / 16;
    for (let i = k.length - 1; i >= 0; i--) {
      c = c + k[i];
    }

    return c;
  }
}

function Bin(ch) {
  k1 = "";
  f = "";
  while (ch != 0) {
    k1 = k1 + Math.trunc(ch % 2);
    ch = Math.trunc(ch / 2);
  }

  for (let i2 = k1.length - 1; i2 >= 0; i2--) {
    f = f + k1[i2];
  }
  return f;
}

function saisir() {
  nb = prompt("Enter un nombre :");
  while (isNaN(nb)) {
    nb = prompt("Enter un nombre :");
  }
  ch = prompt("choisir 1des ou 2bin :");
  while (ch != "1" && ch != "2") {
    ch = prompt("choisir 1des ou 2bin :");
  }

  if (ch == "1") {
    console.log(desimal(Number(nb)));
  } else if (ch == "2") {
    console.log(Bin(Number(nb)));
  }
}

function saisir() {
  ch = prompt("Donner une phrase: ");
  nb = Number(prompt("Donner un nombre: "));
  list = [];

  k = "";
  m = 0;

  for (i = 0; i < ch.length; i++) {
    if (ch[i] == " ") {
      m = m + 1;
    }
  }
  m = m + 1;

  for (let i = 0; i < m; i++) {
    f = ch.indexOf(" ");
    k = ch.slice(0, f);

    ch = ch.slice(f + 1, ch.length);
    if (k != "") {
      list.push(k);
    }
  }

  console.log(list);

  verifNb(nb, m, list);
}

function verifNb(nb, k, list) {
  console.log(nb);

  b1 = list[0];
  list3 = [];
  b2 = list[0];
  if (nb > k) {
    alert("eruurrrr");
  } else if (nb < 0) {
    for (let i = 0; i < k; i++) {
      list3.unshift(list[i]);
    }
    nb = nb * -1;

    if (nb > k) {
      alert("erreur");
    } else {
      for (let i = 0; i < nb; i++) {
        if (list3[i].length < b2.length) {
          b2 = list3[i];
        }
      }
      console.log(b2);

      console.log(list3);
    }
  } else if (nb <= k) {
    for (let i = 0; i < nb; i++) {
      if (list[i].length < b1.length) {
        b1 = list[i];
      }
    }
    console.log(b1);
  }
}

function clean(ch) {
  k = " ";
  while (ch.startsWith(k)) {
    ch = ch.slice(1, ch.length);
  }
  while (ch.endsWith(k)) {
    ch = ch.slice(0, ch.length - 1);
  }

  return ch;
}

function computerChoice() {
  m = Math.random().toFixed(1);
  console.log(m);

  c = "";
  if (m >= 0.0 && m <= 0.3) {
    c = "rock";
  } else if (m >= 0.4 && m <= 0.6) {
    c = "paper";
  } else if (m >= 0.7 && m <= 1) {
    c = "scissors";
  }
  return c;
}

function game() {
  a = "rock";
  b = "paper";
  c = "scissors";

  p = 0;
  r = 0;
  t = 0;

  for (i = 0; i < 3; i++) {
    roundNumber = i + 1;
    ch = clean(
      prompt("Round :" + roundNumber + " Donner ton chois :").toLowerCase(),
    );

    while (ch != a && ch != b && ch != c) {
      ch = prompt("Choix invalide, Donner ton chois :");
    }

    computer = computerChoice();

    console.log(`${ch} - ${computer}`);

    if (ch == a && computer == b) {
      r = r + 1;
    } else if (ch == b && computer == a) {
      p = p + 1;
    } else if (ch == a && computer == a) {
      t = t + 1;
    } else if (ch == b && computer == b) {
      t = t + 1;
    } else if (ch == a && computer == c) {
      p = p + 1;
    } else if (ch == c && computer == a) {
      r = r + 1;
    } else if (ch == c && computer == b) {
      p = p + 1;
    } else if (ch == b && computer == c) {
      r = r + 1;
    } else if (ch == c && computer == c) {
      t = t + 1;
    } else {
      console.log("error");
    }
  }

  if (p > r) {
    alert("the winner is you , the score is w: " + p + " l: " + r + " t: " + t);
  } else if (p < r) {
    alert("the winner is me , the score is w: " + p + " l: " + r + " t: " + t);
  } else if (t == 3) {
    alert("it's a draw");
  }
  return false;
}

let accounts = [];
let connectedAccount = null; // login session

function login() {
  let email = prompt("enter email: ");
  let password = prompt("Enter password: ");

  if (verifMail(email) && checkPassword(password)) {
    if (verifMail(email) && checkPassword(password)) {
      for (i = 0; i < accounts.length; i++) {
        if (accounts[i].email == email && accounts[i].password == password) {
          alert("Login successful");
          connectedAccount = accounts[i];
          return true;
        }
      }
      alert("Email ou mot de passe invalide");
      return false;
    }
  }
}

function signup() {
  e1 = prompt("enter email: ");
  p1 = prompt("Enter password: ");
  if (verifMail(e1) == false || checkPassword(p1) == false) {
    alert("email or password invailde");
  } else {
    for (i = 0; accounts.length; i++) {
      if (e1 == accounts[i].email) {
        alert("mail exist");
        return false;
      }
    }

    accounts.push({
      email: e1,
      password: p1,
      money: 0,
    });
    alert("Signup successful");
  }
}

function depositMoney() {
  if (connectedAccount == null) {
    alert("no account connected");
    return false;
  } else {
    m = Number(prompt("enter the number: "));
    if (isNaN(m) == true || m < 1 || m > 200) {
      alert("maximum number is 200");
      return false;
    } else {
      for (i = 0; i < accounts.length; i++) {
        if (accounts[i].email == connectedAccount.email) {
          accounts[i].money = accounts[i].money + m;
        }
      }
    }
  }
  alert("Money has been added");
  return true;
}

function checkBalance() {
  if (connectedAccount == null) {
    alert("no account is found");
    return false;
  } else {
    for (i = 0; i < accounts.length; i++) {
      alert("your balance is: " + accounts[i].money);
    }
  }
  return true;
}

function withdrawMoney() {
  if (connectedAccount == null) {
    alert("no accounts is found");
    return false;
  } else {
    f = Number(prompt("withdraw your money: "));
    for (i = 0; i < accounts.length; i++) {
      if (accounts[i].email == connectedAccount.email) {
        if (accounts[i].money < f) {
          alert("not enough money");
          return false;
        } else {
          accounts[i].money = accounts[i].money - f;
          alert("money is withdrawed");
          return true;
        }
      }
    }
  }
  return true;
}

function main() {
  choice = prompt(
    "1. Signup, 2. Login, 3. Deposit money, 4. Withdraw money, 5. Check balance",
  );

  while (choice != "0") {
    if (choice == "1") {
      signup();
    } else if (choice == "2") {
      login();
    } else if (choice == "3") {
      depositMoney();
    } else if (choice == "5") {
      checkBalance();
    } else if (choice == "4") {
      withdrawMoney();
    }

    choice = prompt(
      "1. Signup, 2. Login, 3. Deposit money, 4. Withdraw money, 5. Check balance",
    );
  }
  alert("program has exited");
}

function checkPassword(pass) {
  a = "azertyuiopmlkjhgfdsqwxcvbn";
  b = "AZERTYUIOPQSDFGHJKLMWXCVBN";
  c = "1234567890";
  d = 0;
  e = 0;
  f = 0;
  x = 0;

  pass = pass.trim();

  if (pass.includes(" ")) return false;

  if (a.includes(pass[0]) == false && b.includes(pass[0]) == false) {
    return false;
  }
  if (pass.length < 8) {
    return false;
  }
  for (i = 0; i < pass.length; i++) {
    if (a.includes(pass[i]) == true) {
      d = d + 1;
    } else if (b.includes(pass[i]) == true) {
      e = e + 1;
    } else if (c.includes(pass[i]) == true) {
      f = f + 1;
    } else {
      x = x + 1;
    }
  }

  if (d < 1 || e < 1 || f < 1 || x < 1) {
    return false;
  }

  return true;
}

function verifMail(ch) {
  ch = ch.trim();
  a = ch.indexOf("@");
  b = ch.length;
  c = "azertyuiopqsdfghjklmwxcvbn123456789.";
  d = "azertyuiopqsdfghjklmwxcvbn";
  first = ch.slice(0, a);
  second = ch.slice(a, b);
  if (first.length < 4 || second != "@gmail.com") {
    return false;
  }

  if (d.includes(first[0]) == false) {
    return false;
  }

  for (i = 1; i < first.length; i++) {
    if (c.includes(first[i]) == false) {
      return false;
    }
  }

  return true;
}

let phones = [];
let account = null;
let historique = [];
let savedAccounts = [
  {
    name: "mahmoud",
    lastname: "Lakhdher",
    username: "mahmoud212",
    password: "Aa&24829601",
    role: "admin",
    solde: 0,
  },
];
function first() {
  f = prompt("1. Signup, 2. Login,");
  while (f != 0) {
    if (f == 1) {
      signup();
    } else if (f == 2) {
      login();
    }
  }
}
function signup() {
  a1 = prompt("Enter name :");
  a2 = prompt("Enter lastname :");
  a3 = prompt("Enter username :");
  a4 = prompt("Enter password :");
  if (isNaN(a1[0]) == false) {
    return false;
  } else if (isNaN(a2[0]) == false) {
    return false;
  } else if (isNaN(a3[0]) == false && a3.includes(" ") == true) {
    return false;
  } else if (a4.length < 8) {
    return false;
  }

  for (i = 0; i < savedAccounts.length; i++) {
    if (a3 == savedAccounts[i].username) {
      alert("username exist");
      return false;
    }
  }
  savedAccounts.push({
    name: a1,
    lastname: a2,
    username: a3,
    password: a4,
    role: client,
    solde: 1500,
  });
}

function login() {
  let username = prompt("Enter username: ");
  let password = prompt("Enter password: ");
  for (i = 0; i < savedAccounts.length; i++) {
    if (
      savedAccounts[i].username == username &&
      savedAccounts[i].password == password
    ) {
      account = savedAccounts[i];
      alert("Login successful");
      if (savedAccounts[i].role == "admin") {
        return admin();
      }
    }
  }
  alert("username or password invalide");
  return false;
}
function admin() {
  k = prompt("1: add product , 2: show product , 3: show sells ");
  if (k == "1") {
    phonename = prompt("Enter phone name: ");
    phonecolor = prompt("Enter phone color: ");
    stock = prompt("Enter the stock of this phone: ");
    phoneprice = Number(prompt("Enter phone price: "));
    if (
      isNaN(stock) == true ||
      stock < 0 ||
      isNaN(phoneprice) == true ||
      phoneprice < 100
    ) {
      alert("phone price or stock invalid");
      return false;
    }
    phones.push({
      name: phonename,
      color: phonecolor,
      stock: stock,
      price: phoneprice,
    });
  } else if (k == "2") {
    n = "";
    for (i = 0; i < phones.length; i++) {
      n = n + phones[i].name + " : " + phones[i].stock + "\n";
    }
    alert("phones: " + n);
  } else if (k == "3") {
    t = "";
    for (i = 0; i < historique.length; i++) {
      t = t + +historique[i].username + " : " + historique[i].name;
    }
    alert("the sells are :" + t);
  }
}
function client() {
  c = prompt("1: buy a phones , 2: show historique");
  myphone = null;
  if (c == "1") {
    p = prompt("Enter the phone name to buy: ");
    for (i = 0; i < phones.length; i++) {
      if (phones[i].name == p) {
        alert("Phone dispo");
        myphone = phones[i];
      }
    }
    if (myphone.stock == 0 || myphone.price > account.solde) {
      alert("ta7cheee noo phone for you");
    }
    for (i = 0; i < savedAccounts.length; i++) {
      if (savedAccounts[i].username == account.username) {
        savedAccounts[i].solde = savedAccounts[i].solde - myphone.price;
      }
    }
    for (i = 0; i < phones.length; i++) {
      if (phones[i].name == phones.name) {
        phones[i].stock = phones[i].stock - 1;
      }
    }
    historique.push({
      username: account.username,
      name: myphone.name,
    });
  } else if (c == "2") {
    z = "";
    for (i = 0; i < historique.length; i++) {
      if (historique[i].username == account.username) {
        z = z + historique[i].username + " : " + historique[i].name;
      }
    }
    alert("the historque is :" + z);
  }
}

// Phone : name, price, stock
// Account : name, lastname, username, password, role, solde
