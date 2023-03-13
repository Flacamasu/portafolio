const navToggle = document.querySelector(".navbar__toggle");
const navMenu = document.querySelector(".navbar__container-links");
const navItems = document.querySelectorAll(".navbar__container-links-link");


navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("navbar__container-links--visible");

});

for(let i = 0; i <navItems.length; i++) {
    navItems[i].addEventListener("click", function() {
      // oculta el menú
      navMenu.classList.remove("navbar__container-links--visible");
    });
  }