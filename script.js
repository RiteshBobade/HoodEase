const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

//
emailjs.init("NB6wOy0e_Zcym6dVX"); 

        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            let templateParams = {
                user_name: name,
                user_email: email,
                user_message: message
            };

            emailjs.send("service_4mt907k", "template_kerc3sj", templateParams, "NB6wOy0e_Zcym6dVX")
                .then(response => {
                    alert("Message Sent Successfully!");
                    document.getElementById("contactForm").reset();
                }, error => {
                    alert("Failed to Send Message. Try Again.");
                });
        });
  
