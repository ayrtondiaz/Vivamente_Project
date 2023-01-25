const modalContainer = document.getElementById('modal-form')
modalContainer.innerHTML=`
<section class="modal4 m4" >
<div class="modal_container-form row ">
  <div class="col-12">
  <section class="escribinos2">
    <form action="https://formsubmit.co/xxxx@gmail.com" method="POST" enctype="multipart/form" id="form"> 
      <fieldset>
      <div class="justify-content-start d-flex flex-wrap" >
      <legend class="f-bold col-11 pt-5" style="color: #1d4731;">Quiero participar</legend>      
      
      <div class=" btn-cerrar text-center col-1 pt-5">
        <a href="#" class="modal__close__form"><b>
        <span style="color:black"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg></span>
        </b></a>
      </div>
      <div class="justify-content-start" >
        <p class="f-reg pt-2 pb-1">A la breve nos pondremos en contacto contigo.</p>
      </div>
      </div>

          <div class="form-group mx-sm-3 mx-lg-0">
            <div class="d-flex">
              <label for="inputData1" style="font-size:12px"><b>Nombre y Apellido</b></label>
              <h6 style="color:#fd8237; font-size:12px;">*</h6>
            </div>
              <input style="font-size:12px" class="form-control form-control-sm" type="text" name="name">
          </div>

          <div class="form-group mx-sm-3 mx-lg-0">
            <div class="d-flex">
              <label for="inputData2" style="font-size:12px"><b>Email</b></label>
              <h6 style="color:#fd8237; font-size:12px;">*</h6>
            </div>
            <input  style="font-size:12px" class="form-control form-control-sm" type="email" name="email">
          </div>


          <div class="form-group mx-sm-3 mx-lg-0">
            <div class="d-flex">
              <label for="inputData3" style="font-size:12px"><b>Teléfono</b></label>
              <h6 style="color:#fd8237; font-size:12px" >*</h6>
            </div>
            <input style="font-size:12px" class="form-control form-control-sm" type="number" name="number">
          </div>

          <div class="form-group mx-sm-3 mx-lg-0">
            <div class="d-flex align-items-baseline">
              <label style="font-size:12px" for="inputData3"><b>Empresa u organización</b></label>
              <label style="font-size:10px margin-bottom:0;" class="opcional_contactos">(opcional)</label>
            </div>
            <input style="font-size:12px" class="form-control form-control-sm"  name="comments">
          </div>

          <div>
              <div class="form-group mx-sm-3 mx-lg-0" style="font-size:12px">
                <div class="d-flex">
                  <label for="inputData4"><b>Mensaje</b></label>
                  <h6 style="color:#fd8237">*</h6>
                </div>
                  <textarea class="form-control" style="resize: none; font-size:12px;" id="exampleFormControlTextarea1" rows="2" type="message"></textarea>
              </div>
          </div>

      </fieldset>

      <br>
      
      <div class="d-flex justify-content-center">
          <button type="submit" class="btn-contacto btn"  >Enviar</button>       
      </div>
      <input type="hidden" name="_next" value="http://127.0.0.1:5502/confirmacion.html">
      <input type="hidden" name="_captcha" value="false">
      <br>
  </form>

  </section>
  </div>
  
</div>     
</section>
`






const openForm = document.getElementById('abrirForm');
const modalForm = document.querySelector('.m4');
const closeForm = document.querySelector('.modal__close__form');

openForm.addEventListener('click', (e)=>{
    e.preventDefault();
    modalForm.classList.add('modal--show');
});

closeForm.addEventListener('click', (e)=>{
    e.preventDefault();
    modalForm.classList.remove('modal--show');
});

