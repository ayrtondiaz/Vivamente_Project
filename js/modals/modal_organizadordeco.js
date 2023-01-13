
let counter9 = 0;
const nombreProd9="Organizador deco"
const contenedorModal9= document.getElementById('contenedor-modal9')
contenedorModal9.innerHTML=`
<section class="modal m9" >
<div class="modal__container">
<div class="col-lg-4">
    <img src="../assets/img/productos/productos/Organizador deco.webp" class=" img-modal">
    <p>* Venta al por mayor a partir de 20 piezas</p>
    <br>
    <h5 class="des-min"><b>Sugerencias de uso:</b></h5>
    <h6 class="des-min"><li>Apoya maceta / celular.</li></h6>
    <h6 class="des-min"><li>Contenedor de artíuclos de librería y objetos pequeños.</li></h6>
    <h6 class="des-min"><li>SUjeta llave, pañuelo o barbijo.</li></h6>

</div>
<div class="col-lg-5">
<h2 class="f-reg">${nombreProd9}</h2>
<p>Objeto diseñado especificamente a partir de reducción de materiales, pero a su vez, con múltples usos.</p>

<div class="btn-category">
    <button class="btn btn-light">180 cc</button>
    <button class="btn btn-light">400 cc</button>
</div>
<div class="text-center"> 
    <div class="may-men">
    <h2 class="f-reg">Menor <b>$790</b></h2>
    <h2 class="f-reg">Mayor <b>$550</b></h2>
    </div>
    <div class="mas-men">
    <button class="btn btn-modal" onclick="Substract9()">-</button>
    <button class="btn btn-modal-l" id="num9">${counter9}</button>
    <button class="btn btn-modal" onclick="Add9()">+</button>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp9()"> Quiero Comprar</button>
</div>
</div>
<a href="#" class="modal__close mc9">Cerrar Modal</a>
</div>
</section>
`

const openModal9 = document.getElementById('openModal9');
const modal9 = document.querySelector('.m9');
const closeModal9 = document.querySelector('.mc9');
const num9= document.getElementById("num9")
openModal9.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal9.classList.add('modal--show');
});

closeModal9.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal9.classList.remove('modal--show');
});

function Add9(){
    counter9++;
    num9.innerHTML=`${counter9}`
    console.log(counter9)
}
function Substract9(){
    if (counter9 >  0 ){

        counter9--;
        num9.innerHTML=`${counter9}`
    }
    else{
        counter9=0;
    }
}

// WHATSAPP

function Wpp9(){
    const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter9}%20unidades%20de%20${nombreProd9} `;
    window.open(URL, "_blank");
}


// > y <