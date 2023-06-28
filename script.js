//Definere point
let point;

//Definere liv
let liv;

//Definere random positioner
let myRand;

//Forkort sætningen når vi skal kalde på et dokument
const cherryContainer = document.querySelector("#cherry_container1");
const dogContainer = document.querySelector("#dog_container1");
const glitterContainer = document.querySelector("#glitter_container1");
const frostingContainer = document.querySelector("#frosting_container1");
const moneyContainer = document.querySelector("#money_container1");
const birkinContainer = document.querySelector("#birkin_container1");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  //Lyt om der bliver ændret størrelse af browser window
  window.addEventListener("resize", windowResize);
  //Kald windowResize første gang siden vises
  windowResize();

  //Skjul andre skærme
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#how_to_play").classList.add("hide");

  //Vis start skærm
  document.querySelector("#start").classList.remove("hide");

  //Klik på spil_knap
  document.querySelector("#spil_knap").classList.add("pulse");
  document.querySelector("#spil_knap").addEventListener("click", HowToPlay);
}

function windowResize() {
  console.log("windowResize");
  let widthScreen = document.querySelector("#screen").clientWidth;
  let myFontInProcent = 2.5;
  let myFont = (widthScreen / 100) * myFontInProcent;
  document.querySelector("#score_board").style.fontSize = myFont + "px";
}

function HowToPlay() {
  console.log("HowToPlay");

  //tilføj how to play skærmen
  document.querySelector("#how_to_play").classList.remove("hide");

  //klik på start_knap
  document.querySelector("#start_knap").classList.add("pulse");
  document.querySelector("#start_knap").addEventListener("click", startSpillet);
}

function startSpillet() {
  console.log("startSpillet");

  //Skjul andre skærme
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#how_to_play").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");

  //Start timer
  document.querySelector("#time_sprite").classList.add("time");
  document
    .querySelector("#time_container")
    .addEventListener("animationend", stopSpillet);

  //Nulstil Point
  point = 0;
  document.querySelector("#point_count").textContent = point;

  //Nulstil Liv
  liv = 3;
  document.querySelector("#life_board1").classList.remove("fjernet");
  document.querySelector("#life_board2").classList.remove("fjernet");
  document.querySelector("#life_board3").classList.remove("fjernet");

  //Start fald-animationer på alle elementer
  cherryContainer.classList.add("fald");
  dogContainer.classList.add("fald");
  glitterContainer.classList.add("fald");
  frostingContainer.classList.add("fald");
  moneyContainer.classList.add("fald");
  birkinContainer.classList.add("fald");

  //Lyt efter fald-animationer er færdig
  cherryContainer.addEventListener("animationiteration", goodReset);
  dogContainer.addEventListener("animationiteration", looseLifeReset);
  glitterContainer.addEventListener("animationiteration", goodReset);
  frostingContainer.addEventListener("animationiteration", goodReset);
  moneyContainer.addEventListener("animationiteration", badReset);
  birkinContainer.addEventListener("animationiteration", badReset);

  //Lyt efter klik på alle elementer
  cherryContainer.addEventListener("mousedown", clickGood);
  dogContainer.addEventListener("mousedown", clickLooseLife);
  glitterContainer.addEventListener("mousedown", clickGood);
  frostingContainer.addEventListener("mousedown", clickGood);
  moneyContainer.addEventListener("mousedown", clickBad);
  birkinContainer.addEventListener("mousedown", clickBad);

  //RANDOM POSITION PÅ ALLE ELEMENTER
  //sæt variablen lig med et tilfældigt tal mellem 1 og 5
  myRand = Math.floor(Math.random() * 5) + 1;

  //Giv en position til container
  cherryContainer.classList.add("pos" + myRand);
  dogContainer.classList.add("pos" + myRand);
  glitterContainer.classList.add("pos" + myRand);
  frostingContainer.classList.add("pos" + myRand);
  moneyContainer.classList.add("pos" + myRand);
  birkinContainer.classList.add("pos" + myRand);

  //DELAY PÅ ALLE ELEMENTER
  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;

  //Giv delay til container
  cherryContainer.classList.add("delay" + myRand);
  dogContainer.classList.add("delay" + myRand);
  glitterContainer.classList.add("delay" + myRand);
  frostingContainer.classList.add("delay" + myRand);
  moneyContainer.classList.add("delay" + myRand);
  birkinContainer.classList.add("delay" + myRand);
}

//ALT MED DE GODE ELEMENTER-------------------------------

