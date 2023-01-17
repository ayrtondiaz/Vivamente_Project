
let counter8 = 0;
let tamaño8 = undefined;
let valorMayor8 = "$ - "
let valorMenor8 = "$ - "
const nombreProd8="Vela en frasco"
const contenedorModal8= document.getElementById('contenedor-modal8')
contenedorModal8.innerHTML=`
<section class="modal m8" >
<div class="modal__container">
<div class="col-lg-4 pl-lg-5 p-lg-4 justify-content-center">
    <img src="../assets/img/productos/productos/vela.webp" class="d-none d-lg-flex col-12 img-modal">
    <p class="d-none d-lg-flex">* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="p-3 col-12 col-lg-8 d-flex flex-wrap justify-content-center align-items-center">
<div class="d-flex flex-row col-12">
    <h2 class="f-reg align-self-center col-10 col-sm-11 p-sm-3 p-lg-0">${nombreProd8}</h2>
    <a href="#" class="modal__close mc8 justify-self-end col-2 col-sm-1"><b class="align-self-center">
    <span style="color:white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></span>
    </b></a>
</div>
<p class="p-sm-3 p-lg-0" align="justify">Velas a base de cera de soja, con menor impacto ambiental que las convencionales, realizadas en frascos de vidrios reutilizados.</p>
<img src="../assets/img/productos/productos/vela.webp" class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex d-lg-none justify-content-center">
<p class="col-12 col-sm-6">* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="btn-category pb-2 p-0 col-11 d-flex flex-wrap justify-content-evenly">
    <button class="btn btn-light col-5 m-1" id="180" onclick="ChangeSize8('180cc')">180 cc</button>
    <button class="btn btn-light col-5 m-1" id="400" onclick="ChangeSize8('400cc')">400 cc</button>
</div>
<div class="text-center col-11"> 
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
        <h2 class="f-reg">Menor <b id="valMen8">${valorMenor8}</b></h2>
        <h2 class="f-reg">Mayor <b id="valMay8">${valorMayor8}</b></h2>
    </div>
    <div class="mas-men p-1 p-lg-2">
    <button class="btn btn-modal" onclick="Substract8()">-</button>
    <button class="btn btn-modal-l" id="num8">${counter8}</button>
    <button class="btn btn-modal" onclick="Add8()">+</button>
    </div>
    <div id="error8" class="d-none justify-content-center col-12">
        <h4  class="col-12" style="color:red"><b>datos invalidos o incompletos</b></h3>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp8()"> Quiero Comprar</button>
</div>
</div>
</div>
</section>
`

const openModal8 = document.getElementById('openModal8');
const modal8 = document.querySelector('.m8');
const closeModal8 = document.querySelector('.mc8');
const num8= document.getElementById("num8")
openModal8.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal8.classList.add('modal--show');
});

closeModal8.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal8.classList.remove('modal--show');
});

function Add8(){
    counter8++;
    num8.innerHTML=`${counter8}`
    console.log(counter8)
}
function Substract8(){
    if (counter8 >  0 ){

        counter8--;
        num8.innerHTML=`${counter8}`
    }
    else{
        counter8=0;
    }
}

function ChangeSize8(size) {
    tamaño8 = size;

    if(tamaño8==='180cc') {
        document.getElementById('180').classList.add('pressedButton');
        document.getElementById('400').classList.remove('pressedButton');
        valorMenor8 = "$500";
        valorMayor8 = "$350";
        valMay8.innerHTML = `${valorMayor8}`;
        valMen8.innerHTML = `${valorMenor8}`;
    }
    else {document.getElementById('400').classList.add('pressedButton');
          document.getElementById('180').classList.remove('pressedButton');
          valorMenor8 = "$800";
          valorMayor8 = "$560";
          valMay8.innerHTML = `${valorMayor8}`;
          valMen8.innerHTML = `${valorMenor8}`;
        }
}

// WHATSAPP

function Wpp8(){
    if(tamaño8 !== undefined && counter8!== 0) {
        const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter8}%20unidades%20de%20${nombreProd8} `;
        window.open(URL, "_blank");
        document.getElementById('error8').classList.add("d-none");
        document.getElementById('error8').classList.remove("d-flex"); 
    } else { document.getElementById('error8').classList.remove("d-none");
             document.getElementById('error8').classList.add("d-flex"); 
    }
}

// > y <