function enlarge(file) {
  document.getElementById("big").src = file;
  document.getElementById("popup").style.display = "flex";
}

function shrink() {
  document.getElementById("popup").style.display = "none";
}
