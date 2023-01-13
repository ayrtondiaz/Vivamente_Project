let counter3 = 0;
let type3 = undefined;
let tamaño3 = undefined;
let foco3 = undefined;
let valorMenor3 = "$ - "
let valorMayor3 = "$ - "
const nombreProd3="Lampara de Sal"
const contenedorModal3= document.getElementById('contenedor-modal3')

contenedorModal3.innerHTML=`
<section class="modal m3" >
<div class="modal__container">
<div class="col-lg-4 pl-lg-5 p-lg-4 justify-content-center">
<img src="../assets/img/productos/productos/lampara de sal.webp" class="d-none d-lg-flex col-12 img-modal">
<p class="d-none d-lg-flex">* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="p-3 col-12 col-lg-8 d-flex flex-wrap justify-content-center align-items-center">
<div class="d-flex flex-row col-12">
    <h2 class="f-reg align-self-center col-10 col-sm-11 p-sm-3 p-lg-0">Lampara de Sal</h2>
    <a href="#" class="modal__close mc3 justify-self-end col-2 col-sm-1"><b class="align-self-center">Cerrar</b></a>
</div>
<p class="p-sm-3 p-lg-0" align="justify">Portasahumerios realizado con yerba mate reciclada. Su diseño alargado permite que las cenizas queden sobre el objeto</p>
<img src="../assets/img/productos/productos/lampara de sal.webp" class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex d-lg-none justify-content-center">
<p class="col-12 col-sm-6">* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="btn-category pb-2 p-0 col-11 d-flex flex-wrap justify-content-evenly">
    <button class="btn btn-light col-5 m-1" onclick="ChangeType3('sal'), getPrice3()">Lampara de sal</button>
    <button class="btn btn-light col-5 m-1" onclick="ChangeType3('deco'), getPrice3()">Lampara decorativa</button>
</div>
<div class="btn-category pb-2 p-0 col-11 d-flex flex-wrap justify-content-evenly">
    <button class="btn btn-light col-5 m-1" onclick="ChangeSize3('mediano'), getPrice3()">Mediano</button>
    <button class="btn btn-light col-5 m-1" onclick="ChangeSize3('grande'), getPrice3()">Grande</button>
</div>

<div id="focos" class="btn-category pb-2 p-0 col-11 d-none flex-wrap justify-content-evenly">
    <button class="btn btn-light col-5 m-1" onclick="ChangeFoco3('LED'), getPrice3()">Foco LED</button>
    <button class="btn btn-light col-5 m-1" onclick="ChangeFoco3('deco'), getPrice3()">Foco Deco</button>
</div>

<div class="text-center col-11"> 
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
        <h2 class="f-reg">Menor <b id="valMen3">${valorMenor3}</b></h2>
        <h2 class="f-reg">Mayor <b id="valMay3">${valorMayor3}</b></h2>
    </div>
    <div class="mas-men p-1 p-lg-2">
    <button class="btn btn-modal" onclick="Substract3()">-</button>
    <button class="btn btn-modal-l" id="num3">${counter3}</button>
    <button class="btn btn-modal" onclick="Add3()">+</button>
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

function ChangeFoco3(foco) {
    foco3 = foco;
}

function ChangeType3(type) {
    type3 = type;

    if(type === 'deco') {
        document.getElementById("focos").classList.remove('d-none');
        document.getElementById("focos").classList.add('d-flex');
        console.log("d-none eliminado")
    }
    else {
        document.getElementById("focos").classList.add('d-none');
        document.getElementById("focos").classList.add('d-flex');
        foco3 = undefined;
    }
}

function ChangeSize3(size) {
    tamaño3 = size;
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
    console.log(type3)
    console.log(tamaño3)
    console.log(foco3)
    
    switch (true) {
        case (type3 === 'sal' && tamaño3 === 'mediano' && foco3 === undefined):
            valorMenor3 = "$2200";
            valorMayor3 = "$1500";
            valMay3.innerHTML = `${valorMayor3}`;
            valMen3.innerHTML = `${valorMenor3}`;
            break;

        case (type3 === 'sal' && tamaño3 === 'grande' && foco3 === undefined):
            valorMenor3 = "$2800";
            valorMayor3 = "$1900";
            valMay3.innerHTML = `${valorMayor3}`;
            valMen3.innerHTML = `${valorMenor3}`;
            break;

            case (type3 === 'deco' && tamaño3 === 'mediano' && foco3 === 'LED'):
                valorMenor3 = "$2200";
                valorMayor3 = "$900";
                valMay3.innerHTML = `${valorMayor3}`;
                valMen3.innerHTML = `${valorMenor3}`;
                break;

            case (type3 === 'deco' && tamaño3 === 'mediano' && foco3 === 'deco'):
                valorMenor3 = "$2800";
                valorMayor3 = "$1900";
                valMay3.innerHTML = `${valorMayor3}`;
                valMen3.innerHTML = `${valorMenor3}`;
                break;

            case (type3 === 'deco' && tamaño3 === 'grande' && foco3 === 'LED'):
                valorMenor3 = "$2800";
                valorMayor3 = "$1900";
                valMay3.innerHTML = `${valorMayor3}`;
                valMen3.innerHTML = `${valorMenor3}`;
                break;

            case (type3 === 'deco' && tamaño3 === 'grande' && foco3 === 'deco'):
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
    if(foco3===undefined) {
        const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter3}%20unidades%20de%20${nombreProd3}%20de%20tamaño%20${tamaño3}`;
        window.open(URL, "_blank");
    }
    else {
        const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter3}%20unidades%20de%20${nombreProd3}%20de%20tamaño%20${tamaño3}%20y%20con%20foco%20${foco3}`;
        window.open(URL, "_blank");
    }
}

// > y <