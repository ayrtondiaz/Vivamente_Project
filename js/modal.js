// MODAL
const modal1= document.getElementById('modal1')

let counter1=0;
let tamaño1=undefined;
const nombreProd1="Maceta de Yerba"
const contenedorModal= document.getElementById('contenedor-modal1')
modal1.innerHTML +=    
`
<section class="modal m1" >
<div class="modal__container">
<div class="col-lg-4 pl-lg-5 p-lg-4 justify-content-center">
    <img src="assets/img/productos/productos/maceta yerba.webp" class="d-none d-lg-flex col-12 img-modal">
    <p class="d-none d-lg-flex">* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="p-3 col-12 col-lg-8 d-flex flex-wrap justify-content-center align-items-center">
<div class="d-flex flex-row col-12">
    <h2 class="f-reg align-self-center col-10 col-sm-11 p-sm-3 p-lg-0">Maceta de Yerba</h2>
    <a href="#" class="modal__close justify-self-end col-2 col-sm-1"><b class="align-self-center">Cerrar</b></a>
</div>
<p class="p-sm-3 p-lg-0" align="justify">Macetas de yerba reciclada, ecologias y biodegradables. Ideales para utilizar tanto en el interior com en el exterior</p>
<img src="assets/img/productos/productos/maceta yerba.webp" class="col-12 d-flex p-3 d-lg-none align-self-center  img-modal">
<div class="col-11 d-flex d-lg-none justify-content-center">
<p class="col-12 col-sm-6">* Venta al por mayor a partir de 20 piezas</p>
</div>
<div class="text-center col-11"> 
    <div class="btn-category pb-2 p-0 col-11 d-flex flex-wrap justify-content-evenly">
        <button class="btn btn-light col-5 m-1" onclick="ChangeSize1('chico')">Chico</button>
        <button class="btn btn-light col-5 m-1" onclick="ChangeSize1('mediano')">Mediano</button>
        <button class="btn btn-light col-5 m-1" onclick="ChangeSize1('grande')">Grande</button>
        <button class="btn btn-light col-5 m-1" onclick="ChangeSize1('extragrande')">Extragrande</button>
    </div>
    <div class="may-men p-0 p-lg-2 d-flex justify-content-evenly">
        <h2 class="f-reg">Menor <b>$320</b></h2>
        <h2 class="f-reg">Mayor <b>$230</b></h2>
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

function ChangeSize1(size) {
    tamaño1 = size;
    console.log(tamaño1);
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
}




const modal2= document.getElementById('modal2')
modal2.innerHTML +=    
`


<section class="modal m2" >
<div class="modal__container">
    <div class="col-lg-4">
        <img src="assets/img/productos/productos/etiqueta plantable.webp" class=" img-modal">
        <p>* Venta al por mayor a partir de 20 piezas</p>
        <p><b>Especifiaciones:</b></p>
        <p> <ul class="lista">
        <li>Se puede elegir de acuerdo al stock</li>
        <li>Las semillas del papel son de Albahaca</li>
        <li>El costo es por frente únicamente,ambos lados c/cotización personalizada</li>
        </ul></p>
    </div>
    <div class="col-lg-5">
        <h2 class="f-reg">Etiqueta Plantable</h2>
        <p>Papel reciclado con semillas, 100% artesanal. Variedad de colores y especies</p>
        <div class="btn-category">
            <button class="btn btn-light">C/maarca o logo</button>
            <button class="btn btn-light">C/frase personalizada</button>
            <button class="btn btn-light">50 un</button>
            <button class="btn btn-light">100 un</button>
        </div>
        <div class="text-center"> 
            <div class="may-men">
            <h2 class="f-reg"><b>$1500</b></h2>
            </div>
            <div class="mas-men">
            <button class="btn btn-modal">-</button>
            <button class="btn btn-modal-l">1</button>
            <button class="btn btn-modal">+</button>
            </div>
            <button class="btn btn-quiero2"> Quiero Comprar</button>
        </div>
        </div>
            <a href="#" class="modal__close">Cerrar Modal</a>
         </div>
</section>

`


const modal3= document.getElementById('modal3')
modal3.innerHTML +=    
    `
    
    <section class="modal m3" >
    <div class="modal__container">
    <div class="col-lg-4">
        <img src="assets/img/productos/productos/vela en frasco.webp" class=" img-modal">
        <p>* Venta al por mayor a partir de 20 piezas</p>
    </div>
    <div class="col-lg-5">
    <h2 class="f-reg">Maceta de Yerba</h2>
    <p>Macetas de yerba reciclada, ecologias y biodegradables. Ideales para utilizar tanto en el interior com en el exterior</p>
    <div class="btn-category">
        <button class="btn btn-light">Chico</button>
        <button class="btn btn-light">Mediano</button>
        <button class="btn btn-light">Grande</button>
        <button class="btn btn-light">Extragrande</button>
    </div>
    <div class="text-center"> 
        <div class="may-men">
        <h2 class="f-reg">Menor <b>$320</b></h2>
        <h2 class="f-reg">Mayor <b>$230</b></h2>
        </div>
        <div class="mas-men">
        <button class="btn btn-modal">-</button>
        <button class="btn btn-modal-l">1</button>
        <button class="btn btn-modal">+</button>
        </div>
        <button class="btn btn-quiero2"> Quiero Comprar</button>
    </div>
    </div>
    <a href="#" class="modal__close">Cerrar Modal</a>
    </div>
    </section>
    
    `;

        





// MODAL



