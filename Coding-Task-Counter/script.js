const resetButton = document.querySelector("button");
const labelCounter = document.querySelector("#counter");
const mainArea = document.querySelector("main");
const colorBox = document.querySelector(".colorBox");

let counter = 0;
let colorCounter = 0;

mainArea.addEventListener("click", function () {
  counter++;
  labelCounter.innerText = counter;
  colorCounter++;
  if (colorCounter === 101) {
    colorCounter = 1;
  }
  //colorBox => class im HTML
  //style.setProperty() => method, um den wert einer css-eigenschaft für ein html-element dynamisch festzulegen
  //--colorCounter => name der css-variable, die gesetzt werden soll
  //colorCounter => variable, welche in zeile 7 definiert wurde und in zeile 12 neue werte erhält => wert aus zeile 12 wird hier verwendet, um die breite des farbbalkens zu bestimmen
  //+ "%" => muss gesetzt werden, da css nach einem %-wert fragt
  colorBox.style.setProperty("--colorCounter", colorCounter + "%");
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Enter" || event.code === "Space") {
    counter++;
    labelCounter.innerText = counter;
    colorCounter++;
    if (colorCounter === 101) {
      colorCounter = 1;
    }
  }
  colorBox.style.setProperty("--colorCounter", colorCounter + "%");
});

resetButton.addEventListener("click", function () {
  counter = 0;
  colorCounter = 0;
  labelCounter.innerText = counter;
  //nötig, um redraw von colorbox zu erzwingen => CSS alleine reicht nicht
  colorBox.style.setProperty("--colorCounter", colorCounter + "%");
});
