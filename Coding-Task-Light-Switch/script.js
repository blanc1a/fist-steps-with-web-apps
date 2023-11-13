//variablen, um auf button und body zuzugreifen
const btn = document.querySelector("button");
const bod = document.querySelector("body");
//eventListener mit click, um die function aufzurufen, wenn der button einen mausklick bekommt
btn.addEventListener("click", function () {
  //toggle, um beim aktivieren der function die dark classes abwechselnd zu aktivieren oder zu deaktivieren
  btn.classList.toggle("buttonDark");
  bod.classList.toggle("bodyDark");
  if (document.title === "Good Morning") {
    document.title = "Good Night";
  }
  if (document.title === "Good Night") {
    document.title = "Good Morning";
  }
});
