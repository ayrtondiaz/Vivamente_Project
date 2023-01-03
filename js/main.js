// Contador Animados


addEventListener('DOMContentLoaded', ()=>{
    const contadores = document.querySelectorAll('.contador_cantidad');
    const velocidad = 1000;

    const animarContadores = () =>{
        for(const contador of contadores){
            const actualizar_contador =() =>{
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                valor_actual = +contador.innerText,
                incremento = cantidad_maxima / velocidad;
                if(valor_actual < cantidad_maxima){
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout((actualizar_contador), 5);
                }else{
                    contador.innerText = cantidad_maxima;

                }
            }
            actualizar_contador();
        }
    }

    const mostrarContadores = elementos =>{
        elementos.forEach(element => {
            if(element.isIntersecting){
                   element.target.classList.add('animar');
                   element.target.classList.remove('ocultar');
                   setTimeout(animarContadores, 300)
            }
        });
    }

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.75 //0 - 1 
    })

    const elementosHTML = document.querySelectorAll('.contador')
    elementosHTML.forEach(elementoHTML =>{
        observer.observe(elementoHTML)
    })
    
})
// Productos

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

const contenedorProducto = document.getElementById('contenedor-prod')

contenedorProducto.innerHTML=
`
                <div class="col-lg-4 lg-12">
                <div class="card-des">
                    <img src="../assets/img/productos/productos/maceta yerba.JPG" class="card-img " alt="..." id="img-prod">   
                    <h2 class="card-txt" style="color: white" id="nombre-prod">Maceta de yerba</h2>
                    <br>
                </div> 
                    <button type="button" class="btn btn-quiero f-reg" id="abrirModal" > Lo quiero </button>
                    <br>
                    <br>
              </div> 
              <div class="col-lg-4 lg-12">
              <div class="card-des">
              <img src="../assets/img/productos/productos/etiqueta plantable.JPG" class="card-img " alt="..." id="img-prod">   
              <h2 class="card-txt" style="color: white" id="nombre-prod">Etiqueta Plantable</h2>
              <br>
              </div> 
              <button type="button" class="btn btn-quiero f-reg" id="abrirModal2" > Lo quiero </button>
              <br>
              <br>
              </div> 

              <div class="col-lg-4 lg-12">
              <div class="card-des">
              <img src="../assets/img/productos/productos/vela en frasco.JPG" class="card-img " alt="..." id="img-prod">   
              <h2 class="card-txt" style="color: white" id="nombre-prod">Vela en frasco</h2>
              <br>
              </div> 
              <button type="button" class="btn btn-quiero f-reg" id="abrirModal3" > Lo quiero </button>
              <br>
              <br>

              </div>


// `





// productosDestacados.forEach((prod) => {
//     const { id, titulo, img} = prod;
//     // console.log('anda')
//     // const div = document.createElement('div')
//     // div.classList.add('producto')
//     contenedorProducto.innerHTML +=    
//     `
//     <div>
//     <div class="col-lg-11 lg-12">
//     <div class="card-des">
//         <img src="${img}" class="card-img w-100" alt="..." id="img-prod">   
//         <h2 class="card-txt" style="color: white" id="nombre-prod">${titulo}</h2>
//         <br>
//     </div> 
//         <button type="button" class="btn btn-quiero f-reg" id="abrirModal" > Lo quiero </button>
//         <br>
//         <br>
//     </div> 

    
//     `;

//     //2 - SEGUNDO PASO, LUEGO DE QUE INSERTEMOS EL HTML EN EL DOM:
//      const boton = document.getElementById(`abrirModal`)
//     //Por cada elemento de mi array, creo un div, lo cuelgo, le pongo un id particular, una vez colgado
//     //le hago un get element by id (el de agregar) Obtengo el elemento y a dicho elemento le agregamos
//     //el add event listener

//     boton.addEventListener('click', () => {
//         //esta funcion ejecuta el agregar el carrito con la id del producto
//         const openModal = document.getElementById('abrirModal');
//         const modal = document.querySelector('modal');
//         const closeModal = document.querySelector('.modal__close');

//         openModal.addEventListener('click', (e)=>{
//         console.log('funcionas')
//         e.preventDefault();
//         modal.classList.add('modal--show');
//         });

//         closeModal.addEventListener('click', (e)=>{
//         e.preventDefault();
//         modal.classList.remove('modal--show');
//         });
        
//     })
// })

