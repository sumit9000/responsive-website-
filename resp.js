let burger = document.querySelector('.burger')
let navbar = document.querySelector('.navbar')
let navList = document.querySelector('.nav-list')
let rightnav = document.querySelector('.rightnav')
 
burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    console.log('hello')
})








// burger= document.querySelector('.burger')
// navbar= document.querySelector('.navbar')
// navlist= document.querySelector('.nav-list')
// rightnav= document.querySelector('.rightnav')


// burger.addEventListener('click',()=>{
//  rightNav.classList.toggle('v-class-resp');
//  navlist.classList.toggle('v-class-resp');
//  navbar.classList.toggle('h-nav-resp');
// })