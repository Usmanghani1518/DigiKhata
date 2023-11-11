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
const Footer = () => {
  return (
    <>
      <section className="footer mt-3 bg-black">
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

          <div className="row mt-5">
            <div className="col-md-6 col-12">
              <p className="pointer">contact@digikhata.pk</p>
              <p className="pointer">+92 3099656639</p>
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
            <div className="col-md-6 col-12">
              <div className="row">
                <div className="col-md-4 col-12">
                  <p>
                    {" "}
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href=""
                    >
                      Privacy Policy
                    </a>{" "}
                  </p>
                  <p>
                    {" "}
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href=""
                    >
                      Terms of Use
                    </a>{" "}
                  </p>
                  <p>
                    {" "}
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href=""
                    >
                      Contact Us
                    </a>{" "}
                  </p>
                  <p>
                    {" "}
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href=""
                    >
                      Career
                    </a>{" "}
                  </p>
                </div>
                <div className="col-md-8 col-12">
                  <div className="d-flex justify-content-space-between">
                    <div>
                      <img src={twitter} className="img-fluid me-3" alt="" />
                    </div>

                    <div>
                      <img src={youtube} className="img-fluid me-3" alt="" />
                    </div>

                    <div>
                      <img src={insta} className="img-fluid me-3" alt="" />
                    </div>

                    <div>
                      <img src={linkdin} className="img-fluid me-3" alt="" />
                    </div>
                    <div>
                      <img src={facebook} className="img-fluid me-3" alt="" />
                    </div>
                  </div>
                  <div className="mt-3">
                    <img src={gPlay} alt="" />
                  </div>
                  <div className="mt-3">
                    <img src={appStore} alt="" />
                  </div>
                  <div className="mt-3">
                    {" "}
                    <img src={MSoft} alt="" />
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
