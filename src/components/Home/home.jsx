import { React, useState } from "react";
import "./Home.css";
import Book from "../../imagies/khata.png";
import dokaan from "../../imagies/dokaan.png";
import Billbook from "../../imagies/billbook.png";
import Cashbook from "../../imagies/cashbook.png";
import staffBook from "../../imagies/staffbook.png";
import Stockbook from "../../imagies/stockbook.png";

import unlimitedCustomer from "../../imagies/unlimited-customer.png";
import cashIn from "../../imagies/cash-in.png";
import businessCard from "../../imagies/business-card.png";
import multiLang from "../../imagies/multi-lang.png";
import earnMoney from "../../imagies/earn-money.png";
import multiDevices from "../../imagies/multi-devices.png";
import ShoaibJameel from "../../imagies/Shoaib-Jameel.png";
import DrKinza from "../../imagies/Dr-Kinza.png";
import SheikNouman from "../../imagies/Sheik-Nouman.png";

import { PiWhatsappLogo } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";


import gPlay from "../../imagies/google-play-head.png";
import appStore from "../../imagies/app-store-head.png";
import microsoft from "../../imagies/microsoft.png";
import HomeheadImg from '../../imagies/home-head-img.png'
import Navbars from '../navbar';
const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <div className=" col-md-6 col-12 mt-md-5 pt-lg-5 pb-lg-5">
          <h1 style={{fontWeight:'700'}} className="text-white pt-lg-5 mt-lg-5" >
                    Barhao Karobaar Se Nata! Download Digi Khata
                  </h1>

                  <p className="text-white pt-3">
                    DigiKhata is a 100% secure and simple bookkeeping app.
                    Record and manage your business transactions easily with
                    DigiKhata app & recover yours payments 3X faster.
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
              <div>
                <img
                  src={microsoft}
                  className="img-fluid me-3 microsoft"
                  alt=""
                />
              </div>
              <div></div>
            </div>
          </div>
          <div className="col-md-6 col-12  mt-md-5 pt-md-5 pt-3">
          <img className="img-fluid mt-md-3 pt-md-5" src={HomeheadImg} alt=""  />
          </div>
        </div>
      </div>
    </section>
  </div>

      <div className="font home">
        <section className="mt-5">
          <div className="container">
            <h1
              style={{
                fontSize: "2.25rem",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              Grow Your Business With Digi Khata App
            </h1>
            <p
              className=" px-md-5 mx-md-5 pt-3"
              style={{ textAlign: "center", fontSize: "14px" }}
            >
              DigiKhata aims to empower small businesses in Pakistan with
              reliable & simple business solutions. It helps businesses to
              record their credits easily on their mobile phone only with a few
              clicks. Get rid of outdated bookkeeping methods and shift to a
              more efficient solution.
            </p>
          </div>
        </section>

        <section className="mt-5 pt-3">
          <div className="container">
            <div className="row">
              <div
                style={{ textAlign: "justify" }}
                className="col-12 col-lg-6 pt-lg-3"
              >
                <h2 style={{ fontSize: "1.8rem" }} className="pe-5 me-lg-5">
                  One-Stop Solution For Small Businesses
                </h2>
                <p className="pe-5 me-lg-5" style={{ textAlign: "justify" }}>
                  Manage your business on the go with the DigiKhata app. It is
                  an all-inclusive bookkeeping solution that also helps you
                  collect your payments 3X faster. With free cloud backup, it
                  keeps your business record 100% safe and secure.
                </p>
              </div>
              <div className="col-12 col-lg-6">
                <div>
                  <div className="d-flex mb-3" style={{}}>
                    <div style={{ width: "15%" }}>
                      <img src={Book} alt="" style={{ width: "30px" }} />
                    </div>
                    <p>Account Ledgers</p>
                  </div>
                  <div className="d-flex mb-3" style={{}}>
                    <div style={{ width: "15%" }}>
                      <img src={Cashbook} alt="" style={{ width: "30px" }} />
                    </div>
                    <p>Cash Book</p>
                  </div>
                  <div className="d-flex mb-3" style={{}}>
                    <div style={{ width: "15%" }}>
                      <img src={Billbook} alt="" style={{ width: "30px" }} />
                    </div>
                    <p>Bill Book</p>
                  </div>
                  <div className="d-flex mb-3" style={{}}>
                    <div style={{ width: "15%" }}>
                      <img src={Stockbook} alt="" style={{ width: "30px" }} />
                    </div>
                    <p>Stock Book</p>
                  </div>
                  <div className="d-flex  mb-3" style={{}}>
                    <div style={{ width: "15%" }}>
                      <img src={staffBook} alt="" style={{ width: "30px" }} />
                    </div>
                    <p>Staff Book</p>
                  </div>
                  <div className="d-flex mb-5" style={{}}>
                    <div style={{ width: "15%" }}>
                      <img src={dokaan} alt="" style={{ width: "30px" }} />
                    </div>
                    <p>Digi Dokaan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cards mt-4">
          <div className="container">
            <div className="d-grid">
              <div className="cards-child">
                <img
                  src={unlimitedCustomer}
                  alt=""
                  className="pt-3 ps-3 pb-3"
                />
                <h3 className="pt-3 ps-3 pb-3">Unlimited Customers</h3>
                <p className="ps-3 pe-3" style={{ textAlign: "justify" }}>
                  Once you log in to the DigiKhata app. Then tap on the “ADD
                  CUSTOMER” button. Type your customer name and add their
                  details from your contact. Or Click “Add New Customer”&gt;&gt;
                  Type the name&gt;&gt; Add contact details.
                </p>
              </div>
              <div className="cards-child">
                <img src={cashIn} alt="" className="pt-3 ps-3 pb-3" />

                <h3 className="pt-3 ps-3 pb-3">Cash In / Cash Out</h3>
                <p className="ps-3 pe-3" style={{ textAlign: "justify" }}>
                  Tap on “Cash Book” on the Home Screen. Add your Cash In & Cash
                  Out quickly. With the built-in calculator, you can easily
                  evaluate your expenses & income. Add details, attach bills and
                  download free pdf report.
                </p>
              </div>
              <div className="cards-child">
                <img src={businessCard} alt="" className="pt-3 ps-3 pb-3" />

                <h3 className="pt-3 ps-3 pb-3">Free Business Cards</h3>
                <p className="ps-3 pe-3" style={{ textAlign: "justify" }}>
                  Represent your business the right way. Are you finding it
                  expensive to have a creative business card? With DigiKhata you
                  can create 100% free custom business cards & share them on
                  Whatsapp.
                </p>
              </div>
              <div className="cards-child">
                <img src={multiLang} alt="" className="pt-3 ps-3 pb-3" />

                <h3 className="pt-3 ps-3 pb-3">
                  Available In Multiple Languages
                </h3>
                <p className="ps-3 pe-3" style={{ textAlign: "justify" }}>
                  DigiKhata is designed over the idea of introducing “simple yet
                  innovative” solutions to local businesses in Pakistan.
                  Therefore, it is available in multiple easy-to-understand
                  languages for everyone i.e. Urdu, اردو، English, پبنتو، سندھی,
                  فارسی اور پنجابی۔
                </p>
              </div>
              <div className="cards-child">
                <img src={earnMoney} alt="" className="pt-3 ps-3 pb-3" />

                <h3 className="pt-3 ps-3 pb-3">Earn Money</h3>
                <p className="ps-3 pe-3" style={{ textAlign: "justify" }}>
                  Now you can earn money by reselling airtime with the Digi Cash
                  feature. Get up to 2.5% comission on every recharge and
                  increase your income anytime, anywhere You can also invite
                  your friends to DigiKhata app & earn cash up to 50,000/- Rs.
                </p>
              </div>
              <div className="cards-child">
                <img src={multiDevices} alt="" className="pt-3 ps-3 pb-3" />

                <h3 className="pt-3 ps-3 pb-3">Multi Devices</h3>
                <p className="ps-3 pe-3" style={{ textAlign: "justify" }}>
                  If you are multiple partners running a single business then
                  you can use DigiKhata to update, remove and add your
                  bookkeeping records all at once. Making it easier for business
                  owners to stay informed of their dealings in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 mb-5 pt-4">
          <div className="container mt-3">
            <div className="row">
              <div className="col-12 col-lg-6">
                <h2>50 Lakh+ Users Trust Digi Khata</h2>
                <p>
                  DigiKhata caters to the digital needs of every business
                  including;
                </p>
                <ul>
                  <li className="user">Kiryana (utility store)</li>
                  <li className="user">Mobile Shop</li>
                  <li className="user">Supermart</li>
                  <li className="user">Restaurant</li>
                  <li className="user">Bakery</li>
                  <li className="user">Pharmacy</li>
                  <li className="user">Boutique</li>
                  <li className="user">Departmental Store</li>
                  <li className="user">Garments Shop</li>
                  <li className="user">Milk Shop</li>
                  <li className="user">Jewelry Shop</li>
                  <li className="user">Real Estate Office</li>
                </ul>
              </div>
              <div className="col-12 col-lg-6 my-auto">
                <div className="col-md-6 my-auto" style={{ backgroundSize: "cover" }}>
                  <div
                    className="d-flex  bg-black my-auto"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      // height: "100%",
                      // width:'100%',
                      background: "none",
                    }}
                  >
                    <Button variant="primary" onClick={handleShow}>
                      Launch demo modal
                    </Button>
                  </div>

                  <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Body
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <iframe
                        width="500"
                        height="315"
                        src="https://www.youtube.com/embed/Y-0I4PKNH9E"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-3">
          <div style={{ backgroundColor: "#e74425" }} className="">
            <div className="container text-white ">
              <Carousel slide controls={false}>
                <Carousel.Item>
                  <div className="row py-5">
                    <div className="col-lg-4 col-12">
                      <img src={DrKinza} alt="" className="img-fluid" />
                      <p className="text-center">Healthcare Specialist</p>
                    </div>
                    <div className="col-lg-8 col-12 my-auto">
                    <div className="row">
                        <div className="col-md-2 col-12"></div>
                        <div className="col-md-8 col-12">
                          <p> Digi Khata is equally useful for every work and business.
                      It is easily flexible to handle your ledger accounts.</p>
                        </div>
                        <div className="col-md-2 col-12"></div>
                      </div>
                      
                    </div>
                  </div>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row py-5">
                    <div className="col-lg-4 col-12">
                      <img src={ShoaibJameel} alt="" className="img-fluid" />
                      <p className="text-center">Textile Business Owner</p>
                    </div>
                    <div className="col-lg-8 col-12 my-auto">
                    <div className="row">
                        <div className="col-md-2 col-12"></div>
                        <div className="col-md-8 col-12">
                          <p> Whenever I add transactions to Digi Khata, then it sends
                      free Automatic SMS reminders to the customer along with
                      the customer ledger. Maintain the accounts and leave no
                      room for mistakes.</p>
                        </div>
                        <div className="col-md-2 col-12"></div>
                      </div>

                      
                    </div>
                  </div>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row py-5">
                    <div className="col-lg-4 col-12">
                      <img src={SheikNouman} alt="" className="img-fluid" />
                      <p className="text-center">Restaurant Owner</p>
                    </div>
                    <div className="col-lg-8 col-12 my-auto">
                      <div className="row">
                        <div className="col-md-2 col-12"></div>
                        <div className="col-md-8 col-12">
                          <p> Digi Khata has shrunk our hours-long work shift into
                      minutes. It is very easy-to-use, record transactions in
                      real-time and keep our record safe with data backup.</p>
                        </div>
                        <div className="col-md-2 col-12"></div>
                      </div>
                     
                    </div>
                  </div>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </section>
        <section className="py-5" style={{backgroundColor:'#f8f8f8'}} >
          <div className="pt-5" >
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-12">
                <h2>Frequently Asked Question</h2>
                <p>
                  Is this guide help for you? If you still have any queries
                  about the DigiKhata app then contact us now!
                </p>
