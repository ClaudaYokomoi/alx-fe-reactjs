import aboutImage from './images/about-image.jpg';

function About() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <img src={aboutImage} alt="About Us" style={{ width: '100%', height: 'auto', marginBottom: '20px' }} />
      <h1>About Us</h1>
      <p>Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.</p>
    </div>
  );
}

export default About;
