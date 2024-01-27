const menuBtn = document.querySelector('.menu img');
const menu = document.querySelector('menu')
const navBar = document.querySelector('.navbar');
const xImg = document.querySelector('.x');




menuBtn.addEventListener('click', () => {  
    navBar.classList.toggle('invisible')

   console.log('menu')
})


xImg.addEventListener('click', () => {
    
   
    console.log('x')
})