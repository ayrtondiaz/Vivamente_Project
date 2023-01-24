let counter3 = 0;
let tamaño3 = undefined;
let foco3 = undefined;
let valorMenor3 = "$ - "
let valorMayor3 = "$ - "
const nombreProd3="lampara de sal";
const contenedorModal3= document.getElementById('contenedor-modal3')

contenedorModal3.innerHTML=`
<section class="modal m3" >
<div class="modal__container">
<div class="col-lg-5 p-lg-4 d-flex flex-row-reverse flex-wrap text-left">
<img src="../assets/img/productos/productos/lamparadesal.webp" class="d-none d-lg-inline-flex p-2 pt-0 col-11 img-modal mt-5">
<p class="d-none d-lg-flex font-italic disclaimer col-11 p-2"><em>* Venta al por mayor a partir de 20 piezas</em></p>
</div>
<div class="p-3 col-12 col-lg-7 d-flex flex-wrap align-items-center">
<div class="d-flex flex-row justify-self-end col-12">
    <h2 class="f-reg align-self-center col-10 col-sm-11 p-sm-3 p-lg-0 pt-lg-5"><b>Lámpara de Sal</b></h2>
    <a href="#" class="modal__close mc3 justify-self-end col-2 col-sm-1"><b class="align-self-center">
    <span style="color:white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></span>
    </b></a>
</div>
<p class="p-sm-3 p-lg-0 col-10 " align="justify">Lámparas sustentables realizadas a partir de yerba mate reciclada y sal de Himalaya, ideal para decorar tu espacio de recreación.</p>
<img src="../assets/img/productos/productos/lamparadesal.webp" class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex d-lg-none justify-content-center">
<p class="col-12">* Venta al por mayor a partir de 20 piezas</p>
</div>

<div class="btn-category pb-1 p-0 col-12 cl-lg-12 d-flex d-lg-inline-block flex-wrap d-justify-evenly">
    <button class="btn btn-light btn_opc col-5 first_button" id="mediano3" onclick="ChangeSize3('mediano'), getPrice3()">Mediano</button>
    <button class="btn btn-light btn_opc col-5 d-inline-block m-lg-2 m-1" id="grande3" onclick="ChangeSize3('grande'), getPrice3()">Grande</button>
</div>

<div class="text-center col-11 my-3"> 
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
        <h2 class="f-reg">Menor <b id="valMen3">${valorMenor3}</b></h2>
        <h2 class="f-reg">Mayor <b id="valMay3">${valorMayor3}</b></h2>
    </div>    
    <div class="mas-men p-1 p-lg-2 pt-lg-3 pb-lg-5">
        <button class="btn btn-modal" onclick="Substract3()">-</button>
        <button class="btn btn-modal-l" id="num3">${counter3}</button>
        <button class="btn btn-modal" onclick="Add3()">+</button>
    </div>
    <div id="error3" class="d-none justify-content-center col-12">
        <p  class="col-12" style="color:red"><b>datos invalidos o incompletos</b></p>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp3()"> Quiero Comprar</button>
</div>
</div>
</div>
</section>
`


const openModal3= document.getElementById('openModal3');
const modal3= document.querySelector('.m3');
const closeModal3= document.querySelector('.mc3');
num3= document.getElementById("num3")

openModal3.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal3.classList.add('modal--show');
});

closeModal3.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal3.classList.remove('modal--show');
});


function ChangeSize3(size) {
    tamaño3 = size;
    
    if(tamaño3==='mediano') {
        document.getElementById('mediano3').classList.add('pressedButton');
        document.getElementById('grande3').classList.remove('pressedButton');
    }
    else {document.getElementById('grande3').classList.add('pressedButton');
          document.getElementById('mediano3').classList.remove('pressedButton');}
}

function Add3(){
    counter3++;
    num3.innerHTML=`${counter3}`
}
function Substract3(){
    if (counter3 >  0 ){

        counter3--;
        num3.innerHTML=`${counter3}`
    }
    else{
        counter3=0;
    }
}

function getPrice3() {
    
    switch (true) {
        case (tamaño3 === 'mediano'):
            valorMenor3 = "$2200";
            valorMayor3 = "$1500";
            valMay3.innerHTML = `${valorMayor3}`;
            valMen3.innerHTML = `${valorMenor3}`;
            break;

        case (tamaño3 === 'grande'):
            valorMenor3 = "$2800";
            valorMayor3 = "$1900";
            valMay3.innerHTML = `${valorMayor3}`;
            valMen3.innerHTML = `${valorMenor3}`;
            break;
        
        default:
            valorMenor1 = "$ -";
            valorMayor1 = "$ - ";
            valMay1.innerHTML = `${valorMayor1}`;
            valMen1.innerHTML = `${valorMenor1}`;
            break;
    }

}

// WHATSAPP

function Wpp3(){
    if(tamaño3 !== undefined && counter3 !== 0) {
        const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter3}%20unidades%20de%20${nombreProd3}%20de%20tamaño%20${tamaño3}`;
        window.open(URL, "_blank");
        document.getElementById('error3').classList.add("d-none");
        document.getElementById('error3').classList.remove("d-flex"); 
    } else { document.getElementById('error3').classList.remove("d-none");
             document.getElementById('error3').classList.add("d-flex"); 
            }
}

// > y <