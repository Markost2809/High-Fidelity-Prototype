var modal = document.getElementById("Modal")

var trigger = document.getElementById("trigger-modal")

var exit = document.getElementById("exit")

console.log(typeof(trigger))
trigger.onclick = function(){
  console.log(modal.style.display)
  modal.style.display = "block";
}

exit.onclick = function(){
  modal.style.display = "none";
}