/*---------------- MOBILE MENU ----------------*/

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
menu.classList.toggle("active");
});


/*---------------- COUNTER STATS ----------------*/

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

const updateCount = () => {

const target = +counter.getAttribute('data-target');
const count = +counter.innerText;

const increment = target / 200;

if(count < target){
counter.innerText = Math.ceil(count + increment);
setTimeout(updateCount,20);
}
else{
counter.innerText = target + "+";
}

};

updateCount();

});


/*---------------- SCROLL ANIMATION ----------------*/

function reveal(){

let reveals = document.querySelectorAll(
".reveal-left, .reveal-right, .reveal-top, .reveal-bottom"
);

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;
let elementVisible = 100;

if(elementTop < windowHeight - elementVisible){
reveals[i].classList.add("reveal-active");
}

}

}

window.addEventListener("scroll", reveal);






function revealServices(){

let services = document.querySelectorAll(
".service-left, .service-right, .service-top, .service-bottom"
);

for(let i = 0; i < services.length; i++){

let windowHeight = window.innerHeight;
let elementTop = services[i].getBoundingClientRect().top;
let elementVisible = 100;

if(elementTop < windowHeight - elementVisible){
services[i].classList.add("service-active");
}

}

}

window.addEventListener("scroll", revealServices);