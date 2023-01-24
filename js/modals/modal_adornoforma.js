let counter5=0;
let forma5 = undefined;
const nombreProd5="Adorno con forma"
const contenedorModal5= document.getElementById('contenedor-modal5')
contenedorModal5.innerHTML=`

<section class="modal m5" >
<div class="modal__container">
<div class="col-lg-5 p-lg-4 d-flex flex-row-reverse flex-wrap text-left">
    <img src="../assets/img/productos/productos/adornos.webp" class="d-none d-lg-inline-flex p-2 pt-0 col-11 img-modal mt-5">
    <p class="d-none d-lg-flex font-italic disclaimer col-11 p-2"><em>* Venta al por mayor a partir de 20 piezas</em></p>
</div>
<div class="p-3 col-12 col-lg-7 d-flex flex-wrap align-items-center">
<div class="d-flex flex-row justify-self-end col-12">
    <h2 class="f-reg align-self-center col-10 col-sm-11 p-sm-3 p-lg-0 pt-lg-5"><b>Adorno con forma</b></h2>
    <a href="#" class="modal__close mc5 justify-self-end col-2 col-sm-1"><b class="align-self-center">
    <span style="color:white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></span>
    </b></a>
</div>
<p class="p-sm-3 p-lg-0 col-10 " align="justify">Formas diversas y simples para decorar tu espacio. Realizadas a partir de yerba mate reciclada. Producto 100% artesanales.</p>
<img src="../assets/img/productos/productos/adornos.webp" class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex d-lg-none justify-content-center">
    <p class="col-12"><em>* Venta al por mayor a partir de 20 piezas</em></p>
</div>
<div class="btn-category pb-1 p-0 col-12 cl-lg-12 d-flex d-lg-inline-block flex-wrap d-justify-evenly">
    <button class="btn btn-light btn_opc col-5 first_button" id="circulo5" onclick="ChangeForm5('circulo')">Circulo</button>
    <button class="btn btn-light btn_opc col-5 d-inline-block m-lg-2 m-1" id="corazon5" onclick="ChangeForm5('corazon')">Corazon</button>
    <button class="btn btn-light btn_opc col-5 d-inline-block m-lg-2 m-1" id="estrella5" onclick="ChangeForm5('estrella')">Estrella</button>
</div>

<div class="text-center col-11 my-3"> 
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
        <h2 class="f-reg">Menor <b>$ 100</b></h2>
        <h2 class="f-reg">Mayor <b>$ 70</b></h2>
    </div>
    <div class="mas-men p-1 p-lg-2 pt-lg-3 pb-lg-5">
    <button class="btn btn-modal" onclick="Substract5()">-</button>
    <button class="btn btn-modal-l" id="num5">${counter5}</button>
    <button class="btn btn-modal" onclick="Add5()">+</button>
    </div>
    <div id="error5" class="d-none justify-content-center col-12">
        <p  class="col-12" style="color:red"><b>datos invalidos o incompletos</b></p>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp5()"> Quiero Comprar</button>
</div>
</div>
</div>
</section>
`

openModal5 = document.getElementById('openModal5');
modal5 = document.querySelector('.m5');
closeModal5 = document.querySelector('.mc5');
num5= document.getElementById("num5")
openModal5.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal5.classList.add('modal--show');
});

closeModal5.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal5.classList.remove('modal--show');
});

function ChangeForm5(form) {
    forma5 = form;
    console.log(form)
    switch(form) {
        case 'circulo':
            document.getElementById('circulo5').classList.add('pressedButton');
            document.getElementById('corazon5').classList.remove('pressedButton');
            document.getElementById('estrella5').classList.remove('pressedButton');
            break;

        case 'corazon':
            document.getElementById('circulo5').classList.remove('pressedButton');
            document.getElementById('corazon5').classList.add('pressedButton');
            document.getElementById('estrella5').classList.remove('pressedButton');
            break;
        
        case 'estrella':
            document.getElementById('circulo5').classList.remove('pressedButton');
            document.getElementById('corazon5').classList.remove('pressedButton');
            document.getElementById('estrella5').classList.add('pressedButton');
            break;
    }
    
}

function Add5(){
    counter5++;
    num5.innerHTML=`${counter5}`
    console.log(counter5)
}
function Substract5(){
    if (counter5 >  0 ){

        counter5--;
        num5.innerHTML=`${counter5}`
    }
    else{
        counter5=0;
    }
}

// WHATSAPP

function Wpp5(){
    if(counter5 !== 0 && forma5 !== undefined) {
        const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter5}%20unidades%20de%20${nombreProd5}%20de%20${forma5} `;
        window.open(URL, "_blank");
        document.getElementById('error5').classList.add("d-none");
        document.getElementById('error5').classList.remove("d-flex"); 
    } else { document.getElementById('error5').classList.remove("d-none");
             document.getElementById('error5').classList.add("d-flex"); 
            }
}


// > y <s

// > y <