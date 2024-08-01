import React from 'react';
import './Contact.css';
import myemail from '../assets/myemail.png';
import myinstagram from '../assets/myinstagram.png';
import mynumber from '../assets/mynumber.png';

export default function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-info'>
        <h1>Contact:</h1>
        <p>
          <b id="c">Email:</b>&nbsp;dharshini3102k3@gmail.com<br />
          <b id="c">Phone:</b>&nbsp;6281168212<br />
          <b id="c">Location:</b>&nbsp;Visakhapatnam, Andhra Pradesh <br />
          <b id="c">Pincode:</b>&nbsp;530011
        </p>
      </div>
      <div className='qr-codes'>
        <div className='qr-code-item'>
          <img src={myemail} alt='Email QR code' className='qr-code' />
          <h3>Email</h3>
        </div>
        <div className='qr-code-item'>
          <img src={myinstagram} alt='Instagram QR code' className='qr-code' />
          <h3>Instagram</h3>
        </div>
        <div className='qr-code-item'>
          <img src={mynumber} alt='Phone number QR code' className='qr-code' />
          <h3>Whatsapp</h3>
        </div>
      </div>
      <h4>If your are facing any issues with Email QR code you can message me through Instagram and Whatsapp</h4>
    </div>
  );
}
