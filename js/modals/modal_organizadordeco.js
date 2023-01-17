
let counter9 = 0;
const nombreProd9="Organizador deco"
const contenedorModal9= document.getElementById('contenedor-modal9')
contenedorModal9.innerHTML=`
<section class="modal m9" >
<div class="modal__container">
<div class="col-lg-4 pl-lg-5 p-lg-4 d-none d-lg-flex flex-wrap">
    <img src="../assets/img/productos/productos/organizador.webp" class="col-12 img-modal justify-self-center">
    <p class="col-12">* Venta al por mayor a partir de 20 piezas</p>
    <p class="col-12"><b>Sugerencias de uso:</b></h5>
    <p class="col-12"><li>Apoya maceta / celular.</li></p>
    <p class="col-12"><li>Contenedor de artíuclos de librería y objetos pequeños.</li></p>
    <p class="col-12"><li>Sujeta llave, pañuelo o barbijo.</li></p>
</div>
<div class="p-3 col-12 col-lg-8 d-flex flex-wrap justify-content-center align-items-center">
<div class="d-flex flex-row col-12">
    <h2 class="f-reg align-self-center col-10 col-sm-11 p-sm-3 p-lg-0">${nombreProd9}</h2>
    <a href="#" class="modal__close justify-self-end col-2 col-sm-1 mc9"><b class="align-self-center">
    <span style="color:white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></span>
    </b></a>
</div>
<p class="p-sm-3 p-lg-0" align="justify">Objeto diseñado especificamente a partir de reducción de materiales, pero a su vez, con múltples usos.</p>
<img src="../assets/img/productos/productos/organizador.webp" class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex flex-wrap d-lg-none pb-4">
    <p class="col-12">* Venta al por mayor a partir de 20 piezas</p>
    <p class="col-12"><b>Sugerencias de uso:</b></h5>
    <p class="col-12"><li>Apoya maceta / celular.</li></p>
    <p class="col-12"><li>Contenedor de artíuclos de librería y objetos pequeños.</li></p>
    <p class="col-12"><li>Sujeta llave, pañuelo o barbijo.</li></p>
</div>

<div class="text-center col-11"> 
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
        <h2 class="f-reg">Menor <b id="valMen9">$790</b></h2>
        <h2 class="f-reg">Mayor <b id="valMay9">$550</b></h2>
    </div>

    <div class="mas-men p-1 p-lg-2">
        <button class="btn btn-modal" onclick="Substract9()">-</button>
        <button class="btn btn-modal-l" id="num9">${counter9}</button>
        <button class="btn btn-modal" onclick="Add9()">+</button>
    </div>

    <div id="error9" class="d-none justify-content-center col-12">
        <h4  class="col-12" style="color:red"><b>datos invalidos o incompletos</b></h3>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp9()"> Quiero Comprar</button>
</div>
</div>
</div>
</section>
`

const openModal9 = document.getElementById('openModal9');
const modal9 = document.querySelector('.m9');
const closeModal9 = document.querySelector('.mc9');
const num9= document.getElementById("num9")
openModal9.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal9.classList.add('modal--show');
});

closeModal9.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal9.classList.remove('modal--show');
});

function Add9(){
    counter9++;
    num9.innerHTML=`${counter9}`
    console.log(counter9)
}
function Substract9(){
    if (counter9 >  0 ){

        counter9--;
        num9.innerHTML=`${counter9}`
    }
    else{
        counter9=0;
    }
}

// WHATSAPP

function Wpp9(){
    if(counter9 !== 0) {
        const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter9}%20unidades%20de%20${nombreProd9} `;
        window.open(URL, "_blank");
        document.getElementById('error9').classList.add("d-none");
        document.getElementById('error9').classList.remove("d-flex"); 
        } else { document.getElementById('error9').classList.remove("d-none");
                 document.getElementById('error9').classList.add("d-flex");
    }
}

// > y <