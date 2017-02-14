var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=user-name]");
var text = popup.querySelector("textarea");
var form = popup.querySelector("form");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-closing");
  popup.classList.add("modal-content-show");
  login.focus();
});

close.addEventListener("click", function(event) {
 event.preventDefault();
 popup.classList.remove("modal-content-show");
 popup.classList.remove("modal-error");
 popup.classList.add("modal-content-closing");
});

window.addEventListener("keydown", function(event) {
 if (event.keyCode === 27) {
  if (popup.classList.contains("modal-content-show")) {
   popup.classList.remove("modal-content-show");
   popup.classList.remove("modal-error");
   popup.classList.add("modal-content-closing");
 }
}
});

form.addEventListener("submit", function(event) {
  if (!login.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    login.classList.add("invalid");
  }
  if	(!text.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    text.classList.add("invalid");
  }	
});

login.addEventListener("click", function(event) {
  login.classList.remove("invalid");
});

text.addEventListener("click", function(event) {
  text.classList.remove("invalid");
});

var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-closing");
  mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
  mapPopup.classList.add("modal-content-closing");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
   if (mapPopup.classList.contains("modal-content-show")) {
    mapPopup.classList.remove("modal-content-show");
    mapPopup.classList.add("modal-content-closing");
  }
}
});
