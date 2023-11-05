import React from 'react'
import gPlay from "../../imagies/google-play-head.png";
import appStore from "../../imagies/app-store-head.png";
import blogHead from "../../imagies/blogs/blog-head-img.png";
import Navbars from '../navbar';

const Blog = () => {
  return (
    <div
        className={`background-blog img-fluid`}
        style={{ width: "100%", height: "100%", marginTop: "-60px" }}
      >
        <Navbars />

        <section className="mt-5">
          <div className="container">
            <div className="row ">
              <div className=" col-md-6 col-12 pt-lg-5 pb-lg-5">
              <h1 className="text-white pt-lg-5 mt-lg-5">
                    DigiKhata Latest Blogs
                  </h1>

                  <p className="text-white pt-3">
                    We love to keep our users and all stakeholders engaged with
                    the latest updates about DigiKhata. Read out these blogs to
                    learn about the updates, tutorials and testimonials about
                    the DigiKhata app.
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
              <div className="col-md-6 col-12 mt-md-5 pt-md-5  ">
              <img className="img-fluid my-md-5 pt-md-5" src={blogHead} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Blog