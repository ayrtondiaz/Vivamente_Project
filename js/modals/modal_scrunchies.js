
let counter10 = 0;
const nombreProd10="Scrunchies"
const contenedorModal10= document.getElementById('contenedor-modal10')
contenedorModal10.innerHTML=`
<section class="modal m10" >
<div class="modal__container">
<div class="col-lg-4">
    <img src="../assets/img/productos/productos/Scrunchie.webp" class=" img-modal">
    <p>* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="col-lg-5">
<h2 class="f-reg">${nombreProd10}</h2>
<p>Accesorio realizado a partir de descarte textil, diseñados de manera clásica y adaptable a todo tipo de cabello. Variedades a elección.</p>

<div class="btn-category">
    <button class="btn btn-light">180 cc</button>
    <button class="btn btn-light">400 cc</button>
</div>
<div class="text-center"> 
    <div class="may-men">
    <h2 class="f-reg">Menor <b>$350</b></h2>
    <h2 class="f-reg">Mayor <b>$250</b></h2>
    </div>
    <div class="mas-men">
    <button class="btn btn-modal" onclick="Substract10()">-</button>
    <button class="btn btn-modal-l" id="num10">${counter10}</button>
    <button class="btn btn-modal" onclick="Add10()">+</button>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp10()"> Quiero Comprar</button>
</div>
</div>
<a href="#" class="modal__close mc10">Cerrar Modal</a>
</div>
</section>
`

const openModal10 = document.getElementById('openModal10');
const modal10 = document.querySelector('.m10');
const closeModal10 = document.querySelector('.mc10');
const num10= document.getElementById("num10")
openModal10.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal10.classList.add('modal--show');
});

closeModal10.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal10.classList.remove('modal--show');
});

function Add10(){
    counter10++;
    num10.innerHTML=`${counter10}`
    console.log(counter10)
}
function Substract10(){
    if (counter10 >  0 ){

        counter10--;
        num10.innerHTML=`${counter10}`
    }
    else{
        counter10=0;
    }
}

// WHATSAPP

function Wpp10(){
    const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter10}%20unidades%20de%20${nombreProd10} `;
    window.open(URL, "_blank");
}


// > y <