
let counter1=0;
let tamaño1=undefined;
let valorMenor1 = "$ - "
let valorMayor1 = "$ - "
const nombreProd1="Maceta de Yerba"
const contenedorModal= document.getElementById('contenedor-modal1')
contenedorModal.innerHTML=`
<section class="modal m1" >
<div class="modal__container">
<div class="col-lg-5 p-lg-4 d-flex flex-row-reverse flex-wrap text-left">
    <img src="../assets/img/productos/productos/maceta.webp" class="d-none d-lg-inline-flex p-2 pt-0 col-11 img-modal mt-5">
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
<p class="p-sm-3 p-lg-0 col-10 " align="justify">Macetas de yerba reciclada, ecológicas y biodegradables. Ideales para utilizar tanto en el interior como en el exterior.</p>
<img src="../assets/img/productos/productos/maceta.webp" class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex d-lg-none justify-content-center">
<p class="col-12"><em>* Venta al por mayor a partir de 20 piezas</em></p>
</div>
<div class="btn-category pb-1 p-0 col-12 cl-lg-12 d-flex d-lg-inline-block flex-wrap d-justify-evenly">
    <button class="btn btn-light btn_opc col-5 first_button" id="chico1" onclick="ChangeSize1('chico')">Chica</button>
    <button class="btn btn-light btn_opc col-5 d-inline-block m-lg-2 m-1" id="mediano1" onclick="ChangeSize1('mediano')">Mediana</button>
    <button class="btn btn-light btn_opc col-5 d-inline-block m-lg-2 m-1" id="grande1" onclick="ChangeSize1('grande')">Grande</button>
    <button class="btn btn-light btn_opc col-5 d-inline-block m-lg-2 m-1" id="extragrande1"onclick="ChangeSize1('extragrande')">Extragrande</button>
</div>
<div class="text-center col-11 my-3"> 
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
        <h3 class="f-reg">Menor <b id="valMen1">${valorMenor1}</b></h2>
        <h3 class="f-reg">Mayor <b id="valMay1">${valorMayor1}</b></h2>
    </div>
    <div class="mas-men p-1 p-lg-2 pt-lg-3 pb-lg-5">
    <button class="btn btn-modal" onclick="Substract1()">-</button>
    <button class="btn-modal-l btn"id="num1">${counter1}</button>
    <button class="btn btn-modal" onclick="Add1()">+</button>
    </div>
    <div id="error1" class="d-none justify-content-center col-12">
        <h6  class="col-12" style="color:red"><b>datos invalidos o incompletos</b></h6>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp1()"> Quiero Comprar</button>
</div>
</div>
</div>
</section>
`


const openModal1 = document.getElementById('openModal1');
const modal1 = document.querySelector('.modal');
const closeModal1 = document.querySelector('.modal__close');
const num1= document.getElementById("num1")
let valMen1= document.getElementById("valMen1")
let valMay1= document.getElementById("valMay1")

openModal1.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal1.classList.add('modal--show');
});

closeModal1.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal1.classList.remove('modal--show');
});

function ChangeSize1(size) {
    tamaño1 = size;

    switch (size) {
        case 'chico':
            valorMenor1 = "$250";
            valorMayor1 = "$190";
            valMay1.innerHTML = `${valorMayor1}`;
            valMen1.innerHTML = `${valorMenor1}`;
            document.getElementById('chico1').classList.add('pressedButton');
            document.getElementById('mediano1').classList.remove('pressedButton');
            document.getElementById('grande1').classList.remove('pressedButton');
            document.getElementById('extragrande1').classList.remove('pressedButton');
            break;

        case 'mediano':
            valorMenor1 = "$380";
            valorMayor1 = "$270";
            valMay1.innerHTML = `${valorMayor1}`;
            valMen1.innerHTML = `${valorMenor1}`;
            document.getElementById('chico1').classList.remove('pressedButton');
            document.getElementById('mediano1').classList.add('pressedButton');
            document.getElementById('grande1').classList.remove('pressedButton');
            document.getElementById('extragrande1').classList.remove('pressedButton');
            break;

        case 'grande':
            valorMenor1 = "$620";
            valorMayor1 = "$430";
            valMay1.innerHTML = `${valorMayor1}`;
            valMen1.innerHTML = `${valorMenor1}`;
            document.getElementById('chico1').classList.remove('pressedButton');
            document.getElementById('mediano1').classList.remove('pressedButton');
            document.getElementById('grande1').classList.add('pressedButton');
            document.getElementById('extragrande1').classList.remove('pressedButton');
            break;

        case 'extragrande':
            valorMenor1 = "$1200";
            valorMayor1 = "$840";
            valMay1.innerHTML = `${valorMayor1}`;
            valMen1.innerHTML = `${valorMenor1}`;
            document.getElementById('chico1').classList.remove('pressedButton');
            document.getElementById('mediano1').classList.remove('pressedButton');
            document.getElementById('grande1').classList.remove('pressedButton');
            document.getElementById('extragrande1').classList.add('pressedButton');
            break;
    }
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
    if(counter1 !== 0 && tamaño1 !== undefined){
        const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter1}%20unidades%20de%20${nombreProd1}%20de%20tamaño%20${tamaño1}`;
        window.open(URL, "_blank");
        document.getElementById('error1').classList.add("d-none");
        document.getElementById('error1').classList.remove("d-flex"); 
    } else { document.getElementById('error1').classList.remove("d-none");
             document.getElementById('error1').classList.add("d-flex"); 
}
}