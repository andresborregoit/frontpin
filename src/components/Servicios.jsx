import React from 'react'
import "../assets/css/Servicios.css"
import "../assets/css/global.css"
import img4 from "../assets/statics/004-sportswear.svg"
import img1 from "../assets/statics/001-bicycle.svg"
import img2 from "../assets/statics/002-beds.svg"
import img3 from "../assets/statics/003-armchair.svg"



export default function Servicios() {
  return (
    <>
    <div className="container servicios" id="servicios">
	<div className="row">
		<div className="col-md-12">
			<h1>Nuestros Servicios</h1>
		</div>
	</div>
	<div className="row images">
		<div className="col-md-3">
			<img src={img4} alt=""></img>
			<h3>Indumentaria deportiva</h3>
			<p>Tenemos para vos las mejores prendas para que te sientas esplendid@ para hacer tu deporte favorito</p>
		</div>
		<div className="col-md-3">
			<img src={img1} alt=""></img>
			<h3>Bikes</h3>
			<p>Nuestras bicicletas Shimano y Venzo son garantia asegurada! Contamos con service gratis de por vida!</p>
		</div>
		<div className="col-md-3">
			<img src={img2} alt=""></img>
			<h3>Confort</h3>
			<p>Para cuando descanses de tanto deporte te ofrecemos las mejores camas.</p>
		</div>
		<div className="col-md-3">
			<img src={img3} alt=""></img>
			<h3>Living</h3>
			<p>Cuando quieras descansar tenemos los mejores sillones para vos, de todos los tamaños y pet friendly</p>
		</div>
	</div>
	
</div>
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        ¿Por que nosotros?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Por que debes comprarnos a nosotros?</strong>  <code></code> nos dedicamos hace mas de 30 años a sastifacer a todos nuestros clientes, tenemos el mejor servicio post venta de todos, tenemos valoracion de  estrellas en mercado libre y ganamos el premio emprendedores 2020, 2021, 2023. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>

    
    
    
    </>
  )
}
