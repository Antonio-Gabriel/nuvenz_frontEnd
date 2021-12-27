import sendSvg from "../../assets/images/send.svg";
import googleSvg from "../../assets/images/google.svg";
import facebookSvg from "../../assets/images/facebook.svg";
import whastAppSvg from "../../assets/images/whatsApp.svg";

import "./styles.scss";

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="columns">
            <div className="column is-2">
              <h3>Product</h3>
              <ul>
                <li>Overview</li>
                <li>Features</li>
                <li>Tutorials</li>
                <li>Pricing</li>
                <li>Releases</li>
              </ul>
            </div>
            <div className="column is-2">
              <h3>Company</h3>
              <ul>
                <li>About</li>
                <li>Press</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Partners</li>
              </ul>
            </div>
            <div className="column is-2">
              <h3>Support</h3>
              <ul>
                <li>Help Center</li>
                <li>Terms of service</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Status</li>
              </ul>
            </div>
            <div className="column is-2">
              <h3>Location</h3>
              <ul>
                <li>Help Center</li>
                <li>Terms of service</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className="column is-4">
              <h3>Stay up to date</h3>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Amet
                proin.
              </p>

              <div className="newslatter">
                <input type="text" placeholder="Your email address" />
                <img src={sendSvg} alt="send" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="footer-bottom">
        <div className="container">
          <span>© 2021 Nuvenz. All rights reserved</span>

          <div className="social">
            <div className="social-card">
              <img src={whastAppSvg} alt="WhatsApp" />
            </div>
            <div className="social-card">
              <img src={googleSvg} alt="google" />
            </div>
            <div className="social-card">
              <img src={facebookSvg} alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
