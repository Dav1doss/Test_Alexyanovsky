// Number validation

var element = document.getElementById('phone');
var maskOptions = {
    mask: '+38(000) 000-00-00'
} 
var mask = new IMask(element, maskOptions);

// PopUp

const openPopUp = document.querySelector('.pop-up-open');
const closePopUp = document.querySelector('.pop-up-close');
const popUp = document.querySelector('.pop-up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault()
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})