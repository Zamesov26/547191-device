       var link = document.querySelector(".btn-send-msg");
      var popup = document.querySelector(".modal-login");
      var popup_map = document.querySelector(".modal-map");
      var link_map = document.querySelector(".office-map");
      var close = document.querySelector(".modal-close");
      var close_map = document.querySelector(".modal-map .modal-close");
      var person = popup.querySelector("input[name=name]");
      var email = popup.querySelector("input[name=email]");
      var msg = popup.querySelector("textarea");
      var form = popup.querySelector("form");
      var storage = localStorage.getItem("person");
      var storage_mail = localStorage.getItem("email");

      link.addEventListener("click", function(evt) {
        evt.preventDefault();   
       popup.classList.add("modal-show");
       person.focus();
       if (storage) {
          person.value = storage;
          email.focus();
       }
       if (storage_mail) {
          email.value = storage_mail;
          if (person.value){
            msg.focus();
          }
       }
     });

      link_map.addEventListener("click", function(evt) {
          evt.preventDefault();   
         popup_map.classList.add("modal-show");
      });

      close.addEventListener("click", function(evt) {
        evt.preventDefault(); 
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      });

      close_map.addEventListener("click", function(evt) {
        evt.preventDefault(); 
        popup.classList.remove("modal-error");
        popup_map.classList.remove("modal-show");
      });

      window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
          if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
          }
        }
      });

      form.addEventListener("submit", function(evt) {
        popup.classList.remove("modal-error");
        localStorage.setItem("person", person.value);
        localStorage.setItem("email", email.value);
        if (!person.value || !email.value || !msg.value){
        evt.preventDefault();
          popup.classList.add("modal-error");
        }       
      });