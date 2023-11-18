// BlogContext.js

import {React , createContext, useContext } from 'react';

import hbl from '../../imagies/blogs/hbl.png';
import oneLink from '../../imagies/blogs/1link.png';
import fiveApps from '../../imagies/blogs/5apps.jpg';
import mainFeature from '../../imagies/blogs/5main-feature.jpg';
import accounting from '../../imagies/blogs/5things-accunting.jpg';
import bestTime from '../../imagies/blogs/best-time.jpg';
import essential from '../../imagies/blogs/essential.jpg';
import howManage from '../../imagies/blogs/how-manage.jpg';
import kunda from '../../imagies/blogs/kunda.jpg';
import jazz from '../../imagies/blogs/jazz.jpg';
import smallBusiness from '../../imagies/blogs/small-business.jpg';
import telenor from '../../imagies/blogs/telenor.jpg';
// import Button from "react-bootstrap/Button";

// import Modal from "react-bootstrap/Modal";
// import youtubethumnail1 from '../../imagies/features/youtube_thumnail1.jpg'
// import youtubethumnail2 from '../../imagies/features/youtube_thumnail2.jpg'
// import youtubethumnail3 from '../../imagies/features/youtube_thumnail3.jpg'
// import youtubethumnail4 from '../../imagies/features/youtube_thumnail4.jpg'
// import youtubethumnail5 from '../../imagies/features/youtube_thumnail5.jpg'
// import youtubethumnail6 from '../../imagies/features/youtube_thumnail6.jpg'
// import {FaYoutube} from "react-icons/fa";

// import "./Blog.css"
const BlogContext = createContext();

export const useBlogContext = () => {
  return useContext(BlogContext);
};

