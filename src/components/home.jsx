import React from 'react';
import Footer from './footer';

const Home = () => {
  return (
    <div>
      <h1><u>Welcome to Order Inventory</u></h1>
      <div style={{marginLeft:"300px"}}>
        <img src='https://img.freepik.com/premium-vector/parcel-boxes-shopping-cart-floating-air-all-beside-smartphone-all-objects-orange-background-online-shopping-concept-design-3d-vector-ad-design_425581-49.jpg?size=626&ext=jpg&ga=GA1.1.287724306.1702226192&semt=ais' alt='image1' height='350px' />
        <img src='https://img.freepik.com/free-vector/order-now-banner_23-2148711629.jpg?size=626&ext=jpg&ga=GA1.1.287724306.1702226192&semt=ais' alt='image1' height='350px' />

      </div>
      <div>
        <h1><u>About</u></h1>
        <p>"Order Inventory" is a comprehensive e-commerce platform designed to provide customers with a seamless and user-friendly experience in browsing, ordering, and tracking shipments. With a diverse range of products available for exploration, customers can effortlessly browse through our extensive inventory to discover items that meet their needs and preferences.<br /></p>

        <p>Our ordering process is designed for simplicity and efficiency, allowing customers to place orders with ease. From selecting products to adding them to the cart and completing the checkout process, we strive to make each step straightforward and intuitive.</p>

        <p>Once an order is placed, customers can conveniently track the shipment status in real-time. We understand the importance of keeping our customers informed, and our tracking feature ensures transparency throughout the delivery journey. Whether it's monitoring the order as it is processed or tracking the package until it reaches its destination, our platform provides the tools for customers to stay connected and informed.</p>

        <p>At "Order Inventory," we prioritize customer satisfaction by offering a seamless, reliable, and transparent shopping experience. Our commitment to excellence extends from the quality of our products to the efficiency of our ordering and tracking processes, ensuring that every customer enjoys a hassle-free and enjoyable shopping journey with us.</p>

        <Footer className="footer" />
      </div>
    </div>
  );
}

export default Home;
