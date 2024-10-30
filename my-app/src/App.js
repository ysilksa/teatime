import './App.css';

function App() {
  return (
    <div className="flex-container-2">
      {/* Left section (Dashboard) */}
      <div>
        <h2>TeaTime</h2>
        <h3>Dashboard</h3>
        <div className="flex-container">
          <div>Home</div>
          <div>Discover</div>
          <div>Profile</div>
        </div>
      </div>

      {/* Vertical dividing line */}
      <div className="vertical-line"></div>

      {/* Right section */}
      <div className="flex-container">
        {/* About Us */}
        <div className="flex-container-2">
          <div>
            <h2>About Us</h2>
            <p>We aim to connect the world through a common shared drink- milk tea!</p>
          </div>

          {/* Image carousel */}
          <div className="image-container">
            <img src="https://i.imgur.com/8e7CJOe.jpeg" alt="Oreo Creme Brulee Boba from Ume Tea" className="image" />
            <img src="https://i.imgur.com/2XzeXKP.jpeg" alt="Peach tea from Kung Fu Tea collaboration" className="image lower" />
            <img src="https://i.imgur.com/qTt0Sq4.jpeg" alt="Mango Sago drink from Ume Tea" className="image" />
          </div>
        </div>

        {/* Horizontal line */}
        <hr className="custom-line" />

        {/* Why Us and Contact Us */}
        <div className="flex-container-horizontal-wide-gap">
          <div className="flex-container-vertical-center">
            <h3>Why Us?</h3>
            <div className="rectangle-background">
              <p>Finding opportunities to meet new people can be hard...</p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex-container-vertical-center">
            <h3>Contact Us!</h3>
            <button className="social-media-button">Email</button>
            <button className="social-media-button">Instagram</button>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>Made by Isabella Yan (Chisa)</p>
        </div>
      </div>
    </div>
  );
}

export default App;