export const BlogProvider = ({ children }) => {
    const BlogInfo=[
        {
          id:'1Link',
          img:oneLink,
          sh:'1LINK ONBOARDS DIGIKHATA AS AN INITI...',
          sp:'Wednesday, April 5, 2023, marked a significant milestone for  #DigiKhata  and SMEs in Pakistan. It was a day filled with excitement and anticipation as Mr. Adnan Aslam, the CEO of #DigiKhata....',
          heading:'1LINK ONBOARDS DIGIKHATA AS AN INITIATOR ON 1BILL SERVICES',
          p:'Wednesday, April 5, 2023, marked a significant milestone for  #DigiKhata  and SMEs in Pakistan. It was a day filled with excitement and anticipation as Mr. Adnan Aslam, the CEO of #DigiKhata, and Mr. Najeeb Agrawalla, the CEO of 1LINK (Pvt) Limited, came together to sign the 1LINK (Pvt) Limited Bill Initiator agreement.',
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
          img:hbl,
          sh:'Signing Ceremony Between HBL Microf...',
          sp:'On May 24, 2023,  #DigiKhata  made an exciting announcement that has the potential to revolutionize the landscape of small and medium-sized enterprises (SMEs). In a strategic partnership with...',
          heading:'Signing Ceremony Between HBL Microfinance Bank and DigiKhata to pave the way for merchant lending',
          p:'On May 24, 2023, #DigiKhata  made an exciting announcement that has the potential to revolutionize the landscape of small and medium-sized enterprises (SMEs). In a strategic partnership with #HBL Microfinance Bank, #DigiKhata is taking a giant leap forward in offering comprehensive digital lending solutions to address the challenges faced by SMEs in obtaining timely and accessible financing.',
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
          img:kunda,
          sh:'DigiKhata Enters Into Strategic Par...',
          sp:'On 4 August 2022, Jalal ul Haq (CEO of Kuunda) and Bilal Anjum (Co-Founder & COO of DigiKhata Pvt Ltd.) signed a collaboration agreement between DigiKhata (Pakistan-based fintech startup...',
          heading:'DigiKhata Enters Into Strategic Partnership With Kuunda On 4 August 2022 ',
          p:"On 4 August 2022, Jalal ul Haq (CEO of Kuunda) and Bilal Anjum (Co-Founder & COO of DigiKhata Pvt Ltd.) signed a collaboration agreement between DigiKhata (Pakistan-based fintech startup) and Kuunda to bring better financial liquidity solutions for millions of airtime retailers of DigiKhata.",
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
          img:bestTime,
          sh:'When is the best time to switch...',
          sp:'When you start a new company, it may be perfectly fine to use spreadsheets to handle your accounting and bookkeeping. However,  you should be prepared for a time when you will eventually...',
          heading:'When is the best time to switch to an accounting application? ',
          p1:"When you start a new company, it may be perfectly fine to use spreadsheets to handle your accounting and bookkeeping. However,  you should be prepared for a time when you will eventually have to bid farewell to spreadsheets or paper records and will have to switch to an accounting application.",
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
          id:'5 feature',
          img:mainFeature,
          sh:'5 main features of Digikhatas...',
          sp:'Digi Khata is one of the best and awesome bookkeeping and accounting software and app to manage your business accounts and ledger without any manual hassle. It is a free online khata book...',
          heading:'5 main features of Digikhata and how they can benefit you? ',
          p1:"Digi Khata is one of the best and awesome bookkeeping and accounting software and app to manage your business accounts and ledger without any manual hassle. It is a free online khata book app to control and manage your personal and business accounts. There is a wide range of different and unique features it offers to its users to manage their transactions, payments, and installments, etc. These features help the users to manage their business and personal accounts very easily.",
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
          id:'telenor',
          img:telenor,
          sh:'DigiKhata, Velocity’s 7th Cohort...',
          sp:'Micro, Small, and Medium Enterprises (MSMEs) provide a big chunk when it comes to the growth of economies globally. SMEDA (Small and Medium Enterprises Development Authority) says that,...',
          heading:'DigiKhata, Velocity’s 7th Cohort Startup Has Partnered with Telenor Pakistan and Easypaisa ',
          p1:"Micro, Small, and Medium Enterprises (MSMEs) provide a big chunk when it comes to the growth of economies globally. SMEDA (Small and Medium Enterprises Development Authority) says that, In Pakistan, SMEs have a 40% contribution to the GDP. Moreover, the majority of the businesses in the whole world come under the category of SMEs and they generate over 50% of jobs worldwide. ",
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
          id:'jazz',
          img:jazz,
          sh:'Jazz Business Welcomes Digikhata to...',
          sp:'It’s a proud moment for Digi Khata as it has collaborated with jazz businesses to promote financial stability in Pakistan. “Digi Khata is a digital ledger application that simplifies bookkeeping...',
          heading:'Jazz Business Welcomes Digikhata to Its Family ',
          p1:"It’s a proud moment for Digi Khata as it has collaborated with jazz businesses to promote financial stability in Pakistan. “Digi Khata is a digital ledger application that simplifies bookkeeping for micro, small and medium enterprises in Pakistan”, said Mr. Adnan Aslam, the founder of Digikhata. “This is the beginning of a very exciting journey with a startup for us”. said Adnan Waheed, head of IoT and digital business solutions, Jazz.",
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
          id:'small-business',
          img:smallBusiness,
          sh:'How Digikhata Can Help Small Bus...',
          sp:'It is a time when spreadsheets are not going to cut it for businesses anymore. There is a need for accounting software in pakistan in 2021 for small businesses because they are vital for ...',
          heading:'How Digikhata Can Help Small Businesses ',
          p1:"It is a time when spreadsheets are not going to cut it for businesses anymore. There is a need for accounting software in pakistan in 2021 for small businesses because they are vital for staying organized. The sensitive information and reports of an organization can be organized efficiently by using appropriate financial accounting software deployed within an organization and a small business.",
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
          id:'essential',
          img:essential,
          sh:'An Essential Business Manageme...',
          sp:'Digi Khata was launched to help small businesses like grocery shops, fruits and vegetable shops, and small pharmacies. Since then, this app has made life easier for small business owners...',
          heading:'An Essential Business Management App for Small Businesses in 2021 ',
          p1:"Digi Khata was launched to help small businesses like grocery shops, fruits and vegetable shops, and small pharmacies. Since then, this app has made life easier for small business owners and common people alike.",
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
          id:'accounting',
          img:accounting,
          sh:'5 Things that an Accounting Sof...',
          sp:'Having ERP software is very important so that the business operations can move efficiently. An ERP accounting software is beneficial for different types of businesses and organizations. The...',
          heading:'5 Things that an Accounting Software Must Have ',
          p1:"Having ERP software is very important so that the business operations can move efficiently. An ERP accounting software is beneficial for different types of businesses and organizations. The accounting software for small businesses have tools that include general ledger, trial balance, journals account payable, and accounts receivable.",
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
            id:'how Manage',
            img:howManage,
            sh:'How to Manage Company’s accounts...',
            sp:'Behind every successful business or company, there is a smart management system of accounts and finances.When starting or running a company, healthy financial management is fundamental to...',
            heading:'How to Manage Company’s accounts and finances Using Digi khata ',
            p1:"Behind every successful business or company, there is a smart management system of accounts and finances.When starting or running a company, healthy financial management is fundamental to ensure your company’s successful running. However, this essential requirement can be a daunting prospect for new business owners who don’t have any prior experience with financial statements and account management. Therefore they find themselves overwhelmed with record-keeping of transactions and receipts costing them a lack in business progress.",
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
      },    {
            id:'Top 5',
            img:fiveApps,
            sh:'Top 5 Apps for Business Transact...',
            sp:'Behind every successful business, there are people who work tirelessly to make it flourish. One of the key works to run a successful business is to have a strong management system that loo...',
            heading:'Top 5 Apps for Business Transactions Records and Accounting ',
            p1:"Behind every successful business, there are people who work tirelessly to make it flourish. One of the key works to run a successful business is to have a strong management system that looks over all the expanses of the said business. Doing it manually requires a lot of hard work and manpower, which, frankly speaking, is a waste of time. So, in order to avoid the burden and the mistakes which might come with it, one should use the accounting softwares.",
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
          },  {
            id:'small business',
            img:smallBusiness,
            sh:'How does DigiKhata work for small bu...',
            sp:'Are you looking for an easy cash management system and accounting app for managing your small business records? Digitkhata brings you a way to maintain the stream of your cash flow in a ...',
            heading:'How does DigiKhata work for small businesses? A step-by-step guide ',
            p1:"Are you looking for an easy cash management system and accounting app for managing your small business records? Digitkhata brings you a way to maintain the stream of your cash flow in a single place. Having your financial records here and there is always a hassle, and it is time to get rid of it!",
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
          }
          //  {
          //   id:'accounting',
          //   img:accounting,
          //   heading:' ',
          //   p1:"",
          //   p2:"",
          //   p3:"",
          //   p4:"",
          //   p5:"",
          //   p6:"",
          //   p7:"",
          //   p8:"",
          //   p9:"",
          //   p2:"",
          //   p2:"",
          // }, 
  
    ]

  return <BlogContext.Provider value={BlogInfo}>{children}</BlogContext.Provider>;
};



