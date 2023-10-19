import React from 'react'
import "../assets/css/Header.css"
import "../assets/css/global.css"
import logoGrande from "../assets/statics/pera.png"

export default function Header() {
return (
    <>
    <header>
	<div className="container">
		<div className="row top">
			<div className="col-md-4">
                <a href="#home" data-ancla="home" class="off">
				    <img src={logoGrande} alt="" class="logo"></img></a>
                    </div>
			        <div className="col-md-3"></div>
			        <div className="col-md-5">
				    <ul className='botonera'>
					<li><a href="#nosotros" data-ancla="nosotros">Quienes somos</a></li>
					<li><a href="#servicios" data-ancla="servicios">Productos</a></li>
					<li><a href="#contacto" data-ancla="contacto">Contacto</a></li>

				</ul>

			</div>
		</div>
	</div>
</header>
</>
)
}
