import "./Features.scss";
import online from "./../../../assets/online-world.svg";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="featucontent">
          <div>
            <h2>
              A digital web design studio creating modern & engaging online
              experiences
            </h2>
            <p>
              Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows
              by their place and supplies it with the necessary regelialia.
            </p>
            <p>We put a lot of effort in design.</p>
            <p>The most important ingredient of successful website.</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit.</p>
            <p>Submit Your Orgnization.</p>
            <button>Learn more</button>
          </div>
          <div>
            <img src={online} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
