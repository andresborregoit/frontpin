import React from 'react';
import "../assets/css/Footer.css"
import "../assets/css/global.css"
import MailIcon from '../assets/statics/001-mail.svg';
import FacebookIcon from '../assets/statics/002-facebook-logo.svg';
import InstagramIcon from '../assets/statics/003-instagram-social-network-logo-of-photo-camera.svg';
import img from "../assets/statics/pexels-andrea-piacquadio-3771836.jpg";
import img2 from "../assets/statics/living-2.jpg";
import img3 from "../assets/statics/002-electric-guitar.svg";
import Formulario from './Formulario';

export default function Footer() {
  return (
    <>

    <footer>
      <div className="container containerfooter" id="contacto">
        <div className="row ">
          <div className="col-md-12">
            <h1>CONTACTO</h1><br /><br />
          </div>
          <div className="containerFormulario">
        <Formulario></Formulario></div>

        </div>

        <div className="row social marginrow">
          <div className="col-3"></div>
          <div className="col-2">
            <a href="mailto:boxerborrego87@gmail.com"><img src={MailIcon} alt="" className='imgfooter' /></a>
          </div>
          <div className="col-2">
            <a href="https://www.facebook.com/Boxerman32/" target="_blank"><img src={FacebookIcon} alt="" className='imgfooter' /></a>
          </div>
          <div className="col-2">
            <a target="_blank" href="https://www.instagram.com/boxerborrego87/"><img src={InstagramIcon} alt="" className='imgfooter' /></a>
          </div>
        </div>
      </div>

    

      
      </footer>
    </>
  );
}
