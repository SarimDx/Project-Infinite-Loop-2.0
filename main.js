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