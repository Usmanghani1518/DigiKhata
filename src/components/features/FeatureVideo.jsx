import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import youtubethumnail1 from '../../imagies/features/youtube_thumnail1.jpg';
import youtubethumnail2 from '../../imagies/features/youtube_thumnail2.jpg';
import youtubethumnail3 from '../../imagies/features/youtube_thumnail3.jpg';
import youtubethumnail4 from '../../imagies/features/youtube_thumnail4.jpg';
import youtubethumnail5 from '../../imagies/features/youtube_thumnail5.jpg';
import youtubethumnail6 from '../../imagies/features/youtube_thumnail6.jpg';
import { FaCaretRight } from 'react-icons/fa';

const FeatureVideo = () => {
  const mod = [
    {
      img: youtubethumnail1,
      videoSrc: 'https://www.youtube.com/embed/Y-0I4PKNH9E',
      cont: 'How to login to DigiKhata app? ڈیجی کھاتہ ایپ میں لاگ اِن کیسے کرنے کا طریقہ',
    },
    {
      img: youtubethumnail2,
      videoSrc: 'https://www.youtube.com/embed/Y-0I4PKNH9E',
      cont: 'ڈیجی کھاتہ ایپ میں کوئی بھی انٹری ایڈت یا ڈیلیٹ کرنے کا طریقہ | Edit/ Delete entry in DigiKhata app?',
    },
    {
      img: youtubethumnail3,
      videoSrc: 'https://www.youtube.com/embed/Y-0I4PKNH9E',
      cont: 'How to send payment reminders to customers in DigiKhata? کسٹمر کو پیمنٹ ریمائنڈر بھیجنے کا طریقہ',
    },
    {
      img: youtubethumnail4,
      videoSrc: 'https://www.youtube.com/embed/Y-0I4PKNH9E',
      cont: 'How to add new customer in DigiKhata? ڈیجی کھاتہ میں نیا کسٹمر ایڈ کرنےکا طریقہ',
    },
    {
      img: youtubethumnail5,
      videoSrc: 'https://www.youtube.com/embed/Y-0I4PKNH9E',
      cont: 'Digi Khata | Business card banane, download karne or share karne ka tarika!',
    },
    {
      img: youtubethumnail6,
      videoSrc: 'https://www.youtube.com/embed/Y-0I4PKNH9E',
      cont: 'Digi Khata | Help & Support - DigiKhata Team sy rabta karen!',
    },
  ];
  const [modalStates, setModalStates] = useState(mod.map(() => false));

  const handleClose = (index) => {
    const newModalStates = [...modalStates];
    newModalStates[index] = false;
    setModalStates(newModalStates);
  };

  const handleShow = (index) => {
    const newModalStates = [...modalStates];
    newModalStates[index] = true;
    setModalStates(newModalStates);
  };

  return (
    <div className="blog ">
      <div className="d-grid pb-5 py-4 px-2 ">
        {mod.map((a, index) => (
        <div key={index} style={{borderRadius:'8px'}} className="bolg-box-container bg-white mx-3 blog-box">
        <div className="bolg-box " style={{ position: 'relative' }}>
          <img src={a.img} className='img-fluid' alt="" style={{ margin: '0'  }} /> {/* Set margin to 0 */}
          <div className="d-flex my-auto position-absolute" style={{ top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
            {/* Play button icon */}
            <Button
              variant="transparent"
              style={{
                background: 'none',
                border: 'none',
                padding: 0, // Set padding to 0
                width: '58px', // Adjust width to match the icon size plus the border width
                height: '58px', // Adjust height to match the icon size plus the border width
              }}
              onClick={() => handleShow(index)}
            >
              <FaCaretRight size={50} color="white" style={{ borderRadius: '50%', backgroundColor: 'orange', border: '4px solid white' }} />
            </Button>
          </div>
        </div>
      
        {/* Paragraph */}
        <p className="p-2">{a.cont}</p>
      
        {/* Modal */}
        <Modal show={modalStates[index]} onHide={() => handleClose(index)} animation={false}>
          <Modal.Body style={{ display: 'flex', flexDirection: 'row' }}>
            <iframe
              width="500"
              height="500"
              src={a.videoSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Modal.Body>
        </Modal>
      </div>
      
      
       
        
        ))}
      </div>
    </div>
  );
};

export default FeatureVideo;
