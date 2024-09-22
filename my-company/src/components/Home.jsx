import logo from './images/logo.png';

function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <img src={logo} alt="Company Logo" style={{ width: '150px' }} />
      <h1>Welcome to Our Company</h1>
      <p>We are dedicated to delivering excellence in all our services.</p>
    </div>
  );
}

export default Home;
