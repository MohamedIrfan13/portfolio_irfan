// role animation

document.addEventListener("DOMContentLoaded",function(){
const roles =[
    "Frontend Developer",
    "Software Developer",
    "Java Developer",
    "UI/UX Designer"
];

let roleIndex = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting  = false;
const roleElement = document.getElementById("role-text");

function typeRole(){
    if(isDeleting){
        currentRole= roles[roleIndex].substring(0, charIndex--);

    }
    else{
        currentRole = roles[roleIndex].substring(0, charIndex++);
    }
    roleElement.textContent = currentRole;
    if (!isDeleting && charIndex == roles[roleIndex].length){
        setTimeout(() => isDeleting = true, 1000);
    }
    else if (isDeleting && charIndex === 0)
{
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length
}
const typingspeed = isDeleting ? 50 : 100;
setTimeout(typeRole, typingspeed)

}
typeRole();
   


});

// hamburger

const hamburger = document.querySelector('.hamburger');
const navCenter = document.querySelector('.nav-center');

hamburger.addEventListener('click', (e) => {
    hamburger.classList.toggle('active');
    navCenter.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    const isMobile = window.innerwidth <= 768;

    if (
        isMobile &&
        navCenter.classList.contains('active')&&
        !hamburger.contains(e.target)&&
        !navCenter.contains(e.target)

    ){
        hamburger.classList.remove('active');
        navCenter.classList.remove('active');

    }
});