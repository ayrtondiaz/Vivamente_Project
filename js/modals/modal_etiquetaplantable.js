
let valor7 = " $ - "
let type7 = undefined;
let quantity7 = undefined;

const nombreProd7="Etiqueta plantable"
const contenedorModal7= document.getElementById('contenedor-modal7')
contenedorModal7.innerHTML=`
<section class="modal m7" >
<div class="modal__container">
<div class="col-lg-5 p-lg-4 d-flex flex-row-reverse flex-wrap text-left">
    <img src="../assets/img/productos/productos/etiqueta.webp" class="d-none d-lg-inline-flex p-2 pt-0 col-11 img-modal mt-2">
    <p class="d-none d-lg-flex font-italic disclaimer col-11 p-2 py-0"><em>* Venta al por mayor a partir de 20 piezas</em></p>
    <p class=" d-none d-lg-flex col-11 p-0" style="font-size:10px;"><b>Especificaciones</b></p>
    <p class="d-none d-lg-flex col-11 p-0" style="font-size:10px;">-Se puede elegir el color de acuerdo al stock.</p>
    <p class="d-none d-lg-flex col-11 p-0" style="font-size:10px;">-Las semillas del papel son de Albahaca.</p>
    <p class="d-none d-lg-flex col-11 p-0" style="font-size:10px;">-El costo es por frente únicamente, ambos lados c/cotización personalizada.</p>
</div>
<div class="p-3 col-12 col-lg-7 d-flex flex-wrap align-items-center">
<div class="d-flex flex-row justify-self-end col-12">
    <h2 class="f-reg align-self-center col-10 col-sm-11 p-sm-3 p-lg-0"><b>${nombreProd7}</b></h2>
    <a href="#" class="modal__close justify-self-end col-2 col-sm-1 mc7"><b class="align-self-center">
    <span style="color:white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></span>
    </b></a>
</div>
<p class="p-sm-3 p-lg-0 col-10 " align="justify">Papel reciclado con semillas, 100% artesanal. Variedad de colores y especies</p>
<img src="../assets/img/productos/productos/etiqueta.webp"class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex  flex-wrap d-lg-none justify-content-center">
    <p class="col-12">* Venta al por mayor a partir de 20 piezas</p>
    <p class="col-12"><b>Especificaciones</b></p>
    <p class="col-12"><li>Se puede elegir el color de acuerdo al stock.</li></p>
    <p class="col-12"><li>Las semillas del papel son de Albahaca.</li></p>
    <p class="col-12"><li>El costo es por frente únicamente, ambos lados c/cotización personalizada.</li></h6>
</div>
<div class="btn-category pb-1 p-0 col-12 cl-lg-12 d-flex d-lg-inline-block flex-wrap d-justify-evenly">
    <button class="btn btn-light btn_opc col-5 first_button" style="width:40%;" id="logo" onclick="ChangeType7('logo'), getPrice7()">C/marca o logo</button>
    <button class="btn btn-light btn_opc col-5 first_button" style="width:40%;" id="frase" onclick="ChangeType7('frase personalizada'), getPrice7()">C/frase personalizada</button>
</div>

<div class="btn-category pb-1 p-0 col-12 cl-lg-12 d-flex d-lg-inline-block flex-wrap d-justify-evenly">
    <button class="btn btn-light btn_opc col-5 first_button" style="width:40%;" id="50" onclick="ChangeQuantity7('50'), getPrice7()">50 unidades</button>
    <button class="btn btn-light btn_opc col-5 first_button" style="width:40%;" id="100" onclick="ChangeQuantity7('100'), getPrice7()">100 unidades</button>
</div>
<div class="text-center col-11 my-3"> 
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
        <h2 class="f-reg p-3">Valor: <b id="val7">${valor7}</b></h2>
    </div>

    <div id="error7" class="d-none justify-content-center col-12">
        <p  class="col-12" style="color:red"><b>datos invalidos o incompletos</b></p>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp7()"> Quiero Comprar</button>
</div>
</div>
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

function ChangeType7(type){
    type7 = type;

    if(type7 === 'logo') {
        document.getElementById('logo').classList.add('pressedButton');
        document.getElementById('frase').classList.remove('pressedButton');
        }
        else {document.getElementById('frase').classList.add('pressedButton');
              document.getElementById('logo').classList.remove('pressedButton');
            }
}

function ChangeQuantity7(quantity){
    quantity7 = quantity;

    if(quantity === '50') {
        document.getElementById('50').classList.add('pressedButton');
        document.getElementById('100').classList.remove('pressedButton');
        }
        else {document.getElementById('100').classList.add('pressedButton');
              document.getElementById('50').classList.remove('pressedButton');
            }
}

function getPrice7() {
    switch (true) {
        case (quantity7 === '50' && type7 === 'logo'):
            valor7 = "$2200";
            val7.innerHTML = `${valor7}`;
            break;

        case (quantity7 === '100' && type7 === 'logo'):
            valor7 = "$3900";
            val7.innerHTML = `${valor7}`;
            break;

            case (quantity7 === '50' && type7 === 'frase personalizada'):
                valor7 = "$4900";
                val7.innerHTML = `${valor7}`;
                break;
    
            case (quantity7 === '100' && type7 === 'frase personalizada'):
                valor7 = "$9000";
                val7.innerHTML = `${valor7}`;
                break;
        
            default:
                valor7 = "$ - ";
                val7.innerHTML = `${valor7}`;
                break;
    }

}

// WHATSAPP

function Wpp7(){
    if(type7 !== undefined && quantity7 !== undefined) {
    const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${quantity7}%20unidades%20de%20${nombreProd7}%20con%20${type7} `;
    window.open(URL, "_blank");
    document.getElementById('error7').classList.add("d-none");
    document.getElementById('error7').classList.remove("d-flex"); 
    } else { document.getElementById('error7').classList.remove("d-none");
             document.getElementById('error7').classList.add("d-flex"); 
    }
}

// > y <