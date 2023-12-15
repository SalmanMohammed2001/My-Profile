var typed = new Typed('.multiText', {
    strings: ['Coder','Fullstack Developer','Software Engineering','Web designer and UX/UI designer'],
    loop:true,
    typeSpeed: 80,
    delay:1500
});

const hamburger =document.querySelector(".hamburger");
const navMenu =document.querySelector(".nav-menu")


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))


let loader=document.getElementById('pre-loader');

window.addEventListener("load",function (){
    loader.style.display="none";
})