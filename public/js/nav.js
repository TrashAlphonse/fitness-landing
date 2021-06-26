const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".header__overlay");

menu.addEventListener("click", () => {
    [header, overlay].forEach((el) => el.classList.toggle("open"));
});