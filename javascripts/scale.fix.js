var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

window.addEventListener("load", () => {
  for (let i of document.querySelectorAll(".collapse ul")) {
    let tog = document.createElement("div");
    tog.innerHTML = i.previousSibling.textContent;
    tog.className = "toggle";
    tog.onclick = () => tog.classList.toggle("show");
    i.parentElement.removeChild(i.previousSibling);
    i.parentElement.insertBefore(tog, i);
  }
});