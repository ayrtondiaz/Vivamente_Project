
let counter1=0;
let tamaño1=undefined;
let valorMenor1 = "$ - "
let valorMayor1 = "$ - "
const nombreProd1="Maceta de Yerba"
const contenedorModal= document.getElementById('contenedor-modal1')
contenedorModal.innerHTML=`
<section class="modal m1" >
<div class="modal__container">
<div class="col-lg-4 pl-lg-5 p-lg-4 justify-content-center">
    <img src="../assets/img/productos/productos/maceta yerba.webp" class="d-none d-lg-flex col-12 img-modal">
    <p class="d-none d-lg-flex">* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="p-3 col-12 col-lg-8 d-flex flex-wrap justify-content-center align-items-center">
<div class="d-flex flex-row col-12">
    <h2 class="f-reg align-self-center col-10 col-sm-11 p-sm-3 p-lg-0">Maceta de Yerba</h2>
    <a href="#" class="modal__close justify-self-end col-2 col-sm-1"><b class="align-self-center">Cerrar</b></a>
</div>
<p class="p-sm-3 p-lg-0" align="justify">Macetas de yerba reciclada, ecologias y biodegradables. Ideales para utilizar tanto en el interior com en el exterior</p>
<img src="../assets/img/productos/productos/maceta yerba.webp" class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex d-lg-none justify-content-center">
<p class="col-12 col-sm-6">* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="btn-category pb-2 p-0 col-11 d-flex flex-wrap justify-content-evenly">
    <button class="btn btn-light col-5 m-1" onclick="ChangeSize1('chico')">Chico</button>
    <button class="btn btn-light col-5 m-1" onclick="ChangeSize1('mediano')">Mediano</button>
    <button class="btn btn-light col-5 m-1" onclick="ChangeSize1('grande')">Grande</button>
    <button class="btn btn-light col-5 m-1" onclick="ChangeSize1('extragrande')">Extragrande</button>
</div>
<div class="text-center col-11"> 
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
        <h2 class="f-reg">Menor <b id="valMen1">${valorMenor1}</b></h2>
        <h2 class="f-reg">Mayor <b id="valMay1">${valorMayor1}</b></h2>
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
             break;

        case 'mediano':
            valorMenor1 = "$380";
            valorMayor1 = "$270";
            valMay1.innerHTML = `${valorMayor1}`;
            valMen1.innerHTML = `${valorMenor1}`;
            break;

        case 'grande':
            valorMenor1 = "$620";
            valorMayor1 = "$430";
            valMay1.innerHTML = `${valorMayor1}`;
            valMen1.innerHTML = `${valorMenor1}`;
            break;

        case 'extragrande':
            valorMenor1 = "$1200";
            valorMayor1 = "$840";
            valMay1.innerHTML = `${valorMayor1}`;
            valMen1.innerHTML = `${valorMenor1}`;
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
    const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter1}%20unidades%20de%20${nombreProd1}%20de%20tamaño%20${tamaño1}`;
    window.open(URL, "_blank");
}1