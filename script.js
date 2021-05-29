var modal = document.getElementById("bookclubrego")
var overlay = document.getElementById("color-overlay")
var trigger = document.getElementById("trigger-modal")

var exit = document.getElementById("exit")

console.log(typeof(trigger))
trigger.onclick = function(){
  console.log(modal.style.display)
  modal.style.display = "block";
  overlay.style.display = "block";
}

exit.onclick = function(){
  modal.style.display = "none";
  overlay.style.display = "none";
}