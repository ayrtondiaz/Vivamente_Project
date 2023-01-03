// MODAL
const modal1= document.getElementById('modal1')
modal1.innerHTML +=    
`
<section class="modal m1" >
<div class="modal__container">
<div class="col-lg-4">
    <img src="assets/img/productos/productos/maceta yerba.JPG" class=" img-modal">
    <p>* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="col-lg-5">
<h2 class="f-reg">Maceta de Yerba</h2>
<p>Macetas de yerba reciclada, ecologias y biodegradables. Ideales para utilizar tanto en el interior com en el exterior</p>
<div class="btn-category">
    <button class="btn btn-light">Chico</button>
    <button class="btn btn-light">Mediano</button>
    <button class="btn btn-light">Grande</button>
    <button class="btn btn-light">Extragrande</button>
</div>
<div class="text-center"> 
    <div class="may-men">
    <h2 class="f-reg">Menor <b>$320</b></h2>
    <h2 class="f-reg">Mayor <b>$230</b></h2>
    </div>
    <div class="mas-men">
    <button class="btn btn-modal">-</button>
    <button class="btn btn-modal-l">1</button>
    <button class="btn btn-modal">+</button>
    </div>
    <button class="btn btn-quiero2"> Quiero Comprar</button>
</div>
</div>
<a href="#" class="modal__close">Cerrar Modal</a>
</div>
</section>

`

const modal2= document.getElementById('modal2')
modal2.innerHTML +=    
`

<section class="modal m2" >
<div class="modal__container">
<div class="col-lg-4">
    <img src="assets/img/productos/productos/maceta yerba.JPG" class=" img-modal">
    <p>* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="col-lg-5">
<h2 class="f-reg">Maceta de Yerba</h2>
<p>Macetas de yerba reciclada, ecologias y biodegradables. Ideales para utilizar tanto en el interior com en el exterior</p>
<div class="btn-category">
    <button class="btn btn-light">Chico</button>
    <button class="btn btn-light">Mediano</button>
    <button class="btn btn-light">Grande</button>
    <button class="btn btn-light">Extragrande</button>
</div>
<div class="text-center"> 
    <div class="may-men">
    <h2 class="f-reg">Menor <b>$320</b></h2>
    <h2 class="f-reg">Mayor <b>$230</b></h2>
    </div>
    <div class="mas-men">
    <button class="btn btn-modal">-</button>
    <button class="btn btn-modal-l">1</button>
    <button class="btn btn-modal">+</button>
    </div>
    <button class="btn btn-quiero2"> Quiero Comprar</button>
</div>
</div>
<a href="#" class="modal__close">Cerrar Modal</a>
</div>
</section>

`


const modal3= document.getElementById('modal3')
modal3.innerHTML +=    
    `
    
    <section class="modal m3" >
    <div class="modal__container">
    <div class="col-lg-4">
        <img src="assets/img/productos/productos/maceta yerba.JPG" class=" img-modal">
        <p>* Venta al por mayor a partir de 20 piezas</p>
    </div>
    <div class="col-lg-5">
    <h2 class="f-reg">Maceta de Yerba</h2>
    <p>Macetas de yerba reciclada, ecologias y biodegradables. Ideales para utilizar tanto en el interior com en el exterior</p>
    <div class="btn-category">
        <button class="btn btn-light">Chico</button>
        <button class="btn btn-light">Mediano</button>
        <button class="btn btn-light">Grande</button>
        <button class="btn btn-light">Extragrande</button>
    </div>
    <div class="text-center"> 
        <div class="may-men">
        <h2 class="f-reg">Menor <b>$320</b></h2>
        <h2 class="f-reg">Mayor <b>$230</b></h2>
        </div>
        <div class="mas-men">
        <button class="btn btn-modal">-</button>
        <button class="btn btn-modal-l">1</button>
        <button class="btn btn-modal">+</button>
        </div>
        <button class="btn btn-quiero2"> Quiero Comprar</button>
    </div>
    </div>
    <a href="#" class="modal__close">Cerrar Modal</a>
    </div>
    </section>
    
    `;

        





// MODAL
const openModal = document.getElementById('abrirModal');
const modal = document.querySelector('.modal');
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



const modal_2 = document.querySelector('.modal2');

openModal.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal2.classList.add('modal--show');
});
