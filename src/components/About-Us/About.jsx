import React from "react";
import Navbar from "../navbar";
import gPlay from "../../imagies/google-play-head.png";
import appStore from "../../imagies/app-store-head.png";
import BusinessImg1 from '../../imagies/about/business-img1.png'
import "../Home/Home.css";
const About = () => {
  return (
    <>
      <div className=" bg-grey">
        <div
          className={`background-about img-fluid`}
          style={{ width: "100%", height: "100%", marginTop: "-60px" }}
        >
          <Navbar />

          <section className="mt-5">
            <div className="container">
              <div className="row ">
                <div className=" col-md-6 col-12 pt-md-5 mt-md-5 mb-md-3 pb-md-5">
                  <h1
                    style={{ fontWeight: "700", fontSize: "2.25rem" }}
                    className="text-white pt-md-5 mt-md-5 "
                  >
                    Transform Your Business Digitally With DigiKhata
                  </h1>

                  <p
                    style={{ textAlign: "justify" }}
                    className="text-white pt-3  me-md-4"
                  >
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
                      <img
                        src={gPlay}
                        className="img-fluid me-3 google"
                        alt=""
                      />
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

        <section>
          <div className="mt-5">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-8 col-12  text-center max-width ">
                  <h2 style={{ fontWeight: "700" }}>
                    Serving The Digital Needs Of{" "}
                    <span className="orange">Your Business</span>{" "}
                  </h2>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8 col-md-10 col-12 text-center max-width ">
                  <p>
                    Local merchants strive hard to ensure that their customers
                    get the best possible product or service. However, when they
                    don’t get paid right for their hard-earned efforts, it
                    becomes extremely difficult for them to excel in their
                    business growth. DigiKhata brings simple, secure & reliable
                    bookkeeping & accounting solution. It enables businesses to
                    digitally record credits, manage daily budgets & collect
                    their payments 3x faster all in one app.
                  </p>
                </div>
              </div>

              <div className="row d-flex justify-content-center">
              <div className="col-lg-5 col-12 text-center text-md-left mt-5 px-md-5 px-0 px-lg-0">
<img src={BusinessImg1} alt="" className="img-fluid"/>
              </div>
              <div className="col-lg-6 col-12 px-md-5 px-0 my-auto">
                <h2>Why Do Businesses Need <span className="orange">DigiKhata?</span> </h2>
                <p className="justify">According to the Ministry of Planning Development and Special Incentives, around 99% of MSMEs contribute to 40% of the GDP around the globe. However, millions of MSMEs in Pakistan are unable to keep up with innovative solutions due to outdated business procedures like maintaining business records with pen and paper.</p>
                <p className="justify">DigiKhata is designed to empower the MSMEs in Pakistan with innovative yet simple solutions. It helps users to maintain their bookkeeping records on their mobile phones only with a few clicks. It has a simple interface & offers cloud-like agility that ensures faster & better performance of your business operations ultimately.</p>
              </div>

</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
