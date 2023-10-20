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
    <div className='containerpadreservicios'>
    <div className="container servicios" id="servicios">
	<div className="row">
		<div className="col-md-12">
			<h1 className='h1black'>Nuestros Servicios</h1>
		</div>
	</div>
	<div className="row images">
		<div className="col-md-3">
			<img src={img4} alt=""></img>
			<h3>Indumentaria</h3>
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
	
</div></div>
<div className='containeracordion'>
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button colorblack" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
      <button className="accordion-button colorblack" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Garantia y calidad!
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Garantia y calidad</strong> Nuestros productos son los mejores del mercado, nuestra amplia clientela por todo el pais nos respalda, hemos vendido en todas los partidos del pais <code>todos los productos de la linea Home cuentan con 5 años de garantia</code>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button colorblack" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Envios a todo el pais!
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Hemos realizado y realizamos envios a todos los puntos del pais desde ushuaia hasta la quiaca, mediante correo Argentino, Andreani, Ñandu del sur, TAS y MD fletes.
      </div>
    </div>
  </div>
</div>
</div>

    
    
    
    </>
  )
}
