'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})

        var slide=document.getElementById("slider");
        var btn1=document.getElementById("btn1");
        var btn2=document.getElementById("btn2");
        var btn3=document.getElementById("btn3");

        btn1.onclick=function(){
          slide.style.transform="translateX(0px)";
          btn1.classList.add("active1")
          btn2.classList.remove("active1")
          btn3.classList.remove("active1")
          
        }
        btn2.onclick=function(){
          slide.style.transform="translateX(-100%)";
          btn1.classList.remove("active1")
          btn2.classList.add("active1")
          btn3.classList.remove("active1")
          
        }
        btn3.onclick=function(){
          slide.style.transform="translateX(-200%)";
          btn1.classList.remove("active1")
          btn2.classList.remove("active1")
          btn3.classList.add("active1")
        }
        
      