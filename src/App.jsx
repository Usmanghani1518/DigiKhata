import 'react-bootstrap'
import Navbar from "./components/navbar.jsx"
import Footer from "./components/Footer.jsx";
import Home from './components/Home/home.jsx';
import About from './components/About-Us/About.jsx';
import Blog from './components/blogs/Blog.jsx';
import Feature from './components/features/Feature.jsx';
import Contact from './components/Contact-Us/Contact.jsx';
import Career from './components/Career/Career.jsx';
import SlickCarousel from './components/slick.jsx';
import './App.css'
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom'; 
function App() {

  const BlogInfo=[
      {
        id:'1Link',
        heading:'1LINK ONBOARDS DIGIKHATA AS AN INITIATOR ON 1BILL SERVICES',
        p1:'Wednesday, April 5, 2023, marked a significant milestone for <b> #DigiKhata </b> and SMEs in Pakistan. It was a day filled with excitement and anticipation as Mr. Adnan Aslam, the CEO of #DigiKhata, and Mr. Najeeb Agrawalla, the CEO of 1LINK (Pvt) Limited, came together to sign the 1LINK (Pvt) Limited Bill Initiator agreement.',
        p2:'This partnership between #DigiKhata and 1LINK (Pvt) Limited is set to introduce a new feature to the #DigiKhata app, one that will bring immense convenience and ease to SMEs across the country. The collaboration aims to simplify the payment process for businesses, making their lives easier and enabling them to focus on what matters most – growing their enterprises.',
        p3:'SMEs form the backbone of the Pakistani economy, driving innovation, employment, and economic growth. However, they often face numerous challenges, including managing and tracking their financial transactions efficiently. With the new feature brought about by the partnership between #DigiKhata and 1LINK (Pvt) Limited, these challenges will be addressed head-on.',
        p4:'The 1LINK (Pvt) Limited Bill Initiator agreement will empower SMEs to initiate bill payments directly through the #DigiKhata app. This means that businesses will no longer have to go through the traditional process of physically visiting payment centers or dealing with the hassle of manual payments. Instead, they can conveniently manage their bills and make payments from the palm of their hand.',
        p5:'By integrating this feature into the #DigiKhata app, SMEs will experience a streamlined and efficient payment process. They can view their bills, track payment deadlines, and initiate payments seamlessly within the app itself. This not only saves time but also eliminates the chances of errors or missed payments, ensuring that businesses maintain a healthy financial standing.',
        p6:'By integrating this feature into the #DigiKhata app, SMEs will experience a streamlined and efficient payment process. They can view their bills, track payment deadlines, and initiate payments seamlessly within the app itself. This not only saves time but also eliminates the chances of errors or missed payments, ensuring that businesses maintain a healthy financial standing.',
        p7:'Furthermore, this partnership aligns with the vision of the State Bank of Pakistan to promote digitalization and financial inclusion. The introduction of the 1LINK (Pvt) Limited Bill Initiator feature in the #DigiKhata app enhances the accessibility of digital financial services for SMEs, fostering a more inclusive and resilient economy.',
        p8:'The impact of this collaboration goes beyond convenience and efficiency. By empowering SMEs with a user-friendly and comprehensive payment solution, the partnership aims to fuel their growth and contribute to the overall economic development of Pakistan. When businesses can focus on their core operations without the burden of tedious payment processes, they can invest more time and resources into expanding their enterprises, creating employment opportunities, and driving innovation.',
        p9:'<b>In conclusion</b>, the signing of the 1LINK (Pvt) Limited Bill Initiator agreement between <b> #DigiKhata and 1LINK (Pvt) </b> Limited is a game-changer for SMEs in Pakistan. This partnership demonstrates a shared commitment to empowering businesses with innovative digital solutions, making their lives easier and unlocking their true potential.',
        p10:'With the new feature in the #DigiKhata app, SMEs can say goodbye to the complexities of manual bill payments and embrace a more efficient, transparent, and convenient payment process. As we move forward, we can expect to witness the positive impact this collaboration will have on the growth and success of SMEs in Pakistan, cementing their role as key drivers of the nations economy.',

      },
      {
        id:'HBL',
        heading:'Signing Ceremony Between HBL Microfinance Bank and DigiKhata to pave the way for merchant lending',
        p1:'On May 24, 2023, <b> #DigiKhata </b> made an exciting announcement that has the potential to revolutionize the landscape of small and medium-sized enterprises (SMEs). In a strategic partnership with #HBL Microfinance Bank, #DigiKhata is taking a giant leap forward in offering comprehensive digital lending solutions to address the challenges faced by SMEs in obtaining timely and accessible financing.',
        p2:'As we all know, SMEs play a crucial role in driving economic growth and creating employment opportunities. However, one of the major hurdles they face is accessing the necessary funds to support and expand their businesses. Traditional lending processes often involve complex paperwork, lengthy approval procedures, and limited accessibility, making it difficult for SMEs to navigate the financial landscape.',
        p3:'Understanding these challenges, #DigiKhata has been committed to empowering SMEs with user-friendly digital tools and services. And now, with the collaboration with #HBL Microfinance Bank, they are taking their mission a step further. This strategic partnership aims to bridge the gap between SMEs and the financing they need to thrive.',
        p4:'By combining the expertise of #DigiKhata in digital solutions with the extensive financial knowledge and resources of #HBL Microfinance Bank, this collaboration brings forth a comprehensive suite of digital lending solutions for SMEs and e-commerce sellers. The possibilities that this partnership brings are truly remarkable.',
        p5:'SMEs and e-commerce sellers are invited to explore the new horizons that this partnership unlocks. Through #DigiKhatas platform, they will gain access to a range of financial services tailored to their specific needs. From quick and hassle-free loan applications to flexible repayment options, the aim is to make financing more accessible and convenient than ever before.',
        p6:"The digital lending solutions provided by #DigiKhata and #HBL Microfinance Bank will empower SMEs to expand their operations, invest in new technologies, and seize growth opportunities. Whether it's funding inventory purchases, marketing campaigns, or infrastructure development, the partnership is designed to meet the diverse financing requirements of SMEs across various sectors.",
        p7:"Furthermore, the collaboration promises to bring efficiency and transparency to the lending process. With a digital platform, SMEs can easily track their loan applications, receive real-time updates, and access comprehensive financial insights. This saves time and resources and enables businesses to make informed decisions for their growth and sustainability.",
        p8:"At #DigiKhata, the vision is to create a level playing field for SMEs, ensuring they have equal opportunities to thrive in the digital era. The strategic partnership with #HBL Microfinance Bank is a significant step towards realizing this vision. It demonstrates the commitment of both organizations to empower SMEs with innovative financial solutions and unlock their true potential.",
        p9:" <b> In conclusion </b>, the partnership between #DigiKhata and #HBL Microfinance Bank marks an exciting milestone in the realm of digital lending for SMEs. By combining their strengths and resources, they are set to redefine the way SMEs access financing, making it easier, more efficient, and more inclusive. If you are an SME or an e-commerce seller, we invite you to explore the possibilities that this partnership brings and embark on a journey toward greater growth and success.",
        p1:'',

      },
      {
        id:'kuunda',
        heading:'DigiKhata Enters Into Strategic Partnership With Kuunda On 4 August 2022 ',
        p1:"On 4 August 2022, Jalal ul Haq (CEO of Kuunda) and Bilal Anjum (Co-Founder & COO of DigiKhata Pvt Ltd.) signed a collaboration agreement between DigiKhata (Pakistan-based fintech startup) and Kuunda to bring better financial liquidity solutions for millions of airtime retailers of DigiKhata.",
        p2:"Digitization of business operations for micro, small and medium-sized local businesses in Pakistan at scale is a new concept. There have been a lot of factors that have limited small businesses to embark on the digital journey for potential business opportunities for so many years. However, DigiKhata is intended to accelerate this journey for local merchants in Pakistan and all around the globe to ensure the efficiency of their businesses and meet their financial needs with innovative fintech solutions.",
        p3:"",
        p4:"",
        p5:"",
        p6:"",
        p7:"",
        p8:"",
        p9:"",
        p2:"",
        p2:"",

        

      }, 
      {
        id:'Accunting Application',
        heading:'When is the best time to switch to an accounting application? ',
        p1:"",
        p2:"",
        p3:"",
        p4:"",
        p5:"",
        p6:"",
        p7:"",
        p8:"",
        p9:"",
        p2:"",
        p2:"",

        

      }, 
      {
        id:'',
        heading:' ',
        p1:"",
        p2:"",
        p3:"",
        p4:"",
        p5:"",
        p6:"",
        p7:"",
        p8:"",
        p9:"",
        p2:"",
        p2:"",

        

      }, 
      {
        id:'',
        heading:' ',
        p1:"",
        p2:"",
        p3:"",
        p4:"",
        p5:"",
        p6:"",
        p7:"",
        p8:"",
        p9:"",
        p2:"",
        p2:"",

        

      }, 
      {
        id:'',
        heading:' ',
        p1:"",
        p2:"",
        p3:"",
        p4:"",
        p5:"",
        p6:"",
        p7:"",
        p8:"",
        p9:"",
        p2:"",
        p2:"",

        

      }, 
      {
        id:'',
        heading:' ',
        p1:"",
        p2:"",
        p3:"",
        p4:"",
        p5:"",
        p6:"",
        p7:"",
        p8:"",
        p9:"",
        p2:"",
        p2:"",

        

      }, 
      {
        id:'',
        heading:' ',
        p1:"",
        p2:"",
        p3:"",
        p4:"",
        p5:"",
        p6:"",
        p7:"",
        p8:"",
        p9:"",
        p2:"",
        p2:"",

        

      }, 
      {
        id:'',
        heading:' ',
        p1:"",
        p2:"",
        p3:"",
        p4:"",
        p5:"",
        p6:"",
        p7:"",
        p8:"",
        p9:"",
        p2:"",
        p2:"",

        

      }, 
      {
        id:'',
        heading:' ',
        p1:"",
        p2:"",
        p3:"",
        p4:"",
        p5:"",
        p6:"",
        p7:"",
        p8:"",
        p9:"",
        p2:"",
        p2:"",

        

      }, 

  ]

  return (
    <>
      {/* <Mouse/> */}
      <Router>
      
       <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/feature' element={<Feature/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/' element={<Home/>}/>
        
       </Routes>
       <Footer/>
      </Router>
     
    </>
  )
}

export default App
