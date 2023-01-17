const openModalA = document.getElementById('abrirModalA');
const modalA = document.querySelector('.mA');
const closeModalA = document.querySelector('.mcA');

openModalA.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modalA.classList.add('modal--show');
});

closeModalA.addEventListener('click', (e)=>{
    e.preventDefault();
    modalA.classList.remove('modal--show');
});


const openModalB = document.getElementById('abrirModalB');
const modalB = document.querySelector('.mB');
const closeModalB = document.querySelector('.mcB');

openModalB.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modalB.classList.add('modal--show');
});

closeModalB.addEventListener('click', (e)=>{
    e.preventDefault();
    modalB.classList.remove('modal--show');
});
