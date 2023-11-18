import React from "react";
import twitter from "../imagies/twitter.png";
import facebook from "../imagies/facebook.png";
import linkdin from "../imagies/linkdin.png";
import youtube from "../imagies/youtube.png";
import gPlay from "../imagies/google-play-head.png";
import appStore from "../imagies/app-store-head.png";
import MSoft from "../imagies/microsoft.png";
import insta from "../imagies/insta.png";
import FooterLogo from "../imagies/footer-logo.png";
import { Link } from "react-router-dom";
import '../styles/Footer.css'
const Footer = () => {
  return (
    <>
      <section className="footer bg-black">
        <div className="container text-white">
          <div className="row container pt-5">
            <div className="col-md-3 col-12" style={{ fontSize: "32px" }}>
              <Link to="/">
                {" "}
                <img
                  style={{ width: "170px", height: "48px" }}
                  src={FooterLogo}
                  alt=""
                />
              </Link>
            </div>
            <div className="col-md-9  col-12">
              DigiKhata is Pakistan’s # 1 Digital Khata. This all in one
              bookkeeping and accounting App helps small businesses manage their
              ledgers on the go. It is available on Android, iOS and online.
            </div>
          </div>

          <div className="row pt-3">
            <div className="col-md-6 col-12   mt-md-4">
              <p style={{display:'inline-block',borderRadius:'8px'}} className="pointer h-bg px-2 py-1">contact@digikhata.pk</p>
              <div>
              <p  style={{display:'inline-block',borderRadius:'8px'}} className="pointer h-bg px-2 py-1">+92 3099656639</p> </div>
              <p>
                Digi Technologies PTE LTD. <br /> 160 Robinson Road #14-04,
                Singapore
              </p>
              <p>
                Digi Khata SMC PVT LTD. <br />
                10th Floor, State Life building, Blue Area, Islamabad, Pakistan
              </p>
              <p>
                Digi Khata SMC PVT LTD. <br />
                535 B Peoples Colony Faisalabad, Pakistan
              </p>
            </div>
            <div className="col-md-6 col-12 ">
              <div className="row">
                <div className="col-md-4 col-12 mt-4 ">
                  <p>
                    
                    <Link
                      style={{ textDecoration: "none", color: "white",borderRadius:'8px' }}
                      className="h-bg px-2 py-1"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                  <p>
                    {" "}
                    <Link
                      style={{ textDecoration: "none", color: "white" ,borderRadius:'8px' }}
                      className="h-bg px-2 py-1"
                    >
                      Terms of Use
                    </Link>{" "}
                  </p>
                  <p>
                    {" "}
                    <Link
                      style={{ textDecoration: "none", color: "white",borderRadius:'8px' }}
                      className="h-bg px-2 py-1"
                    >
                      Contact Us
                    </Link>{" "}
                  </p>
                  <p>
                    {" "}
                    <Link
                      style={{ textDecoration: "none", color: "white",borderRadius:'8px' }}
                      className="h-bg px-2 py-1"
                    >
                      Career
                    </Link>{" "}
                  </p>
                </div>
                <div className="col-md-8 col-12">
                  <div className="d-flex ">
                    <div>
                      <img src={twitter} className="img-fluid me-4 pointer" alt="" />
                    </div>

                    <div>
                      <img src={youtube} className="img-fluid me-4 pointer" alt="" />
                    </div>

                    <div>
                      <img src={insta} className="img-fluid me-4 pointer" alt="" />
                    </div>

                    <div>
                      <img src={linkdin} className="img-fluid me-4 pointer" alt="" />
                    </div>
                    <div>
                      <img src={facebook} className="img-fluid me-4 pointer" alt="" />
                    </div>
                  </div>
                  <div className="mt-3">
                    <img src={gPlay} className="img-fluid pointer" alt="" />
                  </div>
                  <div className="mt-3">
                    <img src={appStore} className="img-fluid pointer" alt="" />
                  </div>
                  <div className="mt-3">
                    {" "}
                    <img src={MSoft} className="img-fluid pointer" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <p style={{ textAlign: "center" }}>
              © Copyright Reserved 2023 Digikhata.pk
            </p>
          </div>
        </div>
        you know me
      </section>
    </>
  );
};
export default Footer;
