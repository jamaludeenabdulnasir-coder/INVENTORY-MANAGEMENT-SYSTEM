import { Link } from "react-router-dom";

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
    text: "Digitizing manual processes to deliver faster operations. Higher accuracy, and rapid growth - far sooner than expected.",
    to: "/stories/toya",
  },
  {
    img: "icon/final1.jpg",
    name: "IKEN COMPUTERS LTD",
    title: "Iken Computers Kenya Scales Operations with Kilimax ERP & POS",
    text: "Iken Computers, Kenya's leading Hikvision distributor, streamlined inventory, sales, and customer management with KiliMax ERP & POS",
    to: "/stories/iken",
  },
  {
    img: "icon/final2.jpg",
    name: "SPECTRUM PHONES LTD NIGERIA",
    title: "Spectrum Nigeria Scales Nationally with Kilimax ERP & POS",
    text: "Spectrum Nigeria grew from a single store to over 60 locations nationwide. With KiliMax ERP, POS, and AI-powered insights, Spectrum scaled....",
    to: "/stories/spectrum",
  },
  {
    img: "icon/final3.jpg",
    name: "ANKE-HAIER HOME APPLIANCES LTD",
    title: "Anke-Haier Kenya Powers Smarter Home Appliances Operations with...",
    text: "Anke-Haier Kenya's trusted Haier distributor, implemented KiliMax ERP to centralize operations, track inventory, and optimize order processing.",
    to: "#",
  },
  {
    img: "icon/final4.jpg",
    name: "TAICO POWER KENYA",
    title: "Taico Power Kenya Accelerates Growth with Kilimax ERP & POS",
    text: "Taico Power Kenya, a leading renewable energy company, implemented KilliMax ERP & POS to automate sales, inventory, and multi-country...",
    to: "#",
  },
];

export default function Customer() {
  return (
    <main className="customer-page">
      <div>
        <img src="icon/final.png" alt="" width="100%" />
      </div>

      {[stories.slice(0, 3), stories.slice(3)].map((group, gi) => (
        <div className="picture" key={gi}>
          {group.map((s, i) => (
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
      ))}
    </main>
  );
}
