import React from 'react'
import "../assets/css/global.css"
import "../assets/css/Hero.css"
import img from "../assets/statics/pexels-andrea-piacquadio-3771836.jpg";
import img2 from "../assets/statics/living-2.jpg";
import img3 from "../assets/statics/002-electric-guitar.svg";



export default function Hero() {
  return (
    <>

<div className="carousel-container">
  <div id="carouselExampleFade" className="carousel slide carousel-fade">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={img} className="d-block w-100 alturaimg" alt="..."></img>
        <div className="superpuesto-div">
          <h2>Fix Up!</h2>
          <p>Empresa dedicada al bienestar y el confort</p>
          <p>¡Conoce nuestros productos de línea deportiva y conoce el confort con nuestra línea home!</p>
          <a href="#" className="btn btn-primary orange">Descubre nuestros productos</a>
        </div>
      </div>
      <div className="carousel-item">
        <img src={img2} className="d-block w-100 alturaimg" alt="..."/>
        <div className="superpuesto-div">
          <h2>Título 2</h2>
          <p>Descripción 2</p>
          <a href="#" className="btn btn-primary orange">Descubre nuestros productos</a>
        </div>
      </div>
      <div className="carousel-item">
        <img src={img3} className="d-block w-100 alturaimg" alt="..."/>
        <div className="superpuesto-div">
          <h2>Título 3</h2>
          <p>Descripción 3</p>
          <a href="#" className="btn btn-primary orange">Descubre nuestros productos</a>
        </div>
      </div>
   {/*   <!-- Agrega elementos similares para otras diapositivas -
   ¡Conoce nuestros productos de línea deportiva y conoce el confort con nuestra línea home!
   ->*/}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>








<div className="nosotros orange" id="nosotros">
	<div className="container">
		<h1>Sobre nosotros</h1>
		<p>Somos una empresa con 30 años de trayectoria en el mercado, nuestro objetivo es que puedas tener 
			una vida mas confortable y mas sana de la mano de nuestros servicios al mejor precio, y con la mejor calidad.

</p>
	</div>
</div>
    
    
    
    
    </>
  )
}
