let counter5=0;
const nombreProd5="Adorno con forma"
const contenedorModal5= document.getElementById('contenedor-modal5')
contenedorModal5.innerHTML=`
<section class="modal m5" >
<div class="modal__container">
<div class="col-lg-4">
    <img src="../assets/img/productos/productos/porta sahumerio.webp" class=" img-modal">
    <p>* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="col-lg-5">
<h2 class="f-reg">Adorno con forma</h2>
<p>Formas diversas y simples para decorar tu espacio. Realizadas a partir de yerba mate reciclada. Producto 100% artesanales.</p>
<div class="btn-category">
    <button class="btn btn-light">Circulo</button>
    <button class="btn btn-light">Corazón</button>
    <button class="btn btn-light">Estrella</button>

</div>
<div class="text-center"> 
    <div class="may-men">
    <h2 class="f-reg">Menor <b>$100</b></h2>
    <h2 class="f-reg">Mayor <b>$70</b></h2>
    </div>
    <div class="mas-men">
    <button class="btn btn-modal" onclick="Substract()">-</button>
    <button class="btn btn-modal-l" id="num5">${counter5}</button>
    <button class="btn btn-modal" onclick="Add()">+</button>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp()"> Quiero Comprar</button>
</div>
</div>
<a href="#" class="modal__close mc5">Cerrar Modal</a>
</div>
</section>
`

openModal5 = document.getElementById('openModal5');
modal5 = document.querySelector('.m5');
closeModal5 = document.querySelector('.mc5');
num5= document.getElementById("num5")

openModal5.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal5.classList.add('modal--show');
});

closeModal5.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal5.classList.remove('modal--show');
});

function Add(){
    counter5++;
    num5.innerHTML=`${counter5}`
    console.log(counter);
}
function Substract(){
    if (counter5 >  0 ){

        counter5--;
        num5.innerHTML=`${counter5}`
    }
    else{
        counter5=0;
    }
}

// WHATSAPP

function Wpp(){
    const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter}%20unidades%20de%20${nombreProd5} `;
    window.open(URL, "_blank");
}


// > y <s

// > y <