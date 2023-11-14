import React from 'react'
import gPlay from "../../imagies/google-play-head.png";
import appStore from "../../imagies/app-store-head.png";
import Navbars from '../navbar';
import howToApply from "../../imagies/career/how-to-apply.png";
import CareerPopular from "../../imagies/career/career-popular.png";
import Carousel from "react-bootstrap/Carousel";
import mAnas from "../../imagies/career/m-anas.png";
import mHanan from "../../imagies/career/m-hanan.png";
import sidra from "../../imagies/career/sidra.png";
import invertedUp from "../../imagies/career/career-comma-up.png";
import invertedDn from "../../imagies/career/career-comma-down.png";



import './career.css'
const Career = () => {
  return (
    <>
    {/* ================ first section ========================================== */}
    <div
    className={`background-career img-fluid`}
    style={{ width: "100%", height: "100%", marginTop: "-60px" }}
  >
    <Navbars />
    <section className="mt-5">
      <div className="container">
        <div className="row ">
          <div className=" col-md-6 col-12 py-career ">
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
{/* ============================ How to Apply ========================================= */}
<section className='container py-lg-5'>
<div className="row py-5">
<div className="col-md-6 col-12 mb-5 mb-md-0">
  <img src={howToApply} className='img-fluid' alt="" />
</div>
<div className="col-md-6 col-12 m-auto px-4 px-md-4">
  <h2 className='fw-bold'  >How to <span className='orange'>Apply?</span> </h2>
  <p>If you’re looking for a great career opportunity to excel in your professional journey then DigiKhata could help you meet your goals. Browse this page, our Linked In Page or Facebook page to find a job opportunity. Apply for the job position, read the job requirements carefully and then provide your details as per the requirements</p>
  <p>Kindly, it is requested you stay honest while applying for the job. Once, you’ll apply for the job then HR will receive your job application digitally. If we’ll find your portfolio suitable for our requirements then we’ll shortlist you & call you for an interview after a few business days.</p>
  </div>

</div>
  </section>
{/* ========================== why we are popular ======================================== */}
  <section className=' py-5 bg-grey'>
    <div className="container">
<div className="  row py-5">
<div className="col-md-6 col-12 m-auto px-4 px-md-4">
  <h2 className='fw-bold'  >Why are We <span className='orange'>Popular?</span> </h2>
  <p>The primary reason for our popularity is that DigiKhata Pvt Ltd. doesn’t consider you an employee but a valuable family member once we hire you. Our mission is to expand our family and provide remarkable professional opportunities to a larger community. We embrace “ideas” and the great minds that generate them.</p>
  <p>We want the DigiKhata family to keep on generating ideas so we contribute to the development & innovation of our country. “Respect” is the primary trait that reflects the core of our values. We strictly condemn disrespectful behavior and discrimination wherever it happens around the world.</p>
  </div>
  <div className="col-md-6 col-12 mb-5 mb-md-0">
  <img src={CareerPopular} className='img-fluid' alt="" />
</div>
</div>
</div>
  </section>
{/* ======================= Explore our business =================================== */}
  <section className='pt-5'>
    {/* <div className="pt-5"> */}
<h2 className="fw-bold text-center pb-md-5 mb-2">Explore Our <span className='orange'>Career</span>  Areas</h2>
{/* </div> */}
<h2 className="fw-bold text-center">Valuable Feedback From</h2>
<h2 className="fw-bold text-center orange">Our Workforce</h2>

  </section>
{/* ======================== carousel of career ====================================== */}
  <section>
  <div className="container  ">
              <Carousel slide controls={false}>
                <Carousel.Item>
                  <div className="row py-5">
                    <div className="col-lg-4 col-12">
                      <img src={mAnas} alt="" className="img-fluid" />
                      <p className="text-center pt-3">Tech Team Lead</p>
                    </div>
                    <div className="col-lg-8 col-12 my-auto">
                      <div className="row">
                        <div className="col-md-2 col-12">
                          <img src={invertedUp} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-8 col-12">
                          <p className="mt-70">
                            {" "}
                            I enjoy the opportunity to develop innovative solutions with the DigiKhata team. It’s exciting being on the cutting-edge of digital and mobile solutions.
                          </p>
                        </div>
                        <div className="col-md-2 col-12">
                          <img src={invertedDn} className="img-fluid mt-140" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row py-5">
                    <div className="col-lg-4 col-12">
                      <img src={sidra} alt="" className="img-fluid" />
                      <p className="text-center pt-3">Graphic Designer</p>
                    </div>
                    <div className="col-lg-8 col-12 my-auto">
                      <div className="row">
                        <div className="col-md-2 col-12">
                          <img src={invertedUp} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-8 col-12">
                          <p className="mt-70">
                            {" "}
                            Working for a company that truly admires your work and value every employee like a family is an ideal working environment one can think of. Luckily! I have been working in this ideal environment where I can grow professionally and personally.
                          </p>
                        </div>
                        <div className="col-md-2 col-12">
                          <img src={invertedDn} className="img-fluid mt-140" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row py-5">
                    <div className="col-lg-4 col-12">
                      <img src={mHanan} alt="" className="img-fluid" />
                      <p className="text-center pt-3">Ass. Marketing Manager</p>
                    </div>
                    <div className="col-lg-8 col-12 my-auto">
                      <div className="row">
                        <div className="col-md-2 col-12">
                          <img src={invertedUp} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-8 col-12">
                          <p className="mt-70 ">
                            {" "}
                            I joined DigiKhata as a marketing specialist 2 years ago. Clocking into a job where my manager supports my ideas, shows flexibility with my schedule and the company offers great promotion opportunities! I have never worked anywhere where management went out of their way to support their employees.
                          </p>
                        </div>
                        <div className="col-md-2 col-12">
                          <img src={invertedDn} className="img-fluid mt-140" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
  </section>
  </>
  )
}

export default Career