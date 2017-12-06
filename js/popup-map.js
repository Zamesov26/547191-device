var popup_map = document.querySelector(".modal-map");
var link_map = document.querySelector(".office-map");
var close_map = document.querySelector(".modal-map .modal-close");

link_map.addEventListener("click", function(evt) {
    evt.preventDefault();   
   popup_map.classList.add("modal-show");
});

close_map.addEventListener("click", function(evt) {
  evt.preventDefault(); 
  popup.classList.remove("modal-error");
  popup_map.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup_map.classList.contains("modal-show")) {
      popup_map.classList.remove("modal-show");
    }
  }
});