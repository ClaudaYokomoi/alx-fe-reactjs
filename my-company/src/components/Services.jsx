import servicesImage from './images/services-image.jpg';

function Services() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <img src={servicesImage} alt="Our Services" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
      <h1>Our Services</h1>
      <ul>
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
