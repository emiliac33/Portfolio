// när man för musen över bilderna bli rutan svart
function changeBorder(img) {
  img.style.border = "thick solid black";
}

// när man tar bort musen försvinner den svarta rutan
function none(img) {
  img.style.border = "none";
}

// hittar knappen och elementet där texten ska ändras
var button = document.getElementById("myButton");
var button2 = document.getElementById("myButton2");
var button3 = document.getElementById("myButton3");
var button4 = document.getElementById("myButton4");
var button5 = document.getElementById("myButton5");
var button6 = document.getElementById("myButton6");
var textElement = document.getElementById("demo");
var textElement2 = document.getElementById("demo2");
var textElement3 = document.getElementById("demo3");
var textElement4 = document.getElementById("demo4");
var textElement5 = document.getElementById("demo5");
var textElement6 = document.getElementById("demo6");

// en händelselyssnare för knappen
button.addEventListener("click", function () {
  // ändrar texten när knappen trycks ned
  if (textElement.innerHTML === "") {
    // om man inte ser någon text, ändras den så det kommer upp en text när man trycker på knappen
    textElement.innerHTML =
      "I min utbildning på BTH hade vi en kurs som heter Grunder i design av digitala upplevelser för lärande 7,5hp där skulle vi skapa ett tittskåp i programmet Unity. Vi skulle välja en platts som vi ville återskapa och det skulle vara som en låda (tittskåp) där man kan titta in/uppleva hur platsen är. Jag valde en skog som ligger nära där jag bor som jag ville återskapa.";
  } else {
    // om man ser texten göms den när man trycker på knappen igen
    textElement.innerHTML = "";
  }
});

// en händelselyssnare för knappen
button2.addEventListener("click", function () {
  // ändrar texten när knappen trycks ned
  if (textElement2.innerHTML === "") {
    // om man inte ser någon text, ändras den så det kommer upp en text när man trycker på knappen
    textElement2.innerHTML =
      "I min utbildning från BTH hade vi en kurs som heter digitalt lärande 7,5hp där skulle vi göra en remediering. Vi skulle jobba i grupp och komma på något som vi ville göra om, något gammalt medium till ett nytt medium. Vi valde att jobba med en SO bok som barn i årskurs 1-3 använder sig av som vi ville med hjälp utav VR glasögon förstärka läsförståelsen. Vi inriktade oss till barn med dyslexi och svårigheter i skolan. Med hjälp utav VR-glasögon ska barnen kunna få uppleva boken i ett annat perspektiv och även få boken uppläst samtidigt när det befinner sig i världen, ett stöttande hjälpmedel till boken. Jag har skapat ett exempel på hur det kan se ut i VR-glasögonen i Unity när det upplever järnåldern.";
  } else {
    // om man ser texten göms den när man trycker på knappen igen
    textElement2.innerHTML = "";
  }
});

// en händelselyssnare för knappen
button3.addEventListener("click", function () {
  // ändrar texten när knappen trycks ned
  if (textElement3.innerHTML === "") {
    // om man inte ser någon text, ändras den så det kommer upp en text när man trycker på knappen
    textElement3.innerHTML =
      "Skapat tak Lampor med gamla hjul som jag har slipat, målat och satt upp med gamla kedjor. Sedan köpte jag en färdig lampa som jag träde runt hjulet. Jag har också skapat en lampa som passar bra i ett barnrum, den är inspererad av filmen Upp.";
  } else {
    // om man ser texten göms den när man trycker på knappen igen
    textElement3.innerHTML = "";
  }
});

// en händelselyssnare för knappen
button4.addEventListener("click", function () {
  // ändrar texten när knappen trycks ned
  if (textElement4.innerHTML === "") {
    // om man inte ser någon text, ändras den så det kommer upp en text när man trycker på knappen
    textElement4.innerHTML =
      "Jag och min sambo har bygt utemöbler med hjälp av träplankor och fyrkantsrör. Vi svetsade ihop en stome och oljade in trät i en grå ton, vi målade även fyrkantsrören svarta.";
  } else {
    // om man ser texten göms den när man trycker på knappen igen
    textElement4.innerHTML = "";
  }
});

// en händelselyssnare för knappen
button5.addEventListener("click", function () {
  // ändrar texten när knappen trycks ned
  if (textElement5.innerHTML === "") {
    // om man inte ser någon text, ändras den så det kommer upp en text när man trycker på knappen
    textElement5.innerHTML =
      "I min utbildning på BTH hade vi en kurs som heter webbproduktion och programering där vi fick jobba med Html, CSS och JavaScript. Där har jag skapa min portfolio som du är inne på just nu och lärt mig grunderna för att programera hemisdor. Vi jobbade också med programering.";
  } else {
    // om man ser texten göms den när man trycker på knappen igen
    textElement5.innerHTML = "";
  }
});

// en händelselyssnare för knappen
button6.addEventListener("click", function () {
  // ändrar texten när knappen trycks ned
  if (textElement6.innerHTML === "") {
    // om man inte ser någon text, ändras den så det kommer upp en text när man trycker på knappen
    textElement6.innerHTML =
      " I kursen användarupplevelse och gränssnittkursen på BTH jobbade vi med UX/UI där vi skulle få förståelse för olika aspekter och faktorer som bestämmer användarupplevelsen och dess kvalitet. Vi jobbade också med hur vi kan analysera upplevelsekvalitén och använda motsvarande resultat för att förbättra en design av en upplevelse. Vi var en grupp på fyra personer som jobbade med att vi ville förbättra sida lekolar.se, vi såg bristande information om digitala läromedel. Vi skapade en prototyp systersida som heter Digilar som vi tänkte ska vara en länkande arm till lekolar.se. Där all digiltala läromedel ska vara på en sida där det finns bra information om produkterna för att öka intresset och bra information om vad det kan stärka lärandet. ";
  } else {
    // om man ser texten göms den när man trycker på knappen igen
    textElement6.innerHTML = "";
  }
});
