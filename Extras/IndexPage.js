import React from 'react';
import Image from 'next/image';

const IndexPage = () => {
  console.log("Rendering IndexPage");

  return (
    <div>
      {/*<h1>We are RealmHR Services</h1>*/}
      <div>
        <Image
          src="/one.jpg"
          alt="Image 1"
          className="image" // Add your CSS class here
          style={{ width: '200px', height: 'auto' }}
        />
        <p>Customer Delight is in our DNA</p>
      </div>
      {/*<div>
        <Image
          src="/two.jpg"
          alt="Image 2"
          className="image" // Add your CSS class here
          style={{ width: '200px', height: 'auto' }}
        />
        <p>Personal Touch</p>
      </div>
      <div>
        <Image
          src="/three.jpg"
          alt="Image 3"
          className="image" // Add your CSS class here
          style={{ width: '200px', height: 'auto' }}
        />
        <p>With you at every step</p>
  </div> */}
  </div>
  );
};

export default IndexPage;
