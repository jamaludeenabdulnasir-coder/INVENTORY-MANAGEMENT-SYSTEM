import { Link } from "react-router-dom";
import FaqSection from "../components/FaqSection";

const stories = [
  {
    img: "icon/customer 1.png",
    name: "Max Buy",
    title: "MaxBuy Streamlines 40+ Stores with Kilimax",
    text: "One unified system cut through growing complexity, boosting stock accuracy, staff control, and turnover within months.",
    to: "/stories/maxbuy",
  },
  {
    img: "icon/customer 2.jpg",
    name: "Toyar",
    title: "Toyar's Breakthrough with Kilimax",
    text: "Digitizing manual processes delivered faster operations, higher accuracy, and rapid growth - far sooner than expected.",
    to: "/stories/toya",
  },
  {
    img: "icon/customer 3.jpg",
    name: "Trucom",
    title: "Trucom Powers Faster Retail with Kilimax",
    text: "By fixing slow reconciliation, stock gaps, and downtime, Trucom's Garden City shop moved to smoother and smarter retail.",
    to: "#",
  },
];

export default function Pricing() {
  return (
    <main>
      <div className="pricing-hero">
        <img src="icon/shot.png" alt="" />
      </div>

      <div className="pricing-cta">
        <h6>All Business operations, Simplified</h6>
        <div className="operations" style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
          <button className="business">
            <Link to="/signin">Point of Sale</Link>
          </button>
          <button className="business">
            <Link to="/signin">ERP</Link>
          </button>
          <button className="business">
            <Link to="/signin">E-Commerce</Link>
          </button>
        </div>

        <h6 className="sub-title">KiliPOs: Sell Anywhere,Anytime</h6>
        <p>
          Sell online seamlessly and continue serving customers without internet. Enjoy fast
          checkout, mobile payment options, multi-terminal access,
          <br /> and seamless integration with your online store.
        </p>
        <button id="bar">
          <Link to="/getstarted">Get Started for Free</Link>
        </button>
      </div>

      <img src="icon/shot1.png" alt="" style={{ width: "100%", padding: "20px" }} />

      <div style={{ background: "blueviolet", padding: "20px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          <img src="icon/shot2.png" alt="" width="400" height="300" />
          <img src="icon/shot3.png" alt="" width="400" height="300" />
          <img src="icon/shot4.png" alt="" width="400" height="300" />
        </div>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", paddingTop: "20px" }}>
          <img src="icon/shot2.png" alt="" width="400" height="300" />
          <img src="icon/shot3.png" alt="" width="400" height="300" />
          <img src="icon/shot4.png" alt="" width="400" height="300" />
        </div>
      </div>

      <div style={{ padding: "40px 20px" }}>
        <h6>Integrate with Your Preferred Tools</h6>
        <p style={{ display: "flex", justifyContent: "center", fontSize: "30px", textAlign: "center" }}>
          Extend the scope of Kilimax to connect with your favourite business tools and fulfil
          customer needs.
        </p>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="bar1">
            <Link to="/signin">Faster checkout</Link>
          </button>
          <button className="bar1">
            <Link to="/signin">Fewer Stock-outs</Link>
          </button>
          <button className="bar1">
            <Link to="/signin">Smarter Cash Collection</Link>
          </button>
        </div>
      </div>

      <div className="logo-row">
        <img src="icon/logo.png" alt="" />
        <img src="icon/logo1.png" alt="" />
        <img src="icon/logo2.png" alt="" />
        <img src="icon/logo3.png" alt="" />
      </div>
      <div className="logo-row">
        <img src="icon/logo4.png" alt="" />
        <img src="icon/logo5.png" alt="" />
        <img src="icon/logo6.png" alt="" />
        <img src="icon/logo7.png" alt="" />
      </div>

      <img src="icon/picture2.png" alt="" style={{ width: "100%" }} />

      <div>
        <h3>Blogs</h3>
        <p style={{ display: "flex", justifyContent: "center", fontSize: "50px", textAlign: "center" }}>
          Customer Stories
        </p>
        <p style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
          See how businesses across Africa are transforming operations with Kilimax - streamlining
          workflows, gaining visibility, and unlocking growth
        </p>
        <p style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
          through smarter, connected systems.
        </p>
        <button>
          <Link to="/customer">See all Stories</Link>
        </button>

        <div className="picture">
          {stories.map((s, i) => (
            <div key={i}>
              <img src={s.img} alt="" width="300" height="310" />
              <h4 className="highlight-green">{s.name}</h4>
              <p>{s.title}</p>
              <p>
                {s.text}
                <br />
                <Link className="read-story" to={s.to}>
                  Read Story →
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ paddingTop: "100px", textAlign: "center" }}>
        <img src="icon/picture1.png" alt="" style={{ maxWidth: "100%" }} />
        <img src="icon/picture2.png" alt="" style={{ paddingTop: "100px", maxWidth: "100%" }} />
        <img src="icon/picture3.png" alt="" style={{ maxWidth: "100%" }} />
      </div>

      <FaqSection />

      <div style={{ textAlign: "center" }}>
        <img style={{ padding: "200px 50px", maxWidth: "100%" }} src="icon/footer.png" alt="" />
      </div>
    </main>
  );
}
