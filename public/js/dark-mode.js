const checkbox = document.getElementById("toggle");
const htmlElement = document.documentElement;


checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        smoothTransition();
        htmlElement.dataset.theme = "dark";
    } else {
        smoothTransition();
        htmlElement.dataset.theme = "light";
    }
});

const smoothTransition = () => {
    htmlElement.classList.add("transition");
    window.setTimeout(() => {
        htmlElement.classList.remove("transition");
    }, 1000);
}