// export const ModalVideo = () => {
  
//   const mod=[
//     {
//       img:youtubethumnail1,
//       videoSrc: 'https://www.youtube.com/embed/Y-0I4PKNH9E',
//       cont:'How to login to DigiKhata app? ڈیجی کھاتہ ایپ میں لاگ اِن کیسے کرنے کا طریقہ'

//     },
//     {
//       img:youtubethumnail2,
//       videoSrc: 'https://www.youtube.com/embed/Y-0I4PKNH9E',
//       cont:'ڈیجی کھاتہ ایپ میں کوئی بھی انٹری ایڈت یا ڈیلیٹ کرنے کا طریقہ | Edit/ Delete entry in DigiKhata app?'

//     },{
//       img:youtubethumnail3,
//       videoSrc: 'https://www.youtube.com/embed/Y-0I4PKNH9E',
//       cont:'How to send payment reminders to customers in DigiKhata? کسٹمر کو پیمنٹ ریمائنڈر بھیجنے کا طریقہ'

//     },{
//       img:youtubethumnail4,
//       videoSrc: 'https://www.youtube.com/embed/Y-0I4PKNH9E',
//       cont:'How to add new customer in DigiKhata? ڈیجی کھاتہ میں نیا کسٹمر ایڈ کرنےکا طریقہ'

//     },{
//       img:youtubethumnail5,
//       videoSrc: 'https://www.youtube.com/embed/Y-0I4PKNH9E',
//       cont:'Digi Khata | Business card banane, download karne or share karne ka tarika!'

//     },{
//       img:youtubethumnail6,
//       videoSrc: 'https://www.youtube.com/embed/Y-0I4PKNH9E',
//       cont:'Digi Khata | Help & Support - DigiKhata Team sy rabta karen!'

//     },
//   ]
//   const [modalStates, setModalStates] = useState(mod.map(() => false));

//   const handleClose = (index) => {
//     const newModalStates = [...modalStates];
//     newModalStates[index] = false;
//     setModalStates(newModalStates);
//   };

//   const handleShow = (index) => {
//     const newModalStates = [...modalStates];
//     newModalStates[index] = true;
//     setModalStates(newModalStates);
//   };

 
//   return (
//     <>
//     <div className="blog">
//       <div className="d-grid mb-5 ">
//         {mod.map((a, index) => (
//           <div key={index} className=" bg-white px-3 py-5 bolg-box">
//             <div className="d-flex my-auto position-relative" style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
//               {/* Image */}
//               <img src={a.img} alt="" style={{ width: '100%', height: '100%' }} />

//               {/* Play button icon */}
//               <Button
//                 variant="transparent"
//                 style={{
//                   position: 'absolute',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   height: '100%',
//                   width: '100%',
//                   background: 'none',
//                   border: 'none',
//                 }}
//                 onClick={() => handleShow(index)}
//               >
//                 <FaYoutube size={50} color="orange" style={{ backgroundColor: 'white' }} />
//               </Button>
//             </div>
//             <p className="p-2">{a.cont}</p>

//             {/* Modal */}
//             <Modal show={modalStates[index]} onHide={() => handleClose(index)} animation={false}>
//               <Modal.Body style={{ display: 'flex', flexDirection: 'row' }}>
//                 <iframe
//                   width="500"
//                   height="500"
//                   src={a.videoSrc}
//                   title="YouTube video player"
//                   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </Modal.Body>
//             </Modal>
//           </div>
//         ))}
//       </div>
//       </div>
//     </>
//   );
// };