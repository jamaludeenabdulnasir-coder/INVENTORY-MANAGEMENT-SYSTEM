import { Link } from "react-router-dom";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/kilimax.software/",
    d: "M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.012 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.773 2.249 17.76.228 14.124.061 13.057.012 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61578135094174",
    d: "M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z",
  },
  {
    name: "Twitter / X",
    href: "https://x.com/KilimaxSoftware",
    d: "M15.751 2.75h2.915L12.12 8.75l7.38 9.75h-5.865l-4.54-5.94-5.19 5.94H1.99l6.94-7.94L1.25 2.75h6.01l4.1 5.42 4.391-5.42zm-1.02 13.5h1.615L5.38 4.41H3.65l11.081 11.84z",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/kilimax.com/",
    d: "M18.52 1.25H1.477C.66 1.25 0 1.89 0 2.683v14.634C0 18.11.66 18.75 1.477 18.75H18.52c.818 0 1.48-.64 1.48-1.433V2.683c0-.793-.662-1.433-1.48-1.433zM5.93 15.97H2.97V7.03h2.96v8.94zM4.45 5.8c-.95 0-1.72-.77-1.72-1.72s.77-1.72 1.72-1.72 1.72.77 1.72 1.72-.77 1.72-1.72 1.72zM17.03 15.97h-2.96v-4.35c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.19-1.76 2.43v4.43H7.82V7.03h2.84v1.22h.04c.4-.75 1.36-1.53 2.79-1.53 2.98 0 3.53 1.96 3.53 4.51v4.74z",
  },
];

export default function Footer() {
  return (
    <footer>
      <h5>
        <Link to="/" style={{ textDecoration: "none" }}>
          KILIMax
        </Link>
      </h5>
      <div>
        <p>
          KiliMax Software, Powering Businesses <br /> Across Africa with AI
        </p>
        <ul className="bottom">
          <li>Explore</li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>

        <ul className="down">
          <li>Connect</li>
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
              >
                <svg className="footer-social-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d={s.d} fill="currentColor"></path>
                </svg>
                <span>{s.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="footer">
          <li>Copyright &copy; 2026 QUANTUM TECHNOLOGY HK LIMITED. All rights reserved.</li>
          <li>
            <Link to="/terms">Terms of Conditions</Link>
          </li>
          <li>
            <Link to="/policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
