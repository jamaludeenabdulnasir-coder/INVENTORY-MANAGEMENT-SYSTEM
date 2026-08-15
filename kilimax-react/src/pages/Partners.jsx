export default function Partners() {
  return (
    <main>
      <div>
        <div>
          <img src="icon/customer4.jpg" alt="" width="100%" />
        </div>
        <div>
          <img src="icon/customer 3.jpg" alt="" width="100%" />
        </div>
        <div>
          <img src="icon/picture2.png" alt="" width="100%" />
        </div>
      </div>

      <div className="flex-row" style={{ padding: "20px 0" }}>
        <img src="icon/customer4.jpg" alt="" width="400" />
        <img src="icon/screen 4.jpg" alt="" width="400" />
        <img src="icon/screen 3.jpg" alt="" width="400" />
      </div>

      <div style={{ background: "rgb(183, 201, 238)" }}>
        <div className="customer">
          <h1 style={{ color: "white", animation: "none", padding: "20px 0" }}>
            Become A Partner
          </h1>
          <p style={{ display: "flex", justifyContent: "center", color: "white" }}>
            Join KILIMax Partner Network Today
          </p>

          <ul className="fill" style={{ listStyle: "none" }}>
            <li>
              <form action="" method="post" className="partner-form">
                *Email<input type="text" placeholder="Please enter email" />
              </form>
              <form action="" method="post" className="partner-form">
                *Password<input type="text" placeholder="Password is required" />
              </form>
              <form action="" method="post" className="partner-form">
                *Verification Code
                <input type="text" placeholder="Please enter the Verification code" />
              </form>
            </li>

            <li>
              <form action="" method="post" className="partner-form">
                *Phone<input type="text" placeholder="Please enter phone number" />
              </form>
              <form action="" method="post" className="partner-form">
                *Password<input type="text" placeholder="Password is required" />
              </form>
              <form action="" method="post" className="partner-form">
                *Verification Code
                <input type="text" placeholder="Please enter the Verification code" />
              </form>
            </li>
          </ul>

          <div>
            <form action="" method="post" style={{ display: "flex", justifyContent: "center", paddingBottom: "30px" }}>
              <input type="submit" className="submit" />
            </form>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", padding: "30px 20px" }}>
        <h6 style={{ fontSize: "40px" }}>Partners In KiliMax</h6>
        <img src="icon/customer4.jpg" alt="" width="400" height="300" />
        <img src="icon/customer 3.jpg" alt="" width="400" height="300" />
        <img src="icon/screen 2.jpg" alt="" width="380" height="300" />
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", background: "rgb(183, 201, 238)", flexWrap: "wrap" }}>
        <img src="icon/shot1.png" alt="" width="400" />
        <img src="icon/shot1.png" alt="" width="400" />
        <img src="icon/shot1.png" alt="" width="400" />
      </div>
    </main>
  );
}
