import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header-overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>We help startups launch their products</h1>
              <p>
                Etiam sed.Interdum consequat proin vestibulum class at a euismod
                mus luctus <br /> quam.Lorem ipsum dolor sit amet, consectetur
                adipisicing eli.
              </p>
            </div>
          </div>
          <form className="">
            <input type="email" placeholder="Email" />
            <button type="submit">subscribe</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
