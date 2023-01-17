let counter2 = 0;
const nombreProd2="Porta Sahumerios"
const contenedorModal2= document.getElementById('contenedor-modal2')
contenedorModal2.innerHTML=`
<section class="modal m2" >
<div class="modal__container">
<div class="col-lg-4 pl-lg-5 p-lg-4 justify-content-center">
    <img src="../assets/img/productos/productos/portasahumerio.webp" class="d-none d-lg-flex col-12 img-modal">
    <p class="d-none d-lg-flex">* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="p-3 col-12 col-lg-8 d-flex flex-wrap justify-content-center align-items-center">
<div class="d-flex flex-row col-12">
    <h2 class="f-reg align-self-center col-10 col-sm-11 p-sm-3 p-lg-0">Porta Sahumerio</h2>
    <a href="#" class="modal__close mc2 justify-self-end col-2 col-sm-1"><b class="align-self-center">
    <span style="color:white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></span></b></a>
</div>
<p class="p-sm-3 p-lg-0" align="justify">Portasahumerios realizado con yerba mate reciclada. Su diseño alargado permite que las cenizas queden sobre el objeto</p>
<img src="../assets/img/productos/productos/portasahumerio.webp" class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex d-lg-none justify-content-center">
<p class="col-12 col-sm-6">* Venta al por mayor a partir de 20 piezas</p>
</div>

<div class="text-center col-11"> 
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
    <h2 class="f-reg">Menor <b>$ 350</b></h2>
    <h2 class="f-reg">Mayor <b>$ 250</b></h2>
    </div>
    <div class="mas-men p-3">
    <button class="btn btn-modal" onclick="Substract2()">-</button>
    <button class="btn btn-modal-l" id="num2">${counter2}</button>
    <button class="btn btn-modal" onclick="Add2()">+</button>
    </div>
    <div id="error2" class="d-none justify-content-center col-12">
        <h4  class="col-12" style="color:red"><b>cantidad invalida</b></h3>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp2()"> Quiero Comprar</button>
</div>
</div>
</div>
</section>
`


const openModal2 = document.getElementById('openModal2');
const modal2 = document.querySelector('.m2');
const closeModal2 = document.querySelector('.mc2');
num2= document.getElementById("num2")

openModal2.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal2.classList.add('modal--show');
});

closeModal2.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal2.classList.remove('modal--show');
});

function Add2(){
    counter2++;
    num2.innerHTML=`${counter2}`
}
function Substract2(){
    if (counter2 >  0 ){

        counter2--;
        num2.innerHTML=`${counter2}`
    }
    else{
        counter2=0;
    }
}

// WHATSAPP

function Wpp2(){
    if(counter2 !== 0) {
        const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter2}%20unidades%20de%20${nombreProd2}`;
        window.open(URL, "_blank");
        document.getElementById('error2').classList.add("d-none");
        document.getElementById('error2').classList.remove("d-flex"); 
    } else { document.getElementById('error2').classList.remove("d-none");
             document.getElementById('error2').classList.add("d-flex"); 
            }
}


// > y <

