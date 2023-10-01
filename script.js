

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav');
const object = document.querySelector('.select');

hamburger.addEventListener('click', function (){
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')

})

document.querySelectorAll('.linking').forEach((el) => {
    el.addEventListener('click', () => {
        hamburger.classList.remove('active')
        menu.classList.remove('active')
    })
})



