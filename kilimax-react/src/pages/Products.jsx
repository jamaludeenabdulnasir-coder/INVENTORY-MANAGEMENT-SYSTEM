export default function Products() {
  return (
    <main>
      <div className="hero-img-banner">
        <h1>
          The Only Software You Need For <br /> Your Wholesale Business
        </h1>
        <img id="one" src="icon/products.png" alt="" />
      </div>

      <div className="img">
        <img id="two" src="icon/products1.png" alt="" />
        <img id="three" src="icon/image 3.png" alt="" />
      </div>

      <div>
        <div className="products-wrap">
          <div className="products">
            <img src="icon/products2.png" alt="" />
          </div>
          <div className="products">
            <img src="icon/products2.png" alt="" />
          </div>
          <div className="products">
            <img src="icon/products2.png" alt="" />
          </div>
        </div>

        <div className="products-wrap">
          <div className="products">
            <img src="icon/products2.png" alt="" />
          </div>
          <div className="products">
            <img src="icon/products2.png" alt="" />
          </div>
          <div className="products">
            <img src="icon/products2.png" alt="" />
          </div>
        </div>
      </div>

      <div>
        <h5 className="why-choose">Why Choose KILIPOS</h5>
        <img src="icon/anime1.png" alt="" style={{ width: "100%" }} />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <img src="icon/anime2.png" alt="" style={{ maxWidth: "100%", flex: "1 1 300px" }} />

        <div style={{ display: "flex", flexDirection: "column", paddingLeft: "50px", flex: "2 1 400px", paddingBottom: "40px" }}>
          <h5 style={{ fontSize: "70px", lineHeight: 1.1 }}>Seamless Kilishop Integration</h5>
          <p style={{ fontSize: "18px" }}>
            Create a fully integrated online-to-offline (O2O) experience for your customers
          </p>

          <h5 style={{ color: "green", fontSize: "35px" }}>Online ordering</h5>
          <p style={{ fontSize: "18px" }}>
            Customers can complete the product selection and payment process through Kilishop
          </p>

          <h5 style={{ color: "green", fontSize: "35px" }}>In-store Pickup</h5>
          <p style={{ fontSize: "18px" }}>
            Customers can choose to pick up their order at the nearest store, saving time and
            delivery costs.
          </p>

          <h5 style={{ color: "green", fontSize: "35px" }}>Real-time Data synchronization</h5>
          <p style={{ fontSize: "18px" }}>
            Online orders are instantly pushed to the KiliPos system, ensuring the store is prepared.
          </p>

          <h5 style={{ color: "green", fontSize: "35px" }}>Increased Foot Traffic</h5>
          <p style={{ fontSize: "18px" }}>
            The pick up model increases foot traffic to the stores, creating additional sales
            opportunities.
          </p>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <img
          style={{ padding: "200px 50px", maxWidth: "100%" }}
          src="icon/footer.png"
          alt=""
        />
      </div>
    </main>
  );
}
