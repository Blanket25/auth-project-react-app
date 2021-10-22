import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Route, Link } from "react-router-dom";

const SignUp = () => {
  return (
    <BrowserRouter>
      <div className="input-container">
        <input type="text" placeholder="email"></input>
        <input type="password" placeholder="password"></input>
        <input type="password" placeholder="repeat password"></input>
        <button>Sign up</button>

        <p>You already have an account</p>
        <Link to="/log-in">
          <button>Log in</button>
        </Link>
        <Link to="/Home">Home</Link>

        <Route path="/log-in" component={Login} />
        <Route path="/Home" component={Home} />
      </div>
    </BrowserRouter>
  );
};

export default SignUp;
