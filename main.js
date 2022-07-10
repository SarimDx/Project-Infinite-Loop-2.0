// ? Selectors
const burger_nav_menu = document.querySelector(".burger_menu");
const burger_nav_menu_links = document.querySelector(".burger_menu > div");
const window_height_nav = document.querySelector("nav");



// ? Evant Listeners
burger_nav_menu.addEventListener("click", () => {
    burger_nav_menu_links.classList.toggle("mobile");
});


window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        window_height_nav.classList.add("active_navBar");
        burger_nav_menu.style.cssText = "border: 2px solid var(--main-color);color: var(--main-color);"
    } else {
        window_height_nav.classList.remove("active_navBar");
        burger_nav_menu.style.cssText = "border: 2px solid white;color: white;"
    }
})

window.addEventListener("scroll", () => {

})

// ? Functions

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    // loop: true,
    // loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // dynamicBullets: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 10,
    centerSlide: 'true',
    fade: 'true',
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      720: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
