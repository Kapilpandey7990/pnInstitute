var ham = document.getElementById("hamburger");
var navLinks = document.getElementById("navLinks");
var subListHandle = document.getElementById("subListHandle");
var subList = document.getElementById("subList");

ham.addEventListener("click", function () {
   if (navLinks.style.maxHeight) {
      navLinks.style.maxHeight = null;
      ham.style.width = "25px";
   } else {
      navLinks.style.maxHeight = navLinks.scrollHeight + "px";
      ham.style.width = "21px";
   }
});

subListHandle.addEventListener("click", function () {
   // if (subList.style.maxHeight) {
   //    subList.style.maxHeight = null;
   // } else {
   //    subList.style.maxHeight = subList.scrollHeight + "px";
   //    navLinks.style.maxHeight = navLinks.scrollHeight + "px";
   // }
   subList.classList.toggle("max-height");
});

// let navbar = document.querySelector(".navbar");
// let searchBox = document.querySelector(".search-box .bx-search");
// // let searchBoxCancel = document.querySelector(".search-box .bx-x");

// searchBox.addEventListener("click", ()=>{
//   navbar.classList.toggle("showInput");
//   if(navbar.classList.contains("showInput")){
//     searchBox.classList.replace("bx-search" ,"bx-x");
//   }else {
//     searchBox.classList.replace("bx-x" ,"bx-search");
//   }
// });

// sidebar open close js code
// let navLinks = document.querySelector(".nav-links");
// let menuOpenBtn = document.querySelector(".navbar .bx-menu");
// let menuCloseBtn = document.querySelector(".nav-links .bx-x");
// menuOpenBtn.onclick = function () {
//    navLinks.style.left = "0";
// };
// menuCloseBtn.onclick = function () {
//    navLinks.style.left = "-100%";
// };

// sidebar submenu open close js code
// let htmlcssArrow = document.querySelector(".htmlcss-arrow");
// htmlcssArrow.onclick = function () {
//    navLinks.classList.toggle("show1");
// };
// let moreArrow = document.querySelector(".more-arrow");
// moreArrow.onclick = function() {
//  navLinks.classList.toggle("show2");
// }
// let jsArrow = document.querySelector(".js-arrow");
// jsArrow.onclick = function() {
//  navLinks.classList.toggle("show3");
// }

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
         // panel.style.padding = "0px";
         panel.style.maxHeight = null;
      } else {
         // panel.style.padding = "1em";
         panel.style.maxHeight = panel.scrollHeight + "px";
      }
   });
}

const postApplied = document.querySelector("#postApplied");
function carSel(carOption) {
   postApplied.value = carOption;
}
