
let counter11 = 0;
const nombreProd11="Bolsas de compra"
const contenedorModal11= document.getElementById('contenedor-modal11')
contenedorModal11.innerHTML=`

<section class="modal m11" >
<div class="modal__container">
<div class="col-lg-4">
    <img src="../assets/img/productos/productos/bolsas.webp" class=" img-modal">
    <p>* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="col-lg-5">
<h2 class="f-reg">${nombreProd10}</h2>
<p>Bolsas elaboradas a partir de bolsas de papas, su confecciòn es realizada por una ONG y un micro-emprendimiento de costura.</p>

<div class="text-center"> 
    <div class="may-men">
    <h2 class="f-reg">Menor <b>$250</b></h2>
    <h2 class="f-reg">Mayor <b>$180</b></h2>
    </div>
    <div class="mas-men">
    <button class="btn btn-modal" onclick="Substract11()">-</button>
    <button class="btn btn-modal-l" id="num11">${counter10}</button>
    <button class="btn btn-modal" onclick="Add11()">+</button>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp11()"> Quiero Comprar</button>
</div>
</div>
<a href="#" class="modal__close mc11">Cerrar Modal</a>
</div>
</section>
`

const openModal11 = document.getElementById('openModal11');
const modal11 = document.querySelector('.m11');
const closeModal11 = document.querySelector('.mc11');
const num11= document.getElementById("num11")
console.log(openModal11)
openModal11.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal11.classList.add('modal--show');
});

closeModal11.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal11.classList.remove('modal--show');
});

function Add11(){
    counter11++;
    num11.innerHTML=`${counter11}`
    console.log(counter11)
}
function Substract11(){
    if (counter11 >  0 ){

        counter11--;
        num11.innerHTML=`${counter11}`
    }
    else{
        counter11=0;
    }
}

// WHATSAPP

function Wpp11(){
    const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter11}%20unidades%20de%20${nombreProd11} `;
    window.open(URL, "_blank");
}


// > y <