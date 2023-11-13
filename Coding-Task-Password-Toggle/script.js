btn = document.querySelector("button");
pw = document.querySelector("#passWord");

btn.addEventListener("click", function (event) {
  event.preventDefault(); //Browser-Standard-Verhalten wird gestoppt
  if (pw.type === "text") {
    pw.type = "password";
    btn.textContent = "Show Password";
  } else {
    //Input-Feld soll uns unser PW anzeigen
    pw.type = "text;";
    //Button-Text muss geändert werden
    btn.textContent = "Hide Password";
  }
});
