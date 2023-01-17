
let counter4 =0;
let tamaño4 = undefined;
let valorMenor4 = "$ - "
let valorMayor4 = "$ - "
let foco4 = undefined;
const nombreProd4="Lampara de Sal"
const contenedorModal4= document.getElementById('contenedor-modal4')
contenedorModal4.innerHTML=`
<section class="modal m4" >
<div class="modal__container">
<div class="col-lg-4 pl-lg-5 p-lg-4 justify-content-center">
    <img src="../assets/img/productos/productos/lampara.webp" class="d-none d-lg-flex col-12 img-modal">
    <p class="d-none d-lg-flex">* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="p-3 col-12 col-lg-8 d-flex flex-wrap justify-content-center align-items-center">
<div class="d-flex flex-row col-12">
    <h2 class="f-reg align-self-center col-10 col-sm-11 p-sm-3 p-lg-0">Lámpara decorativa</h2>
    <a href="#" class="modal__close mc4 justify-self-end col-2 col-sm-1"><b class="align-self-center">
    <span style="color:white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></span>
    </b></a>
</div>
<p class="p-sm-3 p-lg-0" align="justify">Lámparas de yerba mate reciclada,ideales para ambientar tu espacio favorito de recreaciòn o estudio.</p>
<img src="../assets/img/productos/productos/lampara.webp" class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex d-lg-none justify-content-center">
<p class="col-12 col-sm-6">* Venta al por mayor a partir de 20 piezas</p>
</div>

<div id="focos" class="btn-category pb-2 p-0 col-11 d-flex flex-wrap justify-content-evenly">
    <button class="btn btn-light col-5 m-1" id="mediano4" onclick="ChangeSize4('mediano'), getPrice4()">Mediano</button>
    <button class="btn btn-light col-5 m-1" id="grande4" onclick="ChangeSize4('grande'), getPrice4()">Grande</button>
</div>

<div id="focos" class="btn-category pb-2 p-0 col-11 d-flex flex-wrap justify-content-evenly">
    <button class="btn btn-light col-5 m-1" id="LED" onclick="ChangeFoco4('LED'), getPrice4()">Foco LED</button>
    <button class="btn btn-light col-5 m-1" id="foco_deco" onclick="ChangeFoco4('deco'), getPrice4()">Foco Deco</button>
</div>

<div class="text-center col-11"> 
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
        <h2 class="f-reg">Menor <b id="valMen4">${valorMenor4}</b></h2>
        <h2 class="f-reg">Mayor <b id="valMay4">${valorMayor4}</b></h2>
    </div>
    <div class="mas-men p-1 p-lg-2">
    <button class="btn btn-modal" onclick="Substract4()">-</button>
    <button class="btn btn-modal-l" id="num4">${counter4}</button>
    <button class="btn btn-modal" onclick="Add4()">+</button>
    </div>
    <div id="error4" class="d-none justify-content-center col-12">
        <h4  class="col-12" style="color:red"><b>datos invalidos o incompletos</b></h3>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp4()"> Quiero Comprar</button>
</div>
</div>
</div>
</section>
`

const openModal4 = document.getElementById('openModal4');
const modal4 = document.querySelector('.m4');
const closeModal4 = document.querySelector('.mc4');
const num4= document.getElementById("num4")

openModal4.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal4.classList.add('modal--show');
});

closeModal4.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal4.classList.remove('modal--show');
});

function Add4(){
    counter4++;
    num4.innerHTML=`${counter4}`
    console.log(counter4)
}

function Substract4(){
    if (counter4 >  0 ){

        counter4--;
        num4.innerHTML=`${counter4}`
    }
    else{
        counter4=0;
    }
}

function ChangeSize4(size) {
    tamaño4 = size;4    
    if(tamaño4==='mediano') {
        document.getElementById('mediano4').classList.add('pressedButton');
        document.getElementById('grande4').classList.remove('pressedButton');
    }
    else {document.getElementById('grande4').classList.add('pressedButton');
          document.getElementById('mediano4').classList.remove('pressedButton');}
}

function ChangeFoco4(foco) {
    foco4 = foco;

    if(foco4==='LED') {
        document.getElementById('LED').classList.add('pressedButton');
        document.getElementById('foco_deco').classList.remove('pressedButton');
    }
    else {document.getElementById('foco_deco').classList.add('pressedButton');
          document.getElementById('LED').classList.remove('pressedButton');}
}

function getPrice4() {
    switch (true) {
        case (tamaño4 === 'mediano' && foco4 === 'LED'):
            console.log(tamaño4 + foco4);
            valorMenor4 = "$2200";
            valorMayor4 = "$900";
            valMay4.innerHTML = `${valorMayor4}`;
            valMen4.innerHTML = `${valorMenor4}`;
            break;

        case (tamaño4 === 'grande' && foco4 === 'LED'):
            valorMenor4 = "$2800";
            valorMayor4 = "$1900";
            valMay4.innerHTML = `${valorMayor4}`;
            valMen4.innerHTML = `${valorMenor4}`;
            break;

        case (tamaño4 === 'mediano' && foco4 === 'deco'):
            valorMenor4 = "$2800";
            valorMayor4 = "$1900";
            valMay4.innerHTML = `${valorMayor4}`;
            valMen4.innerHTML = `${valorMenor4}`;
            break;
        
        case (tamaño4 === 'grande' && foco4 === 'deco'):
            valorMenor4 = "$3500";
            valorMayor4 = "$2500";
            valMay4.innerHTML = `${valorMayor4}`;
            valMen4.innerHTML = `${valorMenor4}`;
            break;
        
        default:
            valorMenor4 = "$ -";
            valorMayor4 = "$ - ";
            valMay4.innerHTML = `${valorMayor4}`;
            valMen4.innerHTML = `${valorMenor4}`;
            break;
    }

}

// WHATSAPP

function Wpp4(){
    if(tamaño4 !== undefined && foco4 !== undefined && counter4 !== 0) {
        const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter4}%20unidades%20de%20${nombreProd4}%20con%20foco%20${foco4} `;
        window.open(URL, "_blank");
        document.getElementById('error4').classList.add("d-none");
        document.getElementById('error4').classList.remove("d-flex"); 
    } else { document.getElementById('error4').classList.remove("d-none");
             document.getElementById('error4').classList.add("d-flex"); 
    }
}

// > y <