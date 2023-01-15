
let counter11 = 0;
const nombreProd11="Bolsas de compra"
const contenedorModal11= document.getElementById('contenedor-modal11')
contenedorModal11.innerHTML=`

<section class="modal m11" >
<div class="modal__container">
<div class="col-lg-4 pl-lg-5 p-lg-4 justify-content-center">
    <img src="../assets/img/productos/productos/bolsas.webp" class="d-none d-lg-flex col-12 img-modal">
    <p class="d-none d-lg-flex">* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="p-3 col-12 col-lg-8 d-flex flex-wrap justify-content-center align-items-center">
<div class="d-flex flex-row col-12">
    <h2 class="f-reg align-self-center col-10 col-sm-11 p-sm-3 p-lg-0">${nombreProd11}</h2>
    <a href="#" class="modal__close mc11 justify-self-end col-2 col-sm-1"><b class="align-self-center">Cerrar</b></a>
</div>
<p class="p-sm-3 p-lg-0" align="justify">Bolsas elaboradas a partir de bolsas de papas, su confecciòn es realizada por una ONG y un micro-emprendimiento de costura.</p>
<img src="../assets/img/productos/productos/bolsas.webp" class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex d-lg-none justify-content-center">
<p class="col-12 col-sm-6">* Venta al por mayor a partir de 20 piezas</p>
</div>

<div class="text-center col-11"> 
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
    <h2 class="f-reg">Menor <b>$ 250</b></h2>
    <h2 class="f-reg">Mayor <b>$ 180</b></h2>
    </div>
    <div class="mas-men p-3">
    <button class="btn btn-modal" onclick="Substract11()">-</button>
    <button class="btn btn-modal-l" id="num11">${counter11}</button>
    <button class="btn btn-modal" onclick="Add11()">+</button>
    </div>
    <div id="error11" class="d-none justify-content-center col-12">
        <h4  class="col-12" style="color:red"><b>cantidad invalida</b></h3>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp11()"> Quiero Comprar</button>
</div>
</div>
</div>
</section>
`

const openModal11 = document.getElementById('openModal11');
const modal11 = document.querySelector('.m11');
const closeModal11 = document.querySelector('.mc11');
const num11= document.getElementById("num11")
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
    if(counter11 !== 0) {
        const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter11}%20unidades%20de%20${nombreProd11}`;
        window.open(URL, "_blank");
        document.getElementById('error11').classList.add("d-none");
        document.getElementById('error11').classList.remove("d-flex"); 
    } else { document.getElementById('error11').classList.remove("d-none");
             document.getElementById('error11').classList.add("d-flex"); 
            }
}


// > y <