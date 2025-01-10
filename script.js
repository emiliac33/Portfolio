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
var button7 = document.getElementById("myButton7");
var button8 = document.getElementById("myButton8");
var textElement = document.getElementById("demo");
var textElement2 = document.getElementById("demo2");
var textElement3 = document.getElementById("demo3");
var textElement4 = document.getElementById("demo4");
var textElement5 = document.getElementById("demo5");
var textElement6 = document.getElementById("demo6");
var textElement7 = document.getElementById("demo7");
var textElement8 = document.getElementById("demo8");

// en händelselyssnare för knappen
button.addEventListener("click", function () {
  // ändrar texten när knappen trycks ned
  if (textElement.innerHTML === "") {
    // om man inte ser någon text, ändras den så det kommer upp en text när man trycker på knappen
    textElement.innerHTML =
      "I min utbildning på BTH hade vi en kurs som heter Grunder i design av digitala upplevelser för lärande 7,5hp där vi skulle skapa ett tittskåp i programmet Unity. Vi skulle välja en plats som vi ville återskapa och det skulle vara som en låda (tittskåp) där man kan titta in och uppleva hur platsen är. Jag valde en skog som ligger nära där jag bor som jag ville återskapa.";
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
      "I min utbildning från BTH hade vi en kurs som heter Digitalt lärande 7,5hp där skulle vi genomföra en remediering. Vi skulle arbeta i grupp och komma på något att förnya, att ta ett gammalt medium och omvandla det till ett nytt medium. Vi valde att arbeta med en SO bok som används av barn i årskurs 1-3 och använda VR-glasögon för att förstärka läsförståelsen. Vår målgrupp var barn med dyslexi och svårigheter i skolan. Med hjälp utav VR-glasögon skulle barnen kunna uppleva boken från ett annat perspektiv och även få boken uppläst samtidigt när de befinner sig i bokens värld. Vilket skulle vara ett stöttande hjälpmedel för boken. Jag har skapat ett exempel på hur det kan se ut genom VR-glasögonen i Unity när det upplever järnåldern.";
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
      "Jag har skapat taklampor med gamla hjul som jag har slipat, målat och satt upp med gamla kedjor. Sedan köpte jag en färdig lampa som jag trädde runt hjulet. Jag har också skapat en lampa som passar bra i ett barnrum, den är inspererad av filmen Upp.";
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
      "Jag och min sambo har byggt utemöbler med hjälp av träplankor och fyrkantsrör. Vi svetsade ihop en stomme och oljade in träet i en grå ton. Dessutom målade vi fyrkantsrören svarta.";
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
      "I min utbildning på BTH hade vi en kurs som heter Webbproduktion och programmering där vi fick arbeta med HTML, CSS och JavaScript. Under den kursen skapade jag min portfolio, som du för närvarande besöker, och lärde mig grunderna för att programmera webbsidor.";
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
      " I kursen Användarupplevelse och gränssnitt på BTH arbetade vi med UX/UI där vi skulle få förståelse för olika aspekter och faktorer som påverkar användarupplevelsen och dess kvalitet. Vi arbetade också med hur vi kan analysera upplevelsekvalitén och använda motsvarande resultat för att förbättra en design av en upplevelse. Vi var en grupp på fyra personer som arbetade med att förbättra sida lekolar.se, där vi identifierade bristande information om digitala läromedel. Vi skapade en prototyp systersida som heter Digilar som vi tänkte ska vara en länkande arm till lekolar.se. På Digilar skulle alla digiltala läromedel finnas samlat på en sida med bra information om produkterna för att öka intresset och bra information om hur det kan stärka lärandet. ";
  } else {
    // om man ser texten göms den när man trycker på knappen igen
    textElement6.innerHTML = "";
  }
});

// en händelselyssnare för knappen
button7.addEventListener("click", function () {
  // ändrar texten när knappen trycks ned
  if (textElement7.innerHTML === "") {
    // om man inte ser någon text, ändras den så det kommer upp en text när man trycker på knappen
    textElement7.innerHTML =
      " I kursen Produktion av digitala upplevelser (15 hp) arbetade vi i grupp. Vår grupp fördjupade sig i programmet Figma, där vi skapade en prototyp av en applikation. Vi designade både hur appen skulle se ut och vilka funktioner som skulle ingå. Vi utvecklade ett lärande community för idéutbyte. Vi arbetade även i Trello och följde Scrum-metoden för att säkerställa ett effektivt samarbete inom gruppen.";
  } else {
    // om man ser texten göms den när man trycker på knappen igen
    textElement7.innerHTML = "";
  }
});

// en händelselyssnare för knappen
button8.addEventListener("click", function () {
  // ändrar texten när knappen trycks ned
  if (textElement8.innerHTML === "") {
    // om man inte ser någon text, ändras den så det kommer upp en text när man trycker på knappen
    textElement8.innerHTML =
      "I Fördjupning av gestaltande upplevelser (15 hp) arbetade vi med research och omvärldsanalys, för att identifiera befintliga lösningar på marknaden och möjligheter för innovation. Vi skapade en applikation för att underlätta inlärning av teckenspråk och verktyget riktar sig till tonåringar och vuxna. Syftet är att förbättra kommunikationen med personer som är döva eller har en hörselnedsättning. Prototypen skapades i Figma, och interaktionen programmerads i Python via Visual Studio Code. Designen låter användaren välja rätt svar och öva på att teckna via kameran, där en grön ruta indikerar om tecknet utförs korrekt. Pedagogiken inspirerades av John Deweys princip ”learning by doing”, där praktiska moment förstärker både minne och förståelse genom att koppla motoriska, visuella och kognitiva färdigheter.";
  } else {
    // om man ser texten göms den när man trycker på knappen igen
    textElement8.innerHTML = "";
  }
});
