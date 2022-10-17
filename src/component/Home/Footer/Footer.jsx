import "./Footer.scss";
import imgFoot from "./../../../assets/payment.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="parentFooter">
            <div className="linksFooter1">
              <h2>DORSIN</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="linksFooter1">
              <h2>Information</h2>
              <ul>
                <li>
                  <a href="/">Terms & Condition</a>
                </li>
                <li>
                  <a href="/">About us</a>
                </li>
                <li>
                  <a href="/">Jobs</a>
                </li>
                <li>
                  <a href="/">Bookmarks</a>
                </li>
              </ul>
            </div>
            <div className="linksFooter1">
              <h2>Support</h2>
              <ul>
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Disscusion</a>
                </li>
              </ul>
            </div>
            <div className="linksFooter1">
              <h2>Subscribe</h2>
              <p>
                In an ideal world this text wouldn’t exist, a client would
                acknowledge the importance of having web copy before the design
                starts.
              </p>
              <input type="email" name="" id="" placeholder="Email" />
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        <div className="container">
          <p>2021 - 2022 © Dorsin - Themesbrand payment</p>
        </div>
        <div>
          <img src={imgFoot} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
