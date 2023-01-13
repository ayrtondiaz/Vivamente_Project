
let counter7 = 0;
const nombreProd7="Etiqueta plantable"
const contenedorModal7= document.getElementById('contenedor-modal7')
contenedorModal7.innerHTML=`
<section class="modal m7" >
<div class="modal__container">
<div class="col-lg-4">
    <img src="../assets/img/productos/productos/etiqueta plantable.webp" class=" img-modal">
    <p>* Venta al por mayor a partir de 20 piezas</p>
    <br>
    <h5 class="des-min"><b>Especificaciones</b></h5>
    <h6 class="des-min"><li>Se puede elegir el color de acuerdo al stock.</li></h6>
    <h6 class="des-min"><li>Las semillas del papel son de Albahaca.</li></h6>
    <h6 class="des-min"><li>El costo es por frente únicamente, ambos lados c/cotización personalizada.</li></h6>
</div>
<div class="col-lg-5">
<h2 class="f-reg">${nombreProd7}</h2>
<p>Papel reciclado con semillas, 100%artesanal. Variedad de colores y especies</p>
<div class="btn-category">
    <button class="btn btn-light">C/marca o logo</button>
    <button class="btn btn-light">C/frase personalizada</button>
</div>
<div class="btn-category">
    <button class="btn btn-light">50 un</button>
    <button class="btn btn-light">100 un</button>
</div>
<div class="text-center"> 
    <div class="may-men">
    <h2 class="f-reg"><b>$1500</b></h2>
    </div>
    <div class="mas-men">
    <button class="btn btn-modal" onclick="Substract7()">-</button>
    <button class="btn btn-modal-l" id="num7">${counter7}</button>
    <button class="btn btn-modal" onclick="Add7()">+</button>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp7()"> Quiero Comprar</button>
</div>
</div>
<a href="#" class="modal__close mc7">Cerrar Modal</a>
</div>
</section>
`

const openModal7 = document.getElementById('openModal7');
const modal7 = document.querySelector('.m7');
const closeModal7 = document.querySelector('.mc7');
const num7= document.getElementById("num7")
openModal7.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal7.classList.add('modal--show');
});

closeModal7.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal7.classList.remove('modal--show');
});

function Add7(){
    counter7++;
    num7.innerHTML=`${counter7}`
    console.log(counter7)
}
function Substract7(){
    if (counter7 >  0 ){

        counter7--;
        num7.innerHTML=`${counter7}`
    }
    else{
        counter7=0;
    }
}

// WHATSAPP

function Wpp7(){
    const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter7}%20unidades%20de%20${nombreProd7} `;
    window.open(URL, "_blank");
}


// > y <