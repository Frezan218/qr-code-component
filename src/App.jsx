import React from 'react';

import './index.css';

import qrImage from './images/image-qr-code.png';

function App() {
  return (
    <div style={{ backgroundColor: 'hsl(212, 45%, 89%)' }} className="h-screen flex ">
      <div
        style={{ height: '500px', width: '320px', backgroundColor: 'white' }}
        className="card rounded-3xl py-4 m-auto ">
        <div className="mx-4 card_image">
          <img className=" rounded-lg" src={qrImage} alt="" />
        </div>
        <div className="card_text block px-5">
          <h1 className="text-2xl py-4 font-bold">
            Impove your front-end skills by building projects
          </h1>
          <p className="opacity-60 pb-4">
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
