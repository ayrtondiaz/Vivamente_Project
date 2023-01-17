
let counter10 = 0;
const nombreProd10="Scrunchies"
const contenedorModal10= document.getElementById('contenedor-modal10')
contenedorModal10.innerHTML=`
<section class="modal m10">
<div class="modal__container">
<div class="col-lg-4 pl-lg-5 p-lg-4 justify-content-center">
    <img src="../assets/img/productos/productos/scrunchie.webp" class="d-none d-lg-flex col-12 img-modal">
    <p class="d-none d-lg-flex">* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="p-3 col-12 col-lg-8 d-flex flex-wrap justify-content-center align-items-center">
<div class="d-flex flex-row col-12">
    <h2 class="f-reg align-self-center col-10 col-sm-11 p-sm-3 p-lg-0">${nombreProd10}</h2>
    <a href="#" class="modal__close mc10 justify-self-end col-2 col-sm-1"><b class="align-self-center">
    <span style="color:white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></span>
    </b></a>
</div>
<p class="p-sm-3 p-lg-0" align="justify">Portasahumerios realizado con yerba mate reciclada. Su diseño alargado permite que las cenizas queden sobre el objeto</p>
<img src="../assets/img/productos/productos/scrunchie.webp" class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex d-lg-none justify-content-center">
<p class="col-12 col-sm-6">* Venta al por mayor a partir de 20 piezas</p>
</div>

<div class="text-center col-11"> 
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
    <h2 class="f-reg">Menor <b>$ 350</b></h2>
    <h2 class="f-reg">Mayor <b>$ 250</b></h2>
    </div>
    <div class="mas-men p-3">
    <button class="btn btn-modal" onclick="Substract10()">-</button>
    <button class="btn btn-modal-l" id="num10">${counter10}</button>
    <button class="btn btn-modal" onclick="Add10()">+</button>
    </div>
    <div id="error10" class="d-none justify-content-center col-12">
        <h4  class="col-12" style="color:red"><b>cantidad invalida</b></h3>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp10()"> Quiero Comprar</button>
</div>
</div>
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
    if(counter10 !== 0) {
        const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter10}%20unidades%20de%20${nombreProd10}`;
        window.open(URL, "_blank");
        document.getElementById('error10').classList.add("d-none");
        document.getElementById('error10').classList.remove("d-flex"); 
    } else { document.getElementById('error10').classList.remove("d-none");
             document.getElementById('error10').classList.add("d-flex"); 
            }
}


// > y <