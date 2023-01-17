const modalContainerE = document.getElementById('modal-form-exito')
modalContainerE.innerHTML=`
<section class="modal  me" >
<div class="modal_container-exito row text-center">
  <div class="col-10">
  <section class="exito">
    <div style="color:white;" >
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
        </svg>
    </div>
    <br>
    <h2>¡Gracias por contactarnos!</h2>
    <br>
    <p>Hemos recibido tu mensaje con éxito, nos pondremos en contacto contigo cuanto antes.</p>

  </section>
  </div>
  <div class=" btn-cerrar ">
    <a href="#" type="submit" class="modal__close__e"><b>
    <span style="color:white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></span>
    </b></a>
  </div>
</div>     
</section>
`






const openFormE = document.getElementById('abrirModalExito');
const modalFormE= document.querySelector('.me');
const closeFormE = document.querySelector('.modal__close__e');

openFormE.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modalFormE.classList.add('modal--show');
});

closeFormE.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modalFormE.classList.remove('modal--show');
});
