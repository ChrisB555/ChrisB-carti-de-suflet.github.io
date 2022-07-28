//owl slider
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
  });

//function skrink first navbar onscroll
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav1").style.padding = "5px";
    document.getElementById("nav1").style.top = "0px";
    document.getElementById("mobile-nav").style.padding = "5px";
    document.getElementById("mobile-nav").style.top = "-130px";
    document.getElementById("mobile-nav").style.transition = "0.5s";
  } else {
    document.getElementById("nav1").style.padding = "0px";
    document.getElementById("nav1").style.top = "50px";
    document.getElementById("mobile-nav").style.padding = "3px";
    document.getElementById("mobile-nav").style.top = "50px";
    document.getElementById("mobile-nav").style.transition = "0.5s";
  }
}
//expand sidemenu
const box = document.getElementById("sidemenu");
box.onmouseenter = function () {
      document.getElementById("sidemenu").style.height = "740px";
      var elements = document.getElementsByClassName("hide-a");
      for (var i= 0; i < elements.length; i++) {
          elements[i].style.display = "block";
      }
}
 
box.onmouseleave = function () {
    document.getElementById("sidemenu").style.height = "400px" ;
    var elements = document.getElementsByClassName("hide-a");
      for (var i= 0; i < elements.length; i++) {
          elements[i].style.display = "none";
      }
}
//on mobile
let burger = document.getElementById("burger");
burger.onclick = function () {
  document.getElementById("mobile").style.display = "block";
  document.getElementById("mobile").style.width = "270px";
  document.getElementById("mobile").style.transition = "1s";
  document.getElementById("mobile-logo").style.marginLeft = "270px";
  document.getElementById("mobile-logo").style.opacity = " 0.3";
  document.getElementById("mobile-logo").style.filter = "brightness(30%)";
  document.getElementById("mobile-logo").style.transition = "0.5s";
  document.getElementById("infobar").style.transition = "0.5s";
  document.getElementById("infobar").style.marginLeft = "270px";
  document.getElementById("infobar").style.opacity = " 0.3";
  document.getElementById("infobar").style.filter = "brightness(30%)";
  document.getElementById("slider").style.marginLeft = "270px";
  document.getElementById("slider").style.opacity = " 0.3";
  document.getElementById("slider").style.filter = "brightness(30%)";
  document.getElementById("slider").style.transition = "0.5s";
  document.getElementById("icon-group").style.marginLeft = "270px";
  document.getElementById("icon-group").style.opacity = " 0.3";
  document.getElementById("icon-group").style.filter = "brightness(30%)";
  document.getElementById("icon-group").style.transition = "0.5s";
  document.getElementById("burger").style.display = "none";
  document.getElementById("close").style.display = "block";
  document.getElementById("close").style.marginLeft = "270px";
}

let close = document.getElementById("close");
close.onclick = function () {
  document.getElementById("mobile").style.display = "none";
  document.getElementById("burger").style.display = "block";
  document.getElementById("close").style.display = "none";
  document.getElementById("mobile-logo").style.marginLeft = "0";
  document.getElementById("slider").style.marginLeft = "0";
  document.getElementById("icon-group").style.marginLeft = "0";
  document.getElementById("infobar").style.filter = "brightness(100%)";
  document.getElementById("infobar").style.marginLeft = "0";
  document.getElementById("mobile-logo").style.opacity = "1";
  document.getElementById("infobar").style.opacity = "1";
  document.getElementById("slider").style.opacity = "1";
  document.getElementById("icon-group").style.opacity = "1";
  document.getElementById("slider").style.filter = "brightness(100%)";
  document.getElementById("icon-group").style.filter = "brightness(100%)";
  document.getElementById("mobile-logo").style.filter = "brightness(100%)";
  document.getElementById("mobile-nav").style.height = "80px";
}

//mobile sidemenu
let produse_open = document.getElementById("produse-open");
produse_open.onclick = function () {
  document.getElementById("produse-content").style.display = "block";
 
  }
 
let produse_close = document.getElementById("produse-close");
produse_close.onclick = function () {
  document.getElementById("produse-content").style.display = "none";
}

let ceai_open = document.getElementById("ceai-open");
ceai_open.onclick = function () {
  document.getElementById("ceai-content").style.display = "block";
  }
 
let ceai_close = document.getElementById("ceai-close");
ceai_close.onclick = function () {
  document.getElementById("ceai-content").style.display = "none";
}

let miere_open = document.getElementById("miere-open");
miere_open.onclick = function () {
  document.getElementById("miere-content").style.display = "block";
  }
 
let miere_close = document.getElementById("miere-close");
miere_close.onclick = function () {
  document.getElementById("miere-content").style.display = "none";
}

let dulciuri_open = document.getElementById("dulciuri-open");
dulciuri_open.onclick = function () {
  document.getElementById("dulciuri-content").style.display = "block";
  }
 
let dulciuri_close = document.getElementById("dulciuri-close");
dulciuri_close.onclick = function () {
  document.getElementById("dulciuri-content").style.display = "none";
}

let uleiuri_open = document.getElementById("uleiuri-open");
uleiuri_open.onclick = function () {
  document.getElementById("uleiuri-content").style.display = "block";
  }
 
let uleiuri_close = document.getElementById("uleiuri-close");
uleiuri_close.onclick = function () {
  document.getElementById("uleiuri-content").style.display = "none";
}

//mobile produse content
let carte_open = document.getElementById("carte-open");
carte_open.onclick = function () {
  document.getElementById("carte-content").style.display = "block";
  }
 
let carte_close = document.getElementById("carte-close");
carte_close.onclick = function () {
  document.getElementById("carte-content").style.display = "none";
}

let afaceri_open = document.getElementById("afaceri-open");
afaceri_open.onclick = function () {
  document.getElementById("afaceri-content").style.display = "block";
  }
 
let afaceri_close = document.getElementById("afaceri-close");
afaceri_close.onclick = function () {
  document.getElementById("afaceri-content").style.display = "none";
}
