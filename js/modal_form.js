const modalContainer = document.getElementById('modal-form')
modalContainer.innerHTML=`
<section class="modal4 m4" >
<div class="modal_container-form row text-center">
  <div class="col-10">
  <section class="escribinos">
    <form action="https://formsubmit.co/diazstudio99@gmail.com" method="POST" enctype="multipart/form" id="form"> 
      <fieldset>
          <legend class="f-bold" style="color: #1d4731;">Quiero participar</legend>

          <h5 class="f-reg pt-2 pb-4">a la breve nos pondremos en contacto contigo.</h5>
          <div class="form-group mx-sm-3 mx-lg-0 mb-2">
            <div class="d-flex">
              <label for="inputData1">Nombre y Apellido</label>
              <h6 style="color:#fd8237">*</h6>
            </div>
              <input class="form-control form-control-sm" type="text" name="name">
          </div>

          <div class="form-group mx-sm-3 mx-lg-0 mb-2">
            <div class="d-flex">
              <label for="inputData2">Email</label>
              <h6 style="color:#fd8237">*</h6>
            </div>
            <input class="form-control form-control-sm" type="email" name="email">
          </div>

          <div class="form-group mx-sm-3 mx-lg-0 mb-2">
            <div class="d-flex">
              <label for="inputData3">Teléfono</label>
              <h6 style="color:#fd8237">*</h6>
            </div>
            <input class="form-control form-control-sm" type="number" name="number">
          </div>

          <div class="form-group mx-sm-3 mx-lg-0 mb-2">
            <div class="d-flex align-items-baseline">
              <label for="inputData3">Empresa u organización</label>
              <h6 class="opcional_contactos">(opcional)</h6>
            </div>
            <input class="form-control form-control-sm"  name="comments">
          </div>

          <div>
              <div class="form-group mx-sm-3 mx-lg-0 mb-2">
                <div class="d-flex">
                  <label for="inputData4">Mensaje</label>
                  <h6 style="color:#fd8237">*</h6>
                </div>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" type="message"></textarea>
              </div>
          </div>

      </fieldset>

      <br>
      
      <div class="d-flex justify-content-center">
          <button type="submit" class="btn-contacto"  >Enviar</button>       
      </div>
      <input type="hidden" name="_next" value="http://127.0.0.1:5502/confirmacion.html">
      <input type="hidden" name="_captcha" value="false">
      <br>
  </form>

  </section>
  </div>
  <div class=" btn-cerrar ">
    <a href="#" class="modal__close__form"><b>
    <span style="color:black"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></span>
    </b></a>
  </div>
</div>     
</section>
`






const openForm = document.getElementById('abrirForm');
const modalForm = document.querySelector('.m4');
const closeForm = document.querySelector('.modal__close__form');

openForm.addEventListener('click', (e)=>{
    console.log('funcionas')
    e.preventDefault();
    modalForm.classList.add('modal--show');
});

closeForm.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('cerrar')
    modalForm.classList.remove('modal--show');
});

