import { Link } from "react-router-dom";
import FaqSection from "../components/FaqSection";

const boostFeatures = [
  "Smart ordering allows you to expand",
  "Manage your catalogue by adding or updating products in seconds",
  "Increase sales by converting more orders, faster",
  "Retain customer loyalty through consistent follow-ups",
];

const insightFeatures = [
  "Alert for low stock, slow-moving items, and sales drops",
  "Automatic credit and overdue payment reminders, keeping your cash flow steady",
  "Recommends which products to promote or restock",
  "Flags unprofitable or overstocked items",
];

const aiRows = [
  ["icon/laptop.png", "icon/screen 1.jpg", "icon/screen 2.jpg"],
  ["icon/screen 3.jpg", "icon/screen 4.jpg", "icon/screen 5.jpg"],
];

const stories = [
  {
    img: "icon/customer 1.png",
    name: "Max Buy",
    title: "MaxBuy Streamlines 40+ Stores with Kilimax",
    text: "One unified system cut through growing complexity, boosting stock accuracy, staff control, and turnover within months",
    to: "/stories/maxbuy",
  },
  {
    img: "icon/customer 2.jpg",
    name: "Toyar",
    title: "Toyar's Breakthrough with Kilimax",
    text: "Digitizing manual processes to deliver faster operations, higher accuracy, and rapid growth - far sooner than expected.",
    to: "/stories/toya",
  },
  {
    img: "icon/final1.jpg",
    name: "IKEN COMPUTERS LTD",
    title: "Iken Computers Kenya Scales Operations with Kilimax ERP & POS",
    text: "Iken Computers, Kenya's leading Hikvision distributor, streamlined inventory, sales, and customer management with KiliMax ERP & POS",
    to: "/stories/iken",
  },
];

function FeatureCard({ title, items, img }) {
  return (
    <div className="feature-card">
      <h4 className="document">{title}</h4>
      <ul className="document">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <img src={img} alt="" />
    </div>
  );
}

function AiFeatureRow({ images, light }) {
  return (
    <div className={`ai-features-section ${light ? "light" : ""}`}>
      <h3>AI Bot Features</h3>
      <div className="image">
        {images.map((img, i) => (
          <div key={i}>
            <img src={img} alt="" />
            <h4>AI Bot</h4>
            <p>
              Kilimax AI offers automatic detection and autofill of item details such as brand
              name, category, and variants. It also enables automatic placement of a sales order
              either via text or image recognition
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StoriesSection() {
  return (
    <div className="stories-section">
      <h3>Customer Stories</h3>
      <p className="stories-title">Customer Stories</p>
      <p className="stories-sub">
        See how businesses across Africa are transforming operations with Kilimax - streamlining
        workflows, gaining visibility, and unlocking growth
      </p>
      <p className="stories-sub">through smarter, connected systems.</p>
      <button>
        <Link to="/customer">See all Stories</Link>
      </button>

      <div className="picture">
        {stories.map((s, i) => (
          <div key={i}>
            <img src={s.img} alt="" width="300" height="310" />
            <h4 className="highlight-green">{s.name}</h4>
            <p>{s.title}</p>
            <p>{s.text}</p>
            <br />
            <Link className="read-story" to={s.to}>
              Read Story →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section>
        {/* HERO SECTION */}
        <div className="hero-section">
          <h1>The Only Software You Need For Your Wholesale Business</h1>

          <form action="" method="get" className="form">
            <button>
              <Link to="/signin">Get a free Trial →</Link>
            </button>
          </form>

          <img id="one" src="icon/KILI.png" alt="" />
        </div>

        <div className="img">
          <img id="two" src="icon/image 2 .png" alt="" />
          <img id="three" src="icon/image 3.png" alt="" />
        </div>

        {/* AI PARTNER SECTION */}
        <div className="ai-partner-section">
          <h3>KILLI - Your AI Business Partner</h3>
          <p>
            Kily, the AI in KilliMax, speaks your business language from WhatsApp orders to cash
            flow alerts, working quietly in the background so you can focus on selling.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="feature-section">
          <FeatureCard title="BOOST" items={boostFeatures} img="icon/phone1.png" />
          <FeatureCard
            title="Insights"
            items={insightFeatures}
            img="icon/Screenshot 2026-03-12 141549.png"
          />
        </div>

        {/* AI FEATURES GRID */}
        <AiFeatureRow images={aiRows[0]} />
        <AiFeatureRow images={aiRows[1]} light />

        {/* CUSTOMER STORIES */}
        <StoriesSection />

        {/* STATS BANNER */}
        <div className="stats-banner">
          <img src="icon/picture1.png" alt="" />
          <img src="icon/picture2.png" alt="" />
          <img src="icon/picture3.png" alt="" />
        </div>

        {/* FAQ SECTION */}
        <FaqSection />

        <div>
          <img
            style={{ padding: "200px 50px", maxWidth: "100%", height: "auto" }}
            src="icon/footer.png"
            alt=""
          />
        </div>

        <div className="img">
          <img id="two" src="icon/image 2 .png" alt="" />
          <img id="three" src="icon/image 3.png" alt="" />
        </div>

        {/* 2ND ANIMATION */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "20px" }}>
          <h3>KILLI - Your AI Business Partner</h3>
          <p style={{ flexDirection: "column" }}>
            Kily, the AI in KilliMax, speaks your business language from WhatsApp orders to cash
            flow <br /> alerts, working quietly in the background so you can focus on selling.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            border: "1px solid gray",
            margin: "30px 10px 30px",
            fontSize: "20px",
            background: "#E8F5F3",
            flexWrap: "wrap",
            padding: "20px",
          }}
        >
          <div style={{ flex: 1, minWidth: "280px" }}>
            <h4 className="document">BOOST</h4>
            <ul className="document">
              Sell faster with less effort
              {boostFeatures.map((f, i) => (
                <li key={i} style={{ padding: "20px" }}>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <img style={{ margin: "auto", maxWidth: "300px" }} src="icon/phone1.png" alt="" />
        </div>

        <div
          style={{
            display: "flex",
            padding: "30px",
            border: "1px solid gray",
            margin: "30px 10px 30px",
            fontSize: "20px",
            background: "#E8F5F3",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: "280px" }}>
            <h4 className="document">Insights</h4>
            <ul className="document">
              Know your problems before they hit your business
              {insightFeatures.map((f, i) => (
                <li key={i} style={{ padding: "20px" }}>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <img
            style={{ margin: "auto", maxWidth: "300px" }}
            src="icon/Screenshot 2026-03-12 141549.png"
            alt=""
          />
        </div>

        <AiFeatureRow images={aiRows[0]} light />
        <AiFeatureRow images={aiRows[1]} />

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
          <StoriesSection />

          <div style={{ paddingTop: "100px", textAlign: "center" }}>
            <img src="icon/picture1.png" alt="" style={{ maxWidth: "100%" }} />
            <img src="icon/picture2.png" alt="" style={{ paddingTop: "100px", maxWidth: "100%" }} />
            <img src="icon/picture3.png" alt="" style={{ maxWidth: "100%" }} />
          </div>

          <FaqSection />
        </div>

        <div>
          <img
            style={{ padding: "200px 50px", maxWidth: "100%", height: "auto" }}
            src="icon/footer.png"
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
