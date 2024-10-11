

const openMenu = document.querySelector('#menu-bar')
const closeMenu = document.querySelector("#menu-close")
const navLinks = document.querySelector("nav .navigation ul")

openMenu.addEventListener("click",function(){
    navLinks.classList.toggle("active")
    openMenu.style.display = "none"
})

closeMenu.addEventListener('click',function(){
    navLinks.classList.toggle("active")
    setTimeout(() => {
        openMenu.style.display = "block"
    }, 500);
})

//-----------loader------------

const loader = document.querySelector(".loader")
window.addEventListener("load",function(){
    loader.style.display = "none"
})







