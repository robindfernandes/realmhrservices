import Image from 'next/image';

const IndexPage = () => {
    console.log("Rendering IndexPage"); // Add this line
      return (
        <div>
          <h1>We are RealmHR Services</h1>
          <div>
          <Image
      src="/realm1.png"
      alt="Image 1"
      className="image" // Add your CSS class here
      style={{ width: '200px', height: 'auto' }}
    />
            <p>Customer Delight is in our DNA</p>
          </div>
          <div>
          <Image
      src="/realm2.png"
      alt="Image 1"
      className="image" // Add your CSS class here
      style={{ width: '200px', height: 'auto' }}
    />
            <p>Personal Touch</p>
          </div>
          <div>
          <Image
      src="/realm3.png"
      alt="Image 1"
      className="image" // Add your CSS class here
      style={{ width: '200px', height: 'auto' }}
    />
            <p>With you at every step</p>
          </div>
        </div>
      );
    };
    export { IndexPage };