const menuBtn = document.querySelector('.menu-btn');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click',() =>{
  menuMobile.classList.toggle('menu--open'); 
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  loop: true,
    // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
});



function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");
    
    if(dots.style.display === "none") {
      dots.style.display="inline";
      btn.innerHTML="ЧИТАТЬ";
      more.style.display="none";
    } else {
      dots.style.display="none";
      btn.innerHTML="Скрыть";
      more.style.display="inline";
    }
  }