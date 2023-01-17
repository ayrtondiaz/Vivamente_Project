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

let counter=0;


const contenedorProducto = document.getElementById('contenedor-prod')

contenedorProducto.innerHTML=
`               <div class="d-flex flex-wrap justify-content-evenly">
                <div class="col-lg-4 col-10">
                <div class="card-des">
                <div class="pos">
                <button type="button" class="btn btn-fav f-reg" id="" >
                <span class="star">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                </span> Favorito </button>
                <img  src="../assets/img/inicio/maceta.webp" class="card-img" alt="..." id="img-prod">   
                </div>
                    <h2 class="card-txt" style="color: white" id="nombre-prod">Maceta de yerba</h2>
                    <br>
                </div> 
                <button type="button" class="btn btn-quiero f-reg" id="openModal1" > Lo quiero </button>
                    <br>
                    <br>
                </div>
                
                



                <div class="col-lg-4 col-10">
                <div class="card-des">
                <div class="pos">
                <button type="button" class="btn btn-fav f-reg" id="" >
                <span class="star">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                </span> Favorito </button>
                <img  src="../assets/img/inicio/etiqueta.webp" class="card-img" alt="..." id="img-prod">   
                </div>
                    <h2 class="card-txt" style="color: white" id="nombre-prod">Etiqueta Plantable</h2>
                    <br>
                </div> 
                <button type="button" class="btn btn-quiero f-reg" id="openModal7" > Lo quiero </button>
                    <br>
                    <br>
                </div> 
                
                <div class="col-lg-4 col-10">
                <div class="card-des">
                <div class="pos">
                <button type="button" class="btn btn-fav f-reg" id="" >
                <span class="star">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                </span> Favorito </button>
                <img  src="../assets/img/inicio/vela.webp" class="card-img" alt="..." id="img-prod">   
                </div>
                    <h2 class="card-txt" style="color: white" id="nombre-prod">Vela en frasco</h2>
                    <br>
                </div> 
                <button type="button" class="btn btn-quiero f-reg" id="openModal8" > Lo quiero </button>
                    <br>
                    <br>
                </div> 

              
              </div>


`