function clickGood() {
  //console.log("clickGood");

  //jeg fjerner klik så man ikke kan klikke flere gange når ikonet allerede er blevet klikket på
  this.removeEventListener("mousedown", clickGood);
  this.removeEventListener("mousedown", clickGood);
  this.removeEventListener("mousedown", clickGood);

  //Det gode ikon stopper ved klik
  this.classList.add("frys");
  this.classList.add("frys");
  this.classList.add("frys");

  //Forsvind animation tilføjes
  this.firstElementChild.classList.add("forsvind");
  this.firstElementChild.classList.add("forsvind");
  this.firstElementChild.classList.add("forsvind");

  //Man kalder på sine point
  point++;
  document.querySelector("#point_count").textContent = point;
  console.log(point);

  //Animationen er færdig
  this.addEventListener("animationend", goodReset);
  this.addEventListener("animationend", goodReset);
  this.addEventListener("animationend", goodReset);
}

function goodReset() {
  //console.log("goodReset");

  //Force reflow på alle gode ikoner
  document.querySelector("#cherry_sprite1").classList = "";
  cherryContainer.classList = "";
  cherryContainer.offsetLeft;

  document.querySelector("#glitter_sprite1").classList = "";
  glitterContainer.classList = "";
  glitterContainer.offsetLeft;

  document.querySelector("#frosting_sprite1").classList = "";
  frostingContainer.classList = "";
  frostingContainer.offsetLeft;

  //RANDOM POSITOIN
  //sæt variablen lig med et tilfældigt tal mellem 1 og 5
  myRand = Math.floor(Math.random() * 5) + 1;
  //Giv en position til container
  cherryContainer.classList.add("pos" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 5
  myRand = Math.floor(Math.random() * 5) + 1;
  //Giv en position til container
  glitterContainer.classList.add("pos" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 5
  myRand = Math.floor(Math.random() * 5) + 1;
  //Giv en position til container
  frostingContainer.classList.add("pos" + myRand);

  //DELAY
  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv en delay til container
  cherryContainer.classList.add("delay" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv en delay til container
  glitterContainer.classList.add("delay" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv en delay til container
  frostingContainer.classList.add("delay" + myRand);

  //start alle fald animationer igen
  cherryContainer.classList.add("fald");
  glitterContainer.classList.add("fald");
  frostingContainer.classList.add("fald");

  //Man skal kunne klikke på de god ikoner igen
  this.addEventListener("mousedown", clickGood);
  this.addEventListener("mousedown", clickGood);
  this.addEventListener("mousedown", clickGood);
}

//ALT MED DE DÅRLIGE ELEMENTER-------------------------------

function clickBad() {
  //console.log("clickBad");

  //jeg fjerner klik så man ikke kan klikke flere gange når ikonet allerede er blevet klikket på
  this.removeEventListener("mousedown", clickBad);
  this.removeEventListener("mousedown", clickBad);

  //Det dårlige ikon stopper ved klik
  this.classList.add("frys");
  this.classList.add("frys");

  //Forsvind animation tilføjes
  this.firstElementChild.classList.add("forsvind");
  this.firstElementChild.classList.add("forsvind");

  //Man kalder på sine point
  point--;
  point--;
  document.querySelector("#point_count").textContent = point;
  console.log(point);

  //Animationen er færdig
  this.addEventListener("animationend", badReset);
  this.addEventListener("animationend", badReset);
}

function badReset() {
  //console.log("badReset");

  //Force reflow på alle gode ikoner
  document.querySelector("#money_sprite1").classList = "";
  moneyContainer.classList = "";
  moneyContainer.offsetLeft;

  document.querySelector("#birkin_sprite1").classList = "";
  birkinContainer.classList = "";
  birkinContainer.offsetLeft;

  //RANDOM POSITOIN
  //sæt variablen lig med et tilfældigt tal mellem 1 og 5
  myRand = Math.floor(Math.random() * 5) + 1;
  //Giv en position til container
  moneyContainer.classList.add("pos" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 5
  myRand = Math.floor(Math.random() * 5) + 1;
  //Giv en position til container
  birkinContainer.classList.add("pos" + myRand);

  //DELAY
  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv en delay til container
  moneyContainer.classList.add("delay" + myRand);

  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;
  //Giv en delay til container
  birkinContainer.classList.add("delay" + myRand);

  //start alle fald animationer igen
  moneyContainer.classList.add("fald");
  birkinContainer.classList.add("fald");

  //Man skal kunne klikke på de god ikoner igen
  this.addEventListener("mousedown", clickBad);
  this.addEventListener("mousedown", clickBad);
}

//DET DÅRLIGE ELEMENT MAN MISTER LIV AF-------------------------------

function clickLooseLife() {
  //console.log("clickLooseLife");

  //Man fjerner et hjerte når man klikker på hunden.
  document.querySelector("#life_board" + liv).classList.add("fjernet");

  //jeg fjerner klik så man ikke kan klikke flere gange når ikonet allerede er blevet klikket på
  this.removeEventListener("mousedown", clickLooseLife);

  //Money stopper ved klik
  this.classList.add("frys");

  //Money drejer og forsvinder ud
  this.firstElementChild.classList.add("drej");

  //Man kalder på sine liv
  document.querySelector("#hjerte_liv").textContent = liv--;
  console.log(liv);

  //animationen er færdig
  this.addEventListener("animationend", looseLifeReset);

  if (liv <= 0) {
    console.log("ikke flere liv");
    stopSpillet();
  }
}

function looseLifeReset() {
  //console.log("looseLifeReset");

  //Force reflow på dog
  document.querySelector("#dog_sprite1").classList = "";
  dogContainer.classList = "";
  dogContainer.offsetLeft;

  //RANDOM POSITOIN
  //sæt variablen lig med et tilfældigt tal mellem 1 og 5
  myRand = Math.floor(Math.random() * 5) + 1;
  //Giv en position til container
  dogContainer.classList.add("pos" + myRand);

  //DELAY
  //sæt variablen lig med et tilfældigt tal mellem 1 og 3
  myRand = Math.floor(Math.random() * 3) + 1;

  //Giv en delay til container
  dogContainer.classList.add("delay" + myRand);

  //Start fald animation på dog igen
  dogContainer.classList.add("fald");

  //Man skal kunne klikke på dog igen
  this.addEventListener("mousedown", clickLooseLife);
}

function stopSpillet() {
  console.log("stopSpillet");

  //stop timer
  document.querySelector("#time_sprite").classList.remove("time");
  document
    .querySelector("#time_container")
    .removeEventListener("animationend", stopSpillet);

  //fjern alt der er på alle elementers container og sprite
  cherryContainer.classList = "";
  document.querySelector("#cherry_sprite1").classList = "";
  dogContainer.classList = "";
  document.querySelector("#dog_sprite1").classList = "";
  glitterContainer.classList = "";
  document.querySelector("#glitter_sprite1").classList = "";
  frostingContainer.classList = "";
  document.querySelector("#frosting_sprite1").classList = "";
  moneyContainer.classList = "";
  document.querySelector("#money_sprite1").classList = "";
  birkinContainer.classList = "";
  document.querySelector("#birkin_sprite1").classList = "";

  //fjern alle event listener på alle containere
  cherryContainer.removeEventListener("animationiteration", goodReset);
  cherryContainer.removeEventListener("animationend", goodReset);
  cherryContainer.removeEventListener("mousedown", clickGood);

  dogContainer.removeEventListener("animationiteration", looseLifeReset);
  dogContainer.removeEventListener("animationend", looseLifeReset);
  dogContainer.removeEventListener("mousedown", clickLooseLife);

  glitterContainer.removeEventListener("animationiteration", goodReset);
  glitterContainer.removeEventListener("animationend", goodReset);
  glitterContainer.removeEventListener("mousedown", clickGood);

  frostingContainer.removeEventListener("animationiteration", goodReset);
  frostingContainer.removeEventListener("animationend", goodReset);
  frostingContainer.removeEventListener("mousedown", clickGood);

  moneyContainer.removeEventListener("animationiteration", badReset);
  moneyContainer.removeEventListener("animationend", badReset);
  moneyContainer.removeEventListener("mousedown", clickBad);

  birkinContainer.removeEventListener("animationiteration", badReset);
  birkinContainer.removeEventListener("animationend", badReset);
  birkinContainer.removeEventListener("mousedown", clickBad);

  //Afgørende for om man vinder eller taber spillet. iforhold til point og liv.
  if (liv <= 0) {
    gameOver();
  } else if (point >= 10) {
    levelComplete();
  } else {
    gameOver();
  }
}

function gameOver() {
  console.log("GAMEOVER...");

  //Vis gameover skærm
  document.querySelector("#game_over").classList.remove("hide");
  //Klik på genstart1
  document.querySelector("#genstart1").addEventListener("click", startSpillet);
  document.querySelector("#genstart1").classList.add("pulse");
}

function levelComplete() {
  console.log("HURRA du vandt");

  //Vis levelComplete skærm
  document.querySelector("#level_complete").classList.remove("hide");
  //Klik på genstart2
  document.querySelector("#genstart2").addEventListener("click", startSpillet);
  document.querySelector("#genstart2").classList.add("pulse");
}
