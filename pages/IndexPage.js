import React from 'react';
import Image from 'next/image';

const IndexPage = () => {
  return (
    <div>
      <h1>We are RealmHR Services</h1>
      <div>
        <Image
          src="/RealmHR1.jpg" //Use absolute path
          alt="Image 1"
          width={400} // Set the desired width
          height={300} // Set the desired height
        />
        <p>Customer Delight is in our DNA</p>
      </div>
      <div>
        <Image
          src="/RealmHR2.jpg" //Use absolute path
          alt="Image 2"
          width={400}
          height={300}
        />
        <p>Personal Touch</p>
      </div>
      <div>
        <Image
          src="/RealmHR3.jpg" //Use absolute path
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
