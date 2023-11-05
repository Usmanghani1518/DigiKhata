import React from "react";
import Navbar from "../navbar";
import gPlay from "../../imagies/google-play-head.png";
import appStore from "../../imagies/app-store-head.png";
const About = () => {
  return (
    <>
      <div
        className={`background-about img-fluid`}
        style={{ width: "100%", height: "100%", marginTop: "-60px" }}
      >
        <Navbar />

        <section className="mt-5">
          <div className="container">
            <div className="row ">
              <div className=" col-md-6 col-12 pt-lg-5 pb-lg-5">
                <h1 className="text-white pt-lg-5 mt-lg-5 ">
                  Transform Your Business Digitally With DigiKhata
                </h1>

                <p className="text-white pt-3 ">
                  DigiKhata aims to introduce operating infrastructure for
                  Pakistan’s 2.5 million strong MSME sector. It is a simple,
                  secure & innovative 100% free bookkeeping & accounting
                  application helping businesses record daily transactions on
                  the go.
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
              <div className="col-md-6 col-12 "></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
