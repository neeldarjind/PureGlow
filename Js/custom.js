// let searchForm = document.querySelector('.search-form');
// document.querySelector("#search-btn").onclick = () => {
//   searchForm.classList.toggle('active');
//   shoppingCart.classList.remove('active');
//   loginForm.classList.remove('active');
//   navbar.classList.remove('active');
// }
// let shoppingCart = document.querySelector('.shopping-cart');
// document.querySelector("#cart-btn").onclick = () => {
//   shoppingCart.classList.toggle('active');
//   searchForm.classList.remove('active');
//   loginForm.classList.remove('active');
//   navbar.classList.remove('active');
// }
// let loginForm = document.querySelector('.login-form');
// document.querySelector("#login-btn").onclick = () => {
//   loginForm.classList.toggle('active');
//   searchForm.classList.remove('active');
//   shoppingCart.classList.remove('active');
//   navbar.classList.remove('active');
// }
// let navbar = document.querySelector('.navbar');
// document.querySelector("#menu-btn").onclick = () => {
//   navbar.classList.toggle('active');
//   searchForm.classList.remove('active');
//   shoppingCart.classList.remove('active');
//   loginForm.classList.remove('active');
// }
// window.onscroll = () => {
//   searchForm.classList.remove('active');
//   shoppingCart.classList.remove('active');
//   loginForm.classList.remove('active');
//   navbar.classList.remove('active');
// }
let searchForm = document.querySelector('.search-form');
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}
let loginForm = document.querySelector('.login-form');
document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
}
window.onscroll = () => {
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,

    },
  },
});




var swiper = new Swiper(".clinet-slider", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {

    1200: {
      slidesPerView: 1,

    },
  },
});



var swiper = new swiper(".swiper", {
  effect: "coverflow",
  autoplay: true,
  grabCursor: true,
  spaceBetween: 30,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: false
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  breakpoints: {
    460: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 3
    },
    1600: {
      slidesPerView: 4
    }
  }
});
