import React from "react";
import gPlay from "../../imagies/google-play-head.png";
import appStore from "../../imagies/app-store-head.png";
import blogHead from "../../imagies/blogs/blog-head-img.png";
// import Hbl from "../../imagies/blogs/kunda.jpg";
// import videoThum from "../../imagies/video-thum.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useBlogContext } from "./BlogContext";

// import blogHead from "../../imagies/blogs/blog-head-img.png";
// import blogHead from "../../imagies/blogs/blog-head-img.png";
// import blogHead from "../../imagies/blogs/blog-head-img.png";
// import blogHead from "../../imagies/blogs/blog-head-img.png";
// import blogHead from "../../imagies/blogs/blog-head-img.png";

import Navbars from "../navbar";
import "./Blog.css";
const Blog = ({ BlogInfo: propBlogInfo }) => {
  const BlogInfo = useBlogContext();
  // console.log(BlogInfo)
  return (
    <>
      <div
        className={`background-blog img-fluid`}
        style={{ width: "100%", height: "100%", marginTop: "-60px" }}
      >
        <Navbars />

        <section className="mt-5">
          <div className="container">
            <div className="row ">
              <div className=" col-md-6 col-12 pt-blog pb-lg-5">
                <h1 className="text-white pt-lg-5 mt-lg-5">
                  DigiKhata Latest Blogs
                </h1>

                <p className="text-white pt-3">
                  We love to keep our users and all stakeholders engaged with
                  the latest updates about DigiKhata. Read out these blogs to
                  learn about the updates, tutorials and testimonials about the
                  DigiKhata app.
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
                <img
                  className="img-fluid my-md-5 pt-md-5"
                  src={blogHead}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="blog" className="blog bg-grey">
        <div className="container">
          <h2 className="text-center  pt-5 fw-bold font">
            Our <span className="orange">Blogs</span>
          </h2>

          {/* <div className="container">
            <div className="row">
              {BlogInfo.map((a) => (
                <div className="col-lg-4   col-md-6 col-12 py-3">
                  <div className="bg-white pointer pb-3">
                    <img src={a.img} className="img-fluid" alt="" />
                    <h4 className="fw-bold font px-3 py-2">{a.sh}</h4>
                    <p className="font px-3 pb-4 fw-400">{a.sp}</p>

                    <Link
                      style={{ textDecoration: "none" }}
                      className="orange font px-3 "
                    >
                      Learn More <FaArrowRight />{" "}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
          <BlogsContent />
        </div>
      </section>
    </>
  );
};

export default Blog;
//  =========================== Blog content ====================================
export const BlogsContent = () => {
  const BlogInfo = useBlogContext();

  return (
    <>
      <div className="container blog pt-4">
        <div className=" d-grid">
          {BlogInfo.map((a) => (
            <div
              style={{ color: "#343a40", borderRadius: "10px" }}
              key={a.id}
              className=" bg-white shadows mb-3 mx-md-2 pb-3 pointer blog-box"
            >
              <img src={a.img} className="img-fluid" alt="" />
              <h4 className="fw-bold font px-3 py-2">{a.sh}</h4>
              <p className="font px-3 pb-4 fw-400">{a.sp}</p>

              <Link
              to='/detail'
                style={{ textDecoration: "none" }}
                className="orange font px-3 "
              >
                Learn More <FaArrowRight />{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
