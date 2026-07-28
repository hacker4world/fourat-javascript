let verso = document.querySelector("#verso");
let maelle = document.querySelector("#maelle");
let enemyhealth = document.querySelector("#enemy-health");
let Ap1 = document.querySelector("#ap1");
let Ap2 = document.querySelector("#ap2");

let skill1 = document.querySelector("#skill1");
let skill2 = document.querySelector("#skill2");
let skill3 = document.querySelector("#skill3");

enemyhealth.value = 10000;
versoskill1 = 600;
maelleskill1 = 400;
versoskill2 = 1200;
maelleskill2 = 1000;
versoskill3 = 6000;
maelleskill3 = 8000;
ap1 = 2;
ap1 = 2;

function P1() {
  skill1.src = "./images/verso/assault_zero.png";
  skill2.src = "./images/verso/from_fire.png";
  skill3.src = "./images/verso/phantom_stars.png";
}

function P2() {
  skill1.src = "./images/maelle/offensive_switch.png";
  skill2.src = "./images/maelle/peree.png";
  skill3.src = "./images/maelle/stendhal.png";
}
function attackSkill1() {
  if (skill1.src.includes("assault_zero.png")) {
    enemyhealth.value = enemyhealth.value - versoskill1;
    ap1 = ap1 + 2;
    Ap1.innerHTML = "veroso Ap: " + ap1;
  } else if (skill1.src.includes("offensive_switch.png")) {
    enemyhealth.value = enemyhealth.value - maelleskill1;
    ap2 = ap2 + 2;
    Ap2.innerHTML = "maelle Ap: " + ap2;
  }
}

function attackSkill2() {
  if (skill2.src.includes("from_fire.png")) {
    enemyhealth.value = enemyhealth.value - versoskill2;
    if (ap1 >= 3) {
      ap1 = ap1 - 3;
    } else {
      alert("invalide ap");
    }
    Ap1.innerHTML = "veroso Ap: " + ap1;
  } else if (skill2.src.includes("peree.png")) {
    enemyhealth.value = enemyhealth.value - maelleskill2;
    if (ap2 >= 2) {
      ap2 = ap2 - 2;
    } else {
      alert("invalide ap");
    }
    Ap2.innerHTML = "maelle Ap: " + ap2;
  }
}

function attackSkill3() {
  if (skill3.src.includes("phantom_stars.png")) {
    if (ap1 >= 6) {
      enemyhealth.value = enemyhealth.value - versoskill3;
      ap1 = ap1 - 6;
    } else {
      alert("invalide ap");
    }
    Ap1.innerHTML = "veroso Ap: " + ap1;
  } else if (skill3.src.includes("stendhal.png")) {
    if (ap2 >= 8) {
      enemyhealth.value = enemyhealth.value - maelleskill3;
      ap2 = ap2 - 8;
    } else {
      alert("invalide ap");
    }
    Ap2.innerHTML = "maelle Ap: " + ap2;
  }
}
verso.addEventListener("click", P1);
maelle.addEventListener("click", P2);
skill1.addEventListener("click", attackSkill1);
skill2.addEventListener("click", attackSkill2);
skill3.addEventListener("click", attackSkill3);
