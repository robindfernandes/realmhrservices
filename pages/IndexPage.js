// pages/IndexPage.js
import React from 'react';
import Image from 'next/image';
import Image1 from '../public/RealmHR1.jpg';
import Image2 from '../public/RealmHR2.jpg';
import Image3 from '../public/RealmHR3.jpg';

const IndexPage = () => {
  return (
    <div>
      <h1>We are RealmHR Services</h1>
      <div>
        <Image
          src={Image1}
          alt="Image 1"
          width={400} // Set the desired width
          height={300} // Set the desired height
        />
        <p>Csutomer Delight is in our DNA</p>
      </div>
      <div>
        <Image
          src={Image2}
          alt="Image 2"
          width={400}
          height={300}
        />
        <p>Personal Touch</p>
      </div>
      <div>
        <Image
          src={Image3}
          alt="Image 3"
          width={400}
          height={300}
        />
        <p>With you at every step</p>
      </div>
    </div>
  );
};

export default IndexPage;