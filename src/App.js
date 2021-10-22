import "./App.css";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex-container">
        <Home />
        <button>
          <Link to="/log-in">Log in</Link>
        </button>
        <button>
          <Link to="/sing-up">Sign up</Link>
        </button>

        <Route path="/log-in" component={Login} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    </BrowserRouter>
  );
}
export default App;