<div className="d-flex text-white">
                <div className="bg-orange me-2 px-4 py-2 pointer" style={{borderRadius:'7px'}}>
                  <PiWhatsappLogo style={{fontSize:'20px'}} /> WhatsApp
                </div>
                <div className="bg-orange px-4 py-2 pointer" style={{borderRadius:'7px'}}><FiPhone style={{fontSize:'20px'}} />Call Us </div>
                </div>
              </div>
              <div className="col-md-8 col-12">
                <div className="">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        How To Add Your Business In DigiKhata?
                      </Accordion.Header>
                      <Accordion.Body>
                        Install the DigiKhata app on your phone or open the
                        online app on your browser. Log in to the DigiKhata app
                        and add your number. When you’ll receive the OTP number
                        then enter it into the app. Then add your business name
                        and you’re ready to go.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        How to add Customers/ Suppliers In DigiKhata?
                      </Accordion.Header>
                      <Accordion.Body>
                        Click on Customers/ Suppliers on top of the Home Screen.
                        Tap on Add CUSTOMER/SUPPLIER button. If the
                        customer/supplier is already in your contacts then add
                        from there. If it’s not in your contacts then add the
                        customer/supplier name & their number and a new ledger
                        account is created.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Is DigiKhata Safe To Keep My Business Record?
                      </Accordion.Header>
                      <Accordion.Body>
                        DigiKhata is a 100% secure cloud-based bookkeeping and
                        accounting app. It also keeps your data safe for
                        lifetime with free cloud backup.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
