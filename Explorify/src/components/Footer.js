import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Explorify</h1>
          <p>Your Gateway to Endless Exploration Starts Here...</p>
        </div>
        <div>
          <a href="https://www.youtube.com/">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://twitter.com/">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>

        <div>
          <h4>Community</h4>
          <a href="https://github.com/aman1394">Github</a>
          <a href="/">Issues</a>
          <a href="/">Projects</a>
          <a href="https://twitter.com/singhaman131994">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">TroubleShooting</a>
          <a href="https://www.linkedin.com/in/aman-singh-855a20105/">
            Contact Us
          </a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
