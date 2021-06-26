// First Page
const slidePage = document.querySelector(".register__content__form__page");
const firstNextBtn = document.querySelector(".next-1");

// Second Page
const firstPrevBtn = document.querySelector(".prev-1");
const secondNextBtn = document.querySelector(".next-2");

// Third Page
const secondPrevBtn = document.querySelector(".prev-2");
const thirdNextBtn = document.querySelector(".next-3");

// Fourth Page
const thirdPrevBtn = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");

//Progress
const progressSteps = document.querySelectorAll(".register__progress__step");
const progressNumbers = document.querySelectorAll(".register__progress__step span");
const progressChecks = document.querySelectorAll(".fa-check");

let current = 0;


function tick() {
  
    progressSteps[current].classList.add("active");
    progressNumbers[current].classList.add("active");
    progressChecks[current].classList.add("active");
    current += 1;
}

function untick() {

    progressSteps[current - 1].classList.remove("active");
    progressNumbers[current - 1].classList.remove("active");
    progressChecks[current - 1].classList.remove("active");
    current -= 1;
}

firstNextBtn.addEventListener("click", () => {
    slidePage.style.marginLeft = "-33%";
    tick();
});

secondNextBtn.addEventListener("click", () => {
    slidePage.style.marginLeft = "-100%";
    tick();
});

thirdNextBtn.addEventListener("click", () => {
    slidePage.style.marginLeft = "-200%";
    tick();
});




firstPrevBtn.addEventListener("click", () => {
    slidePage.style.marginLeft = "0";
    untick();
    
});

secondPrevBtn.addEventListener("click", () => {
    slidePage.style.marginLeft = "-33%";
    untick();
});

thirdPrevBtn.addEventListener("click", () => {
    slidePage.style.marginLeft = "-100%";
    untick();
});


submitBtn.addEventListener("click", () => {
    tick();
    setTimeout(() => {
        alert("Your form has been successfully submitted. We'll contact you asap. Thanks!");
        location.reload();
    }, 1000);
});