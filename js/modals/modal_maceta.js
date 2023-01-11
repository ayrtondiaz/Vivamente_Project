
let counter=0;
const nombreProd="Maceta de Yerba"
const contenedorModal= document.getElementById('contenedor-modal1')
contenedorModal.innerHTML=`
<section class="modal m1" >
<div class="modal__container">
<div class="col-lg-4">
    <img src="../assets/img/productos/productos/maceta yerba.webp" class=" img-modal">
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
    <button class="btn btn-modal" onclick="Substract()">-</button>
    <button class="btn btn-modal-l" id="num">${counter}</button>
    <button class="btn btn-modal" onclick="Add()">+</button>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp()"> Quiero Comprar</button>
</div>
</div>
<a href="#" class="modal__close">Cerrar Modal</a>
</div>
</section>
`


const openModal1 = document.getElementById('openModal1');
const modal1 = document.querySelector('.modal');
const closeModal1 = document.querySelector('.modal__close');
const num= document.getElementById("num")

openModal1.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal1.classList.add('modal--show');
});

closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal1.classList.remove('modal--show');
});

function Add(){
    counter++;
    num.innerHTML=`${counter}`
    console.log(counter)
}
function Substract(){
    if (counter >  0 ){

        counter--;
        num.innerHTML=`${counter}`
    }
    else{
        counter=0;
    }
}

// WHATSAPP

function Wpp(){
    const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter}%20unidades%20de%20${nombreProd} `;
    window.open(URL, "_blank");
}
