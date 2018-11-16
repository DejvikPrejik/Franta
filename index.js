function solveExpression() {
  var vyraz = document.getElementById("vyraz").value;
  let res = String(vyraz);
  let pocitadlo = eval(vyraz);

  document.getElementById("vysledek").innerHTML = pocitadlo;
}
var input = document.getElementById("vyraz");

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.code == "Enter" || event.code == "NumpadEnter") {
    solveExpression();
  }
});
