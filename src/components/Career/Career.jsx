import React from 'react'
import gPlay from "../../imagies/google-play-head.png";
import appStore from "../../imagies/app-store-head.png";
// import featureHead from "../../imagies/features/features-head-boy.png";
import Navbars from '../navbar';
const Career = () => {
  return (
    <div
    className={`background-career img-fluid`}
    style={{ width: "100%", height: "100%", marginTop: "-60px" }}
  >
    <Navbars />

    <section className="mt-5">
      <div className="container">
        <div className="row ">
          <div className=" col-md-6 col-12 pt-lg-5 pb-lg-5">
          <h1 className="text-white pt-lg-5 mt-lg-5">
                    Find Your Dream Job In A Well-Reputed IT Company!
                  </h1>

                  <p className="text-white pt-3">
                    Kick start your professional journey with DigiKhata Pvt Ltd.
                    You'll get vast exposure in the industry-leading fintech
                    company of Pakistan. We have great growth opportunities for
                    fresh graduates, industry experts and leading management.
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
  )
}

export default Career