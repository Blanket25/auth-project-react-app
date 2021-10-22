import "./App.css";

import SignUp from "./SignUp";
import Home from "./Home";

import { BrowserRouter, Route, Link } from "react-router-dom";

const Login = () => {
  return (
    <BrowserRouter>
      <div className="input-container">
        <input type="text" placeholder="email"></input>
        <input type="password" placeholder="password"></input>
        <button>Log in</button>

        <Link to="/sing-up">
          <button>Sign up</button>
        </Link>

        <Link to="/Home">Home</Link>

        <Route path="/sing-up" component={SignUp} />
        <Route path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
};

export default Login;
