
let counter6 = 0;
const nombreProd6="Lápiz plantable"
const contenedorModal6= document.getElementById('contenedor-modal6')
contenedorModal6.innerHTML=`
<section class="modal m6" >
<div class="modal__container">
<div class="col-lg-4">
    <img src="../assets/img/productos/productos/lápiz plantable.webp" class=" img-modal">
    <p>* Venta al por mayor a partir de 20 piezas</p>
    <br>
    <h5 class="des-min"><b>Personaliza tus lápices:</b></h5>
    <h6 class="des-min"><li>Forrado $170 (Se deben solicitar con 7 dias de anticipación)</li></h6>
    <h6 class="des-min"><li>Grabado $190 (Se deben solicitar con 15 dias de anticipación)</li></h6>
    <h6 class="des-min"><li>Con blisters/señalador $250 (Se deben solicitar con 7 dias de anticipación)</li></h6>
</div>
<div class="col-lg-5">
<h2 class="f-reg">Lápiz plantalbe</h2>
<p>Lápices de escribir, con grafito, realizado en madera natural o papel de diario. Contiene cápsula biodegradable con semillas.</p>
<div class="btn-category">
    <button class="btn btn-light">De madera natural</button>
    <button class="btn btn-light">De papel diario</button>
</div>
<div class="text-center"> 
    <div class="may-men">
    <h2 class="f-reg">Menor <b>$150</b></h2>
    <h2 class="f-reg">Mayor <b>$120</b></h2>
    </div>
    <div class="mas-men">
    <button class="btn btn-modal" onclick="Substract6()">-</button>
    <button class="btn btn-modal-l" id="num6">${counter6}</button>
    <button class="btn btn-modal" onclick="Add6()">+</button>
    </div>
    <button class="btn btn-quiero2" onclick="Wpp()"> Quiero Comprar</button>
</div>
</div>
<a href="#" class="modal__close mc6">Cerrar Modal</a>
</div>
</section>
`

const openModal6 = document.getElementById('openModal6');
const modal6 = document.querySelector('.m6');
const closeModal6 = document.querySelector('.mc6');
const num6= document.getElementById("num6")
console.log(openModal6)
openModal6.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modal6.classList.add('modal--show');
});

closeModal6.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modal6.classList.remove('modal--show');
});

function Add6(){
    counter6++;
    num6.innerHTML=`${counter6}`
    console.log(counter6)
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

// WHATSAPP

function Wpp(){
    const URL = `https://api.whatsapp.com/send?phone=+5493534230690&text=Hola%20Vivamente!%20Quisiera%20encargarte%20${counter6}%20unidades%20de%20${nombreProd6} `;
    window.open(URL, "_blank");
}


// > y <