
let counter8 = 0;
const nombreProd8="Etiqueta plantable"
const contenedorModal8= document.getElementById('contenedor-modal8')
contenedorModal8.innerHTML=`
<section class="modal m8" >
<div class="modal__container">
<div class="col-lg-4">
    <img src="../assets/img/productos/productos/vela en frasco.webp" class=" img-modal">
    <p>* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="col-lg-5">
<h2 class="f-reg">${nombreProd8}</h2>
<p>Velas a base de cera de soja, con menor impacto ambiental que las convencionales, realizadas en frascos de vidrios reutilizados.</p>
<div class="btn-category">
    <button class="btn btn-light">180 cc</button>
    <button class="btn btn-light">400 cc</button>
</div>
<div class="text-center"> 
    <div class="may-men">
    <h2 class="f-reg">Menor <b>$400</b></h2>
    <h2 class="f-reg">Mayor <b>$300</b></h2>
    </div>
    <div class="mas-men">
    <button class="btn btn-modal" onclick="Substract8()">-</button>
    <button class="btn btn-modal-l" id="num8">${counter8}</button>
    <button class="btn btn-modal" onclick="Add8()">+</button>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp8()"> Quiero Comprar</button>
</div>
</div>
<a href="#" class="modal__close mc8">Cerrar Modal</a>
</div>
</section>
`

const openModal8 = document.getElementById('openModal8');
const modal8 = document.querySelector('.m8');
const closeModal8 = document.querySelector('.mc8');
const num8= document.getElementById("num8")
openModal8.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal8.classList.add('modal--show');
});

closeModal8.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal8.classList.remove('modal--show');
});

function Add8(){
    counter8++;
    num8.innerHTML=`${counter8}`
    console.log(counter8)
}
function Substract8(){
    if (counter8 >  0 ){

        counter8--;
        num8.innerHTML=`${counter8}`
    }
    else{
        counter8=0;
    }
}

// WHATSAPP

function Wpp8(){
    const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter8}%20unidades%20de%20${nombreProd8} `;
    window.open(URL, "_blank");
}


// > y <