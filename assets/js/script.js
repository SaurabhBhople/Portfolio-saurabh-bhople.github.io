'use strict';

// add event on element

const addEventOnElem = function(elem, type, callback){
  if( elem.length > 1){
    for(let i = 0; i < elem.length; i++){
      elem[i].addEventListener(type, callback);
      }
    } else{
      elem.addEventListener(type, callback);
    }
  }

  // toggle navbar
const navbar = document.querySelector("[data-navbar]");
const navlinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function (){
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function(){
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navlinks, "click", closeNavbar);

// header
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function(){
  if(this.window.scrollY > 100){
    header.classList.add("active");
  }else{
    header.classList.remove("active");
  }
});

// contact us data link
const scriptURL = 'https://script.google.com/macros/s/AKfycbwJNLMLBaiVUnRzESupxoIVXyoPwxZDqxUnp-74KoeY7YduM9tOPqtn5INu9-0CeYJq/exec'
const form = document.forms['Contactform']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! I will contact you soon" ))
  .then(() => {  window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
