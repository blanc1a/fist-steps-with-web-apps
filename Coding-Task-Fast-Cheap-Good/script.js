//variable, um auf alle checkboxen zuzugreifen => querySelectAll => liefert eine NodeList (Nodes = Tags)
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//variable für die zuletzt geklickte checkbox
let lastCheckboxSet;
//for(), um über die NodeList zu gehen und an jede checkbox einen eventListener zu hängen
for (let i = 0; i < checkboxes.length; ++i) {
  let checkBox = checkboxes[i];
  checkBox.addEventListener("click", function () {
    //wenn 3 checkboxen gesetzt wurden, dann wird die im vorletzten klick gesetzt checkbox abgewählt
    if (3 === countChecked()) {
      lastCheckboxSet.checked = false;
    }
    //script läuft nur EIN mal => for() läuft nur EIN mal
    //=> Zeile 1-8 werden nur einmal ausgeführt
    //=> die function vom eventListener wird bei jedem Klick auf eine checkbox ausgeführt & kann auf Deklariertes aus den Zeilen 1-8 zugreifen
    if (checkBox.checked) {
      //if sagt, dass die checkbox, die geklickt wurde, die zuletzt geklickte checkbox ist
      lastCheckboxSet = checkBox;
    }
  });
}
function countChecked() {
  let cnt = 0;
  for (let i = 0; i < checkboxes.length; ++i) {
    //.checked property legt den zustand (ausgewählt/nicht ausgewählt zurück) einer checkbox fest oder gibt diesen zurück
    if (checkboxes[i].checked) {
      cnt++;
    }
  }
  return cnt;
}
