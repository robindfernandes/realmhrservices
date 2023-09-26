import React from 'react';
import Image from 'next/image';
import RealmHR1 from '../public/RealmHR1.jpg';
import RealmHR2 from '../public/RealmHR2.jpg';
import RealmHR3 from '../public/RealmHR3.jpg';

const IndexPage = () => {
  return (
    <div>
      <h1>We are RealmHR Services</h1>
      <div>
        <Image
          src={RealmHR1}
          alt="Image 1"
          width={400} // Set the desired width
          height={300} // Set the desired height
        />
        <p>Customer Delight is in our DNA</p>
      </div>
      <div>
        <Image
          src={RealmHR2}
          alt="Image 2"
          width={400}
          height={300}
        />
        <p>Personal Touch</p>
      </div>
      <div>
        <Image
          src={RealmHR3}
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
