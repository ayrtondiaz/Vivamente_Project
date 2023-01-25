// MODAL
const modal1= document.getElementById('modal1')

let counter1=0;
let tamaño1=undefined;
const nombreProd1="Maceta de Yerba"
const contenedorModal= document.getElementById('contenedor-modal1')
modal1.innerHTML +=    
`
<section class="modal mA" >
<div class="modal__container">
<div class="col-lg-5 p-lg-4 d-flex flex-row-reverse flex-wrap text-left">
    <img src="assets/img/productos/productos/maceta.webp" class="d-none d-lg-inline-flex p-2 pt-0 col-11 img-modal mt-5">
    <p class="d-none d-lg-flex font-italic disclaimer col-11 p-2"><em>* Venta al por mayor a partir de 20 piezas</em></p>
</div>
<div class="p-3 col-12 col-lg-7 d-flex flex-wrap align-items-center">
<div class="d-flex flex-row justify-self-end col-12">
    <h2 class="f-reg align-self-center col-10 col-sm-11 p-sm-3 p-lg-0 pt-lg-5"><b>Maceta de Yerba</b></h2>
    <a href="#" class="modal__close justify-self-end col-2 col-sm-1"><b class="align-self-center">
    <span style="color:white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></span>
    </b></a>
</div>
<p class="p-sm-3 p-lg-0" align="justify">Macetas de yerba reciclada, ecologias y biodegradables. Ideales para utilizar tanto en el interior com en el exterior</p>
<img src="assets/img/productos/productos/maceta yerba.webp" class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex d-lg-none justify-content-center">
<p class="col-12 col-sm-6">* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="text-center col-11"> 
    <div class="btn-category pb-2 p-0 col-11 d-flex flex-wrap justify-content-evenly">
        <button class="btn btn-light col-5 m-1" onclick="ChangeSize1('chico')">Chico</button>
        <button class="btn btn-light col-5 m-1" onclick="ChangeSize1('mediano')">Mediano</button>
        <button class="btn btn-light col-5 m-1" onclick="ChangeSize1('grande')">Grande</button>
        <button class="btn btn-light col-5 m-1" onclick="ChangeSize1('extragrande')">Extragrande</button>
    </div>
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
        <h2 class="f-reg">Menor <b>$320</b></h2>
        <h2 class="f-reg">Mayor <b>$230</b></h2>
    </div>
    <div class="mas-men p-1 p-lg-2">
        <button class="btn btn-modal" onclick="Substract1()">-</button>
        <button class="btn btn-modal-l" id="num1">${counter1}</button>
        <button class="btn btn-modal" onclick="Add1()">+</button>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp1()"> Quiero Comprar</button>
</div>
</div>
</div>
</section>

`

function ChangeSize1(size) {
    tamaño1 = size;
}

function Add1(){
    counter1++;
    num1.innerHTML=`${counter1}`
}

function Substract1(){
    if (counter1 >  0 ){
        counter1--;
        num1.innerHTML=`${counter1}`;
    }
    else{
        counter1=0;
    }
}

// WHATSAPP

function Wpp1(){
    const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter1}%20unidades%20de%20${nombreProd1}%20de%20tamaño%20${tamaño1}`;
    window.open(URL, "_blank");
}



