
let togle;
const contenedorProd = document.getElementById('contenedor-productos');
contenedorProd.innerHTML=
`
<div class="row">              
<div class="col-lg-4">
  <div class="card border text-center">
    <img src="../assets/img/inicio/maceta.webp" class="border img-card" alt="">
    <h4 class="f-bold p-3">Maceta de yerba</h4>
    <div class="col-lg-12 justify-content-center">
      <button class="btn btn-quiero3" id="openModal1">Lo quiero</button>
    </div>
  </div>
</div>
<div class="col-lg-4">
  <div class="card border text-center">
    <img src="../assets/img/productos/productos/portasahumerio.webp" class="border img-card" alt="">
    <h4 class="f-bold p-3">Porta Sahumerio</h4>
    <div class="col-lg-12 justify-content-center">
      <button class="btn btn-quiero3" id="openModal2">Lo quiero</button>
    </div>
  </div>
</div>
<div class="col-lg-4">
  <div class="card border text-center">
    <img src="../assets/img/productos/productos/lamparadesal.webp" class="border img-card" alt="">
    <h4 class="f-bold p-3">Lámpara de sal</h4>
    <div class="col-lg-12 justify-content-center">
      <button class="btn btn-quiero3" id="openModal3">Lo quiero</button>
    </div>
  </div>
</div>
<div class="col-lg-4">
  <div class="card border text-center">
    <img src="../assets/img/productos/productos/adornos.webp" class="border img-card" alt="">
    <h4 class="f-bold p-3">Adorno con forma</h4>
    <div class="col-lg-12 justify-content-center">
      <button class="btn btn-quiero3" id="openModal5">Lo quiero</button>
    </div>
  </div>
</div>          
<div class="col-lg-4">
  <div class="card border text-center">
    <img src="../assets/img/productos/productos/lampara.webp" class="border img-card" alt="">
    <h4 class="f-bold py-3">Lámpara decorativa</h4>
    <div class="col-lg-12 justify-content-center">
      <button class="btn btn-quiero3" id="openModal4">Lo quiero</button>
    </div>
  </div>
</div>
<div class="col-lg-4">
  <div class="card border text-center">
    <img src="../assets/img/productos/productos/lapiz.webp" class="border img-card" alt="">
    <h4 class="f-bold p-3">Lapiz plantable</h4>
    <div class="col-lg-12 justify-content-center">
      <button class="btn btn-quiero3" id="openModal6">Lo quiero</button>
    </div>
  </div>
</div>
<div class="col-lg-4">
  <div class="card border text-center">
    <img src="../assets/img/productos/productos/etiqueta.webp" class="border img-card" alt="">
    <h4 class="f-bold py-3">Etiquetas Plantables</h4>
    <div class="col-lg-12 justify-content-center">
      <button class="btn btn-quiero3" id="openModal7">Lo quiero</button>
    </div>
  </div>
</div>
<div class="col-lg-4">
  <div class="card border text-center">
    <img src="../assets/img/productos/productos/vela.webp" class="border img-card" alt="">
    <h4 class="f-bold p-3">Vela en frasco</h4>
    <div class="col-lg-12 justify-content-center">
      <button class="btn btn-quiero3" id="openModal8">Lo quiero</button>
    </div>
  </div>
</div>
<div class="col-lg-4">
  <div class="card border text-center">
    <img src="../assets/img/productos/productos/organizador.webp" class="border img-card" alt="">
    <h4 class="f-bold p-3">Organizador deco</h4>
    <div class="col-lg-12 justify-content-center">
      <button class="btn btn-quiero3" id="openModal9">Lo quiero</button>
    </div>
  </div>
</div>
<div class="col-lg-4">
  <div class="card border text-center">
    <img src="../assets/img/productos/productos/Scrunchie.webp" class="border img-card" alt="">
    <h4 class="f-bold p-3">Scrunchies</h4>
    <div class="col-lg-12 justify-content-center">
      <button class="btn btn-quiero3" id="openModal10">Lo quiero</button>
    </div>
  </div>
</div>           
<div class="col-lg-4">
  <div class="card border text-center">
    <img src="../assets/img/productos/productos/bolsas.webp" class="border img-card" alt="">
    <h4 class="f-bold p-3">Bolsas de compra</h4>
    <div class="col-lg-12 justify-content-center">
      <button class="btn btn-quiero3" id="openModal11">Lo quiero</button>
    </div>
  </div>
</div>
</div>
`