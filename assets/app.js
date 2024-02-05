const menuBtn = document.querySelector('.menu');
const navBar = document.querySelector('.navbar');
const xImg = document.querySelector('.x img');
const cover = document.querySelector('.cover');



menuBtn.addEventListener('click', () => {  
    navBar.classList.toggle('invisible')
    cover.style.display = 'block';
    menuBtn.style.display = 'none'
    xImg.style.display = 'block'
   console.log('menu')
})


xImg.addEventListener('click', () => { 
    navBar.classList.toggle('invisible')
    cover.style.display = 'none';
    menuBtn.style.display = 'block'
    xImg.style.display = 'none'
    console.log('x')
})