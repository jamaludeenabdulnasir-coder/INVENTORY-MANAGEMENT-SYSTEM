export default function About() {
  return (
    <main>
      <div className="hero-img-banner">
        <img src="icon/abu.png" alt="" />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", padding: "60px", background: "purple", color: "white", alignItems: "center", justifyContent: "center", gap: "40px" }}>
        <img src="icon/abu1.jpg" alt="" width="500" height="400" style={{ maxWidth: "100%" }} />

        <div style={{ flex: "1 1 400px", maxWidth: "700px" }}>
          <h6 style={{ fontSize: "40px" }}>Who We Are</h6>
          <p style={{ fontSize: "20px", margin: "15px 0" }}>
            Kilimax is a proudly African technology company, <br /> headquartered in Kenya with a
            growing presence across <br /> the continent - including offices in Nigeria, Tanzania,{" "}
            <br /> Angola, and more.
          </p>
          <p style={{ fontSize: "18px" }}>
            We're on a mission to empower African businesses with <br /> smart, accessible software
            solutions. Our flagship product, an all-in-one ERP system, is designed to be <br />{" "}
            simple, powerful, and tailored to the unique needs of <br /> African markets.
          </p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", background: "purple", color: "#E8F5F3", padding: "40px 20px" }}>
        <img src="icon/paste12.png" alt="" width="200" />
        <h6 style={{ fontSize: "40px" }}>Industries We Serve</h6>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", background: "white", flexWrap: "wrap" }}>
        <div style={{ margin: "0 auto" }}>
          <img style={{ padding: "30px", maxWidth: "100%" }} src="icon/pix.png" alt="" width="500" />
          <img style={{ padding: "30px", maxWidth: "100%" }} src="icon/pix1.png" alt="" width="500" />
        </div>

        <div style={{ margin: "0 auto" }}>
          <img style={{ padding: "30px", maxWidth: "100%" }} src="icon/pix2.png" alt="" width="500" />
          <img style={{ padding: "30px", maxWidth: "100%" }} src="icon/pix3.png" alt="" width="500" />
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", background: "purple", color: "white", alignItems: "center", padding: "40px 20px" }}>
        <div style={{ flex: "1 1 350px", paddingLeft: "100px" }}>
          <h6 style={{ fontSize: "30px" }}>Built Around You</h6>
          <p style={{ fontSize: "18px", margin: "15px 0" }}>
            At KiliMax, our customers are more than just users they are our <br /> partners in
            progress
          </p>
          <p style={{ fontSize: "18px" }}>
            Every challenge you face shapes the solutions we build, and <br /> your growth is a
            measure of our success. We're here to <br /> listen, adapt, and grow with you every step
            of the way.
          </p>
        </div>

        <div style={{ flex: "0 0 auto", textAlign: "center" }}>
          <img src="icon/pix6.png" alt="" width="250" height="410" />
        </div>

        <div style={{ flex: "1 1 300px", textAlign: "center" }}>
          <img src="icon/pix4.png" alt="" />
          <br />
          <img style={{ paddingTop: "30px" }} src="icon/pix5.png" alt="" />
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <img style={{ padding: "200px 50px", maxWidth: "100%" }} src="icon/footer.png" alt="" />
      </div>
    </main>
  );
}
