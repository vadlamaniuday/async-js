var count = 0;
let start;

const setCounter = function () {
  var node = document.createElement("li");
  node.appendChild(document.createTextNode((count = count + 1)));
  node.classList.add("list-group-item");
  document.querySelector("ul").appendChild(node);
};

document.getElementById("start").addEventListener("click", function () {
  this.disabled = true;
  document.getElementById("stop").disabled = false;
  document.getElementById("reset").disabled = true;
  start = setInterval(setCounter, 1000);
});

document.getElementById("stop").addEventListener("click", function () {
  clearInterval(start);
  document.getElementById("start").disabled = false;
  document.getElementById("reset").disabled = false;
  this.disabled = true;
  alert("Stopped");
});

document.getElementById("reset").addEventListener("click", function () {
  count = 0;

  document.querySelector("ul").innerHTML = "";
});
