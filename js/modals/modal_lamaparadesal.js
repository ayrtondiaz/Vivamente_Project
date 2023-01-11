
let counter3=0
const nombreProd3="Lampara de Sal"
const contenedorModal3= document.getElementById('contenedor-modal3')
contenedorModal3.innerHTML=`
<section class="modal m3" >
<div class="modal__container">
<div class="col-lg-4">
    <img src="../assets/img/productos/productos/porta sahumerio.webp" class=" img-modal">
    <p>* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="col-lg-5">
<h2 class="f-reg">Lámpara de sal</h2>
<p>Lámparas sustentables realizadas a paritr de yerba mate reciclada y sal de HImalaya, ideal para decorar tu espacio de recreación.</p>
<div class="btn-category">
    <button class="btn btn-light">Mediano</button>
    <button class="btn btn-light">Grande</button>
</div>
<div class="text-center"> 
    <div class="may-men">
    <h2 class="f-reg">Menor <b>$1920</b></h2>
    <h2 class="f-reg">Mayor <b>$1500</b></h2>
    </div>
    <div class="mas-men">
    <button class="btn btn-modal" onclick="Substract()">-</button>
    <button class="btn btn-modal-l" id="num3">${counter3}</button>
    <button class="btn btn-modal" onclick="Add()">+</button>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp()"> Quiero Comprar</button>
</div>
</div>
<a href="#" class="modal__close mc3">Cerrar Modal</a>
</div>
</section>
`

const openModal3 = document.getElementById('openModal3');
const modal3 = document.querySelector('.m3');
const closeModal3 = document.querySelector('.mc3');
const num3= document.getElementById("num3")

openModal3.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal3.classList.add('modal--show');
});

closeModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal3.classList.remove('modal--show');
});

function Add(){
    counter3++;
    num3.innerHTML=`${counter3}`
    console.log(counter3)
}
function Substract(){
    if (counter3 >  0 ){

        counter3--;
        num3.innerHTML=`${counter3}`
    }
    else{
        counter3=0;
    }
}

// WHATSAPP

function Wpp(){
    const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter3}%20unidades%20de%20${nombreProd3} `;
    window.open(URL, "_blank");
}


// > y <