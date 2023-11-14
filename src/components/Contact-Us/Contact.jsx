import React from 'react'
import gPlay from "../../imagies/google-play-head.png";
import appStore from "../../imagies/app-store-head.png";
// import featureHead from "../../imagies/features/features-head-boy.png";
 import {GrMail}  from "react-icons/gr";
 import {BiSolidPhoneCall}  from "react-icons/bi";
 import {IoLogoWhatsapp}  from "react-icons/io";
 import './Contact.css'
import Navbars from '../navbar';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <>
    <div
    className={`background-contact img-fluid`}
    style={{ width: "100%", height: "100%", marginTop: "-60px" }}
  >
    <Navbars />

    <section className="mt-5">
      <div className="container">
        <div className="row py-about-256 ">
          <div className=" col-md-6 col-12 pt-lg-5 pb-lg-5">
          <h1 className="text-white pt-lg-5 mt-lg-5 fw-bold">
          Got Queries? Reach Out To Us!
                  </h1>

                  <p style={{lineHeight:'1.6'}} className="text-white pt-3 justify font">
                  Our customer support services team will promptly answer your questions 24/7. We put our customers first place and strive our best to make them feel convenient. DigiKhata aims to convert your highly complex business functions into the simplest tasks.
                  </p>

            <div
              className="pb-5 mb-5 flex-wrap flex-md-nowrap"
              style={{
                display: "flex",
              }}
            >
              <div>
                <img src={gPlay} className="img-fluid me-3 google" alt="" />
              </div>
              <div>
                <img
                  src={appStore}
                  className="img-fluid me-3 appstore"
                  alt=""
                />
              </div>
              <div></div>
            </div>
          </div>
          <div className="col-md-6 col-12 ">
          
          </div>
        </div>
      </div>
    </section>
  </div>

  <section>
    <div className="container-fluid">
        <div className="row Contactmethods dual-color pb-5 justify-content-center">
          <div className="headingg">
            <h1 className="text-center pt-5 pb-2 fw-bold text-white">Contact Us!</h1>
            <p className="text-center text-white pb-2" style={{ fontSize: '.9rem', maxWidth: '80%', margin: '0 auto' }}>
              If you’re new to our app or an existing user who is unable to understand any <br /> functionality of DigiKhata
              or wants to suggest more improvements then reach <br /> out to us without any hassle.
            </p>
          </div>

          <div className="col-md-3 col-12 text-center box mb-3  px-0 mx-3"> {/* Added mx-2 for horizontal margin */}
            <div className="py-5">
              <GrMail className="contactIcon mb-3 mt-3" />
              <h4 className="my-3">Send Us Email</h4>
              <Link to="mailto:contact@digikhata.pk" className="text-orange">
                contact@digikhata.pk
              </Link>
            </div>
          </div>
          <div className="col-md-3 col-12 text-center box  mb-3 mx-2"> {/* Added mx-2 for horizontal margin */}
            <div className="py-5">
              <BiSolidPhoneCall className="contactIcon mb-3 mt-3" />
              <h4 className="my-3">Give Us A Call</h4>
              <Link to="tel:+923438788453" className="text-orange">
                +92 313 7979 999
              </Link>
            </div>
          </div>

          <div className="col-md-3 col-12 text-center  box mb-3 mx-3"> 
            <div className="py-5">
              <IoLogoWhatsapp className="contactIcon mb-3 mt-3" />
              <h4 className="my-3">WhatsApp</h4>
              <Link to="https://wa.me/923438788453" className="text-orange">
                +92 313 7979 999
              </Link>
            </div>
          </div>
        </div>
      </div>
  </section>
  </>
  )
}

export default Contact