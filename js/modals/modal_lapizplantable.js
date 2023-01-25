
let counter6 = 0;
let valorMenor6 = " $ - "
let valorMayor6 = " $ - "
let tipo6 = undefined;
const nombreProd6="Lápiz plantable"
const contenedorModal6= document.getElementById('contenedor-modal6')
contenedorModal6.innerHTML=`
<section class="modal m6" >
<div class="modal__container">
<div class="col-lg-5 p-lg-4 d-flex flex-row-reverse flex-wrap text-left">
    <img src="../assets/img/productos/productos/lapiz.webp" class="d-none d-lg-inline-flex p-2 pt-0 col-11 img-modal mt-2">
    <p class="d-none d-lg-flex font-italic disclaimer col-11 p-2 py-0"><em>* Venta al por mayor a partir de 20 piezas</em></p>
    <p class=" d-none d-lg-flex col-11 pb-0" style="font-size:10px;"><b>Personaliza tus lápices:</b></p>
    <p class="d-none d-lg-flex col-11 pb-0" style="font-size:10px;">- Forrado $170 (Se deben solicitar con 7 dias de anticipación)</p>
    <p class="d-none d-lg-flex col-11 pb-0" style="font-size:10px;">- Grabado $190 (Se deben solicitar con 15 dias de anticipación)></p>
    <p class="d-none d-lg-flex col-11 pb-0" style="font-size:10px;">- Con blisters/señalador $250 (Se deben solicitar con 7 dias de anticipación)</p>
</div>
<div class="p-3 col-12 col-lg-7 d-flex flex-wrap align-items-center">
<div class="d-flex flex-row justify-self-end col-12">
    <h2 class="f-reg align-self-center col-10 col-sm-11 p-sm-3 p-lg-0 pt-lg-5"><b>Lápiz plantable</b></h2>
    <a href="#" class="modal__close mc6 justify-self-end col-2 col-sm-1"><b class="align-self-center">
    <span style="color:white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></span>
    </b></a>
</div>
<p class="p-sm-3 p-lg-0 col-10 col-lg-11  " align="justify">Lápices de escribir, con grafito, realizado en madera natural o papel de diario. Contiene cápsula biodegradable con semillas.</p>
<img src="../assets/img/productos/productos/lapiz.webp" class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex  flex-wrap d-lg-none justify-content-center">
    <p class="col-12"><em>* Venta al por mayor a partir de 20 piezas</em></p>
    <p class="col-12"><b>Personaliza tus lápices:</b></h5>
    <p class="col-12">- Forrado $170 (Se deben solicitar con 7 dias de anticipación)</p>
    <p class="col-12">- Grabado $190 (Se deben solicitar con 15 dias de anticipación)</p>
    <p class="col-12">- Con blisters/señalador $250 (Se deben solicitar con 7 dias de anticipación)</p>
</div>
<div class="btn-category pb-1 p-0 col-12 cl-lg-12 d-flex d-lg-inline-block flex-wrap d-justify-evenly">
    <button class="btn btn-light btn_opc col-5 first_button" style="width:30%;" id="madera6" onclick="ChangeType6('madera natural')">Madera natural</button>
    <button class="btn btn-light btn_opc col-5 d-inline-block  m-lg-2" style="width:30%;" id="papel6" onclick="ChangeType6('papel de diario')">Papel diario</button>
</div>

<div class="text-center col-11 my-3"> 
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
        <h2 class="f-reg">Menor <b id="valMen6">${valorMenor6}</b></h2>
        <h2 class="f-reg">Mayor <b id="valMay6">${valorMayor6}</b></h2>
    </div>
    <div class="mas-men p-1 p-lg-2 pt-lg-3 pb-lg-5">
    <button class="btn btn-modal" onclick="Substract6()">-</button>
    <button class="btn-modal-l btn" id="num6">${counter6}</button>
    <button class="btn btn-modal" onclick="Add6()">+</button>
    </div>
    <div id="error6" class="d-none justify-content-center col-12">
        <hp class="col-12" style="color:red"><b>datos invalidos o incompletos</b></p>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp6()"> Quiero Comprar</button>
</div>
</div>
</div>
</section>
`

const openModal6 = document.getElementById('openModal6');
const modal6 = document.querySelector('.m6');
const closeModal6 = document.querySelector('.mc6');
const num6= document.getElementById("num6")
openModal6.addEventListener('click', (e)=>{
    e.preventDefault();
    modal6.classList.add('modal--show');
});

closeModal6.addEventListener('click', (e)=>{
    e.preventDefault();
    modal6.classList.remove('modal--show');
});

function Add6(){
    counter6++;
    num6.innerHTML=`${counter6}`
}
function Substract6(){
    if (counter6 >  0 ){

        counter6--;
        num6.innerHTML=`${counter6}`
    }
    else{
        counter6=0;
    }
}

function ChangeType6(tipo) {
    tipo6 = tipo;

    switch (tipo) {
        case 'madera natural':
            valorMenor6 = "$ 150";
            valorMayor6 = "$ 120";
            valMay6.innerHTML = `${valorMayor6}`;
            valMen6.innerHTML = `${valorMenor6}`;
            document.getElementById('madera6').classList.add('pressedButton');
            document.getElementById('papel6').classList.remove('pressedButton');
            break;

        case 'papel de diario':
            valorMenor6 = "$ 150";
            valorMayor6 = "$ -";
            valMay6.innerHTML = `${valorMayor6}`;
            valMen6.innerHTML = `${valorMenor6}`;
            document.getElementById('papel6').classList.add('pressedButton');
            document.getElementById('madera6').classList.remove('pressedButton');
            break;

       
    }
}

// WHATSAPP

function Wpp6(){
    if(counter6 !== 0 && tipo6 !== undefined){
        const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter6}%20unidades%20de%20${nombreProd6}%20hecho%20con%20${tipo6}`;
        window.open(URL, "_blank");
        document.getElementById('error6').classList.add("d-none");
        document.getElementById('error6').classList.remove("d-flex"); 
    } else { document.getElementById('error6').classList.remove("d-none");
             document.getElementById('error6').classList.add("d-flex"); 
            }
}


// > y <