import { Link } from "react-router-dom";

export default function Management() {
  return (
    <main className="mgmt-page">
      <form>
        <div id="validate">
          <div id="login">
            <label>login</label>
            <input type="text" placeholder="enter your username" />
          </div>

          <div id="Password">
            <label>Password</label>
            <input type="text" placeholder="enter Password here" />
          </div>
          <div id="Enter">
            <button>
              <Link to="/">Enter</Link>
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
