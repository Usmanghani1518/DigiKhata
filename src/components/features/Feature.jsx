import React from 'react'
import gPlay from "../../imagies/google-play-head.png";
import appStore from "../../imagies/app-store-head.png";
import featureHead from "../../imagies/features/features-head-boy.png";
import Navbars from '../navbar';
const Feature = () => {
  return (
    <div
    className={`background-blog img-fluid`}
    style={{ width: "100%", height: "100%", marginTop: "-60px" }}
  >
    <Navbars />

    <section className="mt-5">
      <div className="container">
        <div className="row ">
          <div className=" col-md-6 col-12 mt-md-5 pt-lg-5 pb-lg-5">
          <h1 className="text-white pt-lg-5 mt-lg-5">
                    Let’s Explore The DigiKhata App
                  </h1>

                  <p className="text-white pt-3">
                    DigiKhata offers awesome features that streamline your
                    business procedures & cash flow. You can manage your daily
                    credit transactions, budget & collect your payments faster.
                    Here are the amazing features of DigiKhata and its use
                    cases.
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
          <div className="col-md-6 col-12  mt-md-5 pt-md-5 pt-3">
          <img className="img-fluid mt-md-3 pt-md-5" src={featureHead} alt=""  />
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Feature