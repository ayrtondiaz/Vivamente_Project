
let counter10 = 0;
const nombreProd10="Scrunchies"
const contenedorModal10= document.getElementById('contenedor-modal10')
contenedorModal10.innerHTML=`
<section class="modal m10">
<div class="modal__container">
<div class="col-lg-5 p-lg-4 d-flex flex-row-reverse flex-wrap text-left">
    <img src="../assets/img/productos/productos/scrunchie.webp" class="d-none d-lg-inline-flex p-2 pt-0 col-11 img-modal mt-5">
    <p class="d-none d-lg-flex font-italic disclaimer col-11 p-2"><em>* Venta al por mayor a partir de 20 piezas</em></p>
</div>
<div class="p-3 col-12 col-lg-7 d-flex flex-wrap align-items-center">
<div class="d-flex flex-row justify-self-end col-12">
    <h2 class="f-reg align-self-center col-10 col-sm-11 p-sm-3 p-lg-0 pt-lg-5"><b>${nombreProd10}</b></h2>
    <a href="#" class="modal__close mc10 justify-self-end col-2 col-sm-1"><b class="align-self-center">
    <span style="color:white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></span>
    </b></a>
</div>
<p class="p-sm-3 p-lg-0 col-10 col-lg-11  " align="justify">Accesorio realizado a partir de descarte textil, diseñadas de manera clásica y adaptable a todo tipo de cabello. Variedades a elección.</p>
<img src="../assets/img/productos/productos/scrunchie.webp" class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex d-lg-none justify-content-center">
<p class="col-12"><em>* Venta al por mayor a partir de 20 piezas</em></p>
</div>

<div class="text-center col-11 my-3"> 
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
        <h3 class="f-reg">Menor <b>$ 350</b></h2>
        <h3 class="f-reg">Mayor <b>$ 250</b></h2>
    </div>
    <div class="mas-men p-1 p-lg-2 pt-lg-3 pb-lg-5">
    <button class="btn btn-modal" onclick="Substract10()">-</button>
    <button class="btn btn-modal-l" id="num10">${counter10}</button>
    <button class="btn btn-modal" onclick="Add10()">+</button>
    </div>
    <div id="error10" class="d-none justify-content-center col-12">
        <p  class="col-12" style="color:red"><b>cantidad invalida</b></p>
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
    e.preventDefault();
    modal10.classList.add('modal--show');
});

closeModal10.addEventListener('click', (e)=>{
    e.preventDefault();
    modal10.classList.remove('modal--show');
});

function Add10(){
    counter10++;
    num10.innerHTML=`${counter10}`
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