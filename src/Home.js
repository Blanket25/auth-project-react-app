import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./Login";

const Home = () => {
  return (
    <BrowserRouter>
      <div className="home-container">
        <p>WELCOME!</p>
        <Link to="/log-in">
          <button>Log in</button>
        </Link>

        <Route path="/log-in" component={Login} />
      </div>
    </BrowserRouter>
  );
};

export default Home;
