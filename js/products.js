
const contenedorProd = document.getElementById('contenedor-productos');

productosDestacados.forEach((elem)=> {
    contenedorProd.innerHTML+=
    `
    <div class="col-lg-4">
  <div class="card border text-center">
    <img src="${elem.img}" class="border img-card" alt="">
    <h4 class="f-bold p-3">${elem.titulo} </h4>
    <div class="col-lg-12 justify-content-center">
      <button class="btn btn-quiero2" id="openModalFinal">Lo quiero</button>
    </div>
  </div>
</div>
    `
const modal = document.getElementById("contenedor-modal")

modal.innerHTML +=    
`
<section class="modal modal-final" >
<div class="modal__container">
<div class="col-lg-4">
    <img src="${elem.img}" class=" img-modal">
    <p>${elem.descripcion}</p>
</div>
<div class="col-lg-5">
<h2 class="f-reg">${elem.titulo}</h2>
<p>${elem.subtitulo}</p>
<div class="btn-category" id="category">

</div>
<div class="text-center"> 
    <div class="may-men">
    <h2 class="f-reg">Menor <b>$${elem.precioMen}</b></h2>
    <h2 class="f-reg">Mayor <b>$${elem.precioMay}</b></h2>
    </div>
    <div class="mas-men">
    <button class="btn btn-modal" onclick="SubstractF()">-</button>
    <button class="btn btn-modal-l" id="numf">${counter}</button>
    <button class="btn btn-modal" onclick="AddF()">+</button>
    </div>
    <button class="btn btn-quiero2" onclick="WppF"> Quiero Comprar</button>
</div>
</div>
<a href="#" class="modal__close mcf">Cerrar Modal</a>
</div>
</section>
`
// const botonera= document.getElementById("category")
// const botones= elem.categoria;
// console.log(botones);
// botones.map((item)=> {
//      botonera.innerHTML+=`<button class="btn btn-light">${item}</button>`
//  })


const openModalFinal = document.getElementById('openModalFinal');
const modalFinal = document.querySelector('.modal-final');
const closeModalFinal = document.querySelector('.mcf');
const numF= document.getElementById("numf")

openModalFinal.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modalFinal.classList.add('modal--show');
});

closeModalFinal.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modalFinal.classList.remove('modal--show');
});

function AddF(){
    counter++;
    numF.innerHTML=`${counter}`
    console.log(counter)
}
function SubstractF(){
    if (counter >  0 ){

        counter--;
        numF.innerHTML=`${counter}`
    }
    else{
        counter=0;
    }
}





})