

let counter2 = 9;
const nombreProd2="Porta Sahumerios"
const contenedorModal2= document.getElementById('contenedor-modal2')
contenedorModal2.innerHTML=`
<section class="modal m2" >
<div class="modal__container">
<div class="col-lg-4">
    <img src="../assets/img/productos/productos/porta sahumerio.webp" class=" img-modal">
    <p>* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="col-lg-5">
<h2 class="f-reg">Porta Sahumerio</h2>
<p>Portasahumerios realizado con yerba mate reciclada. Su diseño alargado permite que las cenizas queden sobre el objeto</p>
<div class="text-center"> 
    <div class="may-men">
    <h2 class="f-reg">Menor <b>$350</b></h2>
    <h2 class="f-reg">Mayor <b>$250</b></h2>
    </div>
    <div class="mas-men">
    <button class="btn btn-modal" onclick="Substract()">-</button>
    <button class="btn btn-modal-l" id="num2">${counter2}</button>
    <button class="btn btn-modal" onclick="Add()">+</button>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp()"> Quiero Comprar</button>
</div>
</div>
<a href="#" class="modal__close mc2">Cerrar Modal</a>
</div>
</section>
`
{}

const openModal2 = document.getElementById('openModal2');
const modal2 = document.querySelector('.m2');
const closeModal2 = document.querySelector('.mc2');
const num2= document.getElementById("num2")

openModal2.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal2.classList.add('modal--show');
});

closeModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal2.classList.remove('modal--show');
});

function Add(){
    counter2++;
    num2.innerHTML=`${counter2}`
    console.log(counter2)
}
function Substract(){
    if (counter2 >  0 ){

        counter2--;
        num2.innerHTML=`${counter2}`
    }
    else{
        counter2=0;
    }
}

// WHATSAPP

function Wpp(){
    const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter2}%20unidades%20de%20${nombreProd2} `;
    window.open(URL, "_blank");
}


// > y <