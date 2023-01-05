const openModal = document.getElementById('abrirModal');
const modal = document.querySelector('.m1');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});


const openModal2 = document.getElementById('abrirModal2');
// const modal2 = document.getElementById('A');
// const modal2 = document.querySelector('.m2');
const closeModal2 = document.querySelector('.modal__close2');

openModal2.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal.classList.add('modal--show');
});


