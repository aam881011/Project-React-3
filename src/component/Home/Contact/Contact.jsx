import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h2>GET IN TOUCH</h2>
      <p>
        We thrive when coming up with innovative ideas but also understand that
        a smart concept should be <br /> supported with measurable results.
      </p>
      <div className="container">
        <div className="contentConta">
          <div className="information">
            <h4>Office Address 1:</h4>
            <p>4461 Cedar Street Moro, AR 72368</p>
            <h4>Office Address 2:</h4>
            <p>2467 Swick Hill Street</p>
            <p>New Orleans, LA 70171</p>
            <h4>Working Hours:</h4>
            <p>9:00AM To 6:00PM</p>
          </div>
          <div className="inputs">
            <div className="row1">
              <input type="text" placeholder="Your name" />
              <input type="email" name="" id="" placeholder="Your email" />
            </div>
            <div className="row2">
              <input type="text" placeholder="Your Subject..." />
            </div>
            <div className="row3">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div className="row4">
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <div className="soci">
        <div className="container">
          <div className="social">
            <div className="socialmedia1">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-google-plus-g"></i>
              <i class="fa-brands fa-dribbble"></i>
            </div>
            <div className="socialmedia2">
              <h5>
                <i class="fa-solid fa-phone"></i>
                +91 123 4556 789
              </h5>
              <h5>
                <i class="fa-regular fa-envelope-open"></i>
                Support@info.com
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
