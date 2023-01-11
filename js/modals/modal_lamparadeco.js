
let counter4 =0;
const nombreProd4="Lampara de Sal"
const contenedorModal4= document.getElementById('contenedor-modal4')
contenedorModal4.innerHTML=`
<section class="modal m4" >
<div class="modal__container">
<div class="col-lg-4">
    <img src="../assets/img/productos/productos/porta sahumerio.webp" class=" img-modal">
    <p>* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="col-lg-5">
<h2 class="f-reg">Lámpara decorativa </h2>
<p>Lámparas de yerba mate reciclada,ideales para ambientar tu espacio favorito de recreaciòn o estudio.</p>
<div class="btn-category">
    <button class="btn btn-light">Mediano</button>
    <button class="btn btn-light">Grande</button>
</div>
<div class="btn-category">
    <button class="btn btn-light">Foco led</button>
    <button class="btn btn-light">Foco deco</button>
</div>
<div class="text-center"> 
    <div class="may-men">
    <h2 class="f-reg">Menor <b>$1200</b></h2>
    <h2 class="f-reg">Mayor <b>$900</b></h2>
    </div>
    <div class="mas-men">
    <button class="btn btn-modal" onclick="Substract()">-</button>
    <button class="btn btn-modal-l" id="num4">${counter4}</button>
    <button class="btn btn-modal" onclick="Add()">+</button>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp()"> Quiero Comprar</button>
</div>
</div>
<a href="#" class="modal__close mc4">Cerrar Modal</a>
</div>
</section>
`

const openModal4 = document.getElementById('openModal4');
const modal4 = document.querySelector('.m4');
const closeModal4 = document.querySelector('.mc4');
const num4= document.getElementById("num4")

openModal4.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal4.classList.add('modal--show');
});

closeModal4.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal4.classList.remove('modal--show');
});

function Add(){
    counter4++;
    num4.innerHTML=`${counter4}`
    console.log(counter4)
}
function Substract(){
    if (counter4 >  0 ){

        counter4--;
        num4.innerHTML=`${counter4}`
    }
    else{
        counter4=0;
    }
}

// WHATSAPP

function Wpp(){
    const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter4}%20unidades%20de%20${nombreProd4} `;
    window.open(URL, "_blank");
}


// > y